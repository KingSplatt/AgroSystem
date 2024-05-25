import React from "react";
import { FaRegSave, FaRegTimesCircle } from "react-icons/fa";
import Input from "../Componentes/Input";
import Option from "../Componentes/Option";

const ClienteForm = ({ formData, handleSubmit, handleChange, ciudades, Cancell }) => {
    return (
        <div className="Formulario-Cliente">
            <h2>Añadir cliente</h2>
            <div className="Clientes">

                <form className="Datos-del-usuario">
                    <h3>Datos del usuario</h3>
                    <div className="grupo1">
                        <Input
                            label="Nombre: "
                            onChange={handleChange}
                            id="Nombre"
                            value={formData.Nombre}
                            type="text"
                        />
                        <Input
                            label="Apellido Paterno: "
                            onChange={handleChange}
                            id="ApellidoPaterno"
                            value={formData.ApellidoPaterno}
                            type="text"
                        />
                        <Input
                            label="Apellido Materno: "
                            onChange={handleChange}
                            id="ApellidoMaterno"
                            value={formData.ApellidoMaterno}
                            type="text"
                        />
                    </div>
                </form>

                <form className="Datos-de-contacto">
                    <h3>Datos de contacto</h3>
                    <div className="grupo2">
                        <Input
                            label="Usuario: "
                            onChange={handleChange}
                            id="Usuario"
                            value={formData.Usuario}
                            type="text"
                        />
                        <Input
                            label="Contraseña: "
                            onChange={handleChange}
                            id="Contrasena"
                            value={formData.Contrasena}
                            type="password"
                        />
                        <Input
                            label="Correo: "
                            onChange={handleChange}
                            id="Correo"
                            value={formData.Correo}
                            type="email"
                        />
                        <Input
                            label="Teléfono: "
                            onChange={handleChange}
                            id="Telefono"
                            value={formData.Telefono}
                            type="text"
                        />
                    </div>
                </form>

                <form className="Datos-financieros">
                    <h3>Datos financieros</h3>
                    <div className="grupo3">
                        <Input
                            label="RFC: "
                            onChange={handleChange}
                            id="RFC"
                            value={formData.RFC}
                            type="text"
                        />
                        <Input
                            label="CURP: "
                            onChange={handleChange}
                            id="CURP"
                            value={formData.CURP}
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
                            onChange={handleChange}
                            value={formData.Ciudad}
                            ciudades={ciudades}
                        />
                    </div>
                </form>
            </div>
            <div className="Cancelar-y-Guardar">
                <button className="Cancelar" onClick={Cancell}>
                    <FaRegTimesCircle />Cancelar
                </button>
                <button className="Guardar" onClick={handleSubmit}>
                    <FaRegSave /> Guardar
                </button>
            </div>
        </div >
    );
};

export default ClienteForm;