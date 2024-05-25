import React, { useEffect, useState } from "react";
import ProveedorForm from "../Componentes/ProveedorForm";
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
    <ProveedorForm
      formData={formProveedores}
      ciudades={Ciudades}
      handleSubmit={handleSubmit}
      changeHandler={handleChange}
    />
  );
};

export default AnadirProveedor;
