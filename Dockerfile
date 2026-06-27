FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y curl wget zstd && \
    curl -fsSL https://github.com/duckdb/duckdb/releases/latest/download/duckdb_cli-linux-amd64.gz \
    | gunzip > /usr/local/bin/duckdb && \
    chmod +x /usr/local/bin/duckdb && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

CMD ["./init"]
