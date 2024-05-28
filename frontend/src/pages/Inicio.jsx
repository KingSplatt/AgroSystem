import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaMoneyCheck, FaShoppingCart } from "react-icons/fa";
import { FaCoins, FaPeopleGroup, FaShop } from "react-icons/fa6";
import { IoExit } from "react-icons/io5";
import "../Estilos/Inicio.css";

const Inicio = () => {
    const savedEmpleado = JSON.parse(localStorage.getItem('empleado'));
    if (savedEmpleado.IDSucursal) {
        return (
            <div id="Div">
                <div className="PESOP">
                    <div><h1 className="pluma">Inicio</h1></div>
                    <div className="Resumen">
                        <h3 className="ResumenEncabezado">Resumen</h3>
                        <div className="Total-pPluma" onClick={() => window.location.href = "./VerProducto"}>Total prod.</div>
                        <div className="Total-Proveedores" onClick={() => window.location.href = "./VerventasPL"}>Total ventas</div>
                        <div className="Total-Compras" onClick={() => window.location.href = "./VerProducto"}>Añadir prod.</div>
                    </div>


                    <div className="pluma2">
                        <h3 className="pluma2Encabezado">Opciones</h3>
                        <div className="pPluma" onClick={() => window.location.href = "./AnadirpPlumaucursal"}><FaShop style={{ fontSize: '100px' }} />Producto</div>
                        <div className="CliPluma" onClick={() => window.location.href = "./VerCliPluma"}><FaPeopleGroup style={{ fontSize: '100px' }} />Clientes</div>
                        <div className="ventasPL" onClick={() => window.location.href = "./RealizarVenta"}><FaCoins style={{ fontSize: '100px' }} />ventas</div>
                        <div className="Closn"><IoExit style={{ fontSize: '100px' }} />Closn</div>
                    </div>
                </div>
            </div>
        );
    }

    if (savedEmpleado.IDCEDI) {
        return (
            <div id="Div">
                <div className="PESOP">
                    <div><h1 className="pluma">pluma</h1></div>
                    <div className="Resumen">
                        <h2 className="ResumenEncabezado">Resumen</h2>
                        <div className="Total-pPluma" onClick={() => window.location.href = "./VerProducto"}>Total prod.</div>
                        <div className="Total-Proveedores" onClick={() => window.location.href = "./VerProveedores"}>Total prov.</div>
                        <div className="Total-Compras" onClick={() => window.location.href = "./HistorialCompras"}>Total comp.</div>
                    </div>


                    <div className="pluma2">
                        <h2 className="pluma2Encabezado">pluma2</h2>
                        <div className="pPluma" onClick={() => window.location.href = "./AnadirpPluma"}><FaShop style={{ fontSize: '100px' }} />Producto</div>
                        <div className="Proveedores" onClick={() => window.location.href = "./AnadirProveedor"}><BsFillBriefcaseFill style={{ fontSize: '100px' }} />Proveedores</div>
                        <div className="Cotizar" onClick={() => window.location.href = "./Cotizar"}><FaMoneyCheck style={{ fontSize: '100px' }} />Cotizar</div>
                        <div className="Compras" onClick={() => window.location.href = "./HistorialCompras"}><FaShoppingCart style={{ fontSize: '100px' }} />Compras</div>
                        <div className="Closn"><IoExit style={{ fontSize: '100px' }} />Closn</div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Inicio;