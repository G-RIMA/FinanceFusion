import React from 'react';
import './article.css';


const Article = ({ date, text }) => {
  return (
    <div className="ff__blog-container_article">
    <div className="ff__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

};

export default Article;
