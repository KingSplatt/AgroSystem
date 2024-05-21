import React, { useEffect, useState } from "react";
import { FaRegSave, FaRegTimesCircle, FaTrash } from "react-icons/fa";

const ModificarCliente = () => {
  const [DatosOriginales, setProductosOriginales] = useState([]);
  const [Filas, setFilas] = useState([]);

  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      // Aqui se llama a la api para obtener los clientes
      const response = await fetch();
      const data = await response.json();
      setClientesOriginales(data);
      setFilas(data);
    } catch (error) {
      console.log("Error al obtener los datos de los clientes: ", error);
    }
  };

  const eliminarFila = (id) => {
    setFilas(Filas.filter((Filas) => Filas.id !== id));
  };

  const ManejarCambioInput = (id, campo, valor) => {
    const FilasActualizadas = Filas.map((Filas) =>
      Filas.id === id ? { ...Filas, [campo]: valor } : Filas
    );
    setFilas(FilasActualizadas);
  };

  const GuardarCambios = () => {
    //Aqui para mandar los cambios al servidor, despues consultare las apis para ver que show
    console.log("Los cambios han sido guardaos: ", Filas);
  };

  const CancelarCambios = () => {
    //Al cancelar hay que restaurar los datos pasados
    setFilas(setProductosOriginales);
  };

  return (
    <div className="IngresarClientes">
      <h2>Modificar Clientes</h2>
      <div className="barraSuperior">
        <input type="search" placeholder="Buscar cliente" />
        <button className="Busqueda">Buscar</button>
      </div>
      <div className="AddTabla">
        <table>
          <thead>
            <tr>
              <th>Clave</th>
              <th>Nombre</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Usuario</th>
              <th>Contraseña</th>
              <th>Ciudad</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            {Filas.map((Filas) => (
              <tr key={Filas.id}>
                <td>{Filas.id}</td>
                <td>
                  <input
                    type="text"
                    value={Fila.Nombre}
                    onChange={(e) =>
                      manejarCambioInput(Filas.id, "Nombre", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={Filas.ApellidoPaterno}
                    onChange={(e) =>
                      manejarCambioInput(
                        Filas.id,
                        "Apellido Paterno",
                        e.target.value
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={Filas.ApellidoMaterno}
                    onChange={(e) =>
                      manejarCambioInput(
                        Filas.id,
                        "Apellido Materno",
                        e.target.value
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={Filas.Usuario}
                    onChange={(e) =>
                      manejarCambioInput(Filas.id, "Usuario", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={Filas.Contraseña}
                    onChange={(e) =>
                      manejarCambioInput(Filas.id, "Contraseña", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={Filas.Ciudad}
                    onChange={(e) =>
                      manejarCambioInput(Filas.id, "Ciudad", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={Filas.Telefono}
                    onChange={(e) =>
                      manejarCambioInput(Filas.id, "Telefono", e.target.value)
                    }
                  />
                </td>
                <td>
                  <button onClick={() => eliminarFila(Filas.id)}>
                    <FaTrash />
                  </button>
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
