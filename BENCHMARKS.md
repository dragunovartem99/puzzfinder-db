# Benchmarks

_5 iterations · DuckDB v1.5.0_

| Group                                 | Query                         | ms avg |
| ------------------------------------- | ----------------------------- | ------ |
| direct lookup                         | puzzleId = '03JSh'            | 27     |
| no filters                            | page 1                        | 59     |
| no filters                            | deep page                     | 59     |
| sort by rating                        | ASC                           | 68     |
| sort by rating                        | DESC                          | 94     |
| sort by popularity                    | DESC                          | 62     |
| sort by nbPlays                       | DESC                          | 93     |
| sort by movesNumber                   | ASC                           | 62     |
| rating 1200-1800                      | page 1                        | 70     |
| rating 1200-1800                      | sort by rating ASC            | 84     |
| movesNumber = 1                       | page 1                        | 318    |
| movesNumber = 2                       | page 1                        | 966    |
| movesNumber = 2                       | sort by rating ASC            | 525    |
| movesNumber = 2                       | deep page                     | 992    |
| popularity >= 90                      | page 1                        | 149    |
| popularity >= 90                      | sort by popularity DESC       | 107    |
| popularity <= 50                      | page 1                        | 75     |
| theme: fork                           | page 1                        | 126    |
| theme: masterVsMaster                 | page 1                        | 137    |
| themes: fork + pin                    | page 1                        | 147    |
| themes: fork + short                  | page 1                        | 137    |
| rating 1200-1800, movesNumber = 2     | sort by rating ASC            | 92     |
| rating 1200-1800, popularity >= 90    | page 1                        | 74     |
| rating 1200-1800, popularity >= 90    | sort by rating ASC            | 94     |
| theme: pin, rating 1000-2000          | sort by rating ASC            | 218    |
| theme: pin, rating 1000-2000          | sort by rating ASC, deep page | 228    |
| theme: sacrifice, movesNumber = 2     | page 1                        | 125    |
| theme: sacrifice, movesNumber = 2     | sort by rating ASC            | 220    |
| theme: hangingPiece, popularity >= 90 | page 1                        | 127    |
| theme: hangingPiece, popularity >= 90 | sort by popularity DESC       | 155    |
