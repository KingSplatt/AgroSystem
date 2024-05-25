import React from "react";
import { FaRegSave, FaRegTimesCircle } from "react-icons/fa";
import Input from "../Componentes/Input";
import Option from "../Componentes/Option";

const ProveedorForm = ({ formData, changeHandler, handleSubmit, ciudades }) => {
  return (
    <div className="formularioAP">
      <h2>Añadir proveedor</h2>

      <form className="ADDP">
        <div className="grupo1">
          <Input
            label="Nombre: "
            onChange={changeHandler}
            id="Nombre"
            value={formData.Nombre}
            type="text"
          />
          <Input
            label="RFC: "
            onChange={changeHandler}
            id="RFC"
            value={formData.RFC}
            type="text"
          />
          <Input
            label="CURP: "
            onChange={changeHandler}
            id="CURP"
            value={formData.CURP}
            type="text"
          />
        </div>

        <div className="grupo2">
          <Option
            label="Ciudad: "
            id="Ciudad"
            onChange={changeHandler}
            value={formData.Ciudad}
            ciudades={ciudades}
          />

          <Input
            label="Correo: "
            onChange={changeHandler}
            id="Correo"
            value={formData.Correo}
            type="email"
          />
          <Input
            label="Telefono: "
            onChange={changeHandler}
            id="Telefono"
            value={formData.Telefono}
            type="text"
          />
        </div>

        <div className="grupo3">
          <div className="form-group">
            <label htmlFor="legalizado">Legalizado: </label>
            <select
              id="Legalizado"
              value={formData.Legalizado}
              onChange={changeHandler}
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

export default ProveedorForm;
