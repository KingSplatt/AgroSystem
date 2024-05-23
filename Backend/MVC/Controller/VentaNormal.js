const pool = require('../Model/Connection');

// agregar venta a normal
const NuevaVentaNormal = async (req, res) => {
    try {
        const { IDVenta, FechaPedido, Credito, IDCliente, IDEmpleado, productos} = req.body;
        let Subtotal = 0;
        let Total = 0;
        Credito = 0;

        if (!IDVenta || !FechaPedido || !Subtotal || !Total || !Credito || !IDCliente || !IDEmpleado || !PrecioUnitario || !Cantidad || !IDProducto) {
            return res.status(400).send({ success: false, message: 'Faltan campos por llenar' });
        }

        // Calcular el subtotal sumando el costo de cada producto
        productos.forEach(producto => {
            const { PrecioUnitario, Cantidad } = producto;
            Subtotal += PrecioUnitario * Cantidad;
        });
        //Calcular el total tomando en cuanta el subtotal calculado anteriormente
        Total = Subtotal * 1.16;

        const sql = 'INSERT INTO Venta (  IDVenta, FechaPedido, Subtotal, Total, Credito, IDCliente, IDEmpleado) VALUES ( ?, ?, ?, ?, ?, ?, ?)';
        const result = await pool.query(sql, [parseInt(IDVenta), FechaPedido, parseFloat(Subtotal), parseFloat(Total), Credito, parseInt(IDCliente), parseInt(IDEmpleado)]);
        const sql2 = 'INSERT INTO DetalleVenta (PrecioUnitario, Cantidad, IDVenta, IDProducto) VALUES ( ?, ?, ?, ?)';
        for (let producto of productos) {
            const { PrecioUnitario, Cantidad, IDProducto } = producto;
            await pool.query(sql2, [parseFloat(PrecioUnitario), parseInt(Cantidad), parseInt(IDVenta), parseInt(IDProducto)]);
        }

        //const result2 = await pool.query(sql2, [parseFloat(PrecioUnitario), parseInt(Cantidad), parseInt(IDVenta), parseInt(IDProducto)]);
        
        console.log('Venta a credito añadida', result, result2);
        res.status(201).send({ success: true, message: "Venta a credido creada" });
    } catch (err) {
        console.error('Error al crear la venta', err);
        res.status(500).send({ success: false, message: 'Error al crear la venta a credotp' });
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