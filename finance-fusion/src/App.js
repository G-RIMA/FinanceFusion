import './App.css';
import React from "react";
import './index.css';

import { Footer, Blog, Features, Header } from './containers';
import { CTA, Navbar } from './components';

function App() {
  return (
    <div className='App scale-up-center'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />

      </div>
      <Features />
      <CTA />
      <Blog />
      <Footer />

    </div>
  );
}

export default App;
