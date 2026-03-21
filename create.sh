#!/bin/bash

source ./automation/themes
source ./automation/print_header

INPUT_CSV="lichess_db_puzzle.csv"
DB_FILE="puzzfinder.db"
SCHEMA_FILE="sql/schema.sql"
INDEXES_FILE="sql/indexes.sql"

if [ ! -f $DB_FILE ] && [ ! -f $INPUT_CSV ]; then
    print_header "Getting .csv"
    wget https://database.lichess.org/lichess_db_puzzle.csv.zst
    zstd -d lichess_db_puzzle.csv.zst && rm lichess_db_puzzle.csv.zst
fi

print_header "Inserting schema"
sqlite3 $DB_FILE < $SCHEMA_FILE

print_header "Importing data"
. ./automation/import_data

print_header "Creating indexes"
sqlite3 $DB_FILE < $INDEXES_FILE

print_header "Database created"
