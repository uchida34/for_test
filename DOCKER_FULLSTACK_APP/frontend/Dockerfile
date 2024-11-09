# frontend/Dockerfile
FROM node:23

# 作業ディレクトリを設定
WORKDIR /frontend_src

# 依存関係をインストール
COPY . .
RUN npm install

# 開発用サーバーを起動
CMD ["npm", "start"]
