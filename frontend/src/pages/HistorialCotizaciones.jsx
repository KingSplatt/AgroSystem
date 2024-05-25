import React, { useEffect, useState } from "react";
import { FaFileExport, FaPrint } from "react-icons/fa";

import "../Estilos/HistorialCotizacion.css"; // Cambiar a la ruta correcta

const URI = "http://localhost:8080/Cotizacion";

const HistorialCotizacion = () => {
    const [buscar, setBuscar] = useState("");
    const [Cotizacion, setCotizacion] = useState([]);

    useEffect(() => {
        fetchCotizacion();
    }, []);

    const fetchCotizacion = async () => {
        try {
            const response = await fetch(URI);
            const data = await response.json();
            const rows = data.rows;

            console.log("Data:", data.rows);

            if (Array.isArray(rows)) {
                setCotizacion(rows);
            } else {
                console.error("La respuesta no es un array", data);
                alert("Error al obtener las Cotizacion: la respuesta no es un array");
            }
        } catch (error) {
            console.error("Error al obtener las Cotizacion:", error);
            alert("Error al obtener las Cotizacion:", error);
        }
    };

    const handleBuscar = (e) => {
        setBuscar(e.target.value);
    };

    const BusquedaCotizacion = Cotizacion.filter((compra) =>
        compra.IDCompra?.toString().includes(buscar) ||
        compra.Total?.toString().includes(buscar)
    );

    const formatDate = (date) => {
        const fecha = new Date(date);
        return fecha.toLocaleDateString();
    };

    const handlePrint = (compra) => {
        const content = preparePrintContent(compra);
        const windowPrint = window.open("", "Impresión");
        windowPrint.document.body.innerHTML = content;
        windowPrint.print();
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
                            <th>Total</th>
                            <td>${compra.Total}</td>
                        </tr>
                        <!-- Agrega más detalles según sea necesario -->
                    </table>
                </body>
            </html>
        `;
    };

    const handleExport = (compra) => {
        // Aquí deberías implementar la lógica para exportar
        alert("Exportando detalles de compra");
    };

    return (
        <div className="Principal">
            <h2>Historial de Cotizacion</h2>
            <div className="containerVP">

                <div className="barraSuperior">
                    <input
                        type="search"
                        placeholder="Buscar cotizacion"
                        value={buscar}
                        onChange={handleBuscar}
                    />
                </div>

                <div className="tabla">
                    <table>
                        <thead>
                            <tr>
                                <th>Numero de cot.</th>
                                <th>Fecha de cotizacion</th>
                                <th>Proveedor</th>
                                <th>Producto</th>
                            </tr>
                        </thead>

                        <tbody>
                            {BusquedaCotizacion.map((compra, index) => (
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
                                        <button
                                            onClick={() => handleExport(compra)}
                                        >
                                            <FaFileExport />
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

export default HistorialCotizacion;
