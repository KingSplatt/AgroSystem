import React from "react";
import { FaRegSave, FaRegTimesCircle } from "react-icons/fa";
import "../Estilos/AddProveedores.css";

const AnadirCliente = () => {
  return (
    <div>
      <h1>Añadir Cliente</h1>

      <form className="ADDP">
        <div className="grupo1">
          <div className="form-group">
            <label htmlFor="Clave">Clave</label>
            <input type="text" id="Clave" />
          </div>
          <div className="form-group">
            <label htmlFor="Nombre">Nombre(s)</label>
            <input type="text" id="Nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="ApellidoPaterno">Apellido Paterno</label>
            <input type="text" id="ApellidoPaterno" />
          </div>
          <div className="form-group">
            <label htmlFor="ApellidoMaterno">Apellido Materno</label>
            <input type="text" id="ApellidoMaterno" />
          </div>
        </div>

        <div className="grupo2">
          <div className="form-group">
            <label htmlFor="Usuario">Usuario</label>
            <input type="text" id="Usuario" />
          </div>
          <div className="form-group">
            <label htmlFor="Contraseña">Contraseña</label>
            <input type="text" id="Contraseña" />
          </div>
          <div className="form-group">
            <label htmlFor="Correo">Correo</label>
            <input type="text" id="Correo" />
          </div>
          <div className="form-group">
            <label htmlFor="Telefono">Telefono</label>
            <input type="text" id="Telefono" />
          </div>
        </div>

        <div className="grupo3">
          <div className="form-group">
            <label htmlFor="RFC">RFC</label>
            <input type="text" id="RFC" />
          </div>
          <div className="form-group">
            <label htmlFor="CURP">CURP</label>
            <input type="text" id="CURP" />
          </div>
          <div className="form-group">
            <label htmlFor="Ciudad">Ciudad</label>
            <select id="Ciudad">
              <option value="">Selecciona tu ciudad </option>
            </select>
            {/*Opciones de ciudad*/}
          </div>
        </div>

        <div className="CyG">
          <button className="Cancel">
            <FaRegTimesCircle />
            Cancelar
          </button>
          <button className="Guardar">
            <FaRegSave />
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnadirCliente;
