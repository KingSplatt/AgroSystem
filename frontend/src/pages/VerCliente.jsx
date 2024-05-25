import React, { useEffect, useState } from "react";
import { FaExchangeAlt, FaPlus } from "react-icons/fa";

import "../Estilos/VerClientes.css";

const URL = "http://localhost:8080/Clientes";

const VerClientes = () => {
  const [Clientes, setClientes] = useState([]);

  useEffect(() => {
    // Funcion para cargar los Clientes
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      const rows = data.rows;

      console.log("Data: ", data.rows);

      // Verificando de que data sea un array
      if (Array.isArray(rows)) {
        setClientes(rows);
      } else {
        console.log("La respuesta no es un array", data);
        alert("Error al obtener los datos de los clientes");
      }
    } catch (error) {
      console.error("Error al obtener los datos de los clientes", error);
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
            <button className="Modify" onClick={() => window.location.href = "./ModificarCliente"}  >
              <FaExchangeAlt />
              Modificar Cliente
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
