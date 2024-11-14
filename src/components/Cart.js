// Cart.js
import React from 'react';

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="cart-page">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <h3>{item.name}</h3>
              <p>Precio: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          ))}
          <h2>Total: ${total}</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
