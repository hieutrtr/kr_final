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
  {"id": 13, "title": "Chương 1", "type": "definition"},
  {"id": 14, "title": "Chương 2", "type": "definition"},
  {"id": 15, "title": "Chương 3", "type": "definition"},
  {"id": 16, "title": "Chương 4", "type": "definition"},
  {"id": 17, "title": "Chương 5", "type": "definition"},
  {"id": 18, "title": "Chương 6", "type": "definition"},
  {"id": 19, "title": "Chương 7", "type": "definition"},
  {"id": 20, "title": "Chương 8", "type": "definition"},
  {"id": 21, "title": "Chương 9", "type": "definition"},
  {"id": 22, "title": "Chương 10", "type": "definition"},
  {"id": 23, "title": "Chương 11", "type": "definition"},
  {"id": 24, "title": "Chương 12", "type": "definition"},
  {"id": 25, "title": "Chương 13", "type": "definition"},
  {"id": 26, "title": "Chương 1", "type": "concept"},
  {"id": 27, "title": "Chương 2", "type": "concept"},
  {"id": 28, "title": "Chương 3", "type": "concept"},
  {"id": 29, "title": "Chương 4", "type": "concept"},
  {"id": 30, "title": "Chương 5", "type": "concept"},
  {"id": 31, "title": "Chương 6", "type": "concept"},
  {"id": 32, "title": "Chương 7", "type": "concept"},
  {"id": 33, "title": "Chương 8", "type": "concept"},
  {"id": 34, "title": "Chương 9", "type": "concept"},
  {"id": 35, "title": "Chương 10", "type": "concept"},
  {"id": 36, "title": "Chương 11", "type": "concept"},
  {"id": 37, "title": "Chương 12", "type": "concept"},
  {"id": 38, "title": "Chương 13", "type": "concept"},
  {"id": 39, "title": "Điền vào chỗ trống", "type": "exercise"},
  {"id": 40, "title": "Trắc nghiệm_Đúng Sai", "type": "exercise"},
  {"id": 41, "title": "Tìm lỗi sai", "type": "exercise"},
  {"id": 42, "title": "Viết chương trình theo yêu cầu", "type": "exercise"},
  {"id": 43, "title": "Trả lời câu hỏi", "type": "exercise"},
];


articles = []

# Seed sections
for section in sections:
    sections_collection.insert_one(section)

# Seed chapter
for i in range(1, 14):
    for j in range(0, 20):
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

# Seed definition
for i in range(1, 14):
    for j in range(0, 20):
        file = f"data/kn_{i}.{j}.html"
        try:
            with open(file, 'r') as f:
                content = f.read()
                # title could be in h1 or h2 or h3 or h4
                title = content.split('<h2>')[1].split('</h2>')[0] if len(content.split('<h2>')) > 1 \
                    else content.split('<h1>')[1].split('</h1>')[0] if len(content.split('<h1>')) > 1 \
                        else content.split('<h3>')[1].split('</h3>')[0] if len(content.split('<h3>')) > 1 \
                            else content.split('<h4>')[1].split('</h4>')[0]
                # title = content.split('<h2>')[1].split('</h2>')[0]
                content = content.split('<body>')[1].split('</body>')[0]
                articles_collection.insert_one({"title": title, "content": content, "section_id": i - 1 + 13})
        except Exception as e:
            print(e)
            print(f"Cannot process file {file}")

# Seed concept
for i in range(1, 14):
    for j in range(0, 20):
        file = f"data/tc_{i}.{j}.html"
        try:
            with open(file, 'r') as f:
                content = f.read()
                # title could be in h1 or h2 or h3 or h4
                title = content.split('<h2>')[1].split('</h2>')[0] if len(content.split('<h2>')) > 1 \
                    else content.split('<h1>')[1].split('</h1>')[0] if len(content.split('<h1>')) > 1 \
                        else content.split('<h3>')[1].split('</h3>')[0] if len(content.split('<h3>')) > 1 \
                            else content.split('<h4>')[1].split('</h4>')[0]
                # title = content.split('<h2>')[1].split('</h2>')[0]
                content = content.split('<body>')[1].split('</body>')[0]
                articles_collection.insert_one({"title": title, "content": content, "section_id": i - 1 + 13 + 13})
        except Exception as e:
            print(e)
            print(f"Cannot process file {file}")

# Seed concept
for i in range(1, 6):
    for j in range(0, 20):
        file = f"data/bt_{i}.{j}.html"
        try:
            with open(file, 'r') as f:
                content = f.read()
                # title could be in h1 or h2 or h3 or h4
                title = content.split('<h2>')[1].split('</h2>')[0] if len(content.split('<h2>')) > 1 \
                    else content.split('<h1>')[1].split('</h1>')[0] if len(content.split('<h1>')) > 1 \
                        else content.split('<h3>')[1].split('</h3>')[0] if len(content.split('<h3>')) > 1 \
                            else content.split('<h4>')[1].split('</h4>')[0]
                # title = content.split('<h2>')[1].split('</h2>')[0]
                content = content.split('<body>')[1].split('</body>')[0]
                articles_collection.insert_one({"title": title, "content": content, "section_id": i - 1 + 13 + 13 + 13})
        except Exception as e:
            print(e)
            print(f"Cannot process file {file}")

print("Data seeded successfully!")
## drop collection
# sections_collection.drop()
# articles_collection.drop()
