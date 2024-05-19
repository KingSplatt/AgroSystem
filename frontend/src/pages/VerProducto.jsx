import React, {useState, useEffect} from "react";
import { FaExchangeAlt, FaPlus } from "react-icons/fa";

import "../App.css";
import "../Estilos/Productos.css";

const VerProducto = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetchProductos(); // Llamamos a una función para cargar los productos
    }, []);

    const fetchProductos = async () => {

        try {
            const response = await fetch('https://tu-api.com/productos');
            const data = await response.json();
            setProductos(data);
        }
        catch (error) {
            alert('Error al obtener los productos:', error);
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
                        <button className="Add"> <FaPlus/> Añadir producto </button>
                        <button className="Modify"><FaExchangeAlt /> Modificar producto</button>
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
                                <th>Stock</th>
                                <th>Descontinuado</th>
                                <th>Categoria</th>
                                <th>Proveedor</th>
                            </tr>
                        </thead>

                        <tbody>
                            {productos.map((producto, index) => (
                                <tr key={index}>
                                    <td>{producto.clave}</td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.descripcion}</td>
                                    <td>{producto.precio}</td>
                                    <td>{producto.stock}</td>
                                    <td>{producto.descontinuado}</td>
                                    <td>{producto.categoria}</td>
                                    <td>{producto.proveedor}</td>
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