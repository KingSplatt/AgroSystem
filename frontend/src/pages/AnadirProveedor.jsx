import React, { useEffect, useState } from 'react';
import { FaRegSave, FaRegTimesCircle, } from "react-icons/fa";
import "../Estilos/AddProveedores.css";

const URI_Proveedores = "http://localhost:8080/proveedores";
const URI_Ciudades = "http://localhost:8080/ciudades";
const URI_Estados = "http://localhost:8080/estados";


const AnadirProveedor = () => {
  const [Proveedores, setProveedores] = useState([]);
  const [Ciudades, setCiudades] = useState([]);
  const [Estados, setEstados] = useState([]);
  const [formProveedores, setFormProveedores] = useState({
    nombre: "",
    apellidopaterno: "",
    apellidomaterno: "",
    usuario: "",
    contrasena: "",
    correo: "",
    telefono: "",
    rfc: "",
    curp: "",
    ciudad: ""
  });

  useEffect(() => {
    fetchProveedores();
    fetchCiudades();
    fetchEstados();
  }, []);

  //funcion para agregar proveedores
  const fetchProveedores = async () => {
    try {
      const response = await fetch(URI_Proveedores);
      const Proveedores = await response.json();
      setProveedores(Proveedores);
    } catch (error) {
      console.error("Error en la petición de proveedores", error);
    }
  };
  //funcion para obtener ciudades
  const fetchCiudades = async () => {
    try {
      const response = await fetch(URI_Ciudades);
      const Ciudades = await response.json();
      const rows = Ciudades.rows;

      console.log("Ciudades:", Ciudades.rows);

      if (Array.isArray(rows)) {
        setCiudades(rows);
      } else {
        console.error("La respuesta no es un array", Ciudades);
        alert("Error al obtener las ciudades: la respuesta no es un array");
      }
    } catch (error) {
      console.error("Error al obtener las ciudades:", error);
      alert("Error al obtener las ciudades:", error);
    }
  };

  //funcion para obtener estados
  const fetchEstados = async () => {
    try {
      const response = await fetch(URI_Estados);
      const Estados = await response.json();
      const rows = Estados.rows;

      console.log("Estados:", Estados.rows);

      if (Array.isArray(rows)) {
        setEstados(rows);
      } else {
        console.error("La respuesta no es un array", Estados);
        alert("Error al obtener los estados: la respuesta no es un array");
      }
    } catch (error) {
      console.error("Error al obtener los estados:", error);
      alert("Error al obtener los estados:", error);
    }
  };



  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormProveedores({ ...formProveedores, [id]: value });
  };
  //PENDIENTE VER PARA GUARDAR EL PROVEEDOR
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(formProveedores, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formProveedores),
      });
      if (response.ok) {
        alert('Proveedor agregado correctamente');
        const data = await response.json();
        console.log(data);
        fetchProveedores();
      } else {
        alert('Error al agregar proveedor');
      }
    } catch (error) {
      console.error("Error en la petición de proveedores", error);
    }
  };



  //ELIMINAR IDPROVEEDOR
  return (
    <div className="formularioAP">
      <h2>Añadir proveedor</h2>


      <form className="ADDP" onSubmit={handleSubmit}>

        <div className="grupo1">

          <div className="form-group">
            <label htmlFor="clave">Clave: </label>
            <input type="text" id="clave" value={formProveedores.id} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="nombre">Nombre: </label>
            <input type="text" id="nombre" value={formProveedores.nombre} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="rfc">RFC: </label>
            <input type="text" id="rfc" value={formProveedores.rfc} onChange={handleChange} />
          </div>

        </div>

        <div className="grupo2">

          <div className="form-group">
            <label htmlFor="telefono">Teléfono: </label>
            <input type="tel" id="telefono" value={formProveedores.telefono} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo: </label>
            <input type="email" id="correo" value={formProveedores.correo} onChange={handleChange} />
          </div>
        </div>

        <div className="grupo3">

          <div className="form-group">
            <label htmlFor="ciudad">Ciudad: </label>
            <select id="ciudad">
              <option value="">Seleccionar: </option>
              {Ciudades.map((ciudad, index) => (
                <option key={index} value={ciudad.IDCiudad}>{ciudad.Nombre}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="estado">Estado: </label>
            <select id="estado">
              <option value="">Seleccionar: </option>
              {Estados.map((estado, index) => (
                <option key={index} value={estado.IDEstado}>{estado.Nombre}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="calle">Calle: </label>
            <input type="text" id="calle" />
          </div>

        </div>


        <div className="CyG">
          <button className="Cancel"><FaRegTimesCircle /> Cancelar</button>
          <button className="Save" onClick={handleSubmit}><FaRegSave /> Guardar</button>
        </div>

      </form>
    </div>
  );
};

export default AnadirProveedor;