import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductForm({ addProduct }) {
    const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, price, imageUrl, description });
    setName('');
    setPrice('');
    setImageUrl('');
    setDescription('');
    navigate('/home'); // Redirige a /home después de ingresar un producto
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input
        type="text"
        placeholder="Nombre del producto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Precio del producto"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="URL de la imagen"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      <textarea
        placeholder="Descripción del producto"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Agregar Producto</button>
    </form>
  );
}

export default ProductForm;
