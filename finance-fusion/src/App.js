import './App.css';
import React from "react";
import './index.css';

import { Footer, Blog, Possibility,Features, WhatFF, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />

      </div>
      <WhatFF />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />

    </div>
  );
}

export default App;
