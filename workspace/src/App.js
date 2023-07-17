import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
    <Router>
      <div className="app">
        <TopMenu />
        <div className="main-content">
          <SideBar
            onArticleSelect={(chapterId, articleId) => handleArticleSelect(chapterId, articleId)}
            onCategorySelect={(category) => handleCategorySelect(category)}
          />
          <div className="content-area">
            <Route path="/chapters">
              <ContentArea
                selectedChapterId={selectedChapterId}
                selectedArticleId={selectedArticleId}
                selectedCategory={selectedCategory}
                firstVisit={firstVisit}
                onArticleSelect={(chapterId, articleId) => handleArticleSelect(chapterId, articleId)}
              />
            </Route>
            <Route path="/definition">
              <h1>Definition Page</h1>
            </Route>
            <Route path="/concept">
              <h1>Concept Page</h1>
            </Route>
            <Route path="/exercise">
              <h1>Exercise Page</h1>
            </Route>
            <Route path="/about">
              <h1>About Page</h1>
            </Route>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
