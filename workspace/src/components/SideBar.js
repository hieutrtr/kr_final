// Add the following import statement at the top
import { useState } from 'react';
import { Sidebar, Menu, SubMenu, MenuItem } from 'react-pro-sidebar';
import chaptersMock from '../data/ChaptersMock';

function SideBar({ onArticleSelect, onCategorySelect }) {
  const [filteredChapters, setFilteredChapters] = useState(chaptersMock);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);

    // Filter the chapters based on the selected category and search query
    filterChapters(category, searchQuery);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);

    // Filter the chapters based on the search query
    filterChapters(selectedCategory, query);
  };

  const filterChapters = (category, query) => {
    let filteredChapters = chaptersMock;

    // Filter by category
    if (category !== '') {
      filteredChapters = filteredChapters.map(chap => {
        const newArticles = chap.articles.filter(article => article.category === category);
        return { ...chap, articles: newArticles };
      });
    }

    // Filter by search query
    if (query !== '') {
      filteredChapters = filteredChapters.map(chap => {
        const newArticles = chap.articles.filter(article => article.title.toLowerCase().includes(query.toLowerCase()));
        return { ...chap, articles: newArticles };
      });
    }

    setFilteredChapters(filteredChapters);
  };

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
      <div className="search-box">
        <input type="text" placeholder="Search by title" value={searchQuery} onChange={(e) => handleSearch(e.target.value)} />
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
