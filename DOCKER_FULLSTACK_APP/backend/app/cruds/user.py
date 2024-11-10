from sqlalchemy.orm import Session
from app import models

def create_user(db: Session, name: str, email: str, hashed_password: str):
    db_user = models.User(name=name, email=email, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()
