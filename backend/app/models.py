from sqlalchemy import Column, Integer, String, Text, ForeignKey
# from pgvector.sqlalchemy import Vector # pgvector plugin (will be used for AI RAG embeddings later)
from sqlalchemy.orm import relationship
from .database import Base

class Standard(Base):
    __tablename__ = "standards"

    id = Column(Integer, primary_key=True, index=True)
    code = Column(String, unique=True, index=True) # e.g., "IEC 60204-1"
    title = Column(String)
    region = Column(String)
    description = Column(Text)

    clauses = relationship("Clause", back_populates="standard")

class Clause(Base):
    __tablename__ = "clauses"

    id = Column(Integer, primary_key=True, index=True)
    standard_id = Column(Integer, ForeignKey("standards.id"))
    
    section_number = Column(String, index=True) # e.g., "9.2.5.4"
    text = Column(Text)
    type_category = Column(String) # e.g., "critical", "info"
    
    # AI Search Embeddings placeholder
    # semantic_embedding = Column(Vector(1536)) 

    standard = relationship("Standard", back_populates="clauses")
