import React, { useState } from 'react';
import TopMenu from './components/TopMenu';
import SideBar from './components/SideBar';
import ContentArea from './components/ContentArea';

function App() {
  const [selectedChapterId, setSelectedChapterId] = useState(1);
  const [selectedArticleId, setSelectedArticleId] = useState(1);

  const handleArticleSelect = (chapterId, articleId) => {
    setSelectedChapterId(chapterId);
    setSelectedArticleId(articleId);
  };

  return (
    <div className="app">
      <TopMenu />
      <div className="main-content">
        <SideBar onArticleSelect={handleArticleSelect} /> {/* Pass the handleArticleSelect function as a prop */}
        <ContentArea selectedChapterId={selectedChapterId} selectedArticleId={selectedArticleId} />
      </div>
    </div>
  );
}

export default App;
