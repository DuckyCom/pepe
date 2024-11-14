import React from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Aquí se manejaría el registro del usuario
    navigate('/'); // Redirige a / (login) después de registrarse
  };

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Usuario" required />
        <input type="password" placeholder="Contraseña" required />
        <input type="email" placeholder="Correo electrónico" required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
