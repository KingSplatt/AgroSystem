import React from 'react';
import { FaRegSave, FaRegTimesCircle } from "react-icons/fa";
import "../Estilos/AddProveedores.css";

const ActualizarProveedor = () => {
  return (
    <div className="formularioAP">
      <h2>Actualizar proveedor</h2>


      <form className="ADDP">

        <div className="grupo1"> 

          <div className="form-group">
            <label htmlFor="clave">Clave: </label>
            <input type="text" id="clave" />
          </div>
          <div className="form-group">
            <label htmlFor="nombre">Nombre: </label>
            <input type="text" id="nombre" disabled/>
          </div>
          <div className="form-group">
            <label htmlFor="rfc">RFC: </label>
            <input type="text" id="rfc" disabled/>
          </div>

        </div>

        <div className="grupo2">

          <div className="form-group">
            <label htmlFor="telefono">Teléfono: </label>
            <input type="tel" id="telefono" />
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo: </label>
            <input type="email" id="correo" />
          </div>
          
          <div className="form-group">
            <label htmlFor="pais">País: </label>
            <select id="pais">
              <option value="">Seleccionar: </option>
              {/* Opciones de país */}
            </select>
        </div>

        </div>
        
        <div className="grupo3">

          <div className="form-group">
            <label htmlFor="ciudad">Ciudad: </label>
            <select id="ciudad">
              <option value="">Seleccionar: </option>
              {/* Opciones de ciudad */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="estado">Estado: </label>
            <select id="estado">
              <option value="">Seleccionar: </option>
              {/* Opciones de estado */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="calle">Calle: </label>
            <input type="text" id="calle" />
          </div>

        </div>

        
        <div className="CyG">
           <button className="Cancel"><FaRegTimesCircle /> Cancelar</button>
           <button className= "Save"><FaRegSave /> Guardar</button>
        </div>
        
      </form>
    </div>
  );
};

export default ActualizarProveedor;