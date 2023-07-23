// entire file content ...

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopMenu from './components/TopMenu';
import SideBar from './components/SideBar';
import ContentArea from './components/ContentArea';

function App() {
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [selectedSectionType, setSelectedSectionType] = useState('chapter');

  useEffect(() => {
    setSelectedSectionType('chapter');
  }, []);

  const handleArticleSelect = (articleId) => {
    setSelectedArticleId(articleId);
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
            selectedSectionType={selectedSectionType}
          />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<ContentArea
                selectedArticleId={selectedArticleId}
                onArticleSelect={(articleId) => handleArticleSelect(articleId)}
              />} />
              <Route path="/chapter" element={<ContentArea
                selectedArticleId={selectedArticleId}
                onArticleSelect={(articleId) => handleArticleSelect(articleId)}
              />} />
              <Route path="/definition" element={<ContentArea
                selectedArticleId={selectedArticleId}
                onArticleSelect={(articleId) => handleArticleSelect(articleId)}
              />} />
              <Route path="/concept" element={<ContentArea
                selectedArticleId={selectedArticleId}
                onArticleSelect={(articleId) => handleArticleSelect(articleId)}
              />} />
              <Route path="/exercise" element={<ContentArea
                selectedArticleId={selectedArticleId}
                onArticleSelect={(articleId) => handleArticleSelect(articleId)}
              />} />
              <Route path="/about" element={
                <div>
                <h2>Trần Trung Hiếu - 02C01009</h2>
                <h2>Đàm Thị Minh Phượng - 22C01015</h2>
                <h2>Vũ Trần Hoài Hân - 22C01005</h2>
                <h2>Nguyễn Phương Thy - 22C01020</h2>
                </div>
              } />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
