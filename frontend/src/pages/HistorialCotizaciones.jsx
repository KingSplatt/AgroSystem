import React, { useEffect, useState } from "react";
import "../Estilos/HistorialCotizacion.css"; // Ajustar a la ruta correcta

const URI = "http://localhost:8080/cotizaciones";

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

            if (Array.isArray(rows)) {
                setCotizacion(rows);
            } else {
                console.error("La respuesta no es un array", rows);
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

    const BusquedaCotizacion = Cotizacion.filter((cotizacion) =>
        cotizacion.IDCotizacion?.toString().toLowerCase().includes(buscar.toLowerCase()) ||
        cotizacion.Total?.toString().toLowerCase().includes(buscar.toLowerCase())
    );

    const formatDate = (date) => {
        const fecha = new Date(date);
        return fecha.toLocaleDateString();
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
                            {BusquedaCotizacion.map((cotizacion, index) => (
                                <tr key={index}>
                                    <td>{cotizacion.IDCotizacion}</td>
                                    <td>{formatDate(cotizacion.FechaCotizacion)}</td>
                                    <td>{cotizacion.IDProveedor}</td>
                                    <td>{cotizacion.IDProducto}</td>
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
