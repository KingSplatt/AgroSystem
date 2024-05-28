const pool = require('../Model/Connection');

// agregar venta a normal
const NuevaVentaNormal = async (req, res) => {
    try {
        const { productos } = req.body;
        const IDEmpleado = req.body.IDEmpleado;
        const IDCliente = req.body.IDCliente;
        let Subtotal = 0;
        productos.forEach(producto => {

            Subtotal += producto.PrecioUnitario * producto.cantidad;
        }
        );

        const Total = Subtotal * 1.16;
        console.log(Total);

        const IDVenta = await pool.query('SELECT count(IDVenta)+1  AS IDVenta FROM Venta;');
        const FechaPedido = new Date();
        console.log(IDVenta[0][0].IDVenta);

        const sqlVenta = 'INSERT INTO Venta (IDVenta, FechaPedido, SubTotal, Total, Credito, IDCliente, IDEmpleado) VALUES ( ?, ?, ?, ?, ?, ?, ?)';
        await pool.query(sqlVenta, [parseInt(IDVenta[0][0].IDVenta), FechaPedido, parseFloat(Subtotal), parseFloat(Total), 0, IDCliente, IDEmpleado]);

        productos.forEach(async producto => {
            const sqlDetalleVenta = 'INSERT INTO DetalleVenta (IDVenta, IDProducto, Cantidad, PrecioUnitario) VALUES ( ?, ?, ?, ?)';
            await pool.query(sqlDetalleVenta, [parseInt(IDVenta[0][0].IDVenta), producto.IDProducto, producto.cantidad, producto.PrecioUnitario]);
        });

        res.status(201).send({ success: true, message: IDVenta[0][0].IDVenta });
    } catch (err) {
        console.error('Error al registrar la venta', err);
        res.status(500).send({ success: false, message: err });
    }
}

const HistorialVentas = async (req, res) => {
    try {
        const [rows, fields] = await pool.query(`SELECT 
        V.IDVenta,
        GROUP_CONCAT(P.Nombre SEPARATOR ', ') AS Productos,
        V.FechaPedido,
        V.Subtotal,
        V.Total,
        SUM(DV.Cantidad) AS TotalCantidad,
        AVG(DV.PrecioUnitario) AS PrecioUnitarioPromedio,
        E.Nombre AS Empleado,
        C.Nombre AS Cliente
    FROM 
        Venta AS V
        INNER JOIN DetalleVenta AS DV ON DV.IDVenta = V.IDVenta
        INNER JOIN Producto AS P ON DV.IDProducto = P.IDProducto
        INNER JOIN Empleado AS E ON E.IDEmpleado = V.IDEmpleado
        INNER JOIN Cliente AS C ON C.IDCliente = V.IDCliente
    WHERE 
        Credito = 0
    GROUP BY 
        V.IDVenta, V.FechaPedido, V.Subtotal, V.Total, E.Nombre, C.Nombre`);
        console.log('Ventas a credito', rows);
        res.status(201).send({ success: true, message: 'Ventas registradas', rows: rows });
    } catch (err) {
        console.error('Error al consultar los creditos', err);
        res.status(500).send({ success: false, message: 'Error al consultar las ventas' });
    }
}

module.exports = { NuevaVentaNormal, HistorialVentas };