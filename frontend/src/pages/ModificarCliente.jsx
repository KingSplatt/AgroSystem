import React, { useEffect, useState, userEffect } from "react";
import { FaRegSave, FaRegTimesCircle, FaTrash } from "react-icons/fa";

const ModificarCliente = () => {
  const [DatosOriginales, setDatosOriginales] = useState([]);
  const [Filas, setFilas] = useState([]);

  useEffect(() => {
    fetchClientes();
  });

  const fetchClientes = async () => {
    try {
      //Aqui se llama a la API para obtener los clientes
      const response = await fetch();
      const data = await response.json();
      setDatosOriginales(data);
      setFilas(data);
    } catch (error) {
      console.log("Error al obtener los clientes", error);
    }
  };

  const EliminarClientes = (id) => {
    setFilas(Filas.filter((Filas) => Filas.id !== id));
  };

  const ModificarCliente = (id, campo, valor) => {
    const FilasActualizadas = Filas.map((Fila) =>
      Fila.id === id ? { ...Fila, [campo]: valor } : Fila
    );
    setFilas(FilasActualizadas);
  };

  const Guardar = () => {
    //Falta implementar la logica para enviar los cambios al servidor
    console.log("Los cambios han sido guardados");
  };

  const Cancelar = () => {
    //Si cancelarmos, restauramos los datos originales
    setFilas(DatosOriginales);
  };

  return (
    <div className="ConsultarClientes">
      <h2>Modificar Cliente</h2>
      <div className="barraSuperior">
        <input type="search" placeholder="Buscar producto" />
        <button className="Busqueda">Buscar</button>
      </div>
      <div className="AddTabla">
        <table>
          <thead>
            <tr>
              <th>Clave</th>
              <th>Nombre(s)</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Usuario</th>
              <th>Constraseña</th>
              <th>Correo</th>
              <th>Telefono</th>
              <th>RFC</th>
              <th>CURP</th>
              <th>Ciudad</th>
            </tr>
          </thead>
          <tbody>
          {Filas.map((fila) => (
              <tr key={fila.id}>
                <td>{fila.id}</td>
                <td>
                  <input
                    type="text"
                    value={fila.Usuario}
                    onChange={(e) =>
                      ModificarCliente(fila.id, "Usuario", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={fila.Contraseña}
                    onChange={(e) =>
                      ModificarCliente(fila.id, "Contraseña", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={fila.Correo}
                    onChange={(e) =>
                      ModificarCliente(fila.id, "Correo", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={fila.proveedor}
                    onChange={(e) =>
                      ModificarCliente(fila.id, "Ciudad", e.target.value)
                    }
                  />
                </td>
                <td>
                  <button onClick={() => EliminarClientes(fila.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            </tbody>
        </table>
      </div>

      <div className="CyG">
        <button className="Cancelar" onClick={Cancelar}>
          <FaRegTimesCircle /> Cancelar
        </button>
        <button className="Guardar" onClick={Guardar}>
          <FaRegSave />
          Guardar
        </button>
      </div>
    </div>
  );
};

export default ModificarCliente;
