import React from "react";
import { FaExchangeAlt, FaPlus } from "react-icons/fa";
import "../App.css";
import "../Estilos/Productos.css";

const VerProducto = () => {
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
                                <th>Categoria ?</th>
                                <th>Stock</th>
                                <th>Precio</th>
                                <th>Estado</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>167382</td>
                                <td>Producto 1</td>
                                <td>fungicidas</td>
                                <td>56</td>
                                <td>789</td>
                                <td>Activo</td>
                            </tr>
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    );
};

export default VerProducto;