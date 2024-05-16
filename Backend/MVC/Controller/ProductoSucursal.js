const pool = require("../Model/Connection");
//obtener los productos de la sucursal
const ObtenerProductoSucursal = async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT PS.IDproducto, P.Nombre, P.Descripcion,P.PrecioUnitario,P.Descontinuado, ' +
            'Pr.Nombre , PS.IDSucursal, PS.FechaCaducidad, PS.FechaSurtido FROM ProductoSucursal PS ' +
            'INNER JOIN Producto AS P ON PS.IDproducto = P.IDProducto ' +
            'INNER JOIN Proveedor AS Pr ON Pr.IDProveedor = P.IDProveedor ' +
            'INNER JOIN Categoria AS C ON C.IDCategoria = P.IDCategoria;');
        res.status(200).send({ success: true, rows: rows })
    } catch (err) {
        console.error('Error al obtener productos:', err);
        res.status(500).send({ success: false, message: 'Error al obtener Productos' });
    }
}
//pedir productos a CEDI
const AgregarProductoSucursal = async (req, res) => {
    try {
        const { IDproducto, IDSucursal, FechaCaducidad, FechaSurtido } = req.body;
        if (!IDproducto || !IDSucursal || !FechaCaducidad || !FechaSurtido) {
            return res.status(400).send({ success: false, message: 'Faltan campos por llenar' });
        }
        const insertSQL = 'INSERT INTO ProductoSucursal (IDproducto, IDSucursal, FechaCaducidad, FechaSurtido) VALUES (?, ?, ?, ?)';
        const insertResult = await pool.query(insertSQL, [parseInt(IDproducto), parseInt(IDSucursal), FechaCaducidad, FechaSurtido]);
        const deleteSQL = 'DELETE FROM ProductoCEDI WHERE IDProducto = ?';
        const deleteResult = await pool.query(deleteSQL, [parseInt(IDproducto)]);
        console.log('Producto añadido:', insertResult, deleteResult);
        res.status(201).send({ success: true, message: "Producto añadido" });
    } catch (err) {
        console.error('Error al añadir producto:', err);
        res.status(500).send({ success: false, message: 'Error al querer añadir un producto' });
    }
}

//eliminara los productos (pendiente por usar), este se usara a la hora de elimnar un proveedor
const EliminarProductoSucursal = async (req, res) => {
    try {
        const { IDProducto, IDSucursal } = req.body;
        const sql = 'DELETE FROM ProductoSucursal WHERE IDProducto = ? AND IDSucursal = ?';
        const result = await pool.query(sql, [parseInt(IDProducto), parseInt(IDSucursal)]);
        console.log('Producto eliminado:', result);
        res.status(202).send({ success: true, message: "Producto eliminado" });
    } catch (err) {
        console.error('Error al eliminar producto:', err);
        res.status(500).send({ success: false, message: 'Error al querer eliminar un producto' });
    }
}
// actualizar productos de la sucursal
const ActualizarProductoSucursal = async (req, res) => {
    try {
        const { IDproducto, IDSucursal, FechaCaducidad, FechaSurtido } = req.body;
        const sql = 'UPDATE ProductoSucursal SET FechaCaducidad = ?, FechaSurtido = ? WHERE IDproducto = ? AND IDSucursal = ?';
        const result = await pool.query(sql, [FechaCaducidad, FechaSurtido, parseInt(IDproducto), parseInt(IDSucursal)]);
        console.log('Producto actualizado:', result);
        res.status(203).send({ success: true, message: "Producto actualizado" });
    } catch (err) {
        console.error('Error al actualizar producto:', err);
        res.status(500).send({ success: false, message: 'Error al querer actualizar un producto' });
    }
}

module.exports = { ObtenerProductoSucursal, AgregarProductoSucursal, EliminarProductoSucursal, ActualizarProductoSucursal }

//ya quedo parseado, y comprobada en postman

