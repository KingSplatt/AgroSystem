import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaShop, FaCoins } from "react-icons/fa6";
import { IoExit } from "react-icons/io5";
import "../Estilos/Inicio.css";
import logo from '../Images/3.jpg';

const Inicio = () => {
    return (
        <div>
            <div className="titulo">
                <div><h1 className="Inicio">Inicio</h1></div>
                <div className="Resumen">
                    <h2 className="ResumenEncabezado">Resumen</h2>
                    <div className="Total-Productos" onClick={() => window.location.href = "./VerProducto"}>Total prod.</div>
                    <div className="Total-Proveedores" onClick={() => window.location.href = "./VerProveedores"}>Total prov.</div>
                    <div className="Total-Compras" onClick={() => window.location.href = "./HistorialCompras"}>Total comp.</div>
                </div>


                <div className="Opciones">
                    <h2 className="OpcionesEncabezado">Opciones</h2>
                    <div className="Productos" onClick={() => window.location.href = "./AnadirProductos"}><FaShop style={{ fontSize: '100px' }} />Producto</div>
                    <div className="Proveedores" onClick={() => window.location.href = "./AnadirProveedor"}><BsFillBriefcaseFill style={{ fontSize: '100px' }} />Proveedores</div>
                    <div className="Compras" onClick={() => window.location.href = "./IngresarProductos"}><MdOutlineShoppingCart style={{ fontSize: '100px' }} />Compras</div>
                    <div className="Ventas" onClick={() => window.location.href = "./RealizarVenta"}><FaCoins style={{ fontSize: '100px' }} />Ventas</div>
                    <div className="Salir"><IoExit style={{ fontSize: '100px' }} />Salir</div>
                </div>
            </div>
        </div>
    );
};

export default Inicio;