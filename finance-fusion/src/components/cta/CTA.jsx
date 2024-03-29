import React from 'react';
import './cta.css';

const CTA = () => {
  return (
    <div className='ff__cta'>
      <div className='ff__cta-content'>
        <p>Request For Early Access to New Features Coming Soon:</p>
        <h3>Register Today to get save your files and access the files at any time</h3>
      </div>
      <div className='ff__cta-btn'>
        <a href='https://finance-fusion.vercel.app/'><button type='button'>Get Started</button></a>
      </div>
      
    </div>
  );
};

export default CTA;