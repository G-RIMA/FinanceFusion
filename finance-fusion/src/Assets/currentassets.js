import React, { useState } from 'react';

function CurrentAssetsCalculator() {
  const [assets, setAssets] = useState([
    { id: 1, name: 'Cash', value: 0 },
    { id: 2, name: 'Accounts Receivable', value: 0 },
    { id: 3, name: 'Inventory', value: 0 },
    { id: 4, name: 'Prepaid Expenses', value: 0 },
    {id: 5, name: 'Short-Term Investments', value: 0},
    {id: 6, name: 'Deferred Income Taxes', value: 0},
    { id: 7, name: 'Other Assets', value: 0 },

  ]);

  const total = assets.reduce((acc, asset) => acc + parseFloat(asset.value), 0);

  const handleValueChange = (event, id) => {
    const newValue = parseFloat(event.target.value);
    const newAssets = assets.map((asset) => {
      if (asset.id === id) {
        return { ...asset, value: newValue };
      } else {
        return asset;
      }
    });
    setAssets(newAssets);
  };

  return (
    <div>
      <h2>Current Assets</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id}>
              <td>{asset.name}</td>
              <td>
                <input
                  type= "number"
                  value={asset.value}
                  onChange={(e) => handleValueChange(e, asset.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Assets: ${total}</h3>
    </div>
  );
}

export default CurrentAssetsCalculator;
