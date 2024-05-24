const pool = require('../Model/Connection');

// agregar venta a normal
const NuevaVentaNormal = async (req, res) => {
    try {
        const { productos, metodoPago, montoRecibido, tarjetaInfo, totalPagar, Cliente, Empleado } = req.body;

        if (!productos || !metodoPago || !montoRecibido || !totalPagar) {
            return res.status(400).send({ success: false, message: 'Faltan campos por llenar' });
        }
        let Subtotal = 0;
        productos.forEach(producto => {
            Subtotal += producto.PrecioUnitario * producto.Cantidad;
        }
        );
        const Total = Subtotal * 1.16;

        const IDVenta = await pool.query('SELECT count(IDVenta)+1 FROM Venta;');
        const FechaPedido = new Date();
        const IDCliente = await pool.query('SELECT IDCliente FROM Cliente WHERE Nombre = ?', [Cliente]);
        const IDEmpleado = await pool.query('SELECT IDEmpleado FROM Empleado WHERE Nombre = ?', [Empleado]);

        const sqlVenta = 'INSERT INTO Venta (IDVenta, FechaPedido, SubTotal, Total, Credito, IDCliente, IDEmpleado) VALUES ( ?, ?, ?, ?, ?, ?, ?)';
        const result = await pool.query(sqlVenta, parseInt(IDVenta[0].IDVenta), FechaPedido, parseFloat(Subtotal), parseFloat(Total), 0, parseInt(IDCliente[0].IDCliente), parseInt(IDEmpleado[0].IDEmpleado));

        productos.forEach(async producto => {
            const sqlDetalleVenta = 'INSERT INTO DetalleVenta (IDVenta, IDProducto, Cantidad, PrecioUnitario) VALUES ( ?, ?, ?, ?)';
            await pool.query(sqlDetalleVenta, parseInt(IDVenta[0].IDVenta), parseInt(producto.IDProducto), parseInt(producto.Cantidad), parseFloat(producto.PrecioUnitario));
        });

        res.status(201).send({ success: true, message: 'Venta registrada' });
    } catch (error) {

    }
}

const HistorialVentas = async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT V.IDVenta,P.Nombre, V.FechaPedido, V.Subtotal, V.Total,V.Subtotal, DV.Cantidad, DV.PrecioUnitario, P.Nombre, E.Nombre FROM Venta AS V ' +
            'INNER JOIN DetalleVenta AS DV ON DV.IDVenta = V.IDVenta ' +
            'INNER JOIN Producto AS P ON DV.IDProducto = P.IDProducto ' +
            'INNER JOIN Empleado AS E ON E.IDEmpleado = V.IDEmpleado ' +
            'INNER JOIN Cliente AS C ON C.IDCliente = V.IDCliente WHERE Credito = 0');
        console.log('Ventas a credito', rows);
        res.status(201).send({ success: true, message: 'Ventas registradas', rows: rows });
    } catch (err) {
        console.error('Error al consultar los creditos', err);
        res.status(500).send({ success: false, message: 'Error al consultar las ventas' });
    }
}

module.exports = { NuevaVentaNormal, HistorialVentas };