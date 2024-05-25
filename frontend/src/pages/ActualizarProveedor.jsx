import React, { useEffect, useState } from 'react';
import { FaRegSave, FaRegTimesCircle } from "react-icons/fa";
import "../Estilos/AddProveedores.css";

const ActualizarProveedor = () => {
  const [claveBusqueda, setClaveBusqueda] = useState('');
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
    if (claveBusqueda) {
      fetchProveedor(claveBusqueda);
    }
  }, [claveBusqueda]);

  const fetchProveedor = async (clave) => {
    try {
      // Simulamos la obtención de los datos del proveedor desde una API o base de datos
      const response = await fetch(`http://localhost:8080/proveedores/${clave}`);
      if (!response.ok) {
        throw new Error('Proveedor no encontrado');
      }
      const data = await response.json();
      setProveedor(data); // Actualizamos el estado con los datos del proveedor obtenidos
    } catch (error) {
      console.error('Error al obtener el proveedor:', error);
      // Limpiar los datos si ocurre un error
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
    }
  };

  const manejarCambioInput = (campo, valor) => {
    let newValue = valor;

    // Validar número de teléfono solo acepta números y máximo 10 caracteres
    if (campo === "telefono") {
      if (!/^\d*$/.test(valor) || valor.length > 10) {
        return;
      }
    }

    // Convertir RFC y CURP a mayúsculas
    if (campo === "rfc" || campo === "curp") {
      newValue = valor.toUpperCase();
    }

  };

  const manejarCambioCheckbox = () => {
    setProveedor({
      ...proveedor,
      legalizacion: !proveedor.legalizacion
    });
  };

  const guardarCambios = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los cambios al servidor
    console.log('Guardando cambios del proveedor:', proveedor);
    // Puedes implementar aquí la lógica para enviar los cambios al servidor
    // Por ejemplo, usando fetch o axios
  };

  const cancelarCambios = (e) => {
    e.preventDefault();
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
    setClaveBusqueda('');
  };

  return (
    <div className="formularioAP">
      <h2>Actualizar proveedor</h2>
  
      <div className="buscador">
        <label htmlFor="claveBusqueda">Buscar por clave: </label>
        <input
          type="text"
          id="claveBusqueda"
          value={claveBusqueda}
          onChange={(e) => setClaveBusqueda(e.target.value)}
        />
      </div>
  
      <form className="ADDP">
  
        <div className="grupo1"> 
          <h3>Datos generales</h3>
          <div className="form-group">
            <label>Clave:</label>
            <label className="valor-anterior">{proveedor.clave}</label>
            <input
              type="text"
              id="clave"
              value={proveedor.clave}
              onChange={(e) => manejarCambioInput('clave', e.target.value)}
            />
          </div>
  
          <div className="form-group">
            <label>Nombre:</label>
            <label className="valor-anterior">{proveedor.nombre}</label>
            <input
              type="text"
              id="nombre"
              value={proveedor.nombre}
              onChange={(e) => manejarCambioInput('nombre', e.target.value)}
            />
          </div>
  
          <div className="form-group">
            <label>RFC:</label>
            <label className="valor-anterior">{proveedor.rfc}</label>
            <input
              type="text"
              id="rfc"
              value={proveedor.rfc}
              onChange={(e) => manejarCambioInput('rfc', e.target.value)}
            />
          </div>
        </div>
  
        <div className="grupo2">
          <h3>Datos de contacto</h3>
          <div className="form-group">
            <label>CURP:</label>
            <label className="valor-anterior">{proveedor.curp}</label>
            <input
              type="text"
              id="curp"
              value={proveedor.curp}
              onChange={(e) => manejarCambioInput('curp', e.target.value)}
            />
          </div>
  
          <div className="form-group">
            <label>Teléfono:</label>
            <label className="valor-anterior">{proveedor.telefono}</label>
            <input
              type="tel"
              id="telefono"
              value={proveedor.telefono}
              onChange={(e) => manejarCambioInput('telefono', e.target.value)}
            />
          </div>
  
          <div className="form-group">
            <label>Correo:</label>
            <label className="valor-anterior">{proveedor.correo}</label>
            <input
              type="email"
              id="correo"
              value={proveedor.correo}
              onChange={(e) => manejarCambioInput('correo', e.target.value)}
            />
          </div>
        </div>
  
        <div className="grupo3">
          <h3>Otros datos</h3>
          <div className="form-group">
            <label>Estado de legalización:</label>
            <label className="valor-anterior">{proveedor.legalizacion ? 'Sí' : 'No'}</label>
            <input
              type="checkbox"
              id="legalizacion"
              checked={proveedor.legalizacion}
              onChange={manejarCambioCheckbox}
            />
          </div>
  
          <div className="form-group">
            <label>Ciudad:</label>
            <label className="valor-anterior">{proveedor.ciudad}</label>
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

