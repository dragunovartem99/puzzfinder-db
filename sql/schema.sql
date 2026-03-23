CREATE TABLE puzzles (
    puzzleId TEXT PRIMARY KEY,
    fen TEXT NOT NULL,
    moves TEXT NOT NULL,
    movesNumber INTEGER NOT NULL,
    rating INTEGER NOT NULL,
    ratingDeviation INTEGER NOT NULL,
    popularity INTEGER NOT NULL,
    nbPlays INTEGER NOT NULL,
    gameUrl TEXT NOT NULL,
    openingTags TEXT,
    theme_mask HUGEINT
);

