import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaShop, FaCoins, FaPeopleGroup } from "react-icons/fa6";
import { IoExit } from "react-icons/io5";
import { FaMoneyCheck, FaShoppingCart } from "react-icons/fa";
import "../Estilos/Inicio.css";

const Inicio = () => {
    const savedEmpleado = JSON.parse(localStorage.getItem('empleado'));
    if(savedEmpleado.IDSucursal){
        return (
            <div id="Div">
                <div className="titulo">
                    <div><h1 className="Inicio">Inicio</h1></div>
                    <div className="Resumen">
                        <h2 className="ResumenEncabezado">Resumen</h2>
                        <div className="Total-Productos" onClick={() => window.location.href = "./VerProducto"}>Total prod.</div>
                        <div className="Total-Proveedores" onClick={() => window.location.href = "./VerVentas"}>Total ventas</div>
                        <div className="Total-Compras" onClick={() => window.location.href = "./VerProducto"}>Añadir prod.</div>
                    </div>
    
    
                    <div className="Opciones">
                        <h2 className="OpcionesEncabezado">Opciones</h2>
                        <div className="Productos" onClick={() => window.location.href = "./AnadirProductoSucursal"}><FaShop style={{ fontSize: '100px' }} />Producto</div>
                        <div className="Clientes" onClick={() => window.location.href = "./VerClientes"}><FaPeopleGroup style={{ fontSize: '100px' }} />Clientes</div>
                        <div className="Ventas" onClick={() => window.location.href = "./RealizarVenta"}><FaCoins style={{ fontSize: '100px' }} />Ventas</div>
                        <div className="Salir"><IoExit style={{ fontSize: '100px' }} />Salir</div>
                    </div>
                </div>
            </div>
        );
    }

    if(savedEmpleado.IDCEDI){
        return(
            <div id = "Div">
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
                        <div className="Cotizar" onClick={() => window.location.href = "./Cotizar"}><FaMoneyCheck style={{ fontSize: '100px' }} />Cotizar</div>
                        <div className="Compras" onClick={() => window.location.href = "./HistorialCompras"}><FaShoppingCart style={{ fontSize: '100px' }} />Compras</div>
                        <div className="Salir"><IoExit style={{ fontSize: '100px' }} />Salir</div>
                    </div>
                </div>
            </div>
        );
    }
}
    


export default Inicio;