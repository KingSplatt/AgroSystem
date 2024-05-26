const pool = require("../Model/Connection");
/*
    API de Proveedores : FUNCIONANDO CORRECTAMENTE
*/
//agregar un proveedor nuevo
const agregarProveedor = async (req, res) => {
  try {
    const { Nombre, RFC, CURP, Ciudad, Correo, Telefono, Legalizado } =
      req.body;
    if (
      !Nombre ||
      !RFC ||
      !CURP ||
      !Ciudad ||
      !Correo ||
      !Telefono ||
      !Legalizado
    ) {
      return res.status(400).send({
        success: false,
        message: "Faltan campos por llenar",
      });
    }
    const LegalizadoValue = parseInt(Legalizado);
    const [IDProveedor, fields] = await pool.query(
      "SELECT COUNT(IDProveedor)+1 AS IDProveedor FROM Proveedor"
    );
    const [IDCiudad, campos] = await pool.query(
      "SELECT IDCiudad FROM Ciudad WHERE Nombre = ?;",
      [Ciudad]
    );
    const insertSQL =
      "INSERT INTO Proveedor (IDProveedor, Nombre, Telefono, Correo, RFC, CURP, Legalizado, IDCiudad) VALUES (?,?,?,?,?,?,?,?);";
    const insertResult = await pool.query(insertSQL, [
      parseInt(IDProveedor[0].IDProveedor),
      Nombre,
      Telefono,
      Correo,
      RFC,
      CURP,
      LegalizadoValue,
      parseInt(IDCiudad[0].IDCiudad),
    ]);
    console.log("Proveedor agregado:", insertResult);
    res.status(201).send({ success: true, message: "Proveedor Añadido" });
  } catch (err) {
    console.error("Error al agregar proveedor:", err);
    res.status(500).send({
      success: false,
      message: "Error al querer agregar un proveedor",
      error: err.message,
    });
  }
};

//Obtener un proveedor de la lista
const ObtenerProveedor = async (req, res) => {
  try {
    const [rows, fields] = await pool.query("SELECT * FROM Proveedor");
    console.log("Proveedores:", rows);
    res.status(200).send({ success: true, rows: rows });
  } catch (err) {
    console.error("Error al obtener ciudades:", err);
    res.status(500).send({
      success: false,
      message: "Error al querer obtener los proveedores",
    });
  }
};

//Eliminar un proveedor de la lista
const EliminarProveedor = async (req, res) => {
  try {
    const { IDProveedor } = req.body;
    const deleteSQL = "DELETE FROM Proveedor WHERE IDProveedor = ?";
    const deleteResult = await pool.query(deleteSQL, [parseInt(IDProveedor)]);
    console.log("Proveedor eliminado:", deleteResult);
    res.status(201).send({ success: true, message: "Proveedor eliminado" });
  } catch (err) {
    console.error("Error al eliminar proveedor:", err);
    res.status(500).send({
      success: false,
      message: "Error al querer eliminar un proveedor",
    });
  }
};


const ActualizarProveedor = async (req, res) => {
  try {
    const { IDProveedor, Nombre,Telefono,Correo, RFC, CURP, Legalizado, IDCiudad } = req.body;

    // Crear un objeto con los campos a actualizar
    const camposActualizar = {};
    if (Nombre) camposActualizar.Nombre = Nombre;
    if (RFC) camposActualizar.RFC = RFC;
    if (CURP) camposActualizar.CURP = CURP;
    if (IDCiudad) camposActualizar.IDCiudad = parseInt(IDCiudad);
    if (Correo) camposActualizar.Correo = Correo;
    if (Telefono) camposActualizar.Telefono = Telefono;
    if (Legalizado) camposActualizar.Legalizado = parseInt(Legalizado);


    // Construir la consulta SQL
    const updateSQL = "UPDATE Proveedor SET Nombre = ?, RFC = ?, CURP = ?, IDCiudad = ?, Correo = ?, Telefono = ?, Legalizado = ? WHERE IDProveedor = ?";
    const updateResult = await pool.query(updateSQL, [camposActualizar.Nombre, camposActualizar.RFC, camposActualizar.CURP, camposActualizar.IDCiudad, camposActualizar.Correo, camposActualizar.Telefono, camposActualizar.Legalizado, IDProveedor]);

    console.log("Proveedor actualizado:", updateResult);
    res.status(200).send({ success: true, message: "Proveedor actualizado correctamente" });
  } catch (err) {
    console.error("Error al actualizar proveedor:", err);
    res.status(500).send({
      success: false,
      message: "Error al querer actualizar el proveedor",
      error: err.message,
    });
  }
};




// Obtener un proveedor por clave
const ObtenerProveedorByClave = async (req, res) => {
  try {
    const { clave } = req.params;
    const [rows, fields] = await pool.query("SELECT * FROM Proveedor WHERE IDProveedor = ?", [clave]);
    if (rows.length === 0) {
      return res.status(404).send({
        success: false,
        message: "Proveedor no encontrado",
      });
    }
    console.log("Proveedor:", rows[0]);
    res.status(200).send({ success: true, proveedor: rows[0] });
  } catch (err) {
    console.error("Error al obtener proveedor por clave:", err);
    res.status(500).send({
      success: false,
      message: "Error al querer obtener el proveedor",
    });
  }
};

module.exports = { agregarProveedor, ObtenerProveedor, EliminarProveedor,ObtenerProveedorByClave,ActualizarProveedor };
