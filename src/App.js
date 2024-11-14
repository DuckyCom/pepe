// App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import DevOp from './pages/DevOp';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [theme, setTheme] = useState('light'); // Estado para el tema

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.toggle('dark-mode', newTheme === 'dark'); // Aplica la clase en <body>
  };

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} theme={theme} cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home theme="light-mode" products={products} addToCart={addToCart} />} />
        <Route path="/devop" element={<DevOp addProduct={addProduct} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
