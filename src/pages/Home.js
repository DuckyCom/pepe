import React from 'react';
import ProductList from '../components/ProductList';

function Home({ theme, products, addToCart }) {
  return (
    <div className={`home-page ${theme}`}>
      <h1>Productos</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}

export default Home;
