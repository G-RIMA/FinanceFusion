import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Balancesheet from './pages/balancesheet';
import IncomeStatement from './pages/incomestatement';
import CashFLow from './pages/cashflow';
import LandingPage from './pages/LandingPage';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' exact component={LandingPage} />
        <Route path='/balancesheet' exact component={Balancesheet} />
        <Route path='/cashflow' component={CashFLow} />
        <Route path='/incomestatement' component={IncomeStatement} />
      </Routes>
    </Router>
  );
}

export default App;
