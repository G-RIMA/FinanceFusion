import React, { useState } from "react";
import "./balancesheet.css";

function IncomeStatement () {
    const [revenues, setrevenues] = useState([
        { id: 1, name: 'Revennues', value: 0 },
        { id: 2, name: 'Cost of Goods Sold (COGS)', value: 0 },
      ]);
    
      const grossProfit = revenues.reduce((acc, revenue) => acc + parseFloat(revenue.value), 0);

      const handleValueChange = (event, id) => {
        const newValue = parseFloat(event.target.value);
        const newrevenues = revenues.map((revenue) => {
          if (revenue.id === id) {
            return { ...revenue, value: newValue };
          } else {
            return revenue;
          }
        });
        setrevenues(newrevenues);
      };

      const [ebitdas, setEbitda] = useState([
        { id: 1, name: 'SG&A', value: 0 },
        { id: 2, name: 'R&D', value: 0 },
      ]);
    
      const EBITDA = ebitdas.reduce((acc, ebitda) => acc + parseFloat(ebitda.value), 0);

      const handleEBITDAChange = (event, id) => {
        const newValue = parseFloat(event.target.value);
        const newebitdas = ebitdas.map((ebitda) => {
          if (ebitda.id === id) {
            return { ...ebitda, value: newValue };
          } else {
            return ebitda
            ;
          }
        });
        setEbitda(newebitdas);
      };
    
      return (
        <div className="bal-container">
          <h3>Balance Sheet</h3>
          <table class="my-table">
            <td>
              <thead>
                <tr>
                  <th colSpan="2">Income Statement </th>
                </tr>
                <thead>
                  <tr>
                    <th>Millions($)</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                {revenues.map((revenue) => (
                  <tr key={revenue.id}>
                  <td>{revenue.name}</td>
                  <td>
                    <input
                      type= "number"
                      value={revenue.value}
                      onChange={(e) => handleValueChange(e, revenue.id)}
                    />
                  </td>
                </tr>
  
              ))}
                <tr>
                    <th>Gross Profit</th>
                    <th>
                      {grossProfit}
                    </th>
                  </tr>
                </tbody>
              </thead>
              <thead>
                <tbody>
                {ebitdas.map((ebitda) => (
              <tr key={ebitda.id}>
                <td>{ebitda.name}</td>
                <td>
                  <input
                    type= "number"
                    value={ebitda.value}
                    onChange={(e) => handleEBITDAChange(e, ebitda.id)}
                  />
                </td>
              </tr>
            ))}
                  <tr>
                    <th>EBITDA</th>
                    <th>
                      {EBITDA}
                    </th>
                  </tr>
                </tbody>
              </thead>
          </td>
    </table>
    </div>
);
}

export default IncomeStatement;