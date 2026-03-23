# Benchmarks

_5 iterations · DuckDB v1.5.0_

| Group                              | Case                            | ms avg |
| ---------------------------------- | ------------------------------- | ------ |
| direct access                      | no pagination                   | 34     |
| no filters                         | count: false                    | 39     |
| no filters                         | count: true                     | 60     |
| no filters                         | count: false, sort: rating DESC | 70     |
| no filters                         | count: true, sort: rating ASC   | 71     |
| one theme (common)                 | count: false                    | 41     |
| one theme (common)                 | count: true                     | 136    |
| one theme (common)                 | count: false, sort: rating DESC | 142    |
| one theme (common)                 | count: true, sort: rating ASC   | 232    |
| one theme (uncommon)               | count: false                    | 39     |
| one theme (uncommon)               | count: true                     | 136    |
| one theme (uncommon)               | count: false, sort: rating DESC | 144    |
| one theme (uncommon)               | count: true, sort: rating ASC   | 235    |
| two themes (common)                | count: false                    | 41     |
| two themes (common)                | count: true                     | 141    |
| two themes (common)                | count: false, sort: rating DESC | 148    |
| two themes (common)                | count: true, sort: rating ASC   | 244    |
| two themes (uncommon)              | count: false                    | 41     |
| two themes (uncommon)              | count: true                     | 139    |
| two themes (uncommon)              | count: false, sort: rating DESC | 147    |
| two themes (uncommon)              | count: true, sort: rating ASC   | 244    |
| two themes (common and uncommon)   | count: false                    | 41     |
| two themes (common and uncommon)   | count: true                     | 141    |
| two themes (common and uncommon)   | count: false, sort: rating DESC | 150    |
| two themes (common and uncommon)   | count: true, sort: rating ASC   | 243    |
| three themes (common)              | count: false                    | 60     |
| three themes (common)              | count: true                     | 158    |
| three themes (common)              | count: false, sort: rating DESC | 148    |
| three themes (common)              | count: true, sort: rating ASC   | 246    |
| three themes (uncommon)            | count: false                    | 479    |
| three themes (uncommon)            | count: true                     | 570    |
| three themes (uncommon)            | count: false, sort: rating DESC | 111    |
| three themes (uncommon)            | count: true, sort: rating ASC   | 209    |
| three themes (common and uncommon) | count: false                    | 78     |
| three themes (common and uncommon) | count: true                     | 179    |
| three themes (common and uncommon) | count: false, sort: rating DESC | 141    |
| three themes (common and uncommon) | count: true, sort: rating ASC   | 248    |
| rating filter (common)             | count: false                    | 43     |
| rating filter (common)             | count: true                     | 74     |
| rating filter (common)             | count: false, sort: rating DESC | 59     |
| rating filter (common)             | count: true, sort: rating ASC   | 89     |
| rating filter (uncommon)           | count: false                    | 43     |
| rating filter (uncommon)           | count: true                     | 72     |
| rating filter (uncommon)           | count: false, sort: rating DESC | 63     |
| rating filter (uncommon)           | count: true, sort: rating ASC   | 92     |
