import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sidebar, Menu, SubMenu, MenuItem } from 'react-pro-sidebar';
import './SideBar.css';

function SideBar({ onArticleSelect, selectedSectionType }) {
  const [sections, setSections] = useState([]);
  const [filteredSections, setFilteredSections] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);

    // Filter the sections based on the search query
    filterSections(query);
  };

  const filterSections = async (query) => {
    // Filter by search query
    if (query !== '') {
      const filteredSections = sections.map(sec => {
        const newArticles = sec.articles.filter(article => article.title.toLowerCase().includes(query.toLowerCase()));
        return { ...sec, articles: newArticles };
      });
      setFilteredSections(filteredSections);
    } else {
      setFilteredSections(sections);
    }
  };

  async function fetchSections(type) {
    try {
      const response = await axios.get(`http://localhost:8000/sections/type/${type}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching sections:', error);
      throw error;
    }
  }

  async function fetchArticles(sectionId) {
    try {
      const response = await axios.get(`http://localhost:8000/articles/section/${sectionId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching articles:', error);
      throw error;
    }
  }

  // useEffect to call an API to get sections by selectedSectionType and call an api to get articles by section_id
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchSections(selectedSectionType);
        
        const fetchArticlePromises = res.map(async (section) => {
          const articles = await fetchArticles(section.id);
          return { ...section, articles: articles };
        });
        
        const promises = await Promise.all(fetchArticlePromises);
        setSections(promises);
        setFilteredSections(promises);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [selectedSectionType]);

  return (
    <Sidebar className="sidebar">
      <div className="search-box">
        <input type="text" placeholder="Search by title" value={searchQuery} onChange={(e) => handleSearch(e.target.value)} />
      </div>
      <Menu iconShape="square">
        {filteredSections.map(section => (
            <SubMenu title={`${section.title}`} key={`section-${section.id}`} label={`${section.title}`}>
              {section.articles.map(article => (
                <MenuItem key={`article-${section.id}-${article.id}`} onClick={() => onArticleSelect(article.id)}>
                  {article.title}
                </MenuItem>
              ))}
            </SubMenu>
          )
        )}
      </Menu>
    </Sidebar>
  );
}

export default SideBar;
