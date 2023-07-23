// entire file content ...

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ContentArea.css';
import articlesMock from '../data/ArticlesMock';

function ContentArea({ selectedArticleId, onArticleSelect }) {
  // fetch articles by selectedArticleId 
  const [featuredArticles, setFeaturedArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/articles/featured");
        setFeaturedArticles(response.data);
      } catch (error) {
        console.error('Error fetching featured articles:', error);
        throw error;
      }
    }
    fetchData();
  }, []);
  const [selectedArticle, setSelectedArticle] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedArticleId !== null) {
          const response = await axios.get(`http://localhost:8000/articles/${selectedArticleId}`);
          setSelectedArticle(response.data);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
        throw error;
      }
    }
    fetchData();
  }, [selectedArticleId]);

  return (
    <main className="content-area">
      {selectedArticle ? (
        <div className="article-content">
          <div className="article-body" dangerouslySetInnerHTML={{ __html: selectedArticle.content }}></div>
        </div>
      ) : (
        <div>
          {featuredArticles.length > 0 ? (
            <div className="featured-articles featired-container">
              {featuredArticles.map((article, index) => (
                <div key={article.id} onClick={() => onArticleSelect(article.id)} className={`featured-article ${index % 2 === 0 ? 'even' : 'odd'}`}>
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

