import React, { useEffect, useState } from "react";
import { FaRegSave, FaRegTimesCircle, FaTrash } from "react-icons/fa";

const ModificarProductos = () => {
  const [productosOriginales, setProductosOriginales] = useState([]);
  const [filas, setFilas] = useState([]);

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      // aqui se llama a la API para obtener los productos
      const response = await fetch('https://tu-api.com/productos');
      const data = await response.json();
      setProductosOriginales(data); 
      setFilas(data); 
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
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

  const guardarCambios = () => {
    // Aquí puedes enviar los cambios al servidor
    console.log('Guardando cambios:', filas);
    // Puedes implementar aquí la lógica para enviar los cambios al servidor
    // Por ejemplo, usando fetch o axios
  };

  const cancelarCambios = () => {
    // Al cancelar, restauramos los productos originales
    setFilas(productosOriginales);
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
        <button className="Cancel" onClick={cancelarCambios}><FaRegTimesCircle /> Cancelar</button>
        <button className="Save" onClick={guardarCambios}><FaRegSave /> Guardar</button>
      </div>

    </div>
  );
};

export default ModificarProductos;
