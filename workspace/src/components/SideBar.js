import React, { useEffect, useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import chaptersMock from '../data/ChaptersMock';
import './SideBar.css';

function SideBar({ onArticleSelect, onCategorySelect }) {
  const [chapters, setChapters] = useState([]);
  const [filteredChapters, setFilteredChapters] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    setChapters(chaptersMock);
    setFilteredChapters(chaptersMock);
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filteredChapters = chaptersMock.filter(chapter =>
        chapter.articles.some(article => article.category === selectedCategory)
      );
      setFilteredChapters(filteredChapters);
    } else {
      setFilteredChapters(chaptersMock);
    }
  }, [selectedCategory]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
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
