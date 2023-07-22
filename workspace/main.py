from fastapi import FastAPI
from pydantic import BaseModel
from pymongo import MongoClient
from bson.objectid import ObjectId
from bson.json_util import dumps
import json

app = FastAPI()

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client["oop_knowledge_db"]
sections_collection = db["sections"]
articles_collection = db["articles"]

# Section model
class Section(BaseModel):
    title: str
    type: str

# Article model
class Article(BaseModel):
    title: str
    content: str
    section_id: str

# CRUD operations for sections
@app.post("/sections")
def create_section(section: Section):
    section_data = section.dict()
    res = sections_collection.insert_one(section_data)
    return {"message": "Section created successfully", "id": str(res.inserted_id)}

@app.get("/sections/{section_id}")
def get_section(section_id: str):
    object_id = ObjectId(section_id)
    section = sections_collection.find_one({"_id": object_id})
    if section:
        section["_id"] = str(section["_id"])
        return section
    else:
        return {"message": "Section not found"}

@app.put("/sections/{section_id}")
def update_section(section_id: str, section: Section):
    object_id = ObjectId(section_id)
    section_data = section.dict()
    sections_collection.update_one({"_id": object_id}, {"$set": section_data})
    return {"message": "Section updated successfully"}

@app.delete("/sections/{section_id}")
def delete_section(section_id: str):
    object_id = ObjectId(section_id)
    sections_collection.delete_one({"_id": object_id})
    return {"message": "Section deleted successfully"}

# CRUD operations for articles
@app.post("/articles")
def create_article(article: Article):
    article_data = article.dict()
    articles_collection.insert_one(article_data)
    return {"message": "Article created successfully"}

@app.get("/articles/{article_id}")
def get_article(article_id: str):
    object_id = ObjectId(article_id)
    article = articles_collection.find_one({"_id": object_id})
    if article:
        article["_id"] = str(article["_id"])
        return article
    else:
        return {"message": "Article not found"}

@app.put("/articles/{article_id}")
def update_article(article_id: str, article: Article):
    object_id = ObjectId(article_id)
    article_data = article.dict()
    articles_collection.update_one({"_id": object_id}, {"$set": article_data})
    return {"message": "Article updated successfully"}

@app.delete("/articles/{article_id}")
def delete_article(article_id: str):
    object_id = ObjectId(article_id)
    articles_collection.delete_one({"_id": object_id})
    return {"message": "Article deleted successfully"}

# Additional operations
@app.get("/sections/type/{section_type}")
def get_sections_by_type(section_type: str):
    print(section_type)
    sections = sections_collection.find({"type": section_type})
    sections = json.loads(dumps(sections))
    for section in sections:
        section["_id"] = section["_id"]["$oid"]
    return list(sections)

@app.get("/articles/section/{section_id}")
def get_articles_by_section(section_id: str):
    # only get id and title of the articles
    articles = articles_collection.find({"section_id": section_id}, {"_id": 1, "title": 1})
    articles = json.loads(dumps(articles))
    for article in articles:
        article["_id"] = article["_id"]["$oid"]
    return list(articles)
