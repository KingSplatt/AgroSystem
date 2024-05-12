const pool = require('../Model/Connection');

// agregar venta a credito
const NuevaVentaCredito= async (req,res) => {
    try{
        const { PrecioUnitario, Cantidad, FechaPlazo, PagoInicial, IDVenta, IDProducto }= req.body;
        const sql = 'INSERT INTO Compra (  PrecioUnitario, Cantidad, FechaPlazo, PagoInicial, IDVenta, IDProducto) VALUES (?, ?, ?, ?, ?, ?)';
        const result = await pool.query(sql, [ PrecioUnitario, Cantidad, FechaPlazo, PagoInicial, IDVenta, IDProducto]);
        console.log('Venta a credito añadida', result);
        res.status(201).send({ success: true, message: "Venta a credido creada", rows: rows });
    }catch  (err){
        console.error('Error al crear la venta', err);
        res.status(500).send({ success: false, message: 'Error al crear la venta a credotp' });
    }
}

// Ver los creditos registrados
const HistorialCreditos = async (req, res) => {
    try{
        const [rows, fields] = await pool.query('SELECT  DVC.PrecioUnitario, DVC.Cantidad, DVC.FechaPlazo, DVC.PagoInicial, DVC.IDVenta, DVC.DProducto FROM Compra DVC');
        console.log('Ventas a credito', rows);
        res.status(201).send({ success: true, message: 'Ventas a credito registradas', rows: rows });
    }catch(err){
        console.error('Error al consultar los creditos', err);
        res.status(500).send({ success: false, message: 'Error al consultar los creditos' });
    }
}

module.exports = { NuevaVentaCredito, HistorialCreditos };