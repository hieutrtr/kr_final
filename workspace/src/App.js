// entire file content ...

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopMenu from './components/TopMenu';
import SideBar from './components/SideBar';
import ContentArea from './components/ContentArea';

function App() {
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSectionType, setSelectedSectionType] = useState('chapter');

  useEffect(() => {
    setSelectedSectionType('chapter');
  }, []);

  const handleArticleSelect = (articleId) => {
    setSelectedArticleId(articleId);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedArticleId(0);
  };

  const handleSectionTypeSelect = (sectionType) => {
    setSelectedSectionType(sectionType);
    setSelectedArticleId(0);
  };

  return (
    <Router>
      <div className="app">
        <TopMenu onSectionTypeSelect={(sectionType) => handleSectionTypeSelect(sectionType)} />
        <div className="main-content">
          <SideBar
            onArticleSelect={(articleId) => handleArticleSelect(articleId)}
            onCategorySelect={(category) => handleCategorySelect(category)}
            selectedSectionType={selectedSectionType}
          />
          <div className="content-area">
            <Routes>
              <Route path="/chapter" element={<ContentArea
                selectedArticleId={selectedArticleId}
                selectedCategory={selectedCategory}
                onArticleSelect={(articleId) => handleArticleSelect(articleId)}
              />} />
              <Route path="/definition" element={<ContentArea
                selectedArticleId={selectedArticleId}
                selectedCategory={selectedCategory}
                onArticleSelect={(articleId) => handleArticleSelect(articleId)}
              />} />
              <Route path="/concept" element={<ContentArea
                selectedArticleId={selectedArticleId}
                selectedCategory={selectedCategory}
                onArticleSelect={(articleId) => handleArticleSelect(articleId)}
              />} />
              <Route path="/exercise" element={<ContentArea
                selectedArticleId={selectedArticleId}
                selectedCategory={selectedCategory}
                onArticleSelect={(articleId) => handleArticleSelect(articleId)}
              />} />
              <Route path="/about" element={<h1>About Page</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
