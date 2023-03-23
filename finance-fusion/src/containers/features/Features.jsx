import React from 'react';
import { Feature } from '../../components';
import './features.css';

const Features = () => {
  const featuresData = [
    {
      title: 'Balance Sheet',
      text: 'The balance sheet displays the company’s assets, liabilities, and shareholders’ equity at a point in time. Calculate the total assets, liabilities and equity in an instance all you need is to input the values.',
    },
    {
      title: 'Income Statement',
      text: 'The income statement can be a little hectic to calculate , but with this it caculates the values you need and also gives you the ratio analysis to help with financial analysis of your company.',
    },
    {
      title: 'Cash flow Statement',
      text: 'The cash flow statement displays the change in cash per period, as well as the beginning and ending balance of cash. Calculate this in an instance and get the values and analyze your company.',
    },
  ];
  return (
    <div className='ff__features section_padding' id='features'>
      <div className='ff__features-heading'>
        <h1 className='gradient__text__features' >Gain Insight, Make Informed Decisions: Your Financial Statement Destination.</h1>
      </div>
      <div className='ff__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>

    </div>
 );
}

export default Features;
