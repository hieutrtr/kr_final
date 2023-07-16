import React from 'react';
import './ContentArea.css';
import articlesMock from '../data/ArticlesMock';

function ContentArea({ selectedChapterId, selectedArticleId, selectedCategory }) {
  const selectedArticle = articlesMock.find(article => article.id === selectedArticleId && (selectedCategory === "" || article.category === selectedCategory));
  const featuredArticles = articlesMock.filter(article => article.featured);

  return (
    <main className="content-area">
      {selectedArticle ? (
        <div>
          <h2>{selectedArticle.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }}></div>
        </div>
      ) : (
        <div>
          {featuredArticles.length > 0 ? (
            <div>
              {featuredArticles.map(article => (
                <div key={article.id}>
                  <h2>{article.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h2>Welcome to the Content Area</h2>
              <p>Select an article from the sidebar to view its content.</p>
            </div>
          )}
        </div>
      )}
    </main>
  );
}

export default ContentArea;
