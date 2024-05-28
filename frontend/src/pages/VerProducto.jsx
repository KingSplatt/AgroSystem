import React, { useEffect, useState } from "react";
import { FaExchangeAlt, FaPlus } from "react-icons/fa";
import "../Estilos/Productos.css";

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
        let url = '';
        if (empleado.IDSucursal) {
            url = `http://localhost:8080/productosSucursal/${empleado.IDSucursal}`;
            console.log("Fetching productos from sucursal:", empleado.IDSucursal);
        } else if (empleado.IDCEDI) {
            url = `http://localhost:8080/productosCEDI/${empleado.IDCEDI}`;
            console.log("Fetching productos from CEDI:", empleado.IDCEDI);
        } else {
            console.error("Empleado no tiene ni IDSucursal ni IDCEDI");
            return;
        }

        try {
            const response = await fetch(url);
            const data = await response.json();
            let rows = data.rows;
            if (empleado.IDCEDI) {
                rows = rows[0];
            }
            console.log("Data:", rows);
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

    const BusquedaProductos = productos.filter((productos) => (
        productos.IDProducto?.toString().toLowerCase().includes(buscar.toLowerCase()) ||
        productos.Nombre.toLowerCase()?.includes(buscar.toLowerCase()) ||
        productos.NombreProveedor.toLowerCase()?.includes(buscar.toLowerCase())
    ));

    return (
        <div className="todoProd">
            <div className="containerVP">
                <h2>Productos</h2>
                {empleado && (
                    <>
                        <h3>{empleado.IDSucursal ? `Sucursal ${empleado.IDSucursal}` : `CEDI ${empleado.IDCEDI}`}</h3>
                        <div style={{ display: 'flex' }}>
                            <p><b>Empleado:</b> {empleado.Nombre}    </p>
                            <p style={{ paddingLeft: '20px' }}><b>Puesto:</b> {empleado.Puesto}</p>
                        </div>
                    </>
                )}
                <div className="barraSuperior">
                    <input type="search" placeholder="Buscar producto" onChange={handleBuscar} value={buscar} />
                    <div className="OpcionesP">
                        <button className="Add" onClick={() => window.location.href = "./AnadirProductos"}><FaPlus /> Añadir producto</button>
                        <button className="Modify" onClick={() => window.location.href = "./ModificarProductos"}><FaExchangeAlt /> Modificar producto</button>
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
                            {BusquedaProductos.map((productos, index) => (
                                <tr key={index}>
                                    <td>{productos.IDProducto}</td>
                                    <td>{productos.Nombre}</td>
                                    <td>{productos.Descripcion}</td>
                                    <td>{productos.PrecioUnitario}</td>
                                    <td>{productos.Stock}</td>
                                    <td>{productos.Descontinuado ? "Sí" : "No"}</td>
                                    <td>{productos.NombreProveedor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default VerProducto;