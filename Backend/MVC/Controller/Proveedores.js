const pool = require("../Model/Connection");
/*
    API de Proveedores : FUNCIONANDO CORRECTAMENTE
*/
//agregar un proveedor nuevo
const agregarProveedor = async (req, res) => {
  try {
    const { Nombre, RFC, CURP, Ciudad, Correo, Telefono, Legalizado } = req.body;
    if (!Nombre || !RFC || !CURP || !Ciudad || !Correo || !Telefono || !Legalizado) {
      return res.status(400).send({
        success: false,
        message: "Faltan campos por llenar",
      });
    }

    // Verificar unicidad de RFC y CURP
    const [rfcResult] = await pool.query("SELECT COUNT(*) AS count FROM Proveedor WHERE RFC = ?", [RFC]);
    const [curpResult] = await pool.query("SELECT COUNT(*) AS count FROM Proveedor WHERE CURP = ?", [CURP]);

    if (rfcResult[0].count > 0) {
      return res.status(400).send({
        success: false,
        message: "El RFC ya existe en la base de datos",
      });
    }

    if (curpResult[0].count > 0) {
      return res.status(400).send({
        success: false,
        message: "El CURP ya existe en la base de datos",
      });
    }

    const LegalizadoValue = parseInt(Legalizado);
    const [IDProveedorResult] = await pool.query(
      "SELECT COUNT(IDProveedor)+1 AS IDProveedor FROM Proveedor"
    );
    const [IDCiudadResult] = await pool.query(
      "SELECT IDCiudad FROM Ciudad WHERE Nombre = ?",
      [Ciudad]
    );

    const insertSQL =
      "INSERT INTO Proveedor (IDProveedor, Nombre, Telefono, Correo, RFC, CURP, Legalizado, IDCiudad) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const insertResult = await pool.query(insertSQL, [
      parseInt(IDProveedorResult[0].IDProveedor),
      Nombre,
      Telefono,
      Correo,
      RFC,
      CURP,
      LegalizadoValue,
      parseInt(IDCiudadResult[0].IDCiudad),
    ]);

    console.log("Proveedor agregado:", insertResult);
    res.status(201).send({ success: true, message: "Proveedor añadido" });
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
    const { IDProveedor, Nombre, Telefono, Correo, RFC, CURP, Legalizado, IDCiudad } = req.body;

    if (!IDCiudad) {
      throw new Error("IDCiudad cannot be null");
    }

    const updateSQL = "UPDATE Proveedor SET Nombre = ?, RFC = ?, CURP = ?, IDCiudad = ?, Correo = ?, Telefono = ?, Legalizado = ? WHERE IDProveedor = ?";
    await pool.query(updateSQL, [Nombre, RFC, CURP, IDCiudad, Correo, Telefono, Legalizado, IDProveedor]);

    console.log("Proveedor actualizado correctamente");
    res.status(200).send({ success: true, message: "Proveedor actualizado correctamente" });
  } catch (err) {
    console.error("Error al actualizar proveedor:", err);
    res.status(500).send({
      success: false,
      message: "Error al actualizar proveedor",
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
