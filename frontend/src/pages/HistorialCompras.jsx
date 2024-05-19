import React from "react";
import { FaExchangeAlt, FaFileExport, FaPlus, FaPrint } from "react-icons/fa";
import "../App.css";
import "../Estilos/HistorialCompras.css"; //cambiar a la ruta correcta

const HistorialCompras = () => {

    const handlePrint = (compra) => {
        // logica para imprimir

        alert("Imprimiendo detalles de compra")
    
    };


    const handleExport = (compra) => {
        //logica para exportar
   
        alert("Exportando detalles de compra")
    };

    // Datos de ejemplo de compras
    const compras = [
        { clave: '1234567890', fechaPedido: '2024-05-15', fechaRecibido: '2024-05-16', nombre: 'compra 1' },
        { clave: '123456jj7890', fechaPedido: '2024-05-15', fechaRecibido: '2024-05-16', nombre: 'compra 1' },
        { clave: '12345ddd6jj7890', fechaPedido: '2024-05-15', fechaRecibido: '2024-05-16', nombre: 'compra 1' },

    ];

    return (
        <div>
           

            <div className="containerVP">
                <h2>Historial de compras</h2>
                <div className="barraSuperior">
                    <input type="search" placeholder="Buscar compra"/> 
                    <button className="Busqueda"> Buscar </button>
                    <div className="OpcionesP">
                        <button className="Add"> <FaPlus/> Añadir compra </button>
                        <button className="Modify"><FaExchangeAlt /> Modificar compra</button>
                    </div>
                </div>

                <div className="tabla">
                    <table>
                        <thead>
                            <tr>
                                <th>Clave</th>
                                <th>Fecha de pedido</th>
                                <th>Fecha de recibido</th>
                                <th>compra</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {compras.map((compra, index) => (
                                <tr key={index}>
                                    <td>{compra.clave}</td>
                                    <td>{compra.fechaPedido}</td>
                                    <td>{compra.fechaRecibido}</td>
                                    <td>{compra.nombre}</td>
                                    <td>
                                        {/* Botón de imprimir con icono */}
                                        <button onClick={() => handlePrint(compra.nombre)}><FaPrint /></button>
                                        {/* Botón de exportar con icono */}
                                        <button onClick={() => handleExport(compra.nombre)}><FaFileExport /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HistorialCompras;
