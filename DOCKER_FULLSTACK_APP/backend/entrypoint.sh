#!/bin/bash

# MySQL サーバーが起動するまで待機
while ! mysqladmin ping -h"${DB_HOST}" -P"${DB_PORT}" --silent; do
    sleep 1
    echo "Waiting for MySQL to be ready..."
done
echo "MySQL is up and running."

# Alembic migrationを実行
echo "Running Alembic migrations..."
poetry run alembic upgrade head

# サービスを起動
exec "$@"