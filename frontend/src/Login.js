import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from './img/login.png';

function Login() {
  const navigate = useNavigate(); // Cambio de 'history' a 'navigate'

  const handleLogin = () => {
    navigate('/App'); // Cambio de 'history' a 'navigate'
  };

  return (
    <div className="Login">
      <header className="Login-header">
        <img src={logo} className="App-logo" alt="logo" />

        <form>
          <label>
            <input className='IS' type="text" name="name" placeholder='Usuario' />
          </label>
          <br />
          <label>
            <input className='IS' type="password" name="name" placeholder='Contraseña' />
          </label>
          <br />
          {/* Usar un botón con un evento onClick para redirigir */}
          <button className="login-button" onClick={handleLogin}>Ingresar</button>
        </form>
      </header>
    </div>
  );
}

export default Login;