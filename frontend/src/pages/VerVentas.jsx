import React, { useState } from 'react';
import '../Estilos/VerVentas.css';

const VerVentas = () => {
    // Ejemplo de datos de ventas
    const [ventas, setVentas] = useState([
        { id: 1, producto: 'Herbicida', cantidad: 10, precio: 100 },
        { id: 2, producto: 'Fertilizante', cantidad: 5, precio: 50 },
        { id: 3, producto: 'Pesticida', cantidad: 8, precio: 80 },
    ]);

    const addVenta = () => {
        const newVenta = { id: ventas.length + 1, producto: 'Nuevo Producto', cantidad: 1, precio: 10 };
        setVentas([...ventas, newVenta]);
    };


    const deleteVenta = () => {
        const ventaId = prompt('Ingrese el ID de la venta a eliminar:');
        setVentas(ventas.filter(venta => venta.id !== parseInt(ventaId, 10)));    };

    return (
        <div className="containerVP">
            <div className="barraSuperior">
                <button className="Save" onClick={addVenta}>Añadir Venta</button>
                <button className="Cancel" onClick={deleteVenta}>Eliminar Venta</button>
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
                        <tr key={venta.id}>
                            <td>{venta.id}</td>
                            <td>{venta.producto}</td>
                            <td>{venta.cantidad}</td>
                            <td>{venta.precio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VerVentas;
