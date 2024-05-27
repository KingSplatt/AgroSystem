import React from "react";

const Input = ({ id, type, label, onChange, value }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
