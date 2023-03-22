import './App.css';
import React from "react";

import { Footer, Blog, Possibility,Features, WhatFF, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

function App() {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />

      </div>

      <Brand />
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
