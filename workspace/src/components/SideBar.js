import React, { useState } from 'react';
import { Sidebar, Menu, SubMenu, MenuItem } from 'react-pro-sidebar';
import sectionsMock from '../data/SectionsMock';
import articlesMock from '../data/ArticlesMock';
import './SideBar.css';

function SideBar({ onArticleSelect, onCategorySelect }) {
  const [filteredSections, setFilteredSections] = useState(sectionsMock);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);

    // Filter the sections based on the selected category and search query
    filterSections(category, searchQuery);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);

    // Filter the sections based on the search query
    filterSections(selectedCategory, query);
  };

  const filterSections = (category, query) => {
    let filteredSections = sectionsMock;

    // Filter by category
    if (category !== '') {
      filteredSections = filteredSections.map(sec => {
        const newArticles = sec.articles.filter(article => article.category === category);
        return { ...sec, articles: newArticles };
      });
    }

    // Filter by search query
    if (query !== '') {
      filteredSections = filteredSections.map(sec => {
        const newArticles = sec.articles.filter(article => article.title.toLowerCase().includes(query.toLowerCase()));
        return { ...sec, articles: newArticles };
      });
    }

    setFilteredSections(filteredSections);
  };

  return (
    <Sidebar className="sidebar">
      <div className="category-filter">
        <label htmlFor="category-select">Categories:</label>
        <select id="category-select" value={selectedCategory} onChange={(e) => handleCategorySelect(e.target.value)}>
          <option value="">All Categories</option>
          <option value="chapter">Chapter</option>
          <option value="definition">Definition</option>
          <option value="concept">Concept</option>
          <option value="exercise">Exercise</option>
        </select>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search by title" value={searchQuery} onChange={(e) => handleSearch(e.target.value)} />
      </div>
      <Menu iconShape="square">
        {filteredSections.map(section => (
          section.type === "definition" && (
            <SubMenu title={`${section.title}`} key={`section-${section.id}`} label={`Section ${section.id}: ${section.title}`}>
              {section.articles.map(article => (
                <MenuItem key={`article-${section.id}-${article.id}`} onClick={() => onArticleSelect(section.id, article.id)}>
                  {article.title}
                </MenuItem>
              ))}
            </SubMenu>
          )
        ))}
      </Menu>
    </Sidebar>
  );
}

export default SideBar;
