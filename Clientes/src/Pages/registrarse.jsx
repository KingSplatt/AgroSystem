import React, { useEffect, useState } from "react";
import ClienteForm from "../Componentes/ClienteForm";
import "../Estilos/AddClientes.css";
import useInputChange from "../Hooks/useInputChange";


const URI_Ciudades = "http://localhost:8080/ciudades";
const URI_Clientes = "http://localhost:8080/clientes";

const AnadirCliente = () => {
    const [Ciudades, setCiudades] = useState([]);
    const { formValues: formClientes, setFormClientes, handleChange } = useInputChange({
        Nombre: "",
        ApellidoPaterno: "",
        ApellidoMaterno: "",
        Usuario: "",
        Contrasena: "",
        Correo: "",
        Telefono: "",
        RFC: "",
        CURP: "",
        Ciudad: "",
    });

    const Cancell = () => {

        setFormClientes({
            Nombre: "",
            ApellidoPaterno: "",
            ApellidoMaterno: "",
            Usuario: "",
            Contrasena: "",
            Correo: "",
            Telefono: "",
            RFC: "",
            CURP: "",
            Ciudad: "",
        });
    }

    useEffect(() => {
        fetchCiudades();
    }, []);

    //ver ciudades en el combobox
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URI_Clientes, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formClientes),
            });
            const data = await response.json();
            console.log(data);
            //Mensaje de confirmación


            if (response.ok) {
                alert("Cliente añadido correctamente");
            }

        } catch (error) {
            console.error("Error en la petición de clientes", error);
        }
    };

    return (
        <div className="AddClientes">
            <ClienteForm
                formData={formClientes}
                handleChange={handleChange}
                ciudades={Ciudades}
                handleSubmit={handleSubmit}
                Cancell={Cancell}
            />
        </div>
    );

};

export default AnadirCliente;
