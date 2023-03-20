import React, { useState } from "react";
import "./balancesheet.css";

function IncomeStatement () {
    const [revenues, setrevenues] = useState([
        { id: 1, name: 'Revenues', value: 0 },
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
    
      const EBITDA =grossProfit + (ebitdas.reduce((acc, ebitda) => acc + parseFloat(ebitda.value), 0));

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

      const [ebits, setEbit] = useState([
        { id: 1, name: 'Depreciation and Amortixation', value: 0 },
      ]);
    
      const EBIT = EBITDA + (ebits.reduce((acc, ebit) => acc + parseFloat(ebit.value), 0));

      const handleEBITChange = (event, id) => {
        const newValue = parseFloat(event.target.value);
        const newebits = ebits.map((ebit) => {
          if (ebit.id === id) {
            return { ...ebit, value: newValue };
          } else {
            return ebit
            ;
          }
        });
        setEbit(newebits);
      };

      const [incomesb4, setIncomesb4] = useState([
        { id: 1, name: 'Interest Income', value: 0 },
        { id: 2, name: 'Interest Expense', value: 0 },
        { id: 3, name: 'Other Income Expenses', value: 0 },

      ]);
    
      const IncomeB4 = EBIT + (incomesb4.reduce((acc, incomeb4) => acc + parseFloat(incomeb4.value), 0));

      const handleIB4Change = (event, id) => {
        const newValue = parseFloat(event.target.value);
        const newincomesb4 = incomesb4.map((incomeb4) => {
          if (incomeb4.id === id) {
            return { ...incomeb4, value: newValue };
          } else {
            return incomeb4
            ;
          }
        });
        setIncomesb4(newincomesb4);
      };

      const [taxes, setTaxes] = useState([
        { id: 1, name: 'Taxes', value: 0 },

      ]);
      const Tax = taxes.reduce((acc, tax) => acc + parseFloat(tax.value), 0);

      const handleTaxChange = (event, id) => {
        const newValue = parseFloat(event.target.value);
        const newtaxes = taxes.map((tax) => {
          if (tax.id === id) {
            return { ...tax, value: newValue };
          } else {
            return tax
            ;
          }
        });
        setTaxes(newtaxes);
      };

      const NetIncome = IncomeB4 + Tax;



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
              <thead>
                <tbody>
                {ebits.map((ebit) => (
              <tr key={ebit.id}>
                <td>{ebit.name}</td>
                <td>
                  <input
                    type= "number"
                    value={ebit.value}
                    onChange={(e) => handleEBITChange(e, ebit.id)}
                  />
                </td>
              </tr>
            ))}
                  <tr>
                    <th>EBIT</th>
                    <th>
                      {EBIT}
                    </th>
                  </tr>
                </tbody>
              </thead>
              <thead>
                <tbody>
                {incomesb4.map((incomeb4) => (
              <tr key={incomeb4.id}>
                <td>{incomeb4.name}</td>
                <td>
                  <input
                    type= "number"
                    value={incomeb4.value}
                    onChange={(e) => handleIB4Change(e, incomeb4.id)}
                  />
                </td>
              </tr>
            ))}
                  <tr>
                    <th>Income Before Taxes</th>
                    <th>
                      {IncomeB4}
                    </th>
                  </tr>
                </tbody>
              </thead>
              <thead>
                <tbody>
                {taxes.map((tax) => (
              <tr key={tax.id}>
                <td>{tax.name}</td>
                <td>
                  <input
                    type= "number"
                    value={tax.value}
                    onChange={(e) => handleTaxChange(e, tax.id)}
                  />
                </td>
              </tr>
            ))}
                  <tr>
                    <th>Taxes</th>
                    <th>
                      {Tax}
                    </th>
                  </tr>
                </tbody>
              </thead>
              <thead>
                <tbody>
                  <tr>
                    <th>Net Income</th>
                    <th>
                      {NetIncome}
                    </th>
                  </tr>
                </tbody>
              </thead>
          </td>
          <td>
          <thead>
              <tr>
                <th>Ratios</th>
              </tr>
              <thead>
                <tr>
                  <th>Ratios</th>
                  <th>Value</th>
                </tr>
              </thead>
          </thead>
          </td>
          
    </table>
    </div>
);
}

export default IncomeStatement;