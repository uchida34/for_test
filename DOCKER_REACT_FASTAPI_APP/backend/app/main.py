import uvicorn
import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from .routers import user

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Declarative Baseを定義
Base = declarative_base()
# MySQL接続用のDATABASE_URL（例: root:password@localhost:3306/test_db）
# DATABASE_URL = "mysql+pymysql://root:password@localhost:3306/test_db"
DATABASE_URL = os.getenv("DATABASE_URL", "mysql+pymysql://hoger:hoge@db:3306/hoge_db")

# SQLAlchemyエンジンを作成
engine = create_engine(DATABASE_URL, pool_size=10, max_overflow=20)
# セッションの作成
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# データベースのテーブルを作成する
def init_db():
    Base.metadata.create_all(bind=engine)

# ルーターを追加
app.include_router(user.router)



if __name__=="__main__":
    uvicorn.run("run:app",port=8000, reload=True)