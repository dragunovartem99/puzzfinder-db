# <img src="/logo.png" width="30"> Puzzfinder DB

The entire Lichess puzzle database packed into a single [DuckDB](https://duckdb.org) database

- 5.8M puzzles from [Lichess's open puzzle database](https://database.lichess.org/#puzzles)
- Single table, indexed on `rating`, `movesNumber`, `popularity`, `nbPlays`
- 72 themes encoded as a `HUGEINT` bitmask — fast bitwise filtering
- Single-file (~1GB), single-process — no server required

<img width="256" src="https://github.com/user-attachments/assets/0fc16e36-655b-49df-865d-4fa6b65cbf42" />

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

72 Lichess themes — each assigned a fixed bit position in `theme_mask`

Use `themes/filter` to generate SQL filter expressions:

```bash
source themes/filter && theme_filter fork pin

# (theme_mask & ((1::HUGEINT << 29) | (1::HUGEINT << 55))) = ((1::HUGEINT << 29) | (1::HUGEINT << 55))
```

See [STATS.md](./STATS.md) for theme distribution across the database.

## Setup

```bash
./init
```

Downloads the Lichess puzzle CSV, imports it into DuckDB, and builds indexes.

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
