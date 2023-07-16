// Add the following import statement at the top
import { useState } from 'react';

// ...

function SideBar({ onArticleSelect, onCategorySelect }) {
  const [chapters, setChapters] = useState([]);
  const [filteredChapters, setFilteredChapters] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // ...

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);

    // Filter the chapters based on the selected category
    if (category) {
      const filteredChapters = chaptersMock.filter(chapter =>
        chapter.articles.some(article => article.category === category)
      );
      setFilteredChapters(filteredChapters);
    } else {
      setFilteredChapters(chaptersMock);
    }
  };

  // ...

  return (
    <Sidebar>
      <div className="category-filter">
        <label htmlFor="category-select">Categories:</label>
        <select id="category-select" value={selectedCategory} onChange={(e) => handleCategorySelect(e.target.value)}>
          <option value="">All Categories</option>
          <option value="definition">Definition</option>
          <option value="concept">Concept</option>
          <option value="exercise">Exercise</option>
        </select>
      </div>
      <Menu iconShape="square">
        {filteredChapters.map(chapter => (
          <SubMenu title={`${chapter.title}`} key={`chapter-${chapter.id}`} label={`Chapter ${chapter.id}: ${chapter.title}`}>
            {chapter.articles.map(article => (
              <MenuItem key={`article-${chapter.id}-${article.id}`} onClick={() => onArticleSelect(chapter.id, article.id)}>
                {article.title}
              </MenuItem>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </Sidebar>
  );
}

export default SideBar;
