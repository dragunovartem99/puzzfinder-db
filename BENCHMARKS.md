# Benchmarks

_5 iterations · DuckDB v1.5.0_

> **mixed** — common and uncommon themes combined

| Group                    | Case                            | ms avg |
| ------------------------ | ------------------------------- | ------ |
| direct access            | no pagination                   | 32     |
| no filters               | count: false                    | 32     |
| no filters               | count: true                     | 53     |
| no filters               | count: false, sort: rating DESC | 57     |
| no filters               | count: true, sort: rating ASC   | 62     |
| one theme (common)       | count: false                    | 36     |
| one theme (common)       | count: true                     | 108    |
| one theme (common)       | count: false, sort: rating DESC | 115    |
| one theme (common)       | count: true, sort: rating ASC   | 180    |
| one theme (uncommon)     | count: false                    | 49     |
| one theme (uncommon)     | count: true                     | 122    |
| one theme (uncommon)     | count: false, sort: rating DESC | 115    |
| one theme (uncommon)     | count: true, sort: rating ASC   | 178    |
| two themes (common)      | count: false                    | 37     |
| two themes (common)      | count: true                     | 106    |
| two themes (common)      | count: false, sort: rating DESC | 113    |
| two themes (common)      | count: true, sort: rating ASC   | 183    |
| two themes (uncommon)    | count: false                    | 280    |
| two themes (uncommon)    | count: true                     | 353    |
| two themes (uncommon)    | count: false, sort: rating DESC | 110    |
| two themes (uncommon)    | count: true, sort: rating ASC   | 178    |
| two themes (mixed)       | count: false                    | 36     |
| two themes (mixed)       | count: true                     | 110    |
| two themes (mixed)       | count: false, sort: rating DESC | 116    |
| two themes (mixed)       | count: true, sort: rating ASC   | 191    |
| three themes (common)    | count: false                    | 270    |
| three themes (common)    | count: true                     | 358    |
| three themes (common)    | count: false, sort: rating DESC | 95     |
| three themes (common)    | count: true, sort: rating ASC   | 165    |
| three themes (uncommon)  | count: false                    | 264    |
| three themes (uncommon)  | count: true                     | 338    |
| three themes (uncommon)  | count: false, sort: rating DESC | 96     |
| three themes (uncommon)  | count: true, sort: rating ASC   | 166    |
| three themes (mixed)     | count: false                    | 276    |
| three themes (mixed)     | count: true                     | 340    |
| three themes (mixed)     | count: false, sort: rating DESC | 93     |
| three themes (mixed)     | count: true, sort: rating ASC   | 165    |
| rating filter (common)   | count: false                    | 35     |
| rating filter (common)   | count: true                     | 65     |
| rating filter (common)   | count: false, sort: rating DESC | 50     |
| rating filter (common)   | count: true, sort: rating ASC   | 82     |
| rating filter (uncommon) | count: false                    | 37     |
| rating filter (uncommon) | count: true                     | 68     |
| rating filter (uncommon) | count: false, sort: rating DESC | 72     |
| rating filter (uncommon) | count: true, sort: rating ASC   | 91     |
