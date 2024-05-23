import React, { useEffect, useState } from "react";
import { FaExchangeAlt, FaPlus } from "react-icons/fa";
import "../App.css";
import "../Estilos/Proveedores.css";

const URL = "http://localhost:8080/Clientes";

const VerClientes = () => {
  const [Clientes, setClientes] = useState([]);

  useEffect(() => {
    //Funcion para cargar los Clientes
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      const rows = data.rows;

      console.log("Data: ", data.rows);

      //Verificando de que data sea un array
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

  return (
    <div className="containerVP">
      <h2>Clientes</h2>
      <div className="barraSuperior">
        <input type="search" placeholder="Buscar Cliente" />
        <button className="Busqueda">Buscar</button>

        <div className="OpcionesP">
          <button className="Add">
            <FaPlus />
            Añadir Cliente
          </button>
          <button className="Modify">
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
            {Clientes.map((clientes, index) => (
              <tr key={index}>
                <td>{clientes.IDCliente}</td>
                <td>{clientes.Nombre}</td>
                <td>{clientes.Correo}</td>
                <td>{clientes.Telefono}</td>
                <td>{clientes.RFC}</td>
                <td>{clientes.CURP}</td>
                <td>{clientes.Ciudad}</td>
              </tr>
            ))}
            ;
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VerClientes;
