import React, { useEffect, useState } from "react";
import { FaRegSave, FaRegTimesCircle, FaTrash } from "react-icons/fa";

const ModificarProductos = () => {
  const [filas, setFilas] = useState([]);

  // Función para cargar los productos desde la base de datos (simulado)
  useEffect(() => {
    // Simulación de carga de productos desde la base de datos
    cargarProductos();
  }, []);

  const cargarProductos = () => {
    // Simulación de datos de productos desde la base de datos
    const productosDesdeBaseDeDatos = [
      { id: 1, articulo: "Producto 1", cantidad: 10, descripcion: "Descripción 1", precio: 100, proveedor: "Proveedor 1" },
      { id: 2, articulo: "Producto 2", cantidad: 5, descripcion: "Descripción 2", precio: 50, proveedor: "Proveedor 2" },
      { id: 3, articulo: "Producto 3", cantidad: 8, descripcion: "Descripción 3", precio: 80, proveedor: "Proveedor 3" }
    ];
    setFilas(productosDesdeBaseDeDatos);
  };

  const eliminarFila = (id) => {
    setFilas(filas.filter(fila => fila.id !== id));
  };

  const manejarCambioInput = (id, campo, valor) => {
    const filasActualizadas = filas.map(fila =>
      fila.id === id ? { ...fila, [campo]: valor } : fila
    );
    setFilas(filasActualizadas);
  };

  return (
    <div className='IngresarProductos'>
      <h2>Modificar Productos</h2>
      <div className='barraSuperior'>
        <input type='search' placeholder="Buscar producto" />
        <button className="Busqueda">Buscar</button>
      </div>
      <div className='AddTabla'>
        <table>
          <thead>
            <tr>
              <th>Clave</th>
              <th>Artículo</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Proveedor</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {filas.map(fila => (
              <tr key={fila.id}>
                <td>{fila.id}</td>
                <td>
                  <input
                    type="text"
                    value={fila.articulo}
                    onChange={(e) => manejarCambioInput(fila.id, 'articulo', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={fila.descripcion}
                    onChange={(e) => manejarCambioInput(fila.id, 'descripcion', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={fila.precio}
                    onChange={(e) => manejarCambioInput(fila.id, 'precio', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={fila.proveedor}
                    onChange={(e) => manejarCambioInput(fila.id, 'proveedor', e.target.value)}
                  />
                </td>
                <td><button onClick={() => eliminarFila(fila.id)}><FaTrash /></button></td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      <div className="CyG">
        <button className="Cancel"><FaRegTimesCircle /> Cancelar</button>
        <button className="Save"><FaRegSave /> Guardar</button>
      </div>

    </div>
  );
};

export default ModificarProductos;
