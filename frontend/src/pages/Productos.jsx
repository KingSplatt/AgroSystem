import React from "react";
import Producto from "../components/Producto";
import "../static/styles/Productos.css";
import useProductos from "../hooks/hookProductos";

const VerProductos = () => {
  const productos = useProductos();

  return (
    <div className="table-container">
      <table className="productos-table">
        <tr>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th>Descontinuado</th>
          <th>Imagen</th>
          <th>Proveedor</th>
        </tr>

        {productos.map((producto, i) => {
          return (
            <Producto
              key={i}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              descontinuado={producto.descontinuado}
              imagen={producto.imagen}
              proveedor={producto.proveedor}
            />
          );
        })}
      </table>
    </div>
  );
};

export default VerProductos;
