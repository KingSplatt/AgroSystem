import React from "react";
import { FaExchangeAlt, FaFileExport, FaPlus, FaPrint } from "react-icons/fa";
import "../App.css";
import "../Estilos/HistorialCompras.css"; //cambiar a la ruta correcta

const HistorialCompras = () => {

    const handlePrint = (proveedor) => {
        // logica para imprimir

        alert("Imprimiendo detalles de proveedor")
    
    };


    const handleExport = (proveedor) => {
        //logica para exportar
   
        alert("Exportando detalles de proveedor")
    };

    // Datos de ejemplo de proveedores
    const proveedores = [
        { clave: '1234567890', fechaPedido: '2024-05-15', fechaRecibido: '2024-05-16', nombre: 'Proveedor 1' },
        { clave: '123456jj7890', fechaPedido: '2024-05-15', fechaRecibido: '2024-05-16', nombre: 'Proveedor 1' },
        { clave: '12345ddd6jj7890', fechaPedido: '2024-05-15', fechaRecibido: '2024-05-16', nombre: 'Proveedor 1' },

    ];

    return (
        <div>
           

            <div className="containerVP">
                <h1>Historial de compras</h1>
                <div className="barraSuperior">
                    <input type="search" placeholder="Buscar proveedor"/> 
                    <button className="Busqueda"> Buscar </button>
                    <div className="OpcionesP">
                        <button className="Add"> <FaPlus/> Añadir proveedor </button>
                        <button className="Modify"><FaExchangeAlt /> Modificar proveedor</button>
                    </div>
                </div>

                <div className="tabla">
                    <table>
                        <thead>
                            <tr>
                                <th>Clave</th>
                                <th>Fecha de pedido</th>
                                <th>Fecha de recibido</th>
                                <th>Proveedor</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {proveedores.map((proveedor, index) => (
                                <tr key={index}>
                                    <td>{proveedor.clave}</td>
                                    <td>{proveedor.fechaPedido}</td>
                                    <td>{proveedor.fechaRecibido}</td>
                                    <td>{proveedor.nombre}</td>
                                    <td>
                                        {/* Botón de imprimir con icono */}
                                        <button onClick={() => handlePrint(proveedor.nombre)}><FaPrint /></button>
                                        {/* Botón de exportar con icono */}
                                        <button onClick={() => handleExport(proveedor.nombre)}><FaFileExport /></button>
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
