import React, { useEffect, useState } from "react";
import ProveedorForm from "../Componentes/ProveedorForm";
import "../Estilos/AddProveedores.css";

const URI_Proveedores = "http://localhost:8080/proveedores";
const URI_Ciudades = "http://localhost:8080/ciudades";

const AnadirProveedor = () => {
  const [Ciudades, setCiudades] = useState([]);
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
    fetchCiudades();
  }, []);

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

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Validar número de teléfono solo acepta números
    if (id === "Telefono") {
      if (!/^\d*$/.test(value) || value.length > 10) {
        return;
      }
    }

    if (id === "RFC" && value.length > 13) {
      return;
    }

    if (id === "CURP" && value.length > 18) {
      return;
    }

    // Convertir RFC y CURP a mayúsculas
    let newValue = value;
    if (id === "RFC" || id === "CURP") {
      newValue = value.toUpperCase();
    }

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
