import React from "react";
import Producto from "../components/Producto";
import "../static/styles/Productos.css";
import useProductos from "../hooks/hookProductos";

const VerProductos = () => {
  const productos = useProductos();

  return (
    <div className="table-container">
      <table className="productos-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Descontinuado</th>
            <th>Imagen</th>
            <th>Proveedor</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((producto, i) => (
            <Producto
              key={i}
              nombre={producto.Nombre}
              descripcion={producto.Descripcion}
              precio={producto.PrecioUnitario}
              // Esto da error porque Descontinuado retorna un json.
              // descontinuado={producto.Descontinuado}
              proveedor={producto["Nombre Proveedor"]}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerProductos;
