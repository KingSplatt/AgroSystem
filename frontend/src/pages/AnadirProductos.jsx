import React, { useEffect, useState } from "react";
import { FaPlus, FaRegSave, FaRegTimesCircle, FaTrash } from "react-icons/fa";
import "../Estilos/AddProductos.css";

const URI_Categorias = "http://localhost:8080/categorias";
const URI_Proveedores = "http://localhost:8080/proveedores";

const AnadirProductos = () => {
  const [Categorias, setCategorias] = useState([]);
  const [Proveedores, setProveedores] = useState([]);
  const [filas, setFilas] = useState([
    { IDProducto: 1, Nombre: "", Descripcion: "", PrecioUnitario: "", Descontinuado: "", IDProveedor: "", IDCategoria: "" }
  ]);

  useEffect(() => {
    fetchCategorias();
    fetchProveedores();
  }, []);

  const fetchCategorias = async () => {
    try {
      const responseC = await fetch(URI_Categorias);
      const Categorias = await responseC.json();
      const rowsC = Categorias.rows;
      if (Array.isArray(rowsC)) {
        setCategorias(rowsC);
      }
      console.log("Categorias:", rowsC);
    } catch (error) {
      alert("Error al obtener las categorias:", error);
    }
  };

  const fetchProveedores = async () => {
    try {
      const responseP = await fetch(URI_Proveedores);
      const Proveedores = await responseP.json();
      const rowsP = Proveedores.rows;
      if (Array.isArray(rowsP)) {
        setProveedores(rowsP);
      }
      console.log("Proveedores:", rowsP);
    } catch (error) {
      alert("Error al obtener los proveedores:", error);
    }
  };

  const agregarFila = () => {
    const nuevaFila = { IDProducto: Date.now(), Nombre: "", Descripcion: "", PrecioUnitario: "", Descontinuado: "", IDProveedor: "", IDCategoria: "" };
    setFilas([...filas, nuevaFila]);
  };

  const eliminarFila = (IDProducto) => {
    setFilas(filas.filter(fila => fila.IDProducto !== IDProducto));
  };

  const manejarCambioInput = (IDProducto, campo, valor) => {
    const filasActualizadas = filas.map(fila =>
      fila.IDProducto === IDProducto ? { ...fila, [campo]: valor } : fila
    );
    setFilas(filasActualizadas);
  };
  const Guardar  = async (e) => {
    let count = 0;
    for (let i = 0; i < filas.length; i++) {
      if(filas[i].Nombre === "" || filas[i].Descripcion === "" || filas[i].PrecioUnitario === "" || filas[i].Descontinuado === "" || filas[i].IDProveedor === "" || filas[i].IDCategoria === ""){
        alert("Por favor llene todos los campos");
        return;
      }
      filas[i].IDProveedor = Proveedores.find(proveedor => proveedor.Nombre === filas[i].IDProveedor).IDProveedor;
      filas[i].IDCategoria = Categorias.find(categoria => categoria.NombreCategoria === filas[i].IDCategoria).IDCategoria;
      filas[i].Descontinuado = filas[i].Descontinuado === "Si" ? 1 : 0;
      filas[i].PrecioUnitario = parseInt(filas[i].PrecioUnitario);
      console.log( JSON.stringify(filas[i]));
      try {
        const response = await fetch("http://localhost:8080/productos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filas[i]),
        });
        const data = await response.json();
        console.log(data);
        
      } catch (error) {
        console.error("Error al añadir producto:", error);
        alert("Error al añadir producto:", error);
        count++;
      }
    }
    if(count === 0){
          alert("Productos añadidos correctamente");
          setFilas([{ IDProducto: 1, Nombre: "", Descripcion: "", PrecioUnitario: "", Descontinuado: "", IDProveedor: "", IDCategoria: "" }]);
        }
      else{
        alert("Error al añadir productos");
      }
      count = filas.length;
    console.log(filas);

  
  };
  const Cancelar = () => {
    setFilas([{ IDProducto: 1, Nombre: "", Descripcion: "", PrecioUnitario: "", Descontinuado: "", IDProveedor: "", IDCategoria: "" }]);
  };

  return (
    <div className='IngresarProductos'>
      <h2>Añadir Productos</h2>
      <div className='Cuadro'>
        <div className='AddTabla'>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Proveedor</th>
                <th>Categoria</th>
                <th>Descontinuado</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {filas.map(fila => (
                <tr key={fila.IDProducto}>
                  <td>
                    <input
                      type="text"
                      value={fila.Nombre}
                      onChange={(e) => manejarCambioInput(fila.IDProducto, 'Nombre', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={fila.Descripcion}
                      onChange={(e) => manejarCambioInput(fila.IDProducto, 'Descripcion', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={fila.PrecioUnitario}
                      onChange={(e) => manejarCambioInput(fila.IDProducto, 'PrecioUnitario', e.target.value)}
                    />
                  </td>
                  <td>
                    <select onChange={(e) => manejarCambioInput(fila.IDProducto, 'IDProveedor', e.target.value)} value={fila.IDProveedor}>
                      <option>Seleccionar: </option>
                      {Proveedores
                        ? Proveedores.map((proveedor, index) => (
                          <option key={index} value={proveedor.Nombre}>
                            {proveedor.Nombre}
                          </option>
                        ))
                        : ""}
                    </select>
                  </td>
                  <td>
                    <select onChange={(e) => manejarCambioInput(fila.IDProducto, 'IDCategoria', e.target.value)} value={fila.IDCategoria}>
                      <option>Seleccionar: </option>
                      {Categorias
                        ? Categorias.map((categoria, index) => (
                          <option key={index} value={categoria.NombreCategoria}>
                            {categoria.NombreCategoria}
                          </option>
                        ))
                        : ""}
                    </select>
                  </td>
                  <td>
                    <select onChange={(e) => manejarCambioInput(fila.IDProducto, 'Descontinuado', e.target.value)} value={fila.Descontinuado}>
                      <option>Seleccionar: </option>
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                    </select>



                  </td>
                  <td><button onClick={() => eliminarFila(fila.IDProducto)}><FaTrash /></button></td>
                </tr>
              ))}
              <tr>
                <td colSpan="7" style={{ textAlign: 'center' }}>
                  <button className="Add" onClick={agregarFila}><FaPlus /> Añadir compra</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="CyG">
        <button className="Cancel" onClick={Cancelar}><FaRegTimesCircle /> Cancelar</button>
        <button className="Save" onClick={Guardar}><FaRegSave /> Guardar</button>
      </div>
    </div>
  );
};

export default AnadirProductos;