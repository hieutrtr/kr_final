import React from 'react';
import './ContentArea.css';
import articlesMock from '../data/ArticlesMock';

function ContentArea({ selectedChapterId, selectedArticleId, selectedCategory }) {
  const selectedArticle = articlesMock.find(article => article.id === selectedArticleId && (selectedCategory === "" || article.category === selectedCategory));

  return (
    <main className="content-area">
      {selectedArticle && (
        <div>
          <h2>{selectedArticle.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }}></div>
        </div>
      )}
    </main>
  );
}

export default ContentArea;
