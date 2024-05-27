import React, { useEffect, useState } from "react";
import { FaRegSave, FaRegTimesCircle } from "react-icons/fa";

const ModificarProductos = () => {
  const [productosOriginales, setProductosOriginales] = useState([]);
  const [filas, setFilas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [productosModificados, setProductosModificados] = useState([]);
  const [empleado, setEmpleado] = useState(null);

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      // Aqui se llama a la API para obtener los productos
      const response = await fetch("http://localhost:8080/productos");
      const data = await response.json();
      const rows = data.rows;
      setProductosOriginales(rows);
      setFilas(rows);

      console.log("Productos: ", rows);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  const manejarCambioInput = (id, campo, valor) => {
    console.log("Cambiando producto", id, campo, valor);

    const filasActualizadas = filas.map((fila) =>
      fila.IDproducto === id ? { ...fila, [campo]: valor } : fila
    );
    setFilas(filasActualizadas);

    // Añadir el producto modificado a productosModificados
    const productoModificado = filasActualizadas.find(fila => fila.IDproducto === id);
    setProductosModificados(prev => {
      const yaModificado = prev.find(prod => prod.IDproducto === id);
      if (yaModificado) {
        return prev.map(prod => prod.IDproducto === id ? productoModificado : prod);
      } else {
        return [...prev, productoModificado];
      }
    });
  };

  const guardarCambios = async () => {

    //comrobar si hay productos modificados
    if (productosModificados.length === 0) {
      alert("No hay cambios que guardar");
      return;
    }

    try {
      const promises = productosModificados.map(async (producto) => {
        console.log("Actualizando producto:", producto.IDproducto);
        const response = await fetch(`http://localhost:8080/productosSucursal/${producto.IDproducto}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(producto),
        });
        if (!response.ok) {
          throw new Error(`Error al actualizar el producto ${producto.IDproducto}`);
        }
        return response.json();
      });

      const results = await Promise.all(promises);
      console.log("Resultados de actualización:", results);
      alert("Productos actualizados con éxito");
      setProductosModificados([]); // Limpiar los productos modificados una vez guardados
      fetchProductos(); // Recargar los productos después de guardar cambios
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
      alert("Ocurrió un error al guardar los cambios.");
    }
  };

  const cancelarCambios = () => {
    setFilas(productosOriginales);

    setProductosModificados([]); // Limpiar los productos modificados
  };

  const manejarCambioBusqueda = (e) => {

    setBusqueda(e.target.value);
    filtrarProductos(e.target.value);
  };

  const filtrarProductos = (terminoBusqueda) => {
    const productosFiltrados = productosOriginales.filter((producto) =>
      producto.Nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );
    setFilas(productosFiltrados);
  };

  return (
    <div className="IngresarProductos">
      <h2>Modificar Productos</h2>
      <div className="barraSuperior">
        <input
          type="search"
          placeholder="Buscar producto"
          value={busqueda}
          onChange={manejarCambioBusqueda}
        />
      </div>
      <div className="AddTabla">
        <table>
          <thead>
            <tr>
              <th>Clave</th>
              <th>Artículo</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Proveedor</th>
              <th>Descontinuado</th>
            </tr>
          </thead>
          <tbody>
            {filas.map((fila) => (
              <tr key={fila.IDproducto}>
                <td>{fila.IDproducto}</td>
                <td>{fila.Nombre}</td>
                <td>{fila.Descripcion}</td>
                <td>
                  <input
                    type="number"
                    value={fila.PrecioUnitario}
                    onChange={(e) =>
                      manejarCambioInput(fila.IDproducto, "PrecioUnitario", e.target.value)
                    }
                  />
                </td>
                <td>{fila.ProveedorN}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={fila.Descontinuado === 1}
                    onChange={(e) =>
                      manejarCambioInput(fila.IDproducto, "Descontinuado", e.target.checked ? 1 : 0)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="CyG">
        <button className="Cancel" onClick={cancelarCambios}>
          <FaRegTimesCircle /> Cancelar
        </button>
        <button className="Save" onClick={guardarCambios}>
          <FaRegSave /> Guardar
        </button>
      </div>
    </div>
  );
};

export default ModificarProductos;