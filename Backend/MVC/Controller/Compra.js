const pool = require('../Model/Connection');

// Crear una nueva compra
const NuevaCompra = async (req, res) => {
    try {
        const { FechaPedido, FechaEntrega, SubTotal, Total, CEDI, Empleado } = req.body;
        const { Cantidad, PrecioUnitario, Producto } = req.body;
        const fechaActual = new Date();
        if (!FechaPedido || !FechaEntrega || !SubTotal || !Total || !CEDI || !Empleado || !Cantidad || !PrecioUnitario || !Producto) {
            return res.status(400).send({ success: false, message: 'Faltan campos por llenar' });
        }
        const [IDCompra, fields] = await pool.query('SELECT COUNT(IDCompra)+1 AS IDCompra FROM Compra');
        const [IDCedi, campos] = await pool.query('SELECT IDCedi FROM CEDI WHERE Nombre = ?;', [CEDI]);
        const [IDEmpleado, campos2] = await pool.query('SELECT IDEmpleado FROM Empleado WHERE Nombre = ?;', [Empleado]);
        const [IDProducto, campos3] = await pool.query('SELECT IDProducto FROM Producto WHERE Nombre = ?;', [Producto]);
        SubTotal = Cantidad * PrecioUnitario;
        Total = SubTotal * 1.16;
        const compraSQL = 'INSERT INTO Compra (IDCompra, FechaPedido, FechaEntrega, SubTotal, Total, IDCedi, IDEmpleado) VALUES ( ? , ? , ?, ?, ?, ?, ?)';
        const compraResult = await pool.query(compraSQL, [parseInt(IDCompra[0].IDCompra), FechaPedido, FechaEntrega, parseFloat(SubTotal), parseFloat(Total), parseInt(IDCedi[0].IDCedi), parseInt(IDEmpleado[0].IDEmpleado)]);
        const detalleCompraSQL = 'INSERT INTO DetalleCompra (IDCompra, IDProducto, Cantidad, PrecioUnitario) VALUES (?, ?, ?, ?)';
        const detalleCompraResult = await pool.query(detalleCompraSQL, [parseInt(IDCompra[0].IDCompra), parseInt(IDProducto[0].IDEmpleado), parseInt(Cantidad), parseFloat(PrecioUnitario)]);
        console.log('Compra exitosa', compraResult, detalleCompraResult);
        res.status(201).send({ success: true, message: "Compra creada exitosamente" });
    } catch (err) {
        console.error('Error al crear la venta', err);
        res.status(500).send({ success: false, message: 'Error al crear la venta' });
    }
}

// Ver el historial de compras
const HistorialCompras = async (req, res) => {
    try {
        const [rows, fields] = await pool.query(`
            SELECT 
                C.IDCompra, 
                C.FechaPedido, 
                C.FechaEntrega, 
                SUM(DC.Cantidad * DC.PrecioUnitario) AS SubTotal, 
                ROUND(SUM(DC.Cantidad * DC.PrecioUnitario) * 1.16, 2) AS Total, 
                C.IDCedi, 
                C.IDEmpleado, 
                GROUP_CONCAT(CONCAT(DC.Cantidad, ' piezas de ', P.Nombre) ORDER BY DC.IDCompra SEPARATOR '; ') AS Productos
            FROM 
                Compra C
            INNER JOIN 
                DetalleCompra DC ON C.IDCompra = DC.IDCompra
            INNER JOIN 
                Producto P ON P.IDProducto = DC.IDProducto
            GROUP BY 
                C.IDCompra
        `);

        console.log('Compras hechas hasta el momento', rows);
        res.status(200).send({ success: true, message: 'Compras realizadas existosamente', rows: rows });
    } catch (err) {
        console.error('Error al consultar las compras', err);
        res.status(500).send({ success: false, message: 'Error al consultar las compras' });
    }
}


// Eliminar compras del historial
const EliminarCompra = async (req, res) => {
    try {
        const { IDCompra } = req.body;
        const deleteSQL = 'DELETE FROM Compra WHERE IDCompra = ?';
        const deleteResult = await pool.query(deleteSQL, [parseInt(IDCompra)]);
        const deleteDetalleSQL = 'DELETE FROM DetalleCompra WHERE IDCompra = ?';
        const deleteDetalleResult = await pool.query(deleteDetalleSQL, [parseInt(IDCompra)]);
        console.log('Compra eliminada', deleteResult, deleteDetalleResult);
        res.status(201).send({ success: true, message: 'La compra ha sido eliminada del historial' });
    } catch (err) {
        console.error('Error al eliminar la compra', err);
        res.status(500).send({ success: false, message: 'Error al eliminar la compra algun dato esta incorrecto' });
    }
}

module.exports = { NuevaCompra, HistorialCompras, EliminarCompra };
//ya quedo parseada, y comprobada en postman
