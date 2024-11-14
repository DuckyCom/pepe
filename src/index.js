// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles.css'; // Asegúrate de que los estilos globales estén aquí

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router> {/* Aquí debe estar el único Router de la aplicación */}
    <App />
  </Router>
);
