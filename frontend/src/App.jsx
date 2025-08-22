// App.jsx (complete working version)
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import { productsData } from './data/ProductsData';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route 
            path="/products" 
            element={<Products products={productsData} addToCart={addToCart} />} 
          />
          <Route 
            path="/products/:category" 
            element={<Products products={productsData} addToCart={addToCart} />} 
          />
          <Route 
            path="/product/:id" 
            element={<ProductDetail products={productsData} />} 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;