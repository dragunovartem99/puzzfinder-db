# Benchmarks

_5 iterations · DuckDB v1.5.0_

> **mixed** — common and uncommon themes combined

| Group                    | Case          | ms avg |
| ------------------------ | ------------- | ------ |
| direct access            | no pagination | 48     |
| no filters               | count: false  | 47     |
| no filters               | count: true   | 74     |
| one theme (common)       | count: false  | 79     |
| one theme (common)       | count: true   | 188    |
| one theme (uncommon)     | count: false  | 92     |
| one theme (uncommon)     | count: true   | 194    |
| two themes (common)      | count: false  | 79     |
| two themes (common)      | count: true   | 200    |
| two themes (uncommon)    | count: false  | 186    |
| two themes (uncommon)    | count: true   | 288    |
| two themes (mixed)       | count: false  | 79     |
| two themes (mixed)       | count: true   | 198    |
| three themes (common)    | count: false  | 165    |
| three themes (common)    | count: true   | 280    |
| three themes (uncommon)  | count: false  | 149    |
| three themes (uncommon)  | count: true   | 241    |
| three themes (mixed)     | count: false  | 138    |
| three themes (mixed)     | count: true   | 240    |
| rating filter (common)   | count: false  | 56     |
| rating filter (common)   | count: true   | 96     |
| rating filter (uncommon) | count: false  | 58     |
| rating filter (uncommon) | count: true   | 94     |
