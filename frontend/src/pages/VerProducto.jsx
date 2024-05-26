import React, { useEffect, useState } from "react";
import { FaExchangeAlt, FaPlus } from "react-icons/fa";
import "../Estilos/Productos.css";

const URI = "http://localhost:8080/productosSucursal";

const VerProducto = () => {
    const [productos, setProductos] = useState([]);
    const [empleado, setEmpleado] = useState(null);

    useEffect(() => {
        const savedEmpleado = localStorage.getItem('empleado');
        if (savedEmpleado) {
            setEmpleado(JSON.parse(savedEmpleado));
        }
        console.log("Empleado (inicial):", savedEmpleado);
    }, []);

    useEffect(() => {
        if (empleado) {
            console.log("Empleado:", empleado);
            fetchProductos();
        }
    }, [empleado]);

    const fetchProductos = async () => {
        if (!empleado) return; // Verificación adicional
        console.log("Empleado (fetchProductos):", empleado.IDSucursal);
        try {
            const response = await fetch(`http://localhost:8080/productosSucursal/${empleado.IDSucursal}`);
            const data = await response.json();
            const rows = data.rows;

            console.log("Data:", data.rows);

            // Asegúrate de que `data` es un array
            if (Array.isArray(rows)) {
                setProductos(rows);
            } else {
                console.error("La respuesta no es un array", data);
                alert("Error al obtener los productos: la respuesta no es un array");
            }
        } catch (error) {
            console.error("Error al obtener los productos:", error);
            alert("Error al obtener los productos:", error);
        }
    };

    const [buscar, setBuscar] = useState("");

    const handleBuscar = (e) => {
        setBuscar(e.target.value);
    }

    const BusquedaProductos = productos.filter((producto) => (
        producto.IDproducto?.toString().toLowerCase().includes(buscar.toLowerCase()) || 
        producto.Nombre.toLowerCase()?.includes(buscar.toLowerCase()) || 
        producto.ProveedorN.toLowerCase()?.includes(buscar.toLowerCase())
    ));

    return (
        <div className="todoProd">
            <div className="containerVP">
                <h2>Productos</h2>
                {empleado && (
                    <>
                        <h3>Sucursal {empleado.IDSucursal}</h3>
                        <div>
                            <p>Empleado: {empleado.Nombre} </p>                       
                            <p>Puesto: {empleado.Puesto}</p>
                        </div>
                    </>
                )}
                <div className="barraSuperior">
                    <input type="search" placeholder="Buscar producto" onChange={handleBuscar} value={buscar} />
                    <div className="OpcionesP">
                        <button className="Add" onClick={() => window.location.href = "./AnadirProductos"}><FaPlus /> Añadir producto</button>
                        <button className="Modify" onClick={() => window.location.href = "./ModificarProducto"}><FaExchangeAlt /> Modificar producto</button>
                    </div>
                </div>
                <div className="tabla">
                    <table>
                        <thead>
                            <tr>
                                <th>Clave</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Precio unitario</th>
                                <th>Existencia</th>
                                <th>Descontinuado</th>
                                <th>Proveedor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {BusquedaProductos.map((producto, index) => (
                                <tr key={index}>
                                    <td>{producto.IDproducto}</td>
                                    <td>{producto.Nombre}</td>
                                    <td>{producto.Descripcion}</td>
                                    <td>{producto.PrecioUnitario}</td>
                                    <td>{producto.Stock}</td>
                                    <td>{producto.Descontinuado ? "Sí" : "No"}</td>
                                    <td>{producto.ProveedorN}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VerProducto;