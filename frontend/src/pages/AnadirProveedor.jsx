import React, { useEffect, useState } from "react";
import ProveedorForm from "../Componentes/ProveedorForm";
import useInputChange from "../Hooks/useInputChange";

const URI_Proveedores = "http://localhost:8080/proveedores";
const URI_Ciudades = "http://localhost:8080/ciudades";

const AnadirProveedor = () => {
  const [Ciudades, setCiudades] = useState([]);
  const { formValues: formProveedores, setFormProveedores, handleChange } = useInputChange({
    Nombre: "",
    RFC: "",
    CURP: "",
    Ciudad: "",
    Correo: "",
    Telefono: "",
    Legalizado: "",
  });

  const Cancell = () => {
    setFormProveedores({
      Nombre: "",
      RFC: "",
      CURP: "",
      Ciudad: "",
      Correo: "",
      Telefono: "",
      Legalizado: "",
    });
  }

  useEffect(() => {
    fetchCiudades();
  }, []);

  //funcion para obtener ciudades
  const fetchCiudades = async () => {
    let savedEmpleado = localStorage.getItem('empleado');
    savedEmpleado = JSON.parse(savedEmpleado);
        if (!savedEmpleado.IDCEDI) {
            console.error("No hay un empleado logueado");
            alert("No hay un empleado de CEDI logueado, inice sesión primero");
            window.location.href = "./";
            return;
      }
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
      if (response.ok) {
        alert("Proveedor añadido correctamente");
      }
      else {
        // Manejo de errores específicos devueltos por el servidor
        if (data.message.includes("RFC ya existe")) {
          alert("Error: El RFC ya existe en la base de datos");
        } else if (data.message.includes("CURP ya existe")) {
          alert("Error: El CURP ya existe en la base de datos");
        } else {
          alert("Error al añadir proveedor: " + data.message);
        }
      }
    } catch (error) {
      console.error("Error al añadir proveedor:", error);
      alert("Error al añadir proveedor:", error);
    }
  };

  return (
    <ProveedorForm
      formData={formProveedores}
      handleChange={handleChange}
      ciudades={Ciudades}
      handleSubmit={handleSubmit}
      Cancelled={Cancell}
    />
  );
};

export default AnadirProveedor;
