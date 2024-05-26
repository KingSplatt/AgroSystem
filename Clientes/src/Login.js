import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './Images/login.png';
import './Login.css';

const URI = 'http://localhost:8080/Empleados';

function Login() {
  const navigate = useNavigate();
  const [Empleados, setEmpleados] = useState([]);
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  
  useEffect(() => {
    fetchEmpleados();
  }, []);

  const fetchEmpleados = async () => {
    try {
      const response = await fetch(URI);
      const data = await response.json();
      const rows = data.rows;

      if (Array.isArray(rows)) {
        setEmpleados(rows);
        console.log("Empleados:", rows);
      } else {
        console.error("La respuesta no es un array", data);
        alert("Error al obtener los Empleados: la respuesta no es un array");
      }
    } catch (error) {
      console.error("Error al obtener los Empleados:", error);
      alert("Error al obtener los Empleados:", error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    //RECORRER ARREGLO DE EMPLEADOS para validar 
    const empleado = Empleados.find((empleado) => {
      if (empleado.Usuario === usuario && empleado.Contrasena === contrasena) {
        return empleado;
      }
    });

    if (empleado) {
      navigate('/App');
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
