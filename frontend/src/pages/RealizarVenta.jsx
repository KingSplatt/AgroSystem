import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { MdOutlinePointOfSale } from "react-icons/md";
import { TbBasketCancel } from "react-icons/tb";
import '../Estilos/RealizarVenta.css';

const URI = "http://localhost:8080/productosSucursal";

const RealizarVenta = () => {
    const [productos, setProductos] = useState([]);
    const [productosSeleccionados, setProductosSeleccionados] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [metodoPago, setMetodoPago] = useState('');
    const [montoRecibido, setMontoRecibido] = useState('');
    const saveEmpleado = JSON.parse(localStorage.getItem("empleado"));
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
    const [cantidad, setCantidad] = useState({});

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = async () => {
        try {
            const response = await fetch(`${URI}/${saveEmpleado.IDSucursal}`);
            const data = await response.json();
            const rows = data.rows;

            if (Array.isArray(rows)) {
                setProductos(rows);
                console.log("DataS:", data.rows);
            } else {
                console.error("La respuesta no es un array", data);
                alert("Error al obtener los productos: la respuesta no es un array");
            }
        } catch (error) {
            console.error("Error al obtener los productos:", error);
            alert("Error al obtener los productos:", error);
        }
    };

    const handleBusqueda = (e) => {
        setBusqueda(e.target.value);
    };

    const handleCantidadChange = (producto, value) => {
        setCantidad(prevCantidad => ({
            ...prevCantidad,
            [producto.IDproducto]: parseInt(value)
        }));
    };

    const agregarProducto = (producto) => {
        const productoCantidad = cantidad[producto.IDproducto];
        if (!productoCantidad || productoCantidad <= 0) {
            alert('La cantidad debe ser mayor que 0.');
            return;
        }

        if (productoCantidad > producto.Stock) {
            alert('No se puede añadir más cantidad de la disponible.');
            return;
        }

        setProductos(prevProductos =>
            prevProductos.map(p =>
                p.IDproducto === producto.IDproducto
                    ? { ...p, Stock: p.Stock - productoCantidad }
                    : p
            )
        );

        setProductosSeleccionados(prevSeleccionados => {
            const productoExistenteIndex = prevSeleccionados.findIndex(p => p.IDproducto === producto.IDproducto);
            if (productoExistenteIndex !== -1) {
                const updatedProductosSeleccionados = [...prevSeleccionados];
                console.log(productoCantidad);
                updatedProductosSeleccionados[productoExistenteIndex].cantidad += productoCantidad/2;
                return updatedProductosSeleccionados;
            } else {
                return [...prevSeleccionados, { ...producto, cantidad: productoCantidad }];
            }
        });

        setCantidad(prevCantidad => ({
            ...prevCantidad,
            [producto.IDproducto]: 0
        }));
    };

    const eliminarProducto = (index) => {
        const productoAEliminar = productosSeleccionados[index];
        setProductos(prevProductos =>
            prevProductos.map(p =>
                p.IDproducto === productoAEliminar.IDproducto
                    ? { ...p, Stock: p.Stock + productoAEliminar.cantidad }
                    : p
            )
        );
        setProductosSeleccionados(productosSeleccionados.filter((_, i) => i !== index));
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
        setCantidad({});
        fetchProductos(); // Refetch products to reset the stock
    };

    const cancelarVenta = () => {
        productosSeleccionados.forEach(producto => {
            setProductos(prevProductos =>
                prevProductos.map(p =>
                    p.IDproducto === producto.IDproducto
                        ? { ...p, Stock: p.Stock + producto.cantidad }
                        : p
                )
            );
        });
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
        setCantidad({});
    };

    const handleTarjetaInfoChange = (e) => {
        const { name, value } = e.target;
        setTarjetaInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }));
    };

    const productosFiltrados = productos.filter(producto =>
        (producto.Nombre?.toLowerCase().includes(busqueda.toLowerCase()) || producto.IDproducto?.toString().includes(busqueda))
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
                            <tr key={producto.IDproducto}>
                                <td className='centro-td'>{producto.Nombre}</td>
                                <td className='centro-td'>{producto.IDproducto}</td>
                                <td className='centro-td'>${producto.PrecioUnitario}</td>
                                <td className='centro-td'>{producto.Stock}</td>
                                <td className='centro-td'>
                                    <input
                                        type="number"
                                        min="1"
                                        placeholder="Cantidad"
                                        value={cantidad[producto.IDproducto] || ''}
                                        onChange={(e) => handleCantidadChange(producto, e.target.value)}
                                        className="cantidad-input"
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
                                <td className='centro-td'>{producto.Nombre}</td>
                                <td className='centro-td'>{producto.cantidad} unidades</td>
                                <td className='centro-td'>${producto.PrecioUnitario * producto.cantidad}</td>
                                <td className='centro-td'>
                                    <button className='btn-eliminar' onClick={() => eliminarProducto(index)}><FaTrashAlt /></button>
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
                                        ${productosSeleccionados.reduce((total, producto) => (total + producto.PrecioUnitario * producto.cantidad) * 0.75, 0)}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td><label>Plazo acordado:</label></td>
                                <td>
                                    <input type="number" className='cantidad-input-meses'
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
                        ${productosSeleccionados.reduce((total, producto) => (total + producto.PrecioUnitario * producto.cantidad), 0)}
                    </span>
                </div>
                <div className="botones">
                    <button className="confirmar-venta" onClick={realizarVenta}><MdOutlinePointOfSale /></button>
                    <button className="cancelar-venta" onClick={cancelarVenta}><TbBasketCancel /></button>
                </div>
            </div>
        </div>
    );
};

export default RealizarVenta;