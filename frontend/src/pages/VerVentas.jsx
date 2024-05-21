import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
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
            <div className="barraSuperior">
                <input type="search" placeholder="Buscar venta" />
                <button className="Busqueda">Buscar</button>
                <div className="OpcionesP">
                    <button className="Add"><FaPlus /> Nueva venta</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map((venta) => (
                        <tr key={venta.IDVenta}>
                            <td>{venta.IDVenta}</td>
                            <td>{venta.Nombre}</td>
                            <td>{venta.Cantidad}</td>
                            <td>{venta.PrecioUnitario}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VerVentas;
