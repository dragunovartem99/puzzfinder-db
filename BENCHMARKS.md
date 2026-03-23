# Benchmarks

_5 iterations · DuckDB v1.5.0_

| Group                              | Case                            | ms avg |
| ---------------------------------- | ------------------------------- | ------ |
| direct access                      | no pagination                   | 33     |
| no filters                         | count: false                    | 34     |
| no filters                         | count: true                     | 56     |
| no filters                         | count: false, sort: rating DESC | 55     |
| no filters                         | count: true, sort: rating ASC   | 60     |
| one theme (common)                 | count: false                    | 36     |
| one theme (common)                 | count: true                     | 107    |
| one theme (common)                 | count: false, sort: rating DESC | 111    |
| one theme (common)                 | count: true, sort: rating ASC   | 176    |
| one theme (uncommon)               | count: false                    | 35     |
| one theme (uncommon)               | count: true                     | 104    |
| one theme (uncommon)               | count: false, sort: rating DESC | 113    |
| one theme (uncommon)               | count: true, sort: rating ASC   | 177    |
| two themes (common)                | count: false                    | 35     |
| two themes (common)                | count: true                     | 107    |
| two themes (common)                | count: false, sort: rating DESC | 119    |
| two themes (common)                | count: true, sort: rating ASC   | 184    |
| two themes (uncommon)              | count: false                    | 36     |
| two themes (uncommon)              | count: true                     | 107    |
| two themes (uncommon)              | count: false, sort: rating DESC | 117    |
| two themes (uncommon)              | count: true, sort: rating ASC   | 180    |
| two themes (common and uncommon)   | count: false                    | 35     |
| two themes (common and uncommon)   | count: true                     | 105    |
| two themes (common and uncommon)   | count: false, sort: rating DESC | 111    |
| two themes (common and uncommon)   | count: true, sort: rating ASC   | 177    |
| three themes (common)              | count: false                    | 47     |
| three themes (common)              | count: true                     | 115    |
| three themes (common)              | count: false, sort: rating DESC | 111    |
| three themes (common)              | count: true, sort: rating ASC   | 179    |
| three themes (uncommon)            | count: false                    | 246    |
| three themes (uncommon)            | count: true                     | 317    |
| three themes (uncommon)            | count: false, sort: rating DESC | 84     |
| three themes (uncommon)            | count: true, sort: rating ASC   | 157    |
| three themes (common and uncommon) | count: false                    | 54     |
| three themes (common and uncommon) | count: true                     | 127    |
| three themes (common and uncommon) | count: false, sort: rating DESC | 103    |
| three themes (common and uncommon) | count: true, sort: rating ASC   | 173    |
| rating filter (common)             | count: false                    | 36     |
| rating filter (common)             | count: true                     | 65     |
| rating filter (common)             | count: false, sort: rating DESC | 49     |
| rating filter (common)             | count: true, sort: rating ASC   | 79     |
| rating filter (uncommon)           | count: false                    | 36     |
| rating filter (uncommon)           | count: true                     | 64     |
| rating filter (uncommon)           | count: false, sort: rating DESC | 54     |
| rating filter (uncommon)           | count: true, sort: rating ASC   | 80     |
