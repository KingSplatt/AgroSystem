import React, { useEffect, useState } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import '../Estilos/VerVentas.css';


const URI = "http://localhost:8080/ventasN"; 

const VerVentas = () => {
    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        fetchVentas();
    }, []);

    const fetchVentas = async () => {
        try {
            const response = await fetch(URI);
            const data = await response.json();
            const rows = data.rows;
            
            console.log("Data:", data.rows);

            if (Array.isArray(rows)) {
                setVentas(rows);
            }
            else {
                console.error("La respuesta no es un array", data);
                alert("Error al obtener las ventas: la respuesta no es un array");
            }
        }
        catch (error) {
            console.error("Error al obtener las ventas:", error);
            alert("Error al obtener las ventas:", error);
        }
    };

    return (
        <div className="containerVP">
            <h2>Ventas</h2>

            <div className="barraSuperior">
                <input type="search" placeholder="Buscar venta" />
                <button className="Busqueda">Buscar</button>
                <div className="OpcionesP">
                    <button className="Add" onClick={() => window.location.href = "./RealizarVenta"}><FaPlus /> Nueva venta</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Orden</th>
                        <th>Fecha de Orden</th>
                        <th>Fecha de Entrega</th>
                        <th>Subtotal</th>
                        <th>Total</th>
                        <th>Cliente</th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map((venta) => (
                        <tr key={venta.orden}>
                            <td>{venta.fechaOrden}</td>
                            <td>{venta.fechaEntrega}</td>
                            <td>{venta.subtotal}</td>
                            <td>{venta.total}</td>
                            <td>{venta.cliente}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VerVentas;
