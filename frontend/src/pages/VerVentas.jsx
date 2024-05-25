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

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (

        <div className="todo">


            <div className="containerVP">
                <h2>Ventas</h2>

                <div className="barraSuperior">
                    <input type="search" placeholder="Buscar venta" />
                    <div className="OpcionesP">
                        <button className="Add" onClick={() => window.location.href = "./RealizarVenta"}><FaPlus /> Nueva venta</button>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Orden</th>
                            <th>Fecha de Orden</th>
                            <th>Subtotal</th>
                            <th>Total</th>
                            <th>Cliente</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ventas.map((venta) => (
                            <tr key={venta.IDVenta}>
                                <td>{venta.IDVenta}</td>
                                <td>{formatDate(venta.FechaPedido)}</td>
                                <td>{venta.Subtotal}</td>
                                <td>{venta.Total}</td>
                                <td>{venta.Nombre}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VerVentas;
