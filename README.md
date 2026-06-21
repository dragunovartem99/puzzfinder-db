# <img src="/logo.png" width="30"> Puzzfinder DB

- 6M puzzles from [Lichess's open puzzle database](https://database.lichess.org/#puzzles)
- Single table, indexed on `rating`, `movesNumber`, `popularity`, `nbPlays`
- 72 themes encoded as a `HUGEINT` bitmask — fast bitwise filtering
- Single-file (~1GB), single-process — no server required ([DuckDB](https://duckdb.org))

<img width="256" src="https://github.com/user-attachments/assets/0fc16e36-655b-49df-865d-4fa6b65cbf42" />

## Setup

```bash
./init
```

Downloads the Lichess puzzle CSV, imports it into DuckDB, and builds indexes.

## Schema

```sql
CREATE TABLE puzzles (
    puzzleId         TEXT  PRIMARY KEY,
    fen              TEXT     NOT NULL,
    moves            TEXT     NOT NULL,
    movesNumber      INTEGER  NOT NULL,
    rating           INTEGER  NOT NULL,
    ratingDeviation  INTEGER  NOT NULL,
    popularity       INTEGER  NOT NULL,
    nbPlays          INTEGER  NOT NULL,
    gameUrl          TEXT     NOT NULL,
    openingTags      TEXT,
    theme_mask       HUGEINT
);
```

## Themes

72 Lichess themes are stored as a bitmask in `theme_mask`. Each theme is assigned a fixed bit position (0–71), so a puzzle's themes are represented as a single `HUGEINT` where each set bit indicates the presence of that theme.

To filter by theme, you check that the relevant bits are all set:

```sql
-- puzzles tagged with both "fork" and "pin"
WHERE (theme_mask & ((1::HUGEINT << 29) | (1::HUGEINT << 55)))
    = ((1::HUGEINT << 29) | (1::HUGEINT << 55))
```

Use `themes/filter` to generate these expressions without looking up bit positions manually:

```bash
source themes/filter && theme_filter fork pin

# (theme_mask & ((1::HUGEINT << 29) | (1::HUGEINT << 55))) = ((1::HUGEINT << 29) | (1::HUGEINT << 55))
```

See [STATS.md](./STATS.md) for theme distribution across the database.

## Usage

```sql
-- Fork + pin puzzles, rating 1900–2100, sorted by popularity

SELECT puzzleId, fen, moves, rating
FROM puzzles
WHERE rating BETWEEN 1900 AND 2100
  AND (theme_mask & ((1::HUGEINT << 29) | (1::HUGEINT << 55))) = ((1::HUGEINT << 29) | (1::HUGEINT << 55))
ORDER BY popularity DESC
LIMIT 20;
```

## Performance

DuckDB uses the primary key ART index for `ORDER BY puzzleId` and can stop scanning once `LIMIT` is satisfied. Without an `ORDER BY`, it falls back to a full sequential scan of all 6M rows — so **always include `ORDER BY puzzleId`** unless you have a more meaningful sort.

For `COUNT(*)`, there's no early exit — it always scans every matching row.

See [BENCHMARKS.md](./BENCHMARKS.md) for measured query times.
