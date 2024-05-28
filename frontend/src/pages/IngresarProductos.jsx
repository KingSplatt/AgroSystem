import React, { useEffect, useRef, useState } from "react";
import { FaPlus, FaRegSave, FaRegTimesCircle, FaTrash } from "react-icons/fa";
import '../Estilos/IngresarProductos.css';
const URI_Proveedores = "http://localhost:8080/proveedores";
const URI_Productos = "http://localhost:8080/productos";
const URI_compra = "http://localhost:8080/compras";

const IngresarProductos = () => {
  const [Proveedores, setProveedores] = useState([]);
  const [empleado, setEmpleado] = useState(null);
  const [productos, setProductos] = useState([]);
  const [filas, setFilas] = useState([
    { IDFila: 1, IDProveedor: "", IDProducto: "", Cantidad: "", FechaSurtido: "", FechaCaducidad: "" }
  ]);
  const [productosFiltrados, setProductosFiltrados] = useState({});

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
      fetchProveedores();
      fetchProductos();
    }
  }, [empleado]);

  const fetchProveedores = async () => {
    if (!empleado) return;
    try {
      const responseP = await fetch(URI_Proveedores);
      const Proveedores = await responseP.json();
      const rowsP = Proveedores.rows;
      if (Array.isArray(rowsP)) {
        setProveedores(rowsP);
      }
      console.log("Proveedores:", rowsP);
    } catch (error) {
      alert("Error al obtener los proveedores:", error);
    }
  };

  const fetchProductos = async () => {
    if (!empleado) return;
    try {
      const responseP = await fetch(URI_Productos);
      const Productos = await responseP.json();
      let rowsP = Productos.rows;
      rowsP = rowsP[0];
      if (Array.isArray(rowsP)) {
        setProductos(rowsP);
      }
      console.log("Productos:", rowsP);
    } catch (error) {
      alert("Error al obtener los productos:", error);
    }
  };

  const agregarFila = () => {
    const nuevaFila = { IDFila: Date.now(), IDProveedor: "", IDProducto: "", Cantidad: "", FechaSurtido: "", FechaCaducidad: "" };
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

  useEffect(() => {
    if (filaActualRef.current) {
      const { IDFila, campo, valor } = filaActualRef.current;
      const filaActual = filas.find(fila => fila.IDFila === IDFila);
      if (filaActual) {
        const IDProveedorActual = parseInt(filaActual.IDProveedor);
        console.log("IDProveedorActual (useEffect):", IDProveedorActual);
        const productosDelProveedor = productos.filter(producto => producto.IDProveedor === IDProveedorActual);
        console.log(productosDelProveedor);
        setProductosFiltrados(prev => ({ ...prev, [IDFila]: productosDelProveedor }));


      }
    }
  }, [filas]);

  const Cancelar = () => {
    setProductosFiltrados({});
    setFilas([{ IDFila: 1, IDProveedor: "", IDProducto: "", Cantidad: "", FechaSurtido: "", FechaCaducidad: "" }]);
  };

  const Guardar = async () => {
    const allFieldsComplete = filas.every(fila => fila.IDProveedor && fila.IDProducto && fila.Cantidad && fila.FechaSurtido && fila.FechaCaducidad);
    if (!allFieldsComplete) {
      alert("Porfavor llene todos los campos");
      return;
    }

    try {
      // Rest of the code for saving the products...
      filas.map(fila => {
        const cantidad = parseInt(fila.Cantidad);
        const IDProducto = parseInt(fila.IDProducto);
        const IDCedi = empleado.IDCEDI;
        const valorFechaSurtido = fila.FechaSurtido;
        const valorFechaCaducidad = fila.FechaCaducidad;
        const body = { valorFechaSurtido: valorFechaSurtido, valorFechaCaducidad: valorFechaCaducidad, IDProducto: IDProducto, IDCedi: IDCedi };
        console.log("Guardando Producto en CEDI:", body);
        for (let i = 0; i < cantidad; i++) {
          console.log(i + 1);
          fetch("http://localhost:8080/productosCEDI", {
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
              console.error("Error:", error);
            });
        }
      });

      const compras = {
        productos: filas,
        i: empleado.IDCEDI,
        r: empleado.IDEmpleado
      };
      console.log("Estos son los datos de compras:", compras);

      // Enviar la solicitud de compras
      const response = await fetch(URI_compra, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(compras)
      });

      if (response.ok) {
        alert("Compra enviada correctamente");
        console.log("Respuesta:", await response.json());
      } else {
        console.error("Error al enviar la compra");
        alert("Error al enviar la compra");
      }
    } catch (error) {
      console.error("Error al enviar la compra", error);
      alert("Error al enviar la compra");
    }

  };

  return (
    <div className='IngresarProductos'>
      <h2>Ingresar Productos</h2>
      <div className='Cuadro'>
        <div className='AddTabla'>
          <table>
            <thead>
              <tr>
                <th>Proveedor</th>
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
                    <select onChange={(e) => manejarCambioInput(fila.IDFila, 'IDProveedor', e.target.value)} value={fila.IDProveedor}>
                      <option>Seleccionar: </option>
                      {Proveedores
                        ? Proveedores.map((proveedor, index) => (
                          <option key={index} value={proveedor.IDProveedor}>
                            {proveedor.Nombre}
                          </option>
                        ))
                        : ""}
                    </select>
                  </td>
                  <td>
                    <select onChange={(e) => manejarCambioInput(fila.IDFila, 'IDProducto', e.target.value)} value={fila.IDProducto}>
                      <option value="">Seleccionar: </option>
                      {(productosFiltrados[fila.IDFila] || []).map((producto, index) => (
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
                    <input type="date" value={fila.FechaSurtido} onChange={(e) => manejarCambioInput(fila.IDFila, 'FechaSurtido', e.target.value)}>
                    </input>

                  </td>
                  <td>
                    <input type="date" value={fila.FechaCaducidad} onChange={(e) => manejarCambioInput(fila.IDFila, 'FechaCaducidad', e.target.value)}>
                    </input>
                  </td>
                  <td><button onClick={() => eliminarFila(fila.IDFila)}><FaTrash /></button></td>
                </tr>
              ))}
              <tr>
                <td colSpan="9" style={{ textAlign: 'center' }}>
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

export default IngresarProductos;