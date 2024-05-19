import React, { useEffect, useState } from "react";
import { FaExchangeAlt, FaPlus } from "react-icons/fa";
import "../App.css";
import "../Estilos/Proveedores.css";

const VerProveedores = () => {
    const [proveedores, setProveedores] = useState([]);

    useEffect(() => {
        // Aquí simularemos una función que obtiene los proveedores de una base de datos
        fetchProveedores(); // Llamamos a una función para cargar los proveedores
    }, []);

    const fetchProveedores = async () => {
        // Aquí deberías hacer una llamada a tu API o base de datos para obtener los proveedores
        try {
            // Supongamos que obtienes los datos de una API
            const response = await fetch('https://tu-api.com/proveedores');
            const data = await response.json();
            setProveedores(data); // Actualizamos el estado con los datos obtenidos
        } catch (error) {
            alert('Error al obtener los proveedores:', error);
        }
    };

    return (

        
            <div className="containerVP">
            <h2>Proveedores</h2>
                <div className="barraSuperior">
                    <input type="search" placeholder="Buscar proveedor" />
                    <button className="Busqueda">Buscar</button>

                    <div className="OpcionesP">
                        <button className="Add"> <FaPlus/> Añadir proveedor </button>
                        <button className="Modify"><FaExchangeAlt /> Modificar proveedor</button>
                    </div>
                </div>

                <div className="tabla">
                    <table>
                        <thead>
                            <tr>
                                <th>Clave</th>
                                <th>Nombre</th>
                                <th>Telefono</th>
                                <th>Correo</th>
                                <th>RFC</th>
                                <th>CURP</th>
                                <th>Estado de legalización</th>
                            </tr>
                        </thead>
                        <tbody>
                            {proveedores.map((proveedor, index) => (
                                <tr key={index}>
                                    <td>{proveedor.clave}</td>
                                    <td>{proveedor.nombre}</td>
                                    <td>{proveedor.telefono}</td>
                                    <td>{proveedor.correo}</td>
                                    <td>{proveedor.rfc}</td>
                                    <td>{proveedor.curp}</td>
                                    <td>{proveedor.estadoLegalizacion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
     
    );
};

export default VerProveedores;
