import React, { useEffect, useState } from "react";
import { FaExchangeAlt, FaPlus } from "react-icons/fa";

import "../Estilos/Proveedores.css";

const URI = "http://localhost:8080/proveedores";

const VerProveedores = () => {
    const [Proveedores, setProveedores] = useState([]);

    useEffect(() => {
        fetchProveedores();
    }, []);

    const fetchProveedores = async () => {
        let savedEmpleado = localStorage.getItem('empleado');
        savedEmpleado = JSON.parse(savedEmpleado);
        if (!savedEmpleado.IDCEDI) {
            console.error("No hay un empleado logueado con CEDI asignado");
            alert("No hay un empleado CEDI, inice sesión primero");
            window.location.href = "./";
            return;
        }
        try {
            const response = await fetch(URI);
            const data = await response.json();
            const rows = data.rows;

            console.log("Data:", data.rows);

            if (Array.isArray(rows)) {
                setProveedores(rows);
            } else {
                console.error("La respuesta no es un array", data);
                alert("Error al obtener los Proveedores: la respuesta no es un array");
            }
        } catch (error) {
            console.error("Error al obtener los Proveedores:", error);
            alert("Error al obtener los Proveedores:", error);
        }
    };

    const [buscar, setBuscar] = useState("");

    const handleBuscar = (e) => {
        setBuscar(e.target.value);
    }

    const BusquedaProveedores = Proveedores.filter((proveedor => 
        (proveedor.IDProveedor?.toString().includes(buscar) || 
         proveedor.Nombre?.includes(buscar) || 
         proveedor.RFC?.includes(buscar) || 
         proveedor.CURP?.includes(buscar))
    ));

    const handleModificar = (idProveedor) => {
        localStorage.setItem('idProveedor', idProveedor);
        window.location.href = "./ActualizarProveedor";
    };

    return (
        <div className="TodoP">
            <div className="containerVPr">
                <h2>Proveedores</h2>
                <div className="barraSuperiorP">
                    <input type="search" placeholder="Buscar proveedor" value={buscar} onChange={handleBuscar} />

                    <div className="OpcionesP">
                        <button className="Add" onClick={() => window.location.href = "./AnadirProveedor"}> 
                            <FaPlus /> Añadir proveedor 
                        </button>
                    </div>
                </div>

                <div className="tablaP">
                    <table>
                        <thead>
                            <tr>
                                <th>Clave</th>
                                <th>Nombre</th>
                                <th>Telefono</th>
                                <th>Correo</th>
                                <th>RFC</th>
                                <th>CURP</th>
                                <th>Legalizado</th>
                                <th>Modificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {BusquedaProveedores.map((proveedor, index) => (
                                <tr key={index}>
                                    <td>{proveedor.IDProveedor}</td>
                                    <td>{proveedor.Nombre}</td>
                                    <td>{proveedor.Telefono}</td>
                                    <td>{proveedor.Correo}</td>
                                    <td>{proveedor.RFC}</td>
                                    <td>{proveedor.CURP}</td>
                                    <td>{proveedor.Legalizado ? "Sí" : "No"}</td>
                                    <td>
                                        <button onClick={() => handleModificar(proveedor.IDProveedor)}>
                                            Modificar
                                        </button>
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

export default VerProveedores;