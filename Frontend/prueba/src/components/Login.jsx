import React from "react";
import { useNavigate } from "react-router-dom";
import "../static/styles/Login.css";
import logo from "../static/img/login.png";
import Navbar from "./Navbar";

function App() {
  const navigate = useNavigate(); // Cambio de 'history' a 'navigate'

  const handleLogin = () => {
    navigate("/Inicio"); // Cambio de 'history' a 'navigate'
  };

  return (
    <>
      <Navbar />

      <div className="login">
        <header className="login-header">
          <img src={logo} className="app-logo" alt="logo" />

          <form>
            <label>
              <input
                type="text"
                className="input-field"
                name="name"
                placeholder="Usuario"
              />
            </label>
            <br />
            <label>
              <input
                type="password"
                className="input-field"
                name="name"
                placeholder="Contraseña"
              />
            </label>
            <br />
            {/* Usar un botón con un evento onClick para redirigir */}
            <button className="login-button" onClick={handleLogin}>
              Ingresar
            </button>
          </form>
        </header>
      </div>
    </>
  );
}

export default App;
