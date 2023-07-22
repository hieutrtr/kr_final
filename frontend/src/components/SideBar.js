import React, { useState } from 'react';
import { Sidebar, Menu, SubMenu, MenuItem } from 'react-pro-sidebar';
import sectionsMock from '../data/SectionsMock';
import './SideBar.css';

function SideBar({ onArticleSelect, selectedSectionType }) {
  const [filteredSections, setFilteredSections] = useState(sectionsMock);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);

    // Filter the sections based on the search query
    filterSections(query);
  };

  const filterSections = (query) => {
    let filteredSections = sectionsMock;

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
      <div className="search-box">
        <input type="text" placeholder="Search by title" value={searchQuery} onChange={(e) => handleSearch(e.target.value)} />
      </div>
      <Menu iconShape="square">
        {filteredSections.map(section => (
          section.type === selectedSectionType && (
            <SubMenu title={`${section.title}`} key={`section-${section.id}`} label={`${section.title}`}>
              {section.articles.map(article => (
                <MenuItem key={`article-${section.id}-${article.id}`} onClick={() => onArticleSelect(article.id)}>
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
