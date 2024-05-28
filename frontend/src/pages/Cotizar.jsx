import React, { useEffect, useState } from 'react';
import { FaRegSave, FaRegTimesCircle } from "react-icons/fa";
import '../Estilos/Cotizar.css';

const URL = 'http://localhost:8080/productosCEDI';
const URI = 'http://localhost:8080/proveedores';
const URI_Cotizacion = 'http://localhost:8080/cotizaciones';


const Cotizar = () => {
  const [nuevoProveedor, setNuevoProveedor] = useState('');
  const [nuevoProducto, setNuevoProducto] = useState('');
  const savedEmpleado = JSON.parse(localStorage.getItem('empleado'));
  const [proveedores, setProveedores] = useState([]);
  const [productos, setProductos] = useState([]);

  const [proveedors, setProveedors] = useState([]);
  const [productors, setProductors] = useState([]);

  useEffect(() => {
    fetchProveedores();
    fetchProductos();
  }, []);

  const fetchProveedores = async () => {
    try {
      const response = await fetch(URI);
      const data = await response.json();
      const rows = data.rows;

      if (Array.isArray(rows)) {
        setProveedores(rows);
      } else {
        console.log('La respuesta no es un array', data);
        alert('Error al obtener los datos de los proveedores');
      }
    } catch (error) {
      console.error('Error al obtener los datos de los proveedores', error);
      alert('Error al obtener los datos de los proveedores');
    }
  };

  const fetchProductos = async () => {
    try {
      const response = await fetch(`http://localhost:8080/productosCEDI/${savedEmpleado.IDCEDI}`);
      const data = await response.json();
      const rows = data.rows[0];

      if (Array.isArray(rows)) {
        setProductos(rows);
      } else {
        console.log('La respuesta no es un array', data);
        alert('Error al obtener los datos de los productos');
      }
    } catch (error) {
      console.error('Error al obtener los datos de los productos', error);
      alert('Error al obtener los datos de los productos');
    }
  };
  const enviarCotizacion = async () => {
    try {
      const cotizacion = {
        proveedores: proveedors,
        productos: productors,
        IDCEDI: savedEmpleado.IDCEDI
      };
      console.log('estos son los datos:', cotizacion);

      const response = await fetch(URI_Cotizacion, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cotizacion)
      });
      if (response.ok) {
        alert('Cotización enviada correctamente');
        // Reset state
        setNuevoProveedor('');
        setNuevoProducto('');
        setProveedors([]);
        setProductors([]);
      } else {
        console.error('Error al enviar la cotización');
        alert('Error al enviar la cotización');
      }
    } catch (error) {
      console.error('Error al enviar la cotización', error);
      alert('Error al enviar la cotización');
    }
  };

  // Call enviarCotizacion when the "Guardar" button is clicked
  <button className="Save" onClick={enviarCotizacion}><FaRegSave /> Guardar</button>

  const handleProveedorChange = (event) => {
    setNuevoProveedor(event.target.value);
  };

  const handleProductoChange = (event) => {
    setNuevoProducto(event.target.value);
  };


  const agregarProveedor = () => {
    if (nuevoProveedor.trim() === '') {
      alert('El campo proveedor no puede estar vacío');
      return;
    }
    const proveedor = proveedores.find((p) => p.IDProveedor === parseInt(nuevoProveedor));

    if (proveedor) {
      setProveedors([...proveedors, proveedor]);
      setNuevoProveedor('');
    } else {
      alert('Proveedor no encontrado. Intente de nuevo');
    }
  };

  const agregarProducto = () => {
    if (nuevoProducto.trim() === '') {
      alert('El campo producto no puede estar vacío');
      return;
    }

    const producto = productos.find((p) => p.IDProducto === parseInt(nuevoProducto));

    console.log('nuevoProducto:', nuevoProducto);
    console.log('producto:', producto);
    console.log(productos);

    if (producto) {
      setProductors([...productors, producto]);
      setNuevoProducto('');
    } else {
      alert('Producto no encontrado. Intente de nuevo');
    }
  };

  const eliminarProveedor = (index) => {
    const newProveedors = proveedors.filter((_, i) => i !== index);
    setProveedors(newProveedors);
  };

  const eliminarProducto = (index) => {
    const newProductors = productors.filter((_, i) => i !== index);
    setProductors(newProductors);
  };
  //patra cancelar
  const cancelar = () => {
    //limpiar campos
    setNuevoProveedor('');
    setNuevoProducto('');
    setProveedors([]);
    setProductors([]);
  }

  return (
    <div className='ContenedorC'>
      <div className='Completo'>
        <h1>Cotizar</h1>
        <div className='Superior'>
          <div>
            <label>Proveedor: </label>
            <input type="text" value={nuevoProveedor} onChange={handleProveedorChange} />
            <button onClick={agregarProveedor} >Añadir proveedor</button>
          </div>
          <div>
            <label>Producto: </label>
            <input type="text" value={nuevoProducto} onChange={handleProductoChange} />
            <button onClick={agregarProducto}>Añadir producto</button>
          </div>
        </div>
        <div className='Inferior'>
          <div>
            <h3>Proveedores: </h3>
            <div className='CotizarProveedores'>
              {proveedors.map((p, index) => (
                <label key={index}>
                  {p.Nombre}
                  <FaRegTimesCircle
                    onClick={() => eliminarProveedor(index)}
                    style={{ cursor: 'pointer', marginLeft: '8px' }}
                  />
                </label>
              ))}
            </div>
          </div>
          <div className='Tablas'>
            <h3>Productos: </h3>
            <table className='Tabla'>
              <thead>
                <tr>
                  <th>Clave</th>
                  <th>Producto</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {productors.map((p, index) => (
                  <tr key={index}>
                    <td>{p.IDProducto}</td>
                    <td>{p.Nombre}</td>
                    <td>
                      <FaRegTimesCircle
                        onClick={() => eliminarProducto(index)}
                        style={{ cursor: 'pointer', textAlign: 'center' }}
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
        <button className="Cancel" onClick={cancelar}><FaRegTimesCircle /> Cancelar</button>
        <button className="Save" onClick={enviarCotizacion}><FaRegSave /> Guardar</button>
      </div>
    </div>
  );
};

export default Cotizar;
