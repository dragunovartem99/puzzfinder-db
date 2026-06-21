# Benchmarks

_5 iterations · DuckDB v1.5.0_

> **mixed** — common and uncommon themes combined

| Group                    | Case          | ms avg |
| ------------------------ | ------------- | ------ |
| direct access            | no pagination | 32     |
| no filters               | count: false  | 33     |
| no filters               | count: true   | 53     |
| one theme (common)       | count: false  | 53     |
| one theme (common)       | count: true   | 118    |
| one theme (uncommon)     | count: false  | 62     |
| one theme (uncommon)     | count: true   | 126    |
| two themes (common)      | count: false  | 53     |
| two themes (common)      | count: true   | 114    |
| two themes (uncommon)    | count: false  | 94     |
| two themes (uncommon)    | count: true   | 158    |
| two themes (mixed)       | count: false  | 52     |
| two themes (mixed)       | count: true   | 114    |
| three themes (common)    | count: false  | 84     |
| three themes (common)    | count: true   | 148    |
| three themes (uncommon)  | count: false  | 81     |
| three themes (uncommon)  | count: true   | 149    |
| three themes (mixed)     | count: false  | 83     |
| three themes (mixed)     | count: true   | 148    |
| rating filter (common)   | count: false  | 42     |
| rating filter (common)   | count: true   | 67     |
| rating filter (uncommon) | count: false  | 41     |
| rating filter (uncommon) | count: true   | 68     |
