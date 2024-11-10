#!/bin/bash

# Alembic migrationを実行
echo "Running Alembic migrations..."
poetry run alembic upgrade head

# サービスを起動
exec "$@"