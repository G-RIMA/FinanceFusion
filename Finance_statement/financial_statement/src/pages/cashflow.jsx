import React, { useState } from "react";
import "./balancesheet.css";

function CashFLow () {
    const [operatings, setOperating] = useState([
        { id: 1, name: 'Net Income', value: 0},
        { id: 2, name: 'Depreciation and Amortization', value: 0 },
        { id: 3, name: 'Net change in Operating working capital', value: 0 },
        { id: 4, name: 'Other operating cash flow adjustments', value: 0}
        
      ]);

      const Operating_activities = operatings.reduce((acc, operating) => acc + parseFloat(operating.value), 0);

      const handleOAChange = (event, id) => {
        const newValue = parseFloat(event.target.value);
        const newoperatings = operatings.map((operating) => {
          if (operating.id === id) {
            return { ...operating, value: newValue };
          } else {
            return operating;
          }
        });
        setOperating(newoperatings);
      };

    const [investings, setInvestings] = useState([
      { id:1, name: 'Capital asset acquisitions', value: 0 },
      { id:2, name: 'Capital asset disposal', value: 0 },
      { id:3, name: 'Other investing cash flows', value: 0}

    ]);

      const Net_capital_assest_aquisitions = investings[0].value + investings[1].value;

    
      const Investing_activities = Net_capital_assest_aquisitions + investings[2].value;

      const handleIAChange = (event, id) => {
        const newValue = parseFloat(event.target.value);
        const newinvestings = investings.map((investing) => {
          if (investing.id === id) {
            return { ...investing, value: newValue };
          } else {
            return investing;
          }
        });
        setInvestings(newinvestings);
      };

      const [financings, setFinancings] = useState([
        { id: 1, name: 'Increase (decrease) in debt', value: 0 },
        { id: 2, name: 'Increase (descrease) in debt', value: 0 },
        { id: 3, name: 'Other debt movements', value: 0},
        { id:4, name: 'Dividends paid', value: 0},
        { id:5, name: 'Increase (decrease) in equity', value: 0 },
        { id: 6, name: 'Increse (decrease) in equity', value: 0},
        { id: 7, name: 'Other equity movements', value: 0},
        { id:8, name: 'Other Financing cash flows', value: 0}
      ]);
    
     const Financing_activities = (financings.reduce((acc, financing) => acc + parseFloat(financing.value), 0));

      const handleFAChange = (event, id) => {
        const newValue = parseFloat(event.target.value);
        const newfinancings = financings.map((financing) => {
          if (financing.id === id) {
            return { ...financing, value: newValue };
          } else {
            return financing;
            ;
          }
        });
        setFinancings(newfinancings);
      };

      const [cashs, setCash] = useState([
        { id: 1, name: 'Change in Cash'},
        {id: 2, name: 'Cash at beginning of year', value: 0},
      ]);

      cashs[0].value = Operating_activities + Financing_activities + Investing_activities;
    
      const Cash_at_end_of_year = (cashs.reduce((acc, cash) => acc + parseFloat(cash.value), 0));
      
      const handleCashChange = (event, id) => {
        const newValue = parseFloat(event.target.value);
        const newcashs = cashs.map((cash) => {
          if (cash.id === id) {
            return { ...cash, value: newValue };
          } else {
            return cash;
            ;
          }
        });
        setCash(newcashs);
      };

      
      //const grossProfitMarginRatio = ((grossProfit) / (RevNue)) * 100;
      //const operatingProfitMarginRatio = ((Operating_Income) / (RevNue)) * 100;
      //const netProfitMarginRatio = ((NetIncome) / (RevNue)) * 100;
      //const taxRatio = (taxes[0].value / (IncomeB4)) * 100;
      //const InterestCoverRatio = ((Operating_Income) / (incomesb4[1].value));

      return (
        <div className="bal-container">
          <h3>Cash Flow Statement</h3>
          <table class="my-table">
            <td>
              <thead>
                <tr>
                  <th colSpan="2">Statement of CashFLow</th>
                </tr>
                <thead>
                  <tr>
                    <th>Millions($)</th>
                    <th>Year 1</th>
                  </tr>
                  <tr>Operating activities</tr>
                </thead>
                <tbody>
                {operatings.map((operating) => (
                  <tr key={operating.id}>
                  <td>{operating.name}</td>
                  <td>
                    <input
                      type= "number"
                      value={operating.value}
                      onChange={(e) => handleOAChange(e, operating.id)}
                    />
                  </td>
                </tr>
  
              ))}
                <tr>
                    <th></th>
                    <th>
                      {Operating_activities}
                    </th>
                  </tr>
                </tbody>
                <tbody>
                {investings.map((investing) => (
                  <tr key={investing.id}>
                  <td>{investing.name}</td>
                  <td>
                    <input
                      type= "number"
                      value={investing.value}
                      onChange={(e) => handleIAChange(e, investing.id)}
                    />
                  </td>
                </tr>
  
              ))}
                <tr>
                    <th></th>
                    <th>
                      {Investing_activities}
                    </th>
                  </tr>
                </tbody>
              </thead>
              <thead>
                <tbody>
                {financings.map((financing) => (
              <tr key={financing.id}>
                <td>{financing.name}</td>
                <td>
                  <input
                    type= "number"
                    value={financing.value}
                    onChange={(e) => handleFAChange(e, financing.id)}
                  />
                </td>
              </tr>
            ))}
                  <tr>
                    <th></th>
                    <th>
                      {Financing_activities}
                    </th>
                  </tr>
                </tbody>
              </thead>
              <thead>
                <tbody>
                {cashs.map((cash) => (
              <tr key={cash.id}>
                <td>{cash.name}</td>
                <td>
                  <input
                    type= "number"
                    value={cash.value}
                    onChange={(e) => handleCashChange(e, cash.id)}
                  />
                </td>
              </tr>
            ))}
                  <tr>
                    <th></th>
                    <th>
                      {Cash_at_end_of_year}
                    </th>
                  </tr>
                </tbody>
              </thead>
              
             
              
          </td>
          
          
    </table>
    </div>
);
}

export default CashFLow;