import React, { useState } from 'react';
import TopMenu from './components/TopMenu';
import SideBar from './components/SideBar';
import ContentArea from './components/ContentArea';

function App() {
  const [selectedChapterId, setSelectedChapterId] = useState(1);
  const [selectedArticleId, setSelectedArticleId] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleArticleSelect = (chapterId, articleId) => {
    setSelectedChapterId(chapterId);
    setSelectedArticleId(articleId);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedChapterId(1);
    setSelectedArticleId(1);
  };

  return (
    <div className="app">
      <TopMenu />
      <div className="main-content">
        <SideBar
          onArticleSelect={(chapterId, articleId) => handleArticleSelect(chapterId, articleId)}
          onCategorySelect={(category) => handleCategorySelect(category)}
        />
        <ContentArea selectedChapterId={selectedChapterId} selectedArticleId={selectedArticleId} selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default App;
