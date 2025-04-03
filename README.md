# Puzzfinder DB

A SQLite3 database (~1.5GB) for finding chess puzzles (intended as read-only)

- Single table structure
- Auto-generated from [Lichess's open puzzle database](https://database.lichess.org/#puzzles)
- Puzzle themes converted to boolean columns
- Heavily indexed for faster query performance
