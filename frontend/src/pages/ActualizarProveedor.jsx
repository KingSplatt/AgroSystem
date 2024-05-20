import React, { useEffect, useState } from 'react';
import { FaRegSave, FaRegTimesCircle } from "react-icons/fa";
import "../Estilos/AddProveedores.css";

const ActualizarProveedor = () => {
  const [proveedor, setProveedor] = useState({
    clave: '',
    nombre: '',
    rfc: '',
    curp: '',
    telefono: '',
    correo: '',
    legalizacion: false,
    ciudad: ''
  });

  useEffect(() => {
    // Si la clave cambia, cargamos los datos del proveedor correspondiente
    if (proveedor.clave) {
      fetchProveedor();
    }
  }, [proveedor.clave]);

  const fetchProveedor = async () => {
    try {
      // Simulamos la obtención de los datos del proveedor desde una API o base de datos
      const response = await fetch(`https://tu-api.com/proveedor/${proveedor.clave}`);
      const data = await response.json();
      setProveedor(data); // Actualizamos el estado con los datos del proveedor obtenidos
    } catch (error) {
      console.error('Error al obtener el proveedor:', error);
    }
  };

  const manejarCambioInput = (campo, valor) => {
    setProveedor({
      ...proveedor,
      [campo]: valor
    });
  };

  const manejarCambioCheckbox = () => {
    setProveedor({
      ...proveedor,
      legalizacion: !proveedor.legalizacion
    });
  };

  const guardarCambios = () => {
    // Aquí puedes enviar los cambios al servidor
    console.log('Guardando cambios del proveedor:', proveedor);
    // Puedes implementar aquí la lógica para enviar los cambios al servidor
    // Por ejemplo, usando fetch o axios
  };

  const cancelarCambios = () => {
    // Al cancelar, recargamos los datos originales del proveedor
    setProveedor({
      clave: '',
      nombre: '',
      rfc: '',
      curp: '',
      telefono: '',
      correo: '',
      legalizacion: false,
      ciudad: ''
    });
  };

  return (
    <div className="formularioAP">
      <h2>Actualizar proveedor</h2>

      <form className="ADDP">

        <div className="grupo1"> 

          <div className="form-group">
            <label htmlFor="clave">Clave: </label>
            <input
              type="text"
              id="clave"
              value={proveedor.clave}
              onChange={(e) => manejarCambioInput('clave', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nombre">Nombre: </label>
            <input
              type="text"
              id="nombre"
              value={proveedor.nombre}
              onChange={(e) => manejarCambioInput('nombre', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="rfc">RFC: </label>
            <input
              type="text"
              id="rfc"
              value={proveedor.rfc}
              onChange={(e) => manejarCambioInput('rfc', e.target.value)}
            />
          </div>
   
        </div>

        <div className="grupo2">

          <div className="form-group">
            <label htmlFor="curp">CURP: </label>
            <input
              type="text"
              id="curp"
              value={proveedor.curp}
              onChange={(e) => manejarCambioInput('curp', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono: </label>
            <input
              type="tel"
              id="telefono"
              value={proveedor.telefono}
              onChange={(e) => manejarCambioInput('telefono', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo: </label>
            <input
              type="email"
              id="correo"
              value={proveedor.correo}
              onChange={(e) => manejarCambioInput('correo', e.target.value)}
            />
          </div>

        </div>
        
        <div className="grupo3">

          <div className="form-group">
            <label htmlFor="legalizacion">Estado de legalización: </label>
            <input
              type="checkbox"
              id="legalizacion"
              checked={proveedor.legalizacion}
              onChange={manejarCambioCheckbox}
            />
          </div>

          <div className="form-group">
            <label htmlFor="ciudad">Ciudad: </label>
            <select
              id="ciudad"
              value={proveedor.ciudad}
              onChange={(e) => manejarCambioInput('ciudad', e.target.value)}
            >
              <option value="">Seleccionar: </option>
              {/* Opciones de ciudad */}
            </select>
          </div>

        </div>

        
        <div className="CyG">
           <button className="Cancel" onClick={cancelarCambios}><FaRegTimesCircle /> Cancelar</button>
           <button className="Save" onClick={guardarCambios}><FaRegSave /> Guardar</button>
        </div>
        
      </form>
    </div>
  );
};

export default ActualizarProveedor;
