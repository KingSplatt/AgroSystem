const pool = require('../Model/Connection');

// Crear una nueva compra
const NuevaCompra = async (req, res) => {
    try {
        const { IDCompra, FechaPedido, FechaEntrega, SubTotal, Total, IDCedi, IDEmpleado } = req.body;
        const { Cantidad, PrecioUnitario, IDProducto } = req.body;
        SubTotal = Cantidad * PrecioUnitario;
        Total = SubTotal * 1.16;
        const compraSQL = 'INSERT INTO Compra (IDCompra, FechaPedido, FechaEntrega, SubTotal, Total, IDCedi, IDEmpleado) VALUES ( ? , ? , ?, ?, ?, ?, ?)';
        const compraResult = await pool.query(compraSQL, [parseInt(IDCompra), FechaPedido, FechaEntrega, parseFloat(SubTotal), parseFloat(Total), parseInt(IDCedi), parseInt(IDEmpleado)]);
        const detalleCompraSQL = 'INSERT INTO DetalleCompra (IDCompra, IDProducto, Cantidad, PrecioUnitario) VALUES (?, ?, ?, ?)';
        const detalleCompraResult = await pool.query(detalleCompraSQL, [parseInt(IDCompra), parseInt(IDProducto), parseInt(Cantidad), parseFloat(PrecioUnitario)]);
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
        const [rows, fields] = await pool.query('SELECT C.IDCompra, C.FechaPedido, C.FechaEntrega, C.SubTotal, C.Total, C.IDCedi, C.IDEmpleado, DC.Cantidad, DC.PrecioUnitario FROM Compra C ' +
            'INNER JOIN DetalleCompra DC ON C.IDCompra = DC.IDCompra ');
        console.log('Compras hechas hasta el momento', rows);
        res.status(201).send({ success: true, message: 'Compras realizadas existosamente', rows: rows });
    } catch (err) {
        console.error('Error al consultar las ventas', err);
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
