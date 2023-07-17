import React from 'react';
import './ContentArea.css';
import articlesMock from '../data/ArticlesMock';

function ContentArea({ selectedArticleId, selectedCategory, onArticleSelect }) {
  const selectedArticle = articlesMock.find(article => article.id === selectedArticleId && (selectedCategory === "" || article.category === selectedCategory));
  const featuredArticles = articlesMock.filter(article => article.featured);

  return (
    <main className="content-area">
      {selectedArticle ? (
        <div className="article-content">
          <h2 className="article-title">{selectedArticle.title}</h2>
          <div className="article-body" dangerouslySetInnerHTML={{ __html: selectedArticle.content }}></div>
        </div>
      ) : (
        <div>
          {featuredArticles.length > 0 ? (
            <div className="featured-articles featired-container">
              {featuredArticles.map((article, index) => (
                <div key={article.id} onClick={() => onArticleSelect(article.chapter, article.id)} className={`featured-article ${index % 2 === 0 ? 'even' : 'odd'}`}>
                  <h2>{article.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: article.content.substring(0, 200) }}></div>
                  <p className='click-read-more-text'>Click to read more</p>
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
