from pymongo import MongoClient

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client["oop_knowledge_db"]
sections_collection = db["sections"]
articles_collection = db["articles"]

# Seed data
sections = [
    {"title": "Section 1", "type": "Type 1"},
    {"title": "Section 2", "type": "Type 2"},
    {"title": "Section 3", "type": "Type 1"},
]

articles = [
    {"title": "Article 1", "content": "Content 1", "section_id": "section_id_1"},
    {"title": "Article 2", "content": "Content 2", "section_id": "section_id_2"},
    {"title": "Article 3", "content": "Content 3", "section_id": "section_id_1"},
]

# Seed sections
for section in sections:
    sections_collection.insert_one(section)

# Seed articles
for article in articles:
    articles_collection.insert_one(article)

print("Data seeded successfully!")
