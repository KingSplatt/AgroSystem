import React, { useState } from "react";
import { FaPlus, FaRegSave, FaRegTimesCircle, FaTrash } from "react-icons/fa";

const AnadirProductos = () => {


  const [filas, setFilas] = useState([
    { id: 1 }
  ]);

  const agregarFila = () => {
    const nuevaFila = { id: filas.length + 1, articulo: "", cantidad: "", descripcion: "", precio: "", proveedor: "" };
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

  return (
    <div className='IngresarProductos'>
      <h2>Añadir Productos</h2>
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
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>
                <button className="Add" onClick={agregarFila}><FaPlus /> Añadir compra</button>
              </td>
            </tr>
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
           <button className= "Save"><FaRegSave /> Guardar</button>
      </div>

    </div>
  );
};

export default AnadirProductos;
