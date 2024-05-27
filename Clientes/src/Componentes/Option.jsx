import React from "react";

const Option = ({ label, id, onChange, value, ciudades }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select id={id} onChange={onChange} value={value}>
        <option>Seleccionar: </option>
        {ciudades
          ? ciudades.map((ciudad, index) => (
              <option key={index} value={ciudad.Nombre}>
                {ciudad.Nombre}
              </option>
            ))
          : ""}
      </select>
    </div>
  );
};

export default Option;
