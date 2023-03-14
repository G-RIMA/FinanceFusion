import React, { useState } from "react";
import "./balancesheet.css";


function Balancesheet() {
    const [currentAssets, setCurrentAssets] = useState(0);
    const [nonCurrentAssets, setNonCurrentAssets] = useState(0);

    function handleAssetChange(e, isCurrent) {
        const value = parseFloat(e.target.value);
        if (isCurrent) {
          setCurrentAssets(currentAssets + value);
        } else {
          setNonCurrentAssets(nonCurrentAssets + value);
        }
      }
      const totalAssets = currentAssets + nonCurrentAssets;

      
    return (
      <div className="bal-container">
        <h3>Balance Sheet</h3>
        <table class="my-table">
          <td>
            <thead>
              <tr>
                <th>Assets </th>
              </tr>
              <thead>
                <tr>
                  <th>Current Assets</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cash & Cash Equivalents</td>
                  <td>
                    <input type="number" onChange={handleInputChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Accountts Receivable</td>
                  <td>
                    <input type="number" onChange={handleInputChange} />
                  </td>
                </tr>
                <tr>
                  <td>Inventory</td>
                  <td>
                    <input type="number" onChange={handleInputChange} />
                  </td>
                </tr>
                <tr>
                  <td>Prepaid expenses</td>
                  <td>
                    <input type="number" onChange={handleInputChange} />
                  </td>
                </tr>
                <tr>
                  <td>Short-term Investments</td>
                  <td>
                    <input type='number' onChange={handleInputChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Deferred Income Taxes</td>
                  <td>
                    <input type='number' onChange={handleInputChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Total Current Assets</td>
                  <td>
                    {total}
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
                    <input type="number" onChange={handleInputChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Intangible Assets</td>
                  <td>
                    <input type="number" onChange={handleInputChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Equity and other Investments</td>
                  <td>
                    <input type="number" onChange={handleInputChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Good will</td>
                  <td>
                    <input type="number"onChange={handleInputChange} />
                  </td>
                </tr>
                <tr>
                  <td>Deferred Income Taxes</td>
                  <td>
                    <input type="number" onChange={handleInputChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Total Current Assets</td>
                  <td>
                    {total}
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
                  <td>Total Shareholder</td>
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
                <input />
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
  