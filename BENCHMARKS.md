# Benchmarks

_5 iterations · DuckDB v1.5.0_

> **mixed** — common and uncommon themes combined

| Group                    | Case                            | ms avg |
| ------------------------ | ------------------------------- | ------ |
| direct access            | no pagination                   | 32     |
| no filters               | count: false                    | 32     |
| no filters               | count: true                     | 52     |
| no filters               | count: false, sort: rating DESC | 52     |
| no filters               | count: true, sort: rating ASC   | 58     |
| one theme (common)       | count: false                    | 34     |
| one theme (common)       | count: true                     | 97     |
| one theme (common)       | count: false, sort: rating DESC | 99     |
| one theme (common)       | count: true, sort: rating ASC   | 156    |
| one theme (uncommon)     | count: false                    | 45     |
| one theme (uncommon)     | count: true                     | 107    |
| one theme (uncommon)     | count: false, sort: rating DESC | 103    |
| one theme (uncommon)     | count: true, sort: rating ASC   | 157    |
| two themes (common)      | count: false                    | 34     |
| two themes (common)      | count: true                     | 95     |
| two themes (common)      | count: false, sort: rating DESC | 104    |
| two themes (common)      | count: true, sort: rating ASC   | 161    |
| two themes (uncommon)    | count: false                    | 254    |
| two themes (uncommon)    | count: true                     | 318    |
| two themes (uncommon)    | count: false, sort: rating DESC | 92     |
| two themes (uncommon)    | count: true, sort: rating ASC   | 155    |
| two themes (mixed)       | count: false                    | 35     |
| two themes (mixed)       | count: true                     | 95     |
| two themes (mixed)       | count: false, sort: rating DESC | 103    |
| two themes (mixed)       | count: true, sort: rating ASC   | 161    |
| three themes (common)    | count: false                    | 245    |
| three themes (common)    | count: true                     | 311    |
| three themes (common)    | count: false, sort: rating DESC | 83     |
| three themes (common)    | count: true, sort: rating ASC   | 145    |
| three themes (uncommon)  | count: false                    | 255    |
| three themes (uncommon)  | count: true                     | 310    |
| three themes (uncommon)  | count: false, sort: rating DESC | 83     |
| three themes (uncommon)  | count: true, sort: rating ASC   | 148    |
| three themes (mixed)     | count: false                    | 251    |
| three themes (mixed)     | count: true                     | 318    |
| three themes (mixed)     | count: false, sort: rating DESC | 84     |
| three themes (mixed)     | count: true, sort: rating ASC   | 145    |
| rating filter (common)   | count: false                    | 34     |
| rating filter (common)   | count: true                     | 62     |
| rating filter (common)   | count: false, sort: rating DESC | 46     |
| rating filter (common)   | count: true, sort: rating ASC   | 72     |
| rating filter (uncommon) | count: false                    | 35     |
| rating filter (uncommon) | count: true                     | 62     |
| rating filter (uncommon) | count: false, sort: rating DESC | 64     |
| rating filter (uncommon) | count: true, sort: rating ASC   | 83     |
