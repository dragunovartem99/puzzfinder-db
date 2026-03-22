# Benchmarks

_3 iterations · DuckDB v1.5.0_

| Group                               | Query                           | ms avg |
| ----------------------------------- | ------------------------------- | ------ |
| get_by_id                           | puzzleId = '03JSh'              | 27     |
| search: no filters                  | page 1                          | 55     |
| search: no filters                  | deep page (OFFSET 10000)        | 56     |
| sort: rating ASC                    | page 1                          | 62     |
| sort: rating DESC                   | page 1                          | 89     |
| sort: popularity DESC               | page 1                          | 61     |
| sort: nbPlays DESC                  | page 1                          | 89     |
| sort: movesNumber ASC               | page 1                          | 62     |
| search: rating 1200-1800            | page 1                          | 69     |
| search: rating 1200-1800            | sort by rating ASC, page 1      | 85     |
| search: movesNumber = 1             | page 1                          | 336    |
| search: movesNumber = 2             | page 1                          | 1000   |
| search: movesNumber = 2             | sort by rating ASC, page 1      | 513    |
| search: movesNumber = 2             | deep page (OFFSET 10000)        | 1030   |
| search: popularity >= 90            | page 1                          | 155    |
| search: popularity >= 90            | sort by popularity DESC, page 1 | 111    |
| search: popularity <= 50            | page 1                          | 77     |
| search: theme: fork                 | page 1                          | 133    |
| search: theme: masterVsMaster       | page 1                          | 132    |
| search: themes: fork + pin          | page 1                          | 135    |
| search: themes: fork + short        | page 1                          | 136    |
| search: rating + fork + sort        | page 1                          | 224    |
| search: rating + fork + sort        | deep page (OFFSET 1000)         | 242    |
| search: fork + movesNumber = 2      | page 1                          | 130    |
| search: fork + movesNumber = 2      | sort by rating ASC, page 1      | 227    |
| search: rating + movesNumber + sort | page 1                          | 90     |
| search: fork + popularity >= 90     | page 1                          | 133    |
| search: fork + popularity >= 90     | sort by popularity DESC, page 1 | 163    |
