import React, { useEffect, useState } from "react";
import { FaRegSave, FaRegTimesCircle } from "react-icons/fa";
import "../Estilos/AddClientes.css";
import Input from "../Componentes/Input";
import Option from "../Componentes/Option";

const URI_Ciudades = "http://localhost:8080/ciudades";
const URI_Clientes = "http://localhost:8080/clientes";

const AnadirCliente = () => {
    const [Ciudades, setCiudades] = useState([]);
    const [formClientes, setFormClientes] = useState({
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

    const handleInputChange = (e) => {
        const { id, value } = e.target;

        // Validar número de teléfono solo acepta números
        if (id === "Telefono") {
            if (!/^\d*$/.test(value) || value.length > 10) {
                return;
            }
        }

        // Convertir RFC y CURP a mayúsculas
        let newValue = value;
        if (id === "RFC" || id === "CURP") {
            newValue = value.toUpperCase();
        }

        setFormClientes({ ...formClientes, [id]: newValue });
    };

    //funcion para enviar los datos del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if any field is empty
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
        } catch (error) {
            console.error("Error en la petición de clientes", error);
        }
    };

    return (
        <div className="Formulario-Cliente">
            <h2>Añadir cliente</h2>
            <div className="Clientes">

                <form className="Datos-del-usuario">
                    <h3>Datos del usuario</h3>
                    <div className="grupo1">
                        <Input
                            label="Nombre: "
                            onChange={handleInputChange}
                            id="Nombre"
                            value={formClientes.Nombre}
                            type="text"
                        />
                        <Input
                            label="Apellido Paterno: "
                            onChange={handleInputChange}
                            id="ApellidoPaterno"
                            value={formClientes.ApellidoPaterno}
                            type="text"
                        />
                        <Input
                            label="Apellido Materno: "
                            onChange={handleInputChange}
                            id="ApellidoMaterno"
                            value={formClientes.ApellidoMaterno}
                            type="text"
                        />
                    </div>
                </form>

                <form className="Datos-de-contacto">
                    <h3>Datos de contacto</h3>
                    <div className="grupo2">
                        <Input
                            label="Usuario: "
                            onChange={handleInputChange}
                            id="Usuario"
                            value={formClientes.Usuario}
                            type="text"
                        />
                        <Input
                            label="Contraseña: "
                            onChange={handleInputChange}
                            id="Contrasena"
                            value={formClientes.Contrasena}
                            type="password"
                        />
                        <Input
                            label="Correo: "
                            onChange={handleInputChange}
                            id="Correo"
                            value={formClientes.Correo}
                            type="email"
                        />
                        <Input
                            label="Teléfono: "
                            onChange={handleInputChange}
                            id="Telefono"
                            value={formClientes.Telefono}
                            type="text"
                        />
                    </div>
                </form>

                <form className="Datos-financieros">
                    <h3>Datos financieros</h3>
                    <div className="grupo3">
                        <Input
                            label="RFC: "
                            onChange={handleInputChange}
                            id="RFC"
                            value={formClientes.RFC}
                            type="text"
                        />
                        <Input
                            label="CURP: "
                            onChange={handleInputChange}
                            id="CURP"
                            value={formClientes.CURP}
                            type="text"
                        />
                    </div>
                </form>

                <form className="Datos-de-ubicacion">
                    <h3>Datos de ubicación</h3>
                    <div className="grupo4">
                        <Option
                            label="Ciudad: "
                            id="Ciudad"
                            onChange={handleInputChange}
                            value={formClientes.Ciudad}
                            ciudades={Ciudades}
                        />
                    </div>
                </form>
            </div>
            <div className="Cancelar-y-Guardar">
                <button className="Cancelar">
                    <FaRegTimesCircle />Cancelar
                </button>
                <button className="Guardar" onClick={handleSubmit}>
                    <FaRegSave /> Guardar
                </button>
            </div>
        </div >
    );
};

export default AnadirCliente;
