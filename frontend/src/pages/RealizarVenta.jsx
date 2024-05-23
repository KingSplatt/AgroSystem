import React, { useState } from 'react';
import '../Estilos/RealizarVenta.css';
import { FaTrashAlt } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { MdOutlinePointOfSale } from "react-icons/md";
import { TbBasketCancel } from "react-icons/tb";

const RealizarVenta = () => {
    const [productos, setProductos] = useState([
        { id: 1, nombre: 'Herbicida', precio: 100, disponibles: 50, cantidad: 0 },
        { id: 2, nombre: 'Fertilizante', precio: 50, disponibles: 30, cantidad: 0 },
        { id: 3, nombre: 'Pesticida', precio: 80, disponibles: 20, cantidad: 0 },
    ]);

    const [productosSeleccionados, setProductosSeleccionados] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [metodoPago, setMetodoPago] = useState('');
    const [montoRecibido, setMontoRecibido] = useState('');
    const [tarjetaInfo, setTarjetaInfo] = useState({
        numero: '',
        vencimiento: '',
        cvv: '',
        nombre: '',
        nombreCliente: '',
        cantidad: '',
        anticipominimo: '',
        anticipo: ''
    });

    const handleBusqueda = (e) => {
        setBusqueda(e.target.value);
    };

    const handleCantidadChange = (id, cantidad) => {
        setProductos(prevProductos =>
            prevProductos.map(producto =>
                producto.id === id ? { ...producto, cantidad: Math.min(parseInt(cantidad, 10), producto.disponibles) } : producto
            )
        );
    };

    const agregarProducto = (producto) => {
        if (!producto.cantidad || producto.cantidad <= 0) {
            alert('La cantidad debe ser mayor que 0.');
            return;
        }

        if (producto.cantidad > producto.disponibles) {
            alert('No se puede añadir más cantidad de la disponible.');
            return;
        }

        setProductosSeleccionados(prevSeleccionados => {
            const productoExistente = prevSeleccionados.find(p => p.id === producto.id);
            if (productoExistente) {
                return prevSeleccionados.map(p =>
                    p.id === producto.id
                        ? { ...p, cantidad: Math.min(p.cantidad + producto.cantidad, producto.disponibles) }
                        : p
                );
            }
            return [...prevSeleccionados, { ...producto }];
        });
    };

    const realizarVenta = () => {
        alert('Venta realizada con éxito');
        setProductosSeleccionados([]);
        setMetodoPago('');
        setMontoRecibido('');
        setTarjetaInfo({
            numero: '',
            vencimiento: '',
            cvv: '',
            nombre: '',
            nombreCliente: '',
            cantidad: '',
            anticipominimo: '',
            anticipo: ''
        });
    };

    const cancelarVenta = () => {
        setProductosSeleccionados([]);
        setMetodoPago('');
        setMontoRecibido('');
        setTarjetaInfo({
            numero: '',
            vencimiento: '',
            cvv: '',
            nombre: '',
            nombreCliente: '',
            cantidad: '',
            anticipominimo: '',
            anticipo: ''
        });
    };

    const handleTarjetaInfoChange = (e) => {
        const { name, value } = e.target;
        setTarjetaInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }));
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
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>ID</th>
                            <th>Precio</th>
                            <th>Disponibles</th>
                            <th>Cantidad</th>
                            <th>Agregar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productosFiltrados.map((producto) => (
                            <tr key={producto.id}>
                                <td className='centro-td'>{producto.nombre}</td>
                                <td className='centro-td'>{producto.id}</td>
                                <td className='centro-td'>${producto.precio}</td>
                                <td className='centro-td'>{producto.disponibles}</td>
                                <td className='centro-td'>
                                    <input
                                        type="number"
                                        min="1"
                                        placeholder="Cantidad"
                                        onChange={(e) => handleCantidadChange(producto.id, e.target.value)}
                                        className="cantidad-input"
                                        value={producto.cantidad}
                                    />
                                </td>
                                <td className='centro-td'>
                                    <button className="realizar" onClick={() => agregarProducto(producto)}><FaCirclePlus /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="productos-seleccionados">
                <h2>Productos en la Venta</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productosSeleccionados.map((producto, index) => (
                            <tr key={index}>
                                <td className='centro-td'>{producto.nombre}</td>
                                <td className='centro-td'>{producto.cantidad} unidades</td>
                                <td className='centro-td'>${producto.precio * producto.cantidad}</td>
                                <td className='centro-td'>
                                    <button className='btn-eliminar' onClick={() => setProductosSeleccionados(
                                        productosSeleccionados.filter((_, i) => i !== index)
                                    )}><FaTrashAlt /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="metodo-pago">
                    <label>Método de Pago:</label>
                    <select value={metodoPago} onChange={(e) => setMetodoPago(e.target.value)}>
                        <option value="">Seleccionar</option>
                        <option value="efectivo">Efectivo</option>
                        <option value="transferencia">Transferencia</option>
                        <option value="tarjeta">Tarjeta</option>
                        <option value="credito">Credito</option>
                    </select>
                </div>
                {metodoPago === 'efectivo' && (
                    <div className="monto-recibido">
                        <label>Monto Recibido:</label>
                        <input
                            type="number"
                            placeholder='$'
                            value={montoRecibido}
                            onChange={(e) => setMontoRecibido(e.target.value)}
                        />
                    </div>
                )}
                {metodoPago === 'transferencia' && (
                    <div className="clabe">
                        <label>CLABE INTERBANCARIA:</label>
                        <span>2345345ERFG</span>
                    </div>
                )}
                {metodoPago === 'credito' && (
                    <table className="detalles-tarjeta">
                        <tbody>
                            <tr>
                                <td><label>Cliente:</label></td>
                                <td>
                                    <input className='tarjeta-input'
                                        type="text"
                                        name="nombreCliente"
                                        placeholder="Nombre Cliente"
                                        value={tarjetaInfo.nombreCliente}
                                        onChange={handleTarjetaInfoChange}
                                    />
                                </td>
                            </tr>
                           
                            <tr>
                                <td><label>Anticipo mínimo:</label></td>
                                <td>
                                <span>
                                <label>75% del Total: </label>
                                ${productosSeleccionados.reduce((total, producto) => (total + producto.precio * producto.cantidad), 0)}
                                <label> = </label>
                                ${productosSeleccionados.reduce((total, producto) => (total + producto.precio * producto.cantidad)*0.75, 0)}
                              </span>

                              <span></span>
                                </td>
                            </tr>
                            <tr>
                                <td><label>Plazo acordado:</label></td>
                                <td>
                                    <input type = "number" className='cantidad-input-meses'
                                        name="plazo"
                                        placeholder="0"
                                        value={tarjetaInfo.plazo}
                                        onChange={handleTarjetaInfoChange}
                                    />
                                    <span> meses</span>
                                </td>
                            </tr>
                            <tr>
                                <td><label>Anticipo recibido:</label></td>
                                <td>
                                    <input className='tarjeta-input'
                                        type="text"
                                        name="anticipo"
                                        placeholder="$"
                                        value={tarjetaInfo.anticipo}
                                        onChange={handleTarjetaInfoChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )}
                {metodoPago === 'tarjeta' && (
                    <table className="detalles-tarjeta">
                        <tbody>
                            <tr>
                                <td><label>Número de Tarjeta:</label></td>
                                <td>
                                    <input className='tarjeta-input'
                                        type="text"
                                        name="numero"
                                        placeholder="Número de Tarjeta"
                                        value={tarjetaInfo.numero}
                                        onChange={handleTarjetaInfoChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>Fecha de Vencimiento:</label></td>
                                <td>
                                    <input className='tarjeta-input'
                                        type="text"
                                        name="vencimiento"
                                        placeholder="MM/AA"
                                        value={tarjetaInfo.vencimiento}
                                        onChange={handleTarjetaInfoChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>CVV:</label></td>
                                <td>
                                    <input className='tarjeta-input'
                                        type="text"
                                        name="cvv"
                                        placeholder="CVV"
                                        value={tarjetaInfo.cvv}
                                        onChange={handleTarjetaInfoChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>Nombre del Titular:</label></td>
                                <td>
                                    <input className='tarjeta-input'
                                        type="text"
                                        name="nombre"
                                        placeholder="Nombre del Titular"
                                        value={tarjetaInfo.nombre}
                                        onChange={handleTarjetaInfoChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )}
                <div className="precio-total">
                    <label>Total A Pagar:</label>
                    
                    <span>
                            ${productosSeleccionados.reduce((total, producto) => (total + producto.precio * producto.cantidad), 0)}
                    </span>
                </div>
                <div className="botones">
                    <button className="confirmar-venta" onClick={realizarVenta}><MdOutlinePointOfSale/></button>
                    <button className="cancelar-venta" onClick={cancelarVenta}><TbBasketCancel /></button>
                </div>
            </div>
        </div>
    );
};

export default RealizarVenta;
