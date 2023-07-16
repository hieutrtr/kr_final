import React, { useState, useEffect } from 'react';
import TopMenu from './components/TopMenu';
import SideBar from './components/SideBar';
import ContentArea from './components/ContentArea';

function App() {
  const [selectedChapterId, setSelectedChapterId] = useState(null);
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [firstVisit, setFirstVisit] = useState(true);

  useEffect(() => {
    setFirstVisit(false);
  }, []);

  const handleArticleSelect = (chapterId, articleId) => {
    setSelectedChapterId(chapterId);
    setSelectedArticleId(articleId);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedChapterId(0);
    setSelectedArticleId(0);
  };

  return (
    <div className="app">
      <TopMenu />
      <div className="main-content">
        <SideBar
          onArticleSelect={(chapterId, articleId) => handleArticleSelect(chapterId, articleId)}
          onCategorySelect={(category) => handleCategorySelect(category)}
        />
        <ContentArea selectedChapterId={selectedChapterId} selectedArticleId={selectedArticleId} selectedCategory={selectedCategory} firstVisit={firstVisit} onArticleSelect={(chapterId, articleId) => handleArticleSelect(chapterId, articleId)} />
      </div>
    </div>
  );
}

export default App;
