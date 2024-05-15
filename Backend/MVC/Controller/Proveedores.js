const pool = require("../Model/Connection");

//agregar un proveedor nuevo
const agregarProveedor = async (req, res) => {
  try {
    const { IDProveedor, Nombre, Telefono, RFC, CURP, IDCiudad } = req.body;
    const sql =
      "INSERT INTO Proveedor (IDProveedor,Nombre, Telefono, RFC, CURP, IDCiudad) VALUES (?,?,?,?, ?)";
    const result = await pool.query(sql, [
      parseInt(IDProveedor),
      Nombre,
      Telefono,
      RFC,
      CURP,
      parseInt(IDCiudad),
    ]);
    console.log("Proveedor agregado:", result);
    res
      .status(201)
      .send({ success: true, message: "Proveedor Añadido", rows: rows });
  } catch (err) {
    console.error("Error al agregar proveedor:", err);
    res
      .status(500)
      .send({
        success: false,
        message: "Error al querer agregar un proveedor",
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
    res
      .status(500)
      .send({
        success: false,
        message: "Error al querer obtener los proveedores",
      });
  }
};

//Eliminar un proveedor de la lista
const EliminarProveedor = async (req, res) => {
  try {
    const { IDProveedor } = req.body;
    const sql = "DELETE FROM Proveedor WHERE IDProveedor = ?";
    const result = await pool.query(sql, [parseInt(IDProveedor)]);
    console.log("Proveedor eliminado:", result);
    res
      .status(201)
      .send({ success: true, message: "Proveedor eliminado", rows: rows });
  } catch (err) {
    console.error("Error al eliminar proveedor:", err);
    res
      .status(500)
      .send({
        success: false,
        message: "Error al querer eliminar un proveedor",
      });
  }
};

module.exports = { agregarProveedor, ObtenerProveedor, EliminarProveedor };
//ya quedo parseado, y comprobada en postman
