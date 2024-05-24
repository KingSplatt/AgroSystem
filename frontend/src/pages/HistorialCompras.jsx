import React, { useEffect, useState } from "react";
import { FaFileExport, FaPlus, FaPrint } from "react-icons/fa";
import "../App.css";
import "../Estilos/HistorialCompras.css"; //cambiar a la ruta correcta

const URI = "http://localhost:8080/Compras";

const HistorialCompras = () => {

    const [buscar, setBuscar] = useState("");

    const handlePrint = (compra) => {
        alert("Imprimiendo detalles de compra");
    };

    const handleExport = (compra) => {
        alert("Exportando detalles de compra");
    };

    const [compras, setCompras] = useState([]);

    useEffect(() => {
        fetchCompras();
    }, []);

    const fetchCompras = async () => {
        try {
            const response = await fetch(URI);
            const data = await response.json();
            const rows = data.rows;

            console.log("Data:", data.rows);

            if (Array.isArray(rows)) {
                setCompras(rows);
            } else {
                console.error("La respuesta no es un array", data);
                alert("Error al obtener los Compras: la respuesta no es un array");
            }
        } catch (error) {
            console.error("Error al obtener los Compras:", error);
            alert("Error al obtener los Compras:", error);
        }
    };

    const handleBuscar = (e) => {
        setBuscar(e.target.value);
    };

    const BusquedaCompras = compras.filter((compra => (compra.IDCompra?.toString().includes(buscar) || compra.Total?.toString().includes(buscar))));

    const formatDate = (date) => {
        const fecha = new Date(date);
        return fecha.toLocaleDateString();
    }
    

    return (
        <div>
            <div className="containerVP">
                <h2>Historial de compras</h2>
                <div className="barraSuperior">
                    <input type="search" placeholder="Buscar compra" value={buscar} onChange={handleBuscar}/>
                    <div className="OpcionesP">
                        <button className="Add"><FaPlus /> Añadir compra</button>
                    </div>
                </div>

                <div className="tabla">
                    <table>
                        <thead>
                            <tr>
                                <th>Clave</th>
                                <th>Fecha de pedido</th>
                                <th>Fecha de recibido</th>
                                <th>Total</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {BusquedaCompras.map((compra, index) => (
                                <tr key={index}>
                                    <td>{compra.IDCompra}</td>
                                    <td>{formatDate(compra.FechaPedido)}</td>
                                    <td>{formatDate(compra.FechaEntrega)}</td>
                                    <td>{compra.Total}</td>
                                    <td>
                                        <button onClick={() => handlePrint(compra.nombre)}><FaPrint /></button>
                                        <button onClick={() => handleExport(compra.nombre)}><FaFileExport /></button>
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

export default HistorialCompras;
