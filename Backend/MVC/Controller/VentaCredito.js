const pool = require('../Model/Connection');

// agregar venta a credito
const NuevaVentaCredito = async (req, res) => {
    try {
        const { productos } = req.body;
        const IDEmpleado = req.body.IDEmpleado;
        const IDCliente = req.body.IDCliente;
        const PagoInicial = req.body.anticipo;
        let Subtotal = 0;
        productos.forEach(producto => {
            Subtotal += producto.PrecioUnitario * producto.cantidad;
        });
        const Total = Subtotal * 1.16;
        console.log(PagoInicial);
        const IDVenta = await pool.query('SELECT count(IDVenta)+1  AS IDVenta FROM Venta;');
        const FechaPedido = new Date();
        const sqlVenta = 'INSERT INTO Venta (IDVenta, FechaPedido, Subtotal, Total, Credito, IDCliente, IDEmpleado) VALUES ( ?, ?, ?, ?, ?, ?, ?)';
        await pool.query(sqlVenta, [parseInt(IDVenta[0][0].IDVenta), FechaPedido, parseFloat(Subtotal), parseFloat(Total), 1, IDCliente, IDEmpleado]);
        productos.forEach(async producto => {
            FechaPlazo = new Date();
            const sqlDetalleVenta = 'INSERT INTO DetalleVentaCredito (IDVenta, IDProducto, Cantidad, PrecioUnitario, FechaPlazo, PagoInicial) VALUES ( ?, ?, ?, ?, ?, ?)';
            await pool.query(sqlDetalleVenta, [parseInt(IDVenta[0][0].IDVenta), producto.IDProducto, producto.cantidad, producto.PrecioUnitario, FechaPlazo, PagoInicial]);
        });
        res.status(201).send({ success: true, message: IDVenta[0][0].IDVenta });
    } catch (error) {
        console.error('Error al registrar la venta', error);
        res.status(500).send({ success: false, message: error });

    }
}

// Ver los creditos registrados
const HistorialCreditos = async (req, res) => {
    const Credito = req.params.id;
    try {
        const [rows, fields] = await pool.query(`SELECT * FROM Venta AS V WHERE Credito = ?`, [Credito]);
        console.log('Ventas a credito', rows);
        res.status(201).send({ success: true, message: 'Ventas registradas', rows: rows });
    } catch (err) {
        console.error('Error al consultar los creditos', err);
        res.status(500).send({ success: false, message: 'Error al consultar las ventas' });
    }
}

module.exports = { NuevaVentaCredito, HistorialCreditos };
//ya quedo parseada, y comprobada en postman

