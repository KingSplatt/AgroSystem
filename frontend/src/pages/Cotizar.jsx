import React, { useState } from 'react';
import { FaRegSave, FaRegTimesCircle } from "react-icons/fa";
import '../Estilos/Cotizar.css';

const MiComponente = () => {
  const [proveedor, setProveedor] = useState('');
  const [producto, setProducto] = useState('');
  const [proveedores, setProveedores] = useState([]);
  const [productos, setProductos] = useState([]);

  const handleProveedorChange = (e) => {
    setProveedor(e.target.value);
  };

  const handleProductoChange = (e) => {
    setProducto(e.target.value);
  };

  const agregarProveedor = () => {
    if (proveedor.trim()) {
      setProveedores([...proveedores, proveedor.trim()]);
      setProveedor('');
    }
  };

  const agregarProducto = () => {
    if (producto.trim()) {
      setProductos([...productos, producto.trim()]);
      setProducto('');
    }
  };

  const eliminarProveedor = (index) => {
    const nuevosProveedores = [...proveedores];
    nuevosProveedores.splice(index, 1);
    setProveedores(nuevosProveedores);
  };

    const eliminarProducto = (index) => {
    const nuevosProductos = [...productos];
    nuevosProductos.splice(index, 1);
    setProductos(nuevosProductos);
    };

  return (
    <div className='ContenedorC'>
    <div className='Completo'>
    <h1>Cotizar</h1>
    <div className='Superior'>
      <div>
        <label>Proveedor:</label>
        <input type="text" value={proveedor} onChange={handleProveedorChange} />
        <button onClick={agregarProveedor}>Añadir proveedor</button>
      </div>
      <div>
        <label>Producto:</label>
        <input type="text" value={producto} onChange={handleProductoChange} />
        <button onClick={agregarProducto}>Añadir producto</button>
      </div>
    </div>
    <div className='Inferior'>
      <div>
        <h3>Proveedores:</h3>
        <div className='CotizarProveedores' >
          {proveedores.map((p, index) => (
            <label key={index}>
              {p}
              <FaRegTimesCircle onClick={() => eliminarProveedor(index)}
              style={{ cursor: 'pointer', marginLeft: '8px' }} />
            </label>
          ))}
      </div>
      </div>
      <div>
        <h3>Productos:</h3>
        <table className='Tabla'>
          
            <thead>
                <tr>
                    <th>Clave</th>
                    <th>Producto</th>
                </tr>
            </thead>
   
        <tbody>
            {productos.map((p, index) => (
           <tr key={index}> 
                <td>{p}
                    <FaRegTimesCircle
                    onClick={() => eliminarProducto(index)}
                    style={{ cursor: 'pointer', marginLeft: '8px' }}
                    />
                </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
    </div>

    <div className="CyG">
           <button className="Cancel"><FaRegTimesCircle /> Cancelar</button>
           <button className= "Save"><FaRegSave /> Guardar</button>
        </div>
    </div>
  );
};

export default MiComponente;