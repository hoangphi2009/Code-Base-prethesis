import React from 'react';
import Header from './components/layout/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/Account';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
