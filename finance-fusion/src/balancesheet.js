import React, { useState } from "react";
import "./balancesheet.css";


function Balancesheet() {
  const [currentassets, setcurrentAssets] = useState([
    { id: 1, name: 'Cash', value: 0 },
    { id: 2, name: 'Accounts Receivable', value: 0 },
    { id: 3, name: 'Inventory', value: 0 },
    { id: 4, name: 'Prepaid Expenses', value: 0 },
    {id: 5, name: 'Short-Term Investments', value: 0},
    {id: 6, name: 'Deferred Income Taxes', value: 0},
    { id: 7, name: 'Other Assets', value: 0 },
  
  ]);

  const totalcurrentAssets = currentassets.reduce((acc, currentasset) => acc + parseFloat(currentasset.value), 0);

  const handleValueChange = (event, id) => {
    const newValue = parseFloat(event.target.value);
    const newcurrentAssets = currentassets.map((currentasset) => {
      if (currentasset.id === id) {
        return { ...currentasset, value: newValue };
      } else {
        return currentasset;
      }
    });
    setcurrentAssets(newcurrentAssets);
  };
  
  
    return (
      <div className="bal-container">
        <h3>Balance Sheet</h3>
        <table class="my-table">
          <td>
            <thead>
              <tr>
                <th colSpan="2">Assets </th>
              </tr>
              <thead>
                <tr>
                  <th>Current Assets</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
              {currentassets.map((currentasset) => (
                <tr key={currentasset.id}>
                <td>{currentasset.name}</td>
                <td>
                  <input
                    type= "number"
                    value={currentasset.value}
                    onChange={(e) => handleValueChange(e, currentasset.id)}
                  />
                </td>
              </tr>

            ))}
              <tr>
                  <td>Total Current Assets</td>
                  <td>
                    {totalcurrentAssets}
                  </td>
                </tr>
              </tbody>
            </thead>
            <thead>
              <thead>
                <tr>
                  <th>Non-Current Assets</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Property Plant & Equipment</td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>Intangible Assets</td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>Equity and other Investments</td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>Good will</td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>Deferred Income Taxes</td>
                  <td>
                    <input />
                  </td>
                </tr>
                <tr>
                  <td>Total Non-Current Assets</td>
                  <td>
                    
                  </td>
                </tr>
              </tbody>
            </thead>
        </td>
        <td>
        <thead>
              <tr>
                <th>Liabilities </th>
              </tr>
              <thead>
                <tr>
                  <th>Liabilities Assets</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cash</td>
                  <td>
                    <input type="number"/>
                  </td>
                </tr>
                <tr>
                  <td>Accounts Payable</td>
                  <td>
                    <input type="number"/>
                  </td>
                </tr>
                <tr>
                  <td>Accrued Expenses</td>
                  <td>
                    <input type="number"/>
                  </td>
                </tr>
                <tr>
                  <td>Short-term Debt</td>
                  <td>
                    <input type="number"/>
                  </td>
                </tr>
                <tr>
                  <td>Accrued Compensation</td>
                  <td>
                    <input type="number"/>
                  </td>
                </tr>
                <tr>
                  <td>Income Taxes</td>
                  <td>
                    <input/>
                  </td>
                </tr>
                <tr>
                  <td>Short-term unearned Revenue</td>
                  <td>
                    <input type="number"/>
                  </td>
                </tr>
                <tr>
                  <td>Security Lending Payable</td>
                  <td>
                    <input type="number" />
                  </td>
                </tr>
                <tr>
                  <td>Total Current Liabilities</td>
                  <td>
                    <input type="number"/>
                  </td>
                </tr>
              </tbody>
            </thead>
            <thead>
              <thead>
                <tr>
                  <th>Non-Current Liabilities</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Property Plant & Equipment</td>
                  <td>
                    <input type="number"/>
                  </td>
                </tr>
                <tr>
                  <td>Intangible Assets</td>
                  <td>
                    <input type="number"/>
                  </td>
                </tr>
                <tr>
                  <td>Total Non-Current Liabilities</td>
                  <td>
                    <input type="number"/>
                  </td>
                </tr>
              </tbody>
            </thead>
            <thead>
              <thead>
                <tr>
                  <th>Shareholder Equity</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Common Shares</td>
                  <td>
                    <input type="number" />
                  </td>
                </tr>
                <tr>
                  <td>Retained Earnings</td>
                  <td>
                    <input type="number"/>
                  </td>
                </tr>
                <tr>
                  <td>Total Shareholder Equity</td>
                  <td>
                    <input type="number"/>
                  </td>
                </tr>
              </tbody>
            </thead>
        </td>
        <tfoot>
        <th>
            <td>Total Assets</td>
            <td>
                
            </td>
        </th>
        <th>
            <td>Total Liabilities</td>
            <td>
                <input />
            </td>
        </th>
      </tfoot>
      </table>
      
      </div>
      
    );
  }
  
  export default Balancesheet;
  