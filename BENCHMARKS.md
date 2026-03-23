# Benchmarks

_1 iterations · DuckDB v1.5.0_

| Group                              | Case                            | ms avg |
| ---------------------------------- | ------------------------------- | ------ |
| direct access                      | no pagination                   | 33     |
| no filters                         | count: false                    | 34     |
| no filters                         | count: true                     | 53     |
| no filters                         | count: false, sort: rating DESC | 56     |
| no filters                         | count: true, sort: rating ASC   | 59     |
| one theme (common)                 | count: false                    | 34     |
| one theme (common)                 | count: true                     | 97     |
| one theme (common)                 | count: false, sort: rating DESC | 118    |
| one theme (common)                 | count: true, sort: rating ASC   | 186    |
| one theme (uncommon)               | count: false                    | 38     |
| one theme (uncommon)               | count: true                     | 115    |
| one theme (uncommon)               | count: false, sort: rating DESC | 134    |
| one theme (uncommon)               | count: true, sort: rating ASC   | 192    |
| two themes (common)                | count: false                    | 40     |
| two themes (common)                | count: true                     | 108    |
| two themes (common)                | count: false, sort: rating DESC | 121    |
| two themes (common)                | count: true, sort: rating ASC   | 208    |
| two themes (uncommon)              | count: false                    | 37     |
| two themes (uncommon)              | count: true                     | 106    |
| two themes (uncommon)              | count: false, sort: rating DESC | 124    |
| two themes (uncommon)              | count: true, sort: rating ASC   | 189    |
| two themes (common and uncommon)   | count: false                    | 39     |
| two themes (common and uncommon)   | count: true                     | 107    |
| two themes (common and uncommon)   | count: false, sort: rating DESC | 116    |
| two themes (common and uncommon)   | count: true, sort: rating ASC   | 191    |
| three themes (common)              | count: false                    | 51     |
| three themes (common)              | count: true                     | 117    |
| three themes (common)              | count: false, sort: rating DESC | 125    |
| three themes (common)              | count: true, sort: rating ASC   | 201    |
| three themes (uncommon)            | count: false                    | 285    |
| three themes (uncommon)            | count: true                     | 337    |
| three themes (uncommon)            | count: false, sort: rating DESC | 93     |
| three themes (uncommon)            | count: true, sort: rating ASC   | 167    |
| three themes (common and uncommon) | count: false                    | 60     |
| three themes (common and uncommon) | count: true                     | 134    |
| three themes (common and uncommon) | count: false, sort: rating DESC | 116    |
| three themes (common and uncommon) | count: true, sort: rating ASC   | 186    |
| rating filter (common)             | count: false                    | 42     |
| rating filter (common)             | count: true                     | 69     |
| rating filter (common)             | count: false, sort: rating DESC | 48     |
| rating filter (common)             | count: true, sort: rating ASC   | 83     |
| rating filter (uncommon)           | count: false                    | 37     |
| rating filter (uncommon)           | count: true                     | 67     |
| rating filter (uncommon)           | count: false, sort: rating DESC | 59     |
| rating filter (uncommon)           | count: true, sort: rating ASC   | 86     |
