import React from 'react';
import Article from '../../components/article/Article';
import './blog.css';

const Blog = () => {
  return (
    <div className="ff__blog section__padding" id="blog">
    <div className="ff__blog-heading">
      <h1 className="gradient__text__features">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="ff__blog-container">
      <div className="ff__blog-container_groupA">
        <Article date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="ff__blog-container_groupB">
        <Article  date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);
};

export default Blog;
