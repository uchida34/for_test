# Dockerfileの例
FROM python:3.13-slim

# 作業ディレクトリを設定
WORKDIR /backend_src

# Poetry のインストール
RUN pip install poetry

# コピー
COPY . .
# package インストール
RUN poetry install --no-root

# アプリケーションを実行
## app(WORKDIR)/app/main.py の場合、app.main 表記
CMD ["poetry", "run", "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

## poetry 環境を使用しない場合(?)
# RUN pip install fastapi uvicorn
# CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
