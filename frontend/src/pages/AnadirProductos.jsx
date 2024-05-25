import React, { useState } from "react";
import { FaPlus, FaRegSave, FaRegTimesCircle, FaTrash } from "react-icons/fa";
import "../Estilos/AddProductos.css";

const AnadirProductos = () => {


  const [filas, setFilas] = useState([
    { id: 1 }
  ]);

  const agregarFila = () => {
    const nuevaFila = { articulo: "", cantidad: "", descripcion: "", precio: "", proveedor: "" };
    setFilas([...filas, nuevaFila]);
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

  const Cancelar = () => {
    //vuelve a su estado inicial
    setFilas([]);
  }
  return (
    <div className='IngresarProductos'>
      <h2>Añadir Productos</h2>
      <divn className='Cuadro'>
        <div className='barraSuperior'>
          <input type='search' placeholder="Buscar producto" />
        </div>
        <div className='AddTabla'>
          <table>
            <thead>
              <tr>
                <th>Artículo</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Proveedor</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="7" style={{ textAlign: 'center' }}>
                  <button className="Add" onClick={agregarFila}><FaPlus /> Añadir compra</button>
                </td>
              </tr>
              {filas.map(fila => (
                <tr key={fila.id}>
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
      </divn>

      <div className="CyG">
        <button className="Cancel" onClick={Cancelar}><FaRegTimesCircle /> Cancelar</button>
        <button className="Save"><FaRegSave /> Guardar</button>
      </div>

    </div>
  );
};

export default AnadirProductos;
