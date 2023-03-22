import React from 'react';
import { Feature } from '../../components';
import './features.css';

const Features = () => {
  const featuresData = [
    {
      title: 'Fill Your Balance Sheet Values and get athe total assets, total liabilities and Equity.',
      text: 'The balance sheet displays the company’s assets, liabilities, and shareholders’ equity at a point in time. The two sides of the balance sheet must balance: assets must equal liabilities plus equity. The asset section begins with cash and equivalents, which should equal the balance found at the end of the cash flow statement.The balance sheet then displays the ending balance in each major account from period to period. Net income from the income statement flows into the balance sheet as a change in retained earnings (adjusted for payment of dividends).',
    },
    {
      title: 'Income Statement',
      text: 'The income statement shows the performance of the business throughout each period, displaying sales revenue at the very top. The statement then deducts the cost of goods sold (COGS) to find gross profit. From there, gross profit is impacted by other operating expenses and income, depending on the nature of the business, to reach net income at the bottom — “the bottom line” for the business.',
    },
    {
      title: 'Cash flow Statement',
      text: 'The cash flow statement then takes net income and adjusts it for any non-cash expenses. Then cash inflows and outflows are calculated using changes in the balance sheet. The cash flow statement displays the change in cash per period, as well as the beginning and ending balance of cash.',
    },
  ];
  return (
    <div className='ff__features section_padding' id='features'>
      <div className='ff__features-heading'>
        <h1 className='gradient__text'>Gain Insight, Make Informed Decisions: Your Financial Statement Destination.</h1>
        <p>Complete your financial statements in an instance.</p>
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
