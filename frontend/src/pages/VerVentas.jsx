import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import '../Estilos/VerVentas.css';


const URI = "http://localhost:8080/ventasN";

const VerVentas = () => {
    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        fetchVentas();
    }, []);

    const fetchVentas = async (credito) => {
        let savedEmpleado = localStorage.getItem('empleado');
        savedEmpleado = JSON.parse(savedEmpleado);
        console.log(savedEmpleado);
        if (!savedEmpleado.IDSucursal) {
            console.error("No hay un empleado logueado");
            alert("No hay un empleado de Sucursal logueado, inice sesión primero");
            window.location.href = "./";
            return;
        }
        try {
            if (credito) {
                const response = await fetch(`http://localhost:8080/VentasC/${credito}`);
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
            const response = await fetch(`http://localhost:8080/VentasC/${credito}`);
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

    const handleCreditoSeleccionado = (event) => {
        console.log("Credito seleccionado:", event.target.checked);
        let credito = 0;
        if (event.target.checked) {
            let credito = 1;
            fetchVentas(credito);
        }
        fetchVentas(credito);

    }

    return (
        <div className="todo">
            <div className="containerVP">
                <h2>Ventas</h2>
                <div className="barraSuperior">
                    <input type="search" placeholder="Buscar venta" />
                    <div className="OpcionesP">
                        <label>Credito</label>
                        <input type="checkbox" onChange={(e) => handleCreditoSeleccionado(e)} />
                        <button className="Add" onClick={() => window.location.href = "./RealizarVenta"}><FaPlus /> Nueva venta</button>
                    </div>
                </div>
                <table className='tablaVen'>
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
                                <td>{venta.Cliente}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VerVentas;
