import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { MdOutlinePointOfSale } from "react-icons/md";
import { TbBasketCancel } from "react-icons/tb";
import '../Estilos/RealizarVenta.css';

const URI = "http://localhost:8080/productosSucursal";

const RealizarVenta = () => {
    const [productos, setProductos] = useState([]);
    let clienteVar;
    const [cliente, setCliente] = useState('');
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

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetchProductos();
        fetchClientes();
    }, []);

    const fetchClientes = async () => {
        try {
            const responseP = await fetch("http://localhost:8080/clientes");
            const Clientes = await responseP.json();
            const rowsP = Clientes.rows;
            if (Array.isArray(rowsP)) {
                setClientes(rowsP);
            }
            console.log("Clientes:", rowsP);
        } catch (error) {
            alert("Error al obtener los Clientes:", error);
        }
    };

    const handleClienteChange = (e) => {
        setCliente(e.target.value);
    }

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
            [producto.IDProducto]: parseInt(value)
        }));
    };

    const agregarProducto = (producto) => {
        const productoCantidad = cantidad[producto.IDProducto];
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
                p.IDProducto === producto.IDProducto
                    ? { ...p, Stock: p.Stock - productoCantidad }
                    : p
            )
        );

        setProductosSeleccionados(prevSeleccionados => {
            const productoExistenteIndex = prevSeleccionados.findIndex(p => p.IDProducto === producto.IDProducto);
            if (productoExistenteIndex !== -1) {
                const updatedProductosSeleccionados = [...prevSeleccionados];
                console.log(productoCantidad);
                updatedProductosSeleccionados[productoExistenteIndex].cantidad += productoCantidad / 2;
                return updatedProductosSeleccionados;
            } else {
                return [...prevSeleccionados, { ...producto, cantidad: productoCantidad }];
            }
        });

        setCantidad(prevCantidad => ({
            ...prevCantidad,
            [producto.IDProducto]: 0
        }));
    };

    const eliminarProducto = (index) => {
        const productoAEliminar = productosSeleccionados[index];
        setProductos(prevProductos =>
            prevProductos.map(p =>
                p.IDProducto === productoAEliminar.IDProducto
                    ? { ...p, Stock: p.Stock + productoAEliminar.cantidad }
                    : p
            )
        );
        setProductosSeleccionados(productosSeleccionados.filter((_, i) => i !== index));
    };

    const realizarVenta = () => {
        const FechaPedido = new Date();
        let Subtotal = 0;
        let Total = 0;
        const credito = metodoPago === 'credito' ? 1 : 0;
        const IDCliente = parseInt(cliente);
        const IDEmpleado = saveEmpleado.IDEmpleado;





        for (let i = 0; i < productosSeleccionados.length; i++) {
            const producto = productosSeleccionados[i];
            console.log(producto);
            Subtotal += producto.PrecioUnitario * producto.cantidad;
            Total += Subtotal * 1.16;
        }

        if (credito === 1) {
            const body = { productos: productosSeleccionados, IDEmpleado: IDEmpleado, IDCliente: IDCliente, ...tarjetaInfo };
            console.log("Realizando Venta a Crédito:", JSON.stringify(body));
            fetch("http://localhost:8080/ventasC", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        } else {
            const body = { productos: productosSeleccionados, IDEmpleado: IDEmpleado, IDCliente: IDCliente };
            const ddmmaa = new Date().toLocaleDateString();
            console.log(ddmmaa);
            console.log("Realizando Venta Normal:", JSON.stringify(body));
            fetch("http://localhost:8080/ventasN", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
        alert('Venta realizada con éxito');
        /* setProductosSeleccionados([]);
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
         fetchProductos();*/ // Refetch products to reset the stock
    };

    const cancelarVenta = () => {
        productosSeleccionados.forEach(producto => {
            setProductos(prevProductos =>
                prevProductos.map(p =>
                    p.IDProducto === producto.IDProducto
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
        (producto.Nombre?.toLowerCase().includes(busqueda.toLowerCase()) || producto.IDProducto?.toString().includes(busqueda))
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
                            <tr key={producto.IDProducto}>
                                <td className='centro-td'>{producto.Nombre}</td>
                                <td className='centro-td'>{producto.IDProducto}</td>
                                <td className='centro-td'>${producto.PrecioUnitario}</td>
                                <td className='centro-td'>{producto.Stock}</td>
                                <td className='centro-td'>
                                    <input
                                        type="number"
                                        min="1"
                                        placeholder="Cantidad"
                                        value={cantidad[producto.IDProducto] || ''}
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
                <div className='clientesSelect'>
                    <label>Cliente:</label>
                    <select value={cliente} onChange={handleClienteChange}>
                        <option value="">Seleccionar</option>
                        {clientes
                            ? clientes.map((cliente, index) => (
                                <option key={index} value={cliente.IDCliente}>
                                    {cliente.Nombre}
                                </option>
                            ))
                            : ""}
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