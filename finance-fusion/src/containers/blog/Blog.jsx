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
        <Article date="Sep 26, 2021" text="Why we need the three Financial Statement" />
      </div>
      <div className="ff__blog-container_groupB">
        <Article  date="Sep 26, 2021" text="Financial analysis" />
        <Article date="Sep 26, 2021" text="Reading Financial Statement" />
        <Article date="Sep 26, 2021" text="Budgeting" />
      </div>
    </div>
  </div>
);
};

export default Blog;
