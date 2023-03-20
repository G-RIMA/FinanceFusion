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
    { id: 7, name: 'Other Current Assets', value: 0 },
  
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

  const [noncurrentassets, setnoncurrentAssets] = useState([
    { id: 1, name: 'Property Plant & Equipment', value: 0 },
    { id: 2, name: 'Intangible Assets', value: 0 },
    { id: 3, name: 'Equity and Other Investment', value: 0 },
    { id: 4, name: 'Good will', value: 0 },
    {id: 5, name: 'Deferred Income taxes', value: 0},
    { id: 7, name: 'Other Non-Current Assets', value: 0 },

  ]);

  const totalnoncurrentassets = noncurrentassets.reduce((acc, noncurrentasset) => acc + parseFloat(noncurrentasset.value), 0);

  const handleNonChange = (event, id) => {
    const newValue = parseFloat(event.target.value);
    const newnoncurrentAssets = noncurrentassets.map((noncurrentasset) => {
      if (noncurrentasset.id === id) {
        return { ...noncurrentasset, value: newValue };
      } else {
        return noncurrentasset;
      }
    });
    setnoncurrentAssets(newnoncurrentAssets);
  };

  const totalAssets = totalcurrentAssets + totalnoncurrentassets;

  const [currentliabilities, setcurrentLiabilities] = useState([
    { id: 1, name: 'Accounts Payable', value: 0 },
    { id: 2, name: 'Accrued Expenses', value: 0 },
    { id: 3, name: 'Short-term Debt', value: 0 },
    { id: 4, name: 'Accrued Compensation', value: 0 },
    {id: 5, name: 'Income taxes', value: 0},
    {id: 6, name: 'Short term unearned revenue', value: 0},
    { id: 7, name: 'Security Lending Payable', value: 0 },
  
  ]);

  const totalcurrentLiabilities = currentliabilities.reduce((acc, currentliability) => acc + parseFloat(currentliability.value), 0);

  const handleLiabChange = (event, id) => {
    const newValue = parseFloat(event.target.value);
    const newcurrentLiabilities = currentliabilities.map((currentliability) => {
      if (currentliability.id === id) {
        return { ...currentliability, value: newValue };
      } else {
        return currentliability;
      }
    });
    setcurrentLiabilities(newcurrentLiabilities);
  };

  const [noncurrentliabilities, setnoncurrentLiabilities] = useState([
    { id: 1, name: 'Long-Term Debt', value: 0 },
    { id: 2, name: 'Long-Term Unearned Revenue', value: 0 },
    { id: 3, name: 'Deferred Income Taxes', value: 0 },
    { id: 4, name: 'Other', value: 0 }
  ]);

  const totalnoncurrentliabilities = noncurrentliabilities.reduce((acc, noncurrentliability) => acc + parseFloat(noncurrentliability.value), 0);

  const handleNonLiabChange = (event, id) => {
    const newValue = parseFloat(event.target.value);
    const newnoncurrentLiabilities = noncurrentliabilities.map((noncurrentliability) => {
      if (noncurrentliability.id === id) {
        return { ...noncurrentliability, value: newValue };
      } else {
        return noncurrentliability;
      }
    });
    setnoncurrentLiabilities(newnoncurrentLiabilities);
  };

  const [shares, setShares] = useState([
    { id: 1, name: 'Common Shares', value: 0 },
    { id: 2, name: 'Retained Earnings', value: 0 }

  ]);

  const totalShares = shares.reduce((acc, share) => acc + parseFloat(share.value), 0);

  const handleShareChange = (event, id) => {
    const newValue = parseFloat(event.target.value);
    const newShares = shares.map((share) => {
      if (share.id === id) {
        return { ...share, value: newValue };
      } else {
        return share;
      }
    });
    setShares(newShares);
  };

  const totalLiabilities = totalcurrentLiabilities + totalnoncurrentliabilities + totalShares 

  
  
  
  
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
                  <th>Total Current Assets</th>
                  <th>
                    {totalcurrentAssets}
                  </th>
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
              {noncurrentassets.map((noncurrentasset) => (
            <tr key={noncurrentasset.id}>
              <td>{noncurrentasset.name}</td>
              <td>
                <input
                  type= "number"
                  value={noncurrentasset.value}
                  onChange={(e) => handleNonChange(e, noncurrentasset.id)}
                />
              </td>
            </tr>
          ))}
                <tr>
                  <th>Total Non-Current Assets</th>
                  <th>
                    {totalnoncurrentassets}
                  </th>
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
                  <th>Current Liabilities</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
              {currentliabilities.map((currentliability) => (
                <tr key={currentliability.id}>
                <td>{currentliability.name}</td>
                <td>
                  <input
                    type= "number"
                    value={currentliability.value}
                    onChange={(e) => handleLiabChange(e, currentliability.id)}
                  />
                </td>
              </tr>

            ))}
                <tr>
                  <th>Total Current Liabilities</th>
                  <th>
                    {totalcurrentLiabilities}
                  </th>
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
              {noncurrentliabilities.map((noncurrentliability) => (
                <tr key={noncurrentliability.id}>
                <td>{noncurrentliability.name}</td>
                <td>
                  <input
                    type= "number"
                    value={noncurrentliability.value}
                    onChange={(e) => handleNonLiabChange(e, noncurrentliability.id)}
                  />
                </td>
              </tr>

            ))}
                <tr>
                  <th>Total Non-Current Liabilities</th>
                  <th>
                    {totalnoncurrentliabilities}
                  </th>
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
              {shares.map((share) => (
            <tr key={share.id}>
              <td>{share.name}</td>
              <td>
                <input
                  type= "number"
                  value={share.value}
                  onChange={(e) => handleShareChange(e, share.id)}
                />
              </td>
            </tr>
          ))}
                <tr>
                  <th>Total Shareholder Equity</th>
                  <th>
                    {totalShares}
                  </th>
                </tr>
              </tbody>
            </thead>
        </td>
        <tfoot>
        <th>
            <td>Total Assets</td>
            <td>
               {totalAssets} 
            </td>
        </th>
        <th>
            <td>Total Liabilities</td>
            <td>
                {totalLiabilities}
            </td>
        </th>
      </tfoot>
      </table>
      
      </div>
      
    );
  }
  
  export default Balancesheet;
  