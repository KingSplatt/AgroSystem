const pool = require("../Model/Connection");

// Crear una nueva compra
const NuevaCompra = async (req, res) => {
  try {
    const {
      IDCompra,
      FechaPedido,
      FechaEntrega,
      SubTotal,
      Total,
      IDCedi,
      IDEmpleado,
    } = req.body;
    const sql =
      "INSERT INTO Compra (IDCompra, FechaPedido, FechaEntrega, SubTotal, Total, IDCedi, IDEmpleado) VALUES ( ? , ? , ?, ?, ?, ?, ?)";
    const result = await pool.query(sql, [
      parseInt(IDCompra),
      FechaPedido,
      FechaEntrega,
      parseFloat(SubTotal),
      parseFloat(Total),
      parseInt(IDCedi),
      parseInt(IDEmpleado),
    ]);
    console.log("Compra exitosa", result);
    res
      .status(201)
      .send({
        success: true,
        message: "Compra creada exitosamente",
        rows: rows,
      });
  } catch (err) {
    console.error("Error al crear la venta", err);
    res
      .status(500)
      .send({ success: false, message: "Error al crear la venta" });
  }
};

// Ver el historial de compras
const HistorialCompras = async (req, res) => {
  try {
    const [rows, fields] = await pool.query(
      "SELECT C.IDCompra, C.FechaPedido, C.FechaEntrega, C.SubTotal, C.Total, C.IDCedi, C.IDEmpleado FROM Compra C"
    );
    console.log("Compras hechas hasta el momento", rows);
    res
      .status(201)
      .send({
        success: true,
        message: "Compras realizadas existosamente",
        rows: rows,
      });
  } catch (err) {
    console.error("Error al consultar las ventas", err);
    res
      .status(500)
      .send({ success: false, message: "Error al consultar las compras" });
  }
};

// Eliminar compras del historial
const EliminarCompra = async (req, res) => {
  try {
    const { IDCompra } = req.body;
    const sql = "DELETE FROM Compra WHERE IDCompra = ?";
    const result = await pool.query(sql, [parseInt(IDCompra)]);
    console.log("Compra eliminada", result);
    res
      .status(201)
      .send({
        success: true,
        message: "La compra ha sido eliminada del historial",
      });
  } catch (err) {
    console.error("Error al eliminar la compra", err);
    res
      .status(500)
      .send({
        success: false,
        message: "Error al eliminar la compra algun dato esta incorrecto",
      });
  }
};

module.exports = { NuevaCompra, HistorialCompras, EliminarCompra };
//ya quedo parseada, y comprobada en postman
