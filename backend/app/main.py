from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models
from .database import engine, get_db

# (Optional) Auto-create tables if they don't exist
# models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="VoltMatrix Backend API",
    description="Python/FastAPI Service for formatting Standards Matrices with AI & PostgreSQL",
    version="1.0.0"
)

# CORS middleware to allow index.html requests securely
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
        "message": "VoltMatrix API is running smoothly. Visit /docs to view your auto-generated Swagger UI interactive documentation."
    }

@app.get("/api/health")
def health_check():
    return {"status": "ok", "service": "VoltMatrix"}

# Example Endpoint outline to fetch matched matrix
@app.get("/api/standards/matrix")
def get_matrix(query: str, db: Session = Depends(get_db)):
    # Later: Vector semantic search or SQL LIKE search here
    return {
        "topic": query,
        "results": [],
        "message": "Matrix API endpoint connected."
    }
