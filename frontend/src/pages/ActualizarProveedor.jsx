import React, { useEffect, useState } from 'react';
import { FaRegSave, FaRegTimesCircle, FaSearch } from "react-icons/fa";

import "../Estilos/ActProveedores.css";
const URI_Ciudades = "http://localhost:8080/ciudades";


const ActualizarProveedor = () => {
  const [Ciudades, setCiudades] = useState([]);
  const [IDProveedorBusqueda, setIDProveedorBusqueda] = useState('');
  const [proveedor, setProveedor] = useState({
    IDProveedor: '',
    Nombre: '',
    Telefono: '',
    Correo: '',
    RFC: '',
    CURP: '',
    Legalizado: false,
    IDCuidad: ''
  });

  useEffect(() => {
    fetchCiudades();
    if (IDProveedorBusqueda) {
      console.log('Buscando proveedor con IDProveedor:', IDProveedorBusqueda);
      fetchProveedor(IDProveedorBusqueda);
    }
  }, [IDProveedorBusqueda]);

  const fetchCiudades = async () => {
    try {
        const response = await fetch(URI_Ciudades);
        const Ciudades = await response.json();
        const rows = Ciudades.rows;
        if (Array.isArray(rows)) {
            setCiudades(rows);
        }
    } catch (error) {
        alert("Error al obtener las ciudades:", error);
    }
};

  const fetchProveedor = async (IDProveedor) => {
    try {
      const response = await fetch(`http://localhost:8080/proveedores/${IDProveedor}`);
      if (!response.ok) {
        alert('Proveedor no encontrado');
        throw new Error('Proveedor no encontrado');
      }
      const data = await response.json();
      console.log(data.proveedor.CURP);
      const nuevoProveedor = {
        IDProveedor: data.proveedor.IDProveedor,
        Nombre: data.proveedor.Nombre || '',
        Telefono: data.proveedor.Telefono || '',
        Correo: data.proveedor.Correo || '',
        RFC: data.proveedor.RFC || '',
        CURP: data.proveedor.CURP || '',
        Legalizado: data.proveedor.Legalizado === 1,
        IDCuidad: data.proveedor.IDCiudad || ''
      };
      console.log('Proveedor encontrado:', nuevoProveedor);
      setProveedor(nuevoProveedor);
      actualizarLabels(nuevoProveedor);
      console.log(data);
    } catch (error) {
      console.error('Error al obtener el proveedor:', error);
      const limpiarProveedor = {
        IDProveedor: '',
        Nombre: '',
        Telefono: '',
        Correo: '',
        RFC: '',
        CURP: '',
        Legalizado: false,
        IDCuidad: ''
      };
      setProveedor(limpiarProveedor);
      actualizarLabels(limpiarProveedor);
    }
  };

  const actualizarLabels = (data) => {
    const ciudadesBuscar = Ciudades.find(ciudad => ciudad.IDCiudad === data.IDCuidad);
    const fields = ['Nombre', 'RFC', 'CURP', 'Telefono', 'Correo', 'Legalizado', 'IDCuidad'];
    fields.forEach(field => {
      const label = document.querySelector(`.valor-anterior-${field}`);
      if (label) {
        if (field === 'IDCuidad') {
          label.textContent = ciudadesBuscar ? ciudadesBuscar.Nombre : '';
        }
        else if (field === 'Legalizado') {
          label.textContent = data[field] ? 'Sí' : 'No';
        } else {
          label.textContent = data[field] !== undefined ? data[field] : '';
        }
      }
    });
  };

  const manejarCambioInput = (campo, valor) => {
    console.log('campo:', campo, 'valor:', valor);
    let newValue = valor;

    if (campo === "Telefono") {
      if (!/^\d*$/.test(valor) || valor.length > 10) {
        return;
      }
    }

    if (campo === "RFC" || campo === "CURP") {
      newValue = valor.toUpperCase();
    }

    setProveedor({
      ...proveedor,
      [campo]: newValue
    });
  };

  const manejarCambioCheckbox = () => {
    setProveedor({
      ...proveedor,
      Legalizado: !proveedor.Legalizado
    });
  };

  const guardarCambios = async (e) => {
    e.preventDefault();
  
    // Convertir legalizacion a 1 o 0 y obtener el ID de la ciudad correspondiente
    const ciudadEncontrada = Ciudades.find(ciudad => ciudad.Nombre === proveedor.IDCuidad).IDCiudad;
    console.log('ciudadEncontrada:', ciudadEncontrada);
    if (!ciudadEncontrada) {
      alert("Ciudad no encontrada");
      return;
    }

    proveedor.IDCuidad = ciudadEncontrada;
    proveedor.Legalizado = proveedor.Legalizado ? 1 : 0;
    console.log('proveedor:', JSON.stringify(proveedor));
    
  
    console.log('Guardando cambios del proveedor:', proveedor);
  
    try {
      const response = await fetch(`http://localhost:8080/proveedores`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(proveedor),
      });

      const data = await response.json();
      console.log(data);
      alert("Proveedor modificado correctamente");
    } catch (error) {
      console.error("Error en la petición de proveedores", error);
    }
  
    cancelarCambios(e);
  };

  const cancelarCambios = (e) => {
    e.preventDefault();
    const limpiarProveedor = {
      IDProveedor: '',
      Nombre: '',
      Telefono: '',
      Correo: '',
      RFC: '',
      CURP: '',
      Legalizado: false,
      IDCuidad: ''
    };
    document.getElementById('Nombre').value = '';
    document.getElementById('RFC').value = '';
    document.getElementById('CURP').value = '';
    document.getElementById('Telefono').value = '';
    document.getElementById('Correo').value = '';
    document.getElementById('Legalizado').checked = false;
    document.getElementById('valor-anterior-ciudad-select').value = '';
    setProveedor(limpiarProveedor);
    actualizarLabels(limpiarProveedor);
    setIDProveedorBusqueda('');
  };


  return (
    <div className="Formulario-Proveedor">
      <h2>Actualizar proveedor</h2>
      <div className="buscador">
        <div className="grupo-buscador">
          <label htmlFor="IDProveedorBusqueda"><FaSearch className='lupa' /></label>
          <input
            type="text"
            id="IDProveedorBusqueda"
            placeholder='IDProveedor del proveedor'
            value={IDProveedorBusqueda}
            onChange={(e) => setIDProveedorBusqueda(e.target.value)}
          />
        </div>
      </div>
      <div className="Datos-del-usuario">
        <form className="Datos-del-usuario-form">
          <h3>Datos generales</h3>
          <div className="grupo1">
            <label htmlFor="Nombre">Nombre:</label>
            <label className="valor-anterior-Nombre"></label>
            <input
              type="text"
              id="Nombre"
              placeholder={proveedor.Nombre}
              onChange={(e) => manejarCambioInput('Nombre', e.target.value)}
            />
            <label htmlFor="RFC">RFC:</label>
            <label className="valor-anterior-RFC"></label>
            <input
              type="text"
              id="RFC"
              placeholder={proveedor.RFC}
              onChange={(e) => manejarCambioInput('RFC', e.target.value)}
            />
            <label htmlFor="CURP">CURP:</label>
            <label className="valor-anterior-CURP"></label>
            <input
              type="text"
              id="CURP"
              placeholder={proveedor.CURP}
              onChange={(e) => manejarCambioInput('CURP', e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="Datos-de-contacto">
        <form className="Datos-de-contacto-form">
          <h3>Datos de contacto</h3>
          <div className="grupo2">
            <label htmlFor="Telefono">Teléfono:</label>
            <label className="valor-anterior-Telefono"></label>
            <input
              type="tel"
              id="Telefono"
              placeholder={proveedor.Telefono}
              onChange={(e) => manejarCambioInput('Telefono', e.target.value)}
            />
            <label htmlFor="Correo">Correo:</label>
            <label className="valor-anterior-Correo"></label>
            <input
              type="email"
              id="Correo"
              placeholder={proveedor.Correo}
              onChange={(e) => manejarCambioInput('Correo', e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="Otros-datos">
        <form className="Otros-datos-form">
          <h3>Otros datos</h3>
          <div className="grupo3">
            <label htmlFor="Legalizado">Estado de legalización:</label>
            <label className="valor-anterior-Legalizado">{proveedor.Legalizado ? 'Sí' : 'No'}</label>
            <input
              type="checkbox"
              id="Legalizado"
              checked={proveedor.Legalizado}
              onChange={manejarCambioCheckbox}
            />
            <label htmlFor="IDCuidad">Ciudad:</label>
            <label className="valor-anterior-IDCuidad"></label>

            <select id="valor-anterior-ciudad-select" onChange={(e) => manejarCambioInput('IDCuidad', e.target.value)} value={proveedor.ciudad}>
               <option>Seleccionar: </option>
                  {Ciudades
                  ? Ciudades.map((ciudad, index) => (
                      <option key={index} value={ciudad.Nombre}>
                        {ciudad.Nombre}
                      </option>
                    ))
                  : ""}
              </select>
          </div>
        </form>
      </div>
      <div className="Cancelar-y-Guardar">
        <button className="Cancelar" onClick={cancelarCambios}>
          <FaRegTimesCircle /> Cancelar
        </button>
        <button className="Guardar" onClick={guardarCambios}>
          <FaRegSave /> Guardar
        </button>
      </div>
    </div>
  );
};

export default ActualizarProveedor;