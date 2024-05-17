import React from "react";
import { FaExchangeAlt, FaPlus } from "react-icons/fa";
import "../App.css";
import "../Estilos/Proveedores.css";

const VerProveedores = () => {
    return (
        <div>
            <h1>Proveedores</h1>

            <div className="containerVP">

                <div className="barraSuperior">
                    <input type="search" placeholder="Buscar proveedor" />
                    <button className="Busqueda">Buscar</button>

                    <div className="OpcionesP">
                        <button className="Add"> <FaPlus/> Añadir proveedor </button>
                        <button className="Modify"><FaExchangeAlt /> Modificar proveedor</button>
                    </div>
                </div>

                <div className="tabla">

                    <table>

                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Telefono</th>
                                <th>Correo</th>
                                <th>Dirección</th>
                                <th>RFC</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Proveedor 1</td>
                                <td>1234567890</td>
                                <td>DHHS @gmail.com</td>
                                <td>Calle 123</td>
                                <td>ABC123456</td>
                                
                            </tr>
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    );
};

export default VerProveedores;