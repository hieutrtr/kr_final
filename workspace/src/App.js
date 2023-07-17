import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopMenu from './components/TopMenu';
import SideBar from './components/SideBar';
import ContentArea from './components/ContentArea';

function App() {
  const [selectedChapterId, setSelectedChapterId] = useState(null);
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [selectedSectionType, setSelectedSectionType] = useState('chapter');

  useEffect(() => {
    setSelectedSectionType('chapter');
  }, []);

  const handleArticleSelect = (chapterId, articleId) => {
    setSelectedChapterId(chapterId);
    setSelectedArticleId(articleId);
  };

  const handleSectionTypeSelect = (sectionType) => {
    setSelectedSectionType(sectionType);
    setSelectedChapterId(0);
    setSelectedArticleId(0);
  };

  return (
    <Router>
      <div className="app">
        <TopMenu onSectionTypeSelect={(sectionType) => handleSectionTypeSelect(sectionType)} />
        <div className="main-content">
          <SideBar
            onArticleSelect={(chapterId, articleId) => handleArticleSelect(chapterId, articleId)}
            selectedSectionType={selectedSectionType}
          />
          <ContentArea
            selectedArticleId={selectedArticleId}
            onArticleSelect={(chapterId, articleId) => handleArticleSelect(chapterId, articleId)}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
