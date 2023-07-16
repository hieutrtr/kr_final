import React from 'react';
import './ContentArea.css';
import articlesMock from '../data/ArticlesMock';

function ContentArea({ selectedChapterId, selectedArticleId }) {
  const selectedArticle = articlesMock.find(article => article.id === selectedArticleId);

  return (
    <main className="content-area">
      {selectedArticle && (
        <div>
          <h2>{selectedArticle.title}</h2>
          <p>{selectedArticle.content}</p>
        </div>
      )}
    </main>
  );
}

export default ContentArea;
