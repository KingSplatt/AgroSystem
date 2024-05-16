const pool = require('../Model/Connection');

// agregar venta a credito
const NuevaVentaCredito = async (req, res) => {
    try {
        const { IDVenta, FechaPedido, Subtotal, Total, Credito, IDCliente, IDEmpleado, PrecioUnitario, Cantidad, IDProducto, FechaPlazo, PagoInicial } = req.body;
        if (!IDVenta || !FechaPedido || !Subtotal || !Total || !Credito || !IDCliente || !IDEmpleado || !PrecioUnitario || !Cantidad || !IDProducto || !FechaPlazo || !PagoInicial) {
            return res.status(400).send({ success: false, message: 'Faltan campos por llenar' });
        }
        Credito = 1;
        Subtotal = PrecioUnitario * Cantidad;
        Total = Subtotal * 1.16;
        const ventaC = 'INSERT INTO Venta (  IDVenta, FechaPedido, Subtotal, Total, Credito, IDCliente, IDEmpleado) VALUES (?,?, ?, ?, ?, ?, ?)';
        const result = await pool.query(ventaC, [parseInt(IDVenta), FechaPedido, parseFloat(Subtotal), parseFloat(Total), Credito, parseInt(IDCliente), parseInt(IDEmpleado)]);
        const detalleVenta = 'INSERT INTO DetalleVentaCredito (PrecioUnitario, Cantidad, FechaPlazo, PagoInicial, IDVenta, IDProducto) VALUES (?, ?, ?, ?, ? , ?)';
        const detalleVentaResult = await pool.query(detalleVenta, [parseInt(IDVenta), parseInt(IDProducto), parseInt(Cantidad), parseFloat(PrecioUnitario), FechaPlazo, PagoInicial]);
        console.log('Venta a credito añadida', result, detalleVentaResult);
        res.status(201).send({ success: true, message: "Venta a credido creada" });
    } catch (err) {
        console.error('Error al crear la venta', err);
        res.status(500).send({ success: false, message: 'Error al crear la venta a credotp' });
    }
}

// Ver los creditos registrados
const HistorialCreditos = async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT V.IDVenta,P.Nombre, V.FechaPedido, V.Subtotal, V.Total, DVC.Cantidad, DVC.PrecioUnitario,DVC.FechaPlazo, DVC.PagoInicial, C.Nombre, E.Nombre FROM Venta AS V ' +
            'INNER JOIN DetalleVentaCredito AS DVC ON DVC.IDVenta = V.IDVenta ' +
            'INNER JOIN Cliente AS C ON V.IDCliente = C.IDCLiente ' +
            'INNER JOIN Empleado AS E ON V.IDEmpleado = E.IDEmpleado ' +
            'INNER JOIN Producto AS P ON P.IDProducto = DVC.IDProducto WHERE Credito = 1');
        console.log('Ventas a credito', rows);
        res.status(201).send({ success: true, message: 'Ventas a credito registradas', rows: rows });
    } catch (err) {
        console.error('Error al consultar los creditos', err);
        res.status(500).send({ success: false, message: 'Error al consultar los creditos' });
    }
}

module.exports = { NuevaVentaCredito, HistorialCreditos };
//ya quedo parseada, y comprobada en postman

