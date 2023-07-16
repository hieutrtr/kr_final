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
      <Menu iconShape="square">
        <MenuItem onClick={() => handleCategorySelect('')}>
          All Categories
        </MenuItem>
        {chapters.map(chapter => (
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
