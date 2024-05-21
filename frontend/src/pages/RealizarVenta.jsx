import React, { useState } from 'react';
import '../Estilos/RealizarVenta.css';

const RealizarVenta = () => {
    const [productos, setProductos] = useState([
        { id: 1, nombre: 'Herbicida', precio: 100, disponibles: 50 },
        { id: 2, nombre: 'Fertilizante', precio: 50, disponibles: 30 },
        { id: 3, nombre: 'Pesticida', precio: 80, disponibles: 20 },
    ]);

    const [productosSeleccionados, setProductosSeleccionados] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [metodoPago, setMetodoPago] = useState('');
    const [montoRecibido, setMontoRecibido] = useState('');

    const handleBusqueda = (e) => {
        setBusqueda(e.target.value);
    };

    const handleCantidadChange = (id, cantidad) => {
        setProductos(prevProductos => 
            prevProductos.map(producto => 
                producto.id === id ? { ...producto, cantidad: parseInt(cantidad, 10) } : producto
            )
        );
    };

    const agregarProducto = (producto) => {
        setProductosSeleccionados(prevSeleccionados => 
            [...prevSeleccionados, { ...producto, cantidad: producto.cantidad || 1 }]
        );
    };

    const realizarVenta = () => {
        alert('Venta realizada con éxito');
        setProductosSeleccionados([]);
        setMetodoPago('');
        setMontoRecibido('');
    };

    const cancelarVenta = () => {
        setProductosSeleccionados([]);
        setMetodoPago('');
        setMontoRecibido('');
    };

    const productosFiltrados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
        producto.id.toString().includes(busqueda)
    );

    return (
        <div className="realizar-venta-container">
            <div className="productos-disponibles">
                <h2>Productos Disponibles</h2>
                <input 
                    type="text"
                    placeholder="Buscar por nombre o ID"
                    value={busqueda}
                    onChange={handleBusqueda}
                    className="busqueda"
                />
                <ul>
                    {productosFiltrados.map((producto) => (
                        <li key={producto.id}>
                            <div>{producto.nombre} (ID: {producto.id}) - ${producto.precio} - {producto.disponibles} disponibles</div>
                            <input 
                                type="number"
                                min="1"
                                placeholder="Cantidad"
                                onChange={(e) => handleCantidadChange(producto.id, e.target.value)}
                                className="cantidad-input"
                            />
                            <button onClick={() => agregarProducto(producto)}>Agregar</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="productos-seleccionados">
                <h2>Productos en la Venta</h2>
                <ul>
                    {productosSeleccionados.map((producto, index) => (
                        <li key={index}>
                            <div>{producto.nombre} - {producto.cantidad} unidades - ${producto.precio * producto.cantidad}</div>
                        </li>
                    ))}
                </ul>
                <div className="metodo-pago">
                    <label>Método de Pago:</label>
                    <select value={metodoPago} onChange={(e) => setMetodoPago(e.target.value)}>
                        <option value="">Seleccione...</option>
                        <option value="efectivo">Efectivo</option>
                        <option value="tarjeta">Tarjeta</option>
                        <option value="transferencia">Transferencia</option>
                    </select>
                </div>
                <div className="monto-recibido">
                    <label>Monto Recibido:</label>
                    <input 
                        type="number"
                        value={montoRecibido}
                        onChange={(e) => setMontoRecibido(e.target.value)}
                    />
                </div>
                <div className="botones">
                    <button className="realizar" onClick={realizarVenta}>Realizar Venta</button>
                    <button className="cancelar" onClick={cancelarVenta}>Cancelar Venta</button>
                </div>
            </div>
        </div>
    );
};

export default RealizarVenta;
