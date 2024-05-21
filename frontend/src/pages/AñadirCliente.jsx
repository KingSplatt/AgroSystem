import React, { useState } from "react";
import { FaRegSave, FaRegTimesCircle } from "react-icons/fa";
import "../Estilos/AddProveedores.css";

const AnadirCliente = () => {
  return (
    <div className="Formulario AC">
      <h2>Añadir Cliente</h2>

      <form className="ADDP">
        <div className="Grupo1">

          <div className="form-group">
            <label htmlFor="Clave">Clave:</label>
            <input type="text" id="Clave" />
          </div>
          <div className="form-group">
            <label htmlFor="Nombre">Nombre:</label>
            <input type="text" id="Nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="ApellidoPaterno">Apellido Paterno:</label>
            <input type="text" id="ApellidoPaterno" />
          </div>
          <div className="form-group">
            <label htmlFor="Ciudad">Ciudad:</label>
            <input type="text" id="Ciudad" />
            {/*Opciones de ciudad*/}
          </div>
          <div className="form-group">
            <label htmlFor="Telefono">Numero de telefono:</label>
            <input type="text" id="Telefono" />
          </div>
        </div>

        <div className="Group2">

          <div className="form-group">
            <label htmlFor="Usuario">Usuario:</label>
            <input type="text" id="Usuario" />
          </div>
          <div className="form-group">
            <label htmlFor="Contraseña:">Contraseña:</label>
            <input type="text" id="Contraseña" />
          </div>
          <div className="Correo">
            <label htmlFor="Correo">Correo electronico:</label>
            <input type="text" id="Correo" />
          </div>
        </div>

        <div className="Group3">

          <div className="form-group">
            <label htmlFor="RFC">RFC:</label>
            <input type="text" id="RFC" />
          </div>
          <div className="form-group">
            <label htmlFor="CURP">CURP:</label>
            <input type="text" id="CURP" />
          </div>
        </div>

        <div className="CyG">
            <button className="Cancel"><FaRegTimesCircle/>Cancelar</button>
            <button className="Save"><FaRegSave/>Guardar</button>
        </div>

      </form>
    </div>
  );
};

export default AnadirCliente;
