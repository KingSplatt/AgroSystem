import React, { useEffect, useState, useRef } from "react";
import { FaPlus, FaRegSave, FaRegTimesCircle, FaTrash } from "react-icons/fa";
import '../Estilos/IngresarProductos.css';

const URI_Sucursales = "http://localhost:8080/sucursales";

const AnadirProductoSucursal = () => {
  const [empleado, setEmpleado] = useState(null);
  const [productos, setProductos] = useState([]);
  const [filas, setFilas] = useState([
    { IDFila: 1, IDProducto: "", Cantidad: "", FechaSurtido: "", FechaCaducidad:"" }
  ]);

  const filaActualRef = useRef(null);

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
      fetchSucursales();
    }
  }, [empleado]);

  const fetchSucursales = async () => {
    if (!empleado) return;
    const IDSucursal = empleado.IDSucursal;

    console.log("IDSucursal:", IDSucursal);
    try {
      const response = await fetch(`http://localhost:8080/sucursales/${IDSucursal}`);
      if (!response.ok) {
        console.error('Sucursal no encontrada');
        return;
      }
      const data = await response.json();
      console.log("Sucursal:", data);
      const IDCEDI = data.rows[0].IDCedi;
      console.log("IDCEDI:", IDCEDI);
      const responseProductosCEDI = await fetch(`http://localhost:8080/productosCEDI/${IDCEDI}`);
      if (!responseProductosCEDI.ok) {
        console.error('Productos no encontrados');
        return;
      }
      const dataProductosCEDI = await responseProductosCEDI.json();
      console.log("Productos CEDI:", dataProductosCEDI.rows[0]);
      setProductos(dataProductosCEDI.rows[0]);
    } catch (error) {
      console.error("Error al buscar sucursales:", error);
    }
  };

  const agregarFila = () => {
    const nuevaFila = { IDFila: Date.now(), IDProducto: "", Cantidad: "", FechaSurtido: "", FechaCaducidad:"" };
    setFilas([...filas, nuevaFila]);
  };

  const eliminarFila = (IDFila) => {
    setFilas(filas.filter(fila => fila.IDFila !== IDFila));
  };

  const manejarCambioInput = (IDFila, campo, valor) => {
    console.log("IDFila:", IDFila, "campo:", campo, "valor:", valor);
    const filasActualizadas = filas.map(fila =>
      fila.IDFila === IDFila ? { ...fila, [campo]: valor } : fila
    );
    setFilas(filasActualizadas);
    filaActualRef.current = { IDFila, campo, valor };
  };

  const Cancelar = () => {
    setFilas([{ IDFila: 1, IDProducto: "", Cantidad: "", FechaSurtido: "", FechaCaducidad:"" }]);
  };

  const Guardar = () => {
    const allfields = filas.every(fila => fila.IDProducto && fila.Cantidad && fila.FechaSurtido);
    if (!allfields) {
      alert("Por favor, complete todos los campos.");
      return;
    }


    filas.forEach(fila => {
      const cantidad = parseInt(fila.Cantidad);
      const IDProducton = parseInt(fila.IDProducto);
      const IDSucursal = empleado.IDSucursal;
      const valorFechaSurtido = fila.FechaSurtido;
      const valorFechaCaducidad = fila.FechaCaducidad;
      const body = {IDProducto: IDProducton, IDSucursal: IDSucursal,FechaCaducidad:valorFechaCaducidad,FechaSurtido: valorFechaSurtido};

      
      console.log("Guardando Producto en Sucursal:", body);

      for (let i = 0; i < cantidad; i++) {
        fetch("http://localhost:8080/productosSucursal", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error("Error ingresando productos a cedis:", error);
          });
      }
    });
    setFilas([{ IDFila: 1, IDProducto: "", Cantidad: "", FechaSurtido: "", FechaCaducidad:"" }]);

    alert("Productos guardados correctamente");
  };

  return (
    <div className='IngresarProductos'>
      <h2>Ingresar Productos en Sucursal</h2>
      <div className='Cuadro'>
        <div className='AddTabla'>
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Fecha Surtido</th>
                <th>Fecha Caducidad</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {filas.map(fila => (
                <tr key={fila.IDFila}>
                  <td>
                    <select onChange={(e) => manejarCambioInput(fila.IDFila, 'IDProducto', e.target.value)} value={fila.IDProducto}>
                      <option value="">Seleccionar</option>
                      {productos.map((producto, index) => (
                        <option key={index} value={producto.IDProducto}>
                          {producto.Nombre}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      value={fila.Cantidad}
                      onChange={(e) => manejarCambioInput(fila.IDFila, 'Cantidad', e.target.value)}
                    />
                  </td>
                  <td>
                    <input type="date" value={fila.FechaSurtido} onChange={(e) => manejarCambioInput(fila.IDFila, 'FechaSurtido', e.target.value)} />
                  </td>
                  <td>
                    <input type="date" value={fila.FechaCaducidad} onChange={(e) => manejarCambioInput(fila.IDFila, 'FechaCaducidad', e.target.value)} />
                  </td>
                  <td>
                    <button onClick={() => eliminarFila(fila.IDFila)}><FaTrash /></button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>
                  <button className="Add" onClick={agregarFila}><FaPlus /> Añadir compra</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="CyG">
        <button className="Cancel" onClick={Cancelar}><FaRegTimesCircle /> Cancelar</button>
        <button className="Save" onClick={Guardar}><FaRegSave /> Guardar</button>
      </div>
    </div>
  );
};

export default AnadirProductoSucursal;