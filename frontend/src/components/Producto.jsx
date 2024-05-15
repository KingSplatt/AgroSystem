import React from "react";
import "../static/styles/Producto.css";

const Producto = (props) => {
  return (
    <tr className="producto-block">
      <td>{props.nombre}</td>
      <td>{props.descripcion}</td>
      <td>{props.precio}</td>
      <td>{props.descontinuado}</td>
      <td>{props.imagen}</td>
      <td>{props.proveedor}</td>
    </tr>
  );
};

export default Producto;
