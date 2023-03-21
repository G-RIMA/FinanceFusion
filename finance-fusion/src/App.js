import './App.css';
import React from "react";
import Balancesheet from './balancesheet';
import IncomeStatement from './incomestatement';
import CashFLow from './cashflow';

function App() {
  return (
    <div>
        < Balancesheet />
        <IncomeStatement />
        <CashFLow />

       
    </div>
  );
}

export default App;
