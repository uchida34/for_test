from logging.config import fileConfig
from sqlalchemy import engine_from_config, pool
from alembic import context

# 追記: モデルとBaseのインポート
from app import models  # Alembicでテーブル作成に必要
from app.database import Base  # SQLAlchemyのBaseをインポート

# Alembicの設定オブジェクト
config = context.config

# ロギング設定
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# メタデータの指定
# ここで、実際にモデルで使用されるBaseのメタデータを設定します。
target_metadata = Base.metadata

# オフラインマイグレーションの実行
def run_migrations_offline() -> None:
    """Run migrations in 'offline' mode."""
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()

# オンラインマイグレーションの実行
def run_migrations_online() -> None:
    """Run migrations in 'online' mode."""
    connectable = engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(
            connection=connection, target_metadata=target_metadata
        )

        with context.begin_transaction():
            context.run_migrations()

# オフラインモードまたはオンラインモードに応じて処理を実行
if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
