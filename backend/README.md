Based on the requirements and assumptions, here are the core classes, functions, and methods that will be necessary:

Core Classes:
1. Section: Represents a section with attributes id, title, and type.
2. Article: Represents an article with attributes id, title, content, and section_id.

Core Functions/Methods:
1. CRUD operations for sections:
   - create_section(section_data): Creates a new section with the provided data.
   - get_section(section_id): Retrieves the section with the given id.
   - update_section(section_id, section_data): Updates the section with the given id using the provided data.
   - delete_section(section_id): Deletes the section with the given id.

2. CRUD operations for articles:
   - create_article(article_data): Creates a new article with the provided data.
   - get_article(article_id): Retrieves the article with the given id.
   - update_article(article_id, article_data): Updates the article with the given id using the provided data.
   - delete_article(article_id): Deletes the article with the given id.

3. Additional operations:
   - get_sections_by_type(section_type): Retrieves all sections of a specific type.
   - get_articles_by_section(section_id): Retrieves all articles belonging to a specific section.

Now, let's proceed with creating the necessary files and implementing the code.

1. main.py

