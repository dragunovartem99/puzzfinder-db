# Benchmarks

_1 iterations · SQLite 3.46.1_

| Group                               | Query                           | ms avg |
| ----------------------------------- | ------------------------------- | ------ |
| get_by_id                           | puzzleId = '03JSh'              | 4      |
| search: no filters                  | page 1                          | 21     |
| search: no filters                  | deep page (OFFSET 10000)        | 24     |
| sort: rating ASC                    | page 1                          | 22     |
| sort: rating DESC                   | page 1                          | 21     |
| sort: popularity DESC               | page 1                          | 22     |
| sort: nbPlays DESC                  | page 1                          | 22     |
| sort: movesNumber ASC               | page 1                          | 22     |
| search: rating 1200-1800            | page 1                          | 113    |
| search: rating 1200-1800            | sort by rating ASC, page 1      | 110    |
| search: movesNumber = 1             | page 1                          | 50     |
| search: movesNumber = 2             | page 1                          | 157    |
| search: movesNumber = 2             | sort by rating ASC, page 1      | 1158   |
| search: movesNumber = 2             | deep page (OFFSET 10000)        | 150    |
| search: popularity >= 90            | page 1                          | 58     |
| search: popularity >= 90            | sort by popularity DESC, page 1 | 56     |
| search: popularity <= 50            | page 1                          | 17     |
| search: theme: fork                 | page 1                          | 717    |
| search: theme: masterVsMaster       | page 1                          | 716    |
| search: themes: fork + pin          | page 1                          | 708    |
| search: themes: fork + short        | page 1                          | 734    |
| search: rating + fork + sort        | page 1                          | 6020   |
| search: rating + fork + sort        | deep page (OFFSET 1000)         | 6084   |
| search: fork + movesNumber = 2      | page 1                          | 1058   |
| search: fork + movesNumber = 2      | sort by rating ASC, page 1      | 2044   |
| search: rating + movesNumber + sort | page 1                          | 2025   |
| search: fork + popularity >= 90     | page 1                          | 2786   |
| search: fork + popularity >= 90     | sort by popularity DESC, page 1 | 2791   |
