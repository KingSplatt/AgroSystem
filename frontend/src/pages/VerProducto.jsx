import React, { useEffect, useState } from "react";
import { FaExchangeAlt, FaPlus } from "react-icons/fa";
import "../App.css";
import "../Estilos/Productos.css";

const URI = "http://localhost:8080/productos";

const VerProducto = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetchProductos();
        // Llamamos a una función para cargar los productos
    }, []);

    const fetchProductos = async () => {
        try {
            const response = await fetch(URI);
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

    return (
        <div>
            <div className="containerVP">
                <h2>Productos</h2>
                <div className="barraSuperior">
                    <input type="search" placeholder="Buscar producto" />
                    <button className="Busqueda">Buscar</button>
                    <div className="OpcionesP">
                        <button className="Add" onClick={() => window.location.href = "./AnadirProductos"} ><FaPlus /> Añadir producto</button>
                        <button className="Modify" onClick={() => window.location.href = "./ModificarProducto"} ><FaExchangeAlt /> Modificar producto</button>
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
                            {productos.map((producto, index) => (
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
