from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel

from app import cruds
from ..database import get_db

router = APIRouter()

class CreateUserRequestBody(BaseModel):
    name: str
    email: str
    password: str

@router.post("/users/create")
def create_user(body: CreateUserRequestBody, db: Session = Depends(get_db)):
    hashed_password = body.password + "notreallyhashed"  # 実際は適切なハッシュを使用
    return cruds.create_user(db=db, name=body.name, email=body.email, hashed_password=hashed_password,)

@router.get("/users/{user_id}")
def read_user(user_id: int, db: Session = Depends(get_db)):
    user = cruds.get_user(db, user_id=user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user
