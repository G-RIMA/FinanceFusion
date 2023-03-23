import React, { useState } from "react";
import * as FileSaver from "file-saver";
import "./balancesheet.css";

function IncomeStatement () {
    const [revenues, setrevenues] = useState([
        { id: 1, name: 'Revenues', value: 0 },
        
      ]);

      const RevNue = revenues.reduce((acc, revenue) => acc + parseFloat(revenue.value), 0);

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

    const [cogs, setCogs] = useState([
      { id:1, name: 'Cost of Goods Sold (COGS)', value: 0 },

    ]);
    
      const COGS = cogs.reduce((acc, cog) => acc + parseFloat(cog.value), 0);

      const handleCOGSChange = (event, id) => {
        const newValue = parseFloat(event.target.value);
        const newcogs = cogs.map((cog) => {
          if (cog.id === id) {
            return { ...cog, value: newValue };
          } else {
            return cog;
          }
        });
        setCogs(newcogs);
      };


      const grossProfit = RevNue - COGS;


      const [ebitdas, setEbitda] = useState([
        { id: 1, name: 'SG&A', value: 0 },
        { id: 2, name: 'R&D', value: 0 },
        { id:3, name: 'Unusual Expenses(Income)', value: 0},
        { id:4, name: 'Other Opereating Expences', value: 0}
      ]);
    
     const EBITDA = (ebitdas.reduce((acc, ebitda) => acc + parseFloat(ebitda.value), 0));

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

      const Operating_Income = grossProfit - EBIT


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
    
      const IncomeB4 = Operating_Income - (incomesb4.reduce((acc, incomeb4) => acc + parseFloat(incomeb4.value), 0));

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
        { id: 1, name: 'Income Taxes', value: 0 },

      ]);
      const Tax = IncomeB4 - taxes.reduce((acc, tax) => acc + parseFloat(tax.value), 0);

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

      const [extras, setExtras] = useState([
        { id: 1, name: 'Total Extraordinary Items', value: 0 },

      ]);
      const Extraordinary = extras.reduce((acc, extra) => acc + parseFloat(extra.value), 0);

      const handleExtraChange = (event, id) => {
        const newValue = parseFloat(event.target.value);
        const newExtras = extras.map((extra) => {
          if (extra.id === id) {
            return { ...extra, value: newValue };
          } else {
            return extra
            ;
          }
        });
        setExtras(newExtras);
      };

      
      const NetIncome = (Tax - Extraordinary);
      
      const grossProfitMarginRatio = ((grossProfit) / (RevNue)) * 100;
      const operatingProfitMarginRatio = ((Operating_Income) / (RevNue)) * 100;
      const netProfitMarginRatio = ((NetIncome) / (RevNue)) * 100;
      const taxRatio = (taxes[0].value / (IncomeB4)) * 100;
      const InterestCoverRatio = ((Operating_Income) / (incomesb4[1].value));

      const handleDownload = () => {
        const table = document.querySelector("table").outerHTML;
        const blob = new Blob([table], { type: "text/html;charset=utf-8" });
        FileSaver.saveAs(blob, "table.html");
      };


      return (
        <div className="bal-container">
          <h3>Income Statement</h3>
          <table class="my-table">
            <td>
              <thead>
                <tr>
                  <th colSpan="2">Income Statement </th>
                </tr>
                <thead>
                  <tr>
                    <th>Millions($)</th>
                    <th>Year 1</th>
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
                    <th>Total Revenue</th>
                    <th>
                      {RevNue}
                    </th>
                  </tr>
                </tbody>
                <tbody>
                {cogs.map((cog) => (
                  <tr key={cog.id}>
                  <td>{cog.name}</td>
                  <td>
                    <input
                      type= "number"
                      value={cog.value}
                      onChange={(e) => handleCOGSChange(e, cog.id)}
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
                  <tr>
                    <th>Operating Income</th>
                    <th>
                      {Operating_Income}
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
                    <th>Income After Taxes</th>
                    <th>
                      {Tax}
                    </th>
                  </tr>
                </tbody>
              </thead>
              <thead>
                <tbody>
                {extras.map((extra) => (
              <tr key={extra.id}>
                <td>{extra.name}</td>
                <td>
                  <input
                    type= "number"
                    value={extra.value}
                    onChange={(e) => handleExtraChange(e, extra.id)}
                  />
                </td>
              </tr>
            ))}
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
                <h3>Ratio Analysis</h3>
          </thead>

          <h3>Profitability Ratios</h3>
          <p>The ratios help to evaluate the ability of a company to generate income relative to revenue, balance sheet assets,
            operating costs and equity.
          </p>
          <thead>
              <thead>
                <tr>
                  <th>Profitability Ratios</th>
                  <th>Value</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>Gross Margin</td>
                  <td>{grossProfitMarginRatio}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>Operating Margin</td>
                  <td>{operatingProfitMarginRatio}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>Net Profit Margin</td>
                  <td>{netProfitMarginRatio}</td>
                </tr>
              </thead>
          </thead>
              <h3>Efficiency Ratios</h3>
              <p>They show how well a company is utilizing its assets and resources.</p>                
                <thead>
                  <tr>
                    <th>Efficiency Ratios</th>
                    <th>Value</th>
                  </tr>
                
                </thead>
                <thead>
                  <tr>
                    <td>Tax Ratio</td>
                    <td>{taxRatio}</td>
                  </tr>
                </thead>
              

            <h3>Solvency Ratios(Interest Coverage Ratios</h3>
            <p> Determine whether a company will be able to cover what it owes in interest to its creditors</p>
            <thead>
                <tr>
                  <th>Solvency Ratios</th>
                  <th>Value</th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>Interest Cover Ratio</td>
                  <td>{InterestCoverRatio}</td>
                </tr>
              </thead>
              
          
          </td>
          
    </table>
    <button onClick={handleDownload}>
      Download Table
    </button>
    </div>
);
}

export default IncomeStatement;