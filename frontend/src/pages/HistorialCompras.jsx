import React, { useEffect, useState } from "react";
import { FaPlus, FaPrint } from "react-icons/fa";

import "../Estilos/HistorialCompras.css"; // Cambiar a la ruta correcta

const URI = "http://localhost:8080/Compras";

const HistorialCompras = () => {
    const [buscar, setBuscar] = useState("");
    const [compras, setCompras] = useState([]);
    const savedEmpleado = JSON.parse(localStorage.getItem("empleado"));
    console.log("Empleado (inicial):", savedEmpleado);

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
                alert("Error al obtener las Compras: la respuesta no es un array");
            }
        } catch (error) {
            console.error("Error al obtener las Compras:", error);
            alert("Error al obtener las Compras:", error);
        }
    };

    const handleBuscar = (e) => {
        setBuscar(e.target.value);
    };

    const BusquedaCompras = compras.filter((compra) =>
        compra.IDCompra?.toString().includes(buscar) ||
        compra.Total?.toString().includes(buscar)
    );

    const formatDate = (date) => {
        const fecha = new Date(date);
        return fecha.toLocaleDateString();
    };

    const handlePrint = (compra) => {
        const content = preparePrintContent(compra);

        const windowPrint = window.open('', 'Impresión');

        windowPrint.document.write(content);
        windowPrint.document.close();

        windowPrint.onload = () => {

            windowPrint.print();
            windowPrint.close();
        };
    };


    const preparePrintContent = (compra) => {
        return `
            <html>
                <head>
                    <title>Detalles de Compra</title>
                    <style>
                        /* Estilos CSS para la impresión */
                        body {
                            font-family: Arial, sans-serif;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin-bottom: 10px;
                        }
                        th, td {
                            border: 1px solid #dddddd;
                            text-align: left;
                            padding: 8px;
                        }
                        th {
                            background-color: #f2f2f2;
                        }
                    </style>
                </head>
                <body>
                    <h2>Detalles de Compra</h2>
                    <h4> Copia expedida por:</h4>
                    <p>${savedEmpleado.Nombre} ${savedEmpleado.ApellidoPaterno} </p> 
                
                    <h5>Fecha: ${new Date().toLocaleDateString()}</h5>
                    <table>
                        <tr>
                            <th>Clave</th>
                            <td>${compra.IDCompra}</td>
                        </tr>
                        <tr>
                            <th>Fecha de Pedido</th>
                            <td>${formatDate(compra.FechaPedido)}</td>
                        </tr>
                        <tr>
                            <th>Fecha de Entrega</th>
                            <td>${formatDate(compra.FechaEntrega)}</td>
                        </tr>
                        <tr>
                            <th>Subotal</th>
                            <td>${compra.SubTotal}</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>${compra.Total}</td>
                        </tr>
                        <tr>
                            <th>Productos</th>
                            <td>${compra.Productos}</td>
                        </tr>
                        <!-- Agregar más detalles según sea necesario -->
                    </table>
                </body>
            </html>
        `;
    };



    return (
        <div className="Principal">
            <h2>Historial de compras</h2>
            <div className="containerVP">

                <div className="barraSuperior">
                    <input
                        type="search"
                        placeholder="Buscar compra"
                        value={buscar}
                        onChange={handleBuscar}
                    />
                    <div className="OpcionesP">
                        <button className="Add">
                            <FaPlus /> Añadir compra
                        </button>
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
                                        <button
                                            onClick={() => handlePrint(compra)}
                                        >
                                            <FaPrint />
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

export default HistorialCompras;
