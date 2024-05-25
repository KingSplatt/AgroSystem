import React, { useEffect, useState } from "react";
import { FaRegSave, FaRegTimesCircle } from "react-icons/fa";
import "../Estilos/AddProveedores.css";

const URI_Proveedores = "http://localhost:8080/proveedores";
const URI_Ciudades = "http://localhost:8080/ciudades";
const URI_Estados = "http://localhost:8080/estados";

const AnadirProveedor = () => {
  const [Proveedores, setProveedores] = useState([]);
  const [Ciudades, setCiudades] = useState([]);
  const [Estados, setEstados] = useState([]);
  const [formProveedores, setFormProveedores] = useState({
    Nombre: "",
    RFC: "",
    CURP: "",
    Ciudad: "",
    Correo: "",
    Telefono: "",
    Legalizado: "",
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

      if (Array.isArray(rows)) {
        setCiudades(rows);
      } else {
        alert("Error al obtener las ciudades: la respuesta no es un array");
      }
    } catch (error) {
      console.error("Error al obtener las ciudades:", error);
      alert("Error al obtener las ciudades:", error);
      console.log(formProveedores);
    }
  };

  //funcion para obtener estados
  const fetchEstados = async () => {
    try {
      const response = await fetch(URI_Estados);
      const Estados = await response.json();
      const rows = Estados.rows;

      if (Array.isArray(rows)) {
        setEstados(rows);
      } else {
        alert("Error al obtener los estados: la respuesta no es un array");
      }
    } catch (error) {
      alert("Error al obtener los estados:", error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormProveedores({ ...formProveedores, [id]: value });
  };

  //funcion para enviar los datos
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formProveedores);
    try {
      const response = await fetch(URI_Proveedores, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formProveedores),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error al añadir proveedor:", error);
      alert("Error al añadir proveedor:", error);
    }
  };

  return (
    <div className="formularioAP">
      <h2>Añadir proveedor</h2>

      <form className="ADDP">
        <div className="grupo1">
          <div className="form-group">
            <label htmlFor="nombre">Nombre: </label>
            <input
              type="text"
              id="Nombre"
              value={formProveedores.Nombre}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="rfc">RFC: </label>
            <input
              type="text"
              id="RFC"
              value={formProveedores.RFC}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="curp">CURP: </label>
            <input
              type="text"
              id="CURP"
              value={formProveedores.CURP}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grupo2">
          <div className="form-group">
            <label htmlFor="ciudad">Ciudad: </label>
            <select
              id="Ciudad"
              onChange={handleChange}
              value={formProveedores.Ciudad}
            >
              <option value="">Seleccionar: </option>
              {Ciudades.map((ciudad, index) => (
                <option key={index} value={ciudad.Nombre}>
                  {ciudad.Nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo: </label>
            <input
              type="email"
              id="Correo"
              value={formProveedores.Correo}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Telefono: </label>
            <input
              type="text"
              id="Telefono"
              value={formProveedores.Telefono}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grupo3">
          <div className="form-group">
            <label htmlFor="legalizado">Legalizado: </label>
            <select
              id="Legalizado"
              value={formProveedores.Legalizado}
              onChange={handleChange}
            >
              <option value="">Seleccionar: </option>
              <option value="1">Si</option>
              <option value="0">No</option>
            </select>
          </div>
        </div>

        <div className="CyG">
          <button className="Cancel">
            <FaRegTimesCircle /> Cancelar
          </button>
          <button className="Save" onClick={handleSubmit}>
            <FaRegSave /> Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnadirProveedor;
