from pymongo import MongoClient

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client["oop_knowledge_db"]
sections_collection = db["sections"]
articles_collection = db["articles"]

# Seed data
sections  = [
  {"id": 0, "title": "Chương 1", "type": "chapter"},
  {"id": 1, "title": "Chương 2", "type": "chapter"},
  {"id": 2, "title": "Chương 3", "type": "chapter"},
  {"id": 3, "title": "Chương 4", "type": "chapter"},
  {"id": 4, "title": "Chương 5", "type": "chapter"},
  {"id": 5, "title": "Chương 6", "type": "chapter"},
  {"id": 6, "title": "Chương 7", "type": "chapter"},
  {"id": 7, "title": "Chương 8", "type": "chapter"},
  {"id": 8, "title": "Chương 9", "type": "chapter"},
  {"id": 9, "title": "Chương 10", "type": "chapter"},
  {"id": 10, "title": "Chương 11", "type": "chapter"},
  {"id": 11, "title": "Chương 12", "type": "chapter"},
  {"id": 12, "title": "Chương 13", "type": "chapter"},
  {"id": 13, "title": "Khái niệm 1", "type": "definition"},
  {"id": 14, "title": "Khái niệm 2", "type": "definition"},
  {"id": 15, "title": "Khái niệm 3", "type": "definition"},
  {"id": 16, "title": "Khái niệm 4", "type": "definition"},
  {"id": 17, "title": "Khái niệm 5", "type": "definition"},
  {"id": 18, "title": "Tính chất 1", "type": "concept"},
  {"id": 19, "title": "Tính chất 2", "type": "concept"},
  {"id": 20, "title": "Tính chất 3", "type": "concept"},
  {"id": 21, "title": "Tính chất 4", "type": "concept"},
  {"id": 22, "title": "Tính chất 5", "type": "concept"},
  {"id": 23, "title": "Bài tập 1", "type": "exercise"},
  {"id": 24, "title": "Bài tập 2", "type": "exercise"},
  {"id": 25, "title": "Bài tập 3", "type": "exercise"},
  {"id": 26, "title": "Bài tập 4", "type": "exercise"},
  {"id": 27, "title": "Bài tập 5", "type": "exercise"},
];


articles = []

# Seed sections
for section in sections:
    sections_collection.insert_one(section)

# Seed chapter
for i in range(1, 13):
    for j in range(0, 10):
        file = f"data/{i}.{j}.html"
        try:
            with open(file, 'r') as f:
                content = f.read()
                title = content.split('<h2>')[1].split('</h2>')[0]
                content = content.split('<body>')[1].split('</body>')[0]
                articles_collection.insert_one({"title": title, "content": content, "section_id": i - 1})
        except Exception as e:
            print(e)
            print(f"Cannot process file {file}")

print("Data seeded successfully!")
## drop collection
# sections_collection.drop()
# articles_collection.drop()
