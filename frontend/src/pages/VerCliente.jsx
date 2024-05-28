import React, { useEffect, useState } from "react";
import { FaExchangeAlt, FaPlus } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import "../Estilos/VerClientes.css";

const URL = "http://localhost:8080/Clientes";

const VerClientes = () => {
  const [Clientes, setClientes] = useState([]);
  const [empleado, setEmpleado] = useState(null);

  useEffect(() => {
    const savedEmpleado = localStorage.getItem('empleado');
    if (savedEmpleado) {
      setEmpleado(JSON.parse(savedEmpleado));
    }
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      const rows = data.rows;

      if (Array.isArray(rows)) {
        setClientes(rows);
      } else {
        alert("Error al obtener los datos de los clientes");
      }
    } catch (error) {
      alert("Error al obtener los datos de los clientes");
    }
  };

  const [buscar, setBuscar] = useState("");

  const Busqueda = Clientes.filter((cliente) =>
    cliente.IDCliente?.toString().includes(buscar) ||
    cliente.Nombre?.toLowerCase().includes(buscar.toLowerCase()) ||
    cliente.Correo?.toLowerCase().includes(buscar.toLowerCase()) ||
    cliente.Telefono?.includes(buscar.toLowerCase()) ||
    cliente.RFC?.toLowerCase().includes(buscar.toLowerCase()) ||
    cliente.CURP?.toLowerCase().includes(buscar.toLowerCase()) ||
    cliente.Ciudad?.toLowerCase().includes(buscar.toLowerCase())
  );

  const handleBuscar = (e) => {
    setBuscar(e.target.value);
  };

  const handleModificar = (id) => {
    localStorage.setItem('clienteId', id);
    console.log("Guardando ID del cliente para modificar: ", id);
    window.location.href = "./ModificarCliente";
    
  };

  return (
    <div className="todo">
      <div className="containerVP">
        <h2>Clientes</h2>
        <div className="barraSuperior">
          <input type="search" placeholder="Buscar Cliente" value={buscar} onChange={handleBuscar} />
          <div className="OpcionesP">
            <button className="Add" onClick={() => window.location.href = "./AnadirCliente"} >
              <FaPlus />
              Añadir Cliente
            </button>
          </div>
        </div>

        <div className="tabla">
          <table>
            <thead>
              <tr>
                <th>Clave</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Telefono</th>
                <th>RFC</th>
                <th>CURP</th>
                <th>Ciudad</th>
                <th>Modificar</th>
              </tr>
            </thead>
            <tbody>
              {Busqueda.map((cliente, index) => (
                <tr key={index}>
                  <td>{cliente.IDCliente}</td>
                  <td>{cliente.Nombre}</td>
                  <td>{cliente.Correo}</td>
                  <td>{cliente.Telefono}</td>
                  <td>{cliente.RFC}</td>
                  <td>{cliente.CURP}</td>
                  <td>{cliente.Ciudad}</td>
                  <td>
                    <button onClick={() => handleModificar(cliente.IDCliente)}>Modificar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VerClientes;
