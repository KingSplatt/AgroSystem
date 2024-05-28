import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './Images/login.png';
import './Login.css';

const URI = 'http://localhost:8080/Cliente';

function Login() {
  const navigate = useNavigate();
  const [Cliente, setCliente] = useState([]);
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  
  useEffect(() => {
    fetchCliente();
  }, []);

  const fetchCliente = async () => {
    try {
      const response = await fetch(URI);
      const data = await response.json();
      const rows = data.rows;

      if (Array.isArray(rows)) {
        setCliente(rows); 
        console.log("Cliente:", rows);
      } else {
        console.error("La respuesta no es un array", data);
        alert("Error al obtener los Clientes: la respuesta no es un array");
      }
    } catch (error) {
      console.error("Error al obtener los Clientes:", error);
      alert("Error al obtener los Clientes:", error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    //RECORRER ARREGLO DE EMPLEADOS para validar 
    const cliente = Cliente.find((cliente) => {
      if (cliente.Usuario === usuario && cliente.Contrasena === contrasena) {
        return cliente;
      }
    });

    if (cliente) {
      navigate('/InicioClientes');
    } else {
      alert("Usuario o contraseña incorrectos");
    }
    
  };

  return (
    <div className="Login">
      <header className="Login-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleLogin}>
          <label>
            <input 
              className='IS' type="text" name="usuario" placeholder='Usuario' value={usuario} onChange={(e) => setUsuario(e.target.value)} 
            />
          </label>
          <br />
          <label>
            <input className='IS' type="password" name="contrasena" placeholder='Contraseña' value={contrasena} onChange={(e) => setContrasena(e.target.value)} 
            />
          </label>
          <br />
          <button className="login-button" type="submit">Ingresar</button>
        </form>
      </header>
    </div>
  );
}

export default Login;
