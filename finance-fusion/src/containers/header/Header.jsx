import React from 'react';
import image_1 from '../../assets/image_1.png';
import './header.css';

const Header = () => {
  return(
    <div className='ff__header section_padding' id="home">
      <div className='ff__header-content'>
        <h1 className='gradient__text'>Calculate and Get Your Financial Statements in an Instance</h1>
        <p>
        Use this tool to help ease your work when preparing Finacial Statements
        just input the values an the tool will calculate the work for you. No need for learning hectic excel 
        formulas, let the tools do that for you.
        </p>

        <div className='ff__header-content__input'>
          <button type='button'>Get Started</button>
        </div>
      </div>
      <div className='ff__header-image'>
        <img src={image_1} alt="analyze"/>
      </div>
    </div>
    
  )
}
export default Header;
