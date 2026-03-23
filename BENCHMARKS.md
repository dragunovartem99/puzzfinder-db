# Benchmarks

_5 iterations · DuckDB v1.5.0_

> **mixed** — common and uncommon themes combined

| Group                              | Case                            | ms avg |
| ---------------------------------- | ------------------------------- | ------ |
| direct access                      | no pagination                   | 32     |
| no filters                         | count: false                    | 32     |
| no filters                         | count: true                     | 51     |
| no filters                         | count: false, sort: rating DESC | 54     |
| no filters                         | count: true, sort: rating ASC   | 57     |
| one theme (common)                 | count: false                    | 33     |
| one theme (common)                 | count: true                     | 93     |
| one theme (common)                 | count: false, sort: rating DESC | 101    |
| one theme (common)                 | count: true, sort: rating ASC   | 162    |
| one theme (uncommon)               | count: false                    | 33     |
| one theme (uncommon)               | count: true                     | 98     |
| one theme (uncommon)               | count: false, sort: rating DESC | 101    |
| one theme (uncommon)               | count: true, sort: rating ASC   | 164    |
| two themes (common)                | count: false                    | 35     |
| two themes (common)                | count: true                     | 99     |
| two themes (common)                | count: false, sort: rating DESC | 100    |
| two themes (common)                | count: true, sort: rating ASC   | 163    |
| two themes (uncommon)              | count: false                    | 34     |
| two themes (uncommon)              | count: true                     | 98     |
| two themes (uncommon)              | count: false, sort: rating DESC | 100    |
| two themes (uncommon)              | count: true, sort: rating ASC   | 168    |
| two themes (mixed)                 | count: false                    | 34     |
| two themes (mixed)                 | count: true                     | 97     |
| two themes (mixed)                 | count: false, sort: rating DESC | 100    |
| two themes (mixed)                 | count: true, sort: rating ASC   | 160    |
| three themes (common)              | count: false                    | 45     |
| three themes (common)              | count: true                     | 110    |
| three themes (common)              | count: false, sort: rating DESC | 101    |
| three themes (common)              | count: true, sort: rating ASC   | 163    |
| three themes (uncommon)            | count: false                    | 243    |
| three themes (uncommon)            | count: true                     | 302    |
| three themes (uncommon)            | count: false, sort: rating DESC | 75     |
| three themes (uncommon)            | count: true, sort: rating ASC   | 141    |
| three themes (mixed)               | count: false                    | 53     |
| three themes (mixed)               | count: true                     | 117    |
| three themes (mixed)               | count: false, sort: rating DESC | 99     |
| three themes (mixed)               | count: true, sort: rating ASC   | 160    |
| rating filter (common)             | count: false                    | 34     |
| rating filter (common)             | count: true                     | 63     |
| rating filter (common)             | count: false, sort: rating DESC | 46     |
| rating filter (common)             | count: true, sort: rating ASC   | 72     |
| rating filter (uncommon)           | count: false                    | 34     |
| rating filter (uncommon)           | count: true                     | 62     |
| rating filter (uncommon)           | count: false, sort: rating DESC | 50     |
| rating filter (uncommon)           | count: true, sort: rating ASC   | 77     |
