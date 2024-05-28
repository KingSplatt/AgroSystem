const pool = require('../Model/Connection');

// Crear una nueva compra
const NuevaCompra = async (req, res) => {
    console.log('Nueva compra');
    try {
        const { productos, i, r } = req.body; // i = IDCedi, r = IDEmpleado

        const fechaActual = new Date();
        const FechaPedido = fechaActual.toISOString().split('T')[0];

        // Insertar la compra
        const [IDCompra] = await pool.query('SELECT COUNT(IDCompra)+1 AS IDCompra FROM Compra');


        const compraSQL = 'INSERT INTO Compra (IDCompra, FechaPedido, SubTotal, Total, IDCedi, IDEmpleado) VALUES (?, ?, ?, ?, ?, ?)';
        const compraResult = await pool.query(compraSQL, [IDCompra[0].IDCompra, FechaPedido, 0, 0, i, r]);

        // Insertar los detalles de la compra

        for (let i = 0; i < productos.length; i++) {

            const detalleCompraSQL = 'INSERT INTO DetalleCompra (IDCompra, IDProducto, Cantidad, PrecioUnitario) VALUES (?, ?, ?, ?)';

            // Obtener el PrecioUnitario del producto desde la tabla Producto
            const [productoInfo] = await pool.query('SELECT PrecioUnitario FROM Producto WHERE IDProducto = ?;', [productos[i].IDProducto]);
            const PrecioUnitario = productoInfo[0].PrecioUnitario;

            // Insertar el detalle de la compra
            await pool.query(detalleCompraSQL, [IDCompra[0].IDCompra, productos[i].IDProducto, productos[i].Cantidad, PrecioUnitario]);
        }


        res.status(201).send({ success: true, message: "Compra creada exitosamente" });

    } catch (err) {
        console.error('Error al crear la compra:', err);
        res.status(500).send({ success: false, message: 'Error al crear la compra' });
    }
}


// Ver el historial de compras
const HistorialCompras = async (req, res) => {
    try {
        const [rows, fields] = await pool.query(`
            SELECT 
                C.IDCompra, 
                C.FechaPedido, 
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

