// DevOp.js
import React from 'react';
import ProductForm from '../components/ProductForm';

function DevOp({ addProduct }) {
  return (
    <div>
      <h1>Agregar Producto</h1>
      <ProductForm addProduct={addProduct} /> {/* Pasa addProduct a ProductForm */}
    </div>
  );
}

export default DevOp;
