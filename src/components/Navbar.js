// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ toggleTheme, theme, cartCount }) {
  return (
    <nav className="navbar">
      <Link to="/home" className="logo">Mi Tienda</Link>
      <div className="nav-links">
        <button onClick={toggleTheme}>
          {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
        <Link to="/devop" className="icon">🛠️</Link>
        <Link to="/" className="icon">👤</Link>
        <Link to="/cart" className="icon">
          🛒<span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
