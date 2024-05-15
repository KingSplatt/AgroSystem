const pool = require("../Model/Connection");

// agregar venta a credito
const NuevaVentaCredito = async (req, res) => {
  try {
    const {
      IDVenta,
      FechaPedido,
      Subtotal,
      Total,
      Credito,
      IDCliente,
      IDEmpleado,
    } = req.body;
    const sql =
      "INSERT INTO Compra (  IDVenta, FechaPedido, Subtotal, Total, Credito, IDCliente, IDEmpleado) VALUES (?,?, ?, ?, ?, ?, ?)";
    const result = await pool.query(sql, [
      parseInt(IDVenta),
      FechaPedido,
      parseFloat(Subtotal),
      parseFloat(Total),
      parseInt(Credito),
      parseInt(IDCliente),
      parseInt(IDEmpleado),
    ]);
    console.log("Venta a credito añadida", result);
    res
      .status(201)
      .send({ success: true, message: "Venta a credido creada", rows: rows });
  } catch (err) {
    console.error("Error al crear la venta", err);
    res
      .status(500)
      .send({ success: false, message: "Error al crear la venta a credotp" });
  }
};

// Ver los creditos registrados
const HistorialCreditos = async (req, res) => {
  try {
    const [rows, fields] = await pool.query(
      "SELECT IDVenta, FechaPedido, Subtotal, Total, Credito, IDCLiente, IDEmpleado FROM Venta WHERE Credito = 1"
    );
    console.log("Ventas a credito", rows);
    res
      .status(201)
      .send({
        success: true,
        message: "Ventas a credito registradas",
        rows: rows,
      });
  } catch (err) {
    console.error("Error al consultar los creditos", err);
    res
      .status(500)
      .send({ success: false, message: "Error al consultar los creditos" });
  }
};

module.exports = { NuevaVentaCredito, HistorialCreditos };
//ya quedo parseada, y comprobada en postman
