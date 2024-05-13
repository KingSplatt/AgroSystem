const pool = require('../Model/Connection');
//obtener los productos de la sucursal
const ObtenerProductoSucursal = async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT PS.IDproducto, P.Nombre, P.Descripcion,P.PrecioUnitario,P.Descontinuado, ' +
            'Pr.Nombre AS `Nombre Proveedor`, PS.IDSucursal, PS.FechaCaducidad, PS.FechaSurtido FROM ProductoSucursal PS ' +
            'INNER JOIN Producto P ON PS.IDproducto = P.IDProducto' +
            'INNER JOIN Proveedor Pr ON Pr.IDProveedor = P.IDProveedor' +
            'INNER JOIN Categoria C ON C.IDCategoria = P.IDCategoria;');
        console.log('Usuarios obtenidos:', rows);
        res.status(200).send({ success: true, rows: rows })
    } catch (err) {
        res.status(500).send({ success: false, message: 'Error al obtener usuarios' });
    }
}
//agregar productos a la sucursal
const AgregarProductoSucursal = async (req, res) => {
    try {
        const { IDproducto, IDSucursal, FechaCaducidad, FechaSurtido } = req.body;
        const sql = 'INSERT INTO ProductoSucursal (IDproducto, IDSucursal, FechaCaducidad, FechaSurtido) VALUES (?, ?, ?, ?)';
        const result = await pool.query(sql, [IDproducto, IDSucursal, FechaCaducidad, FechaSurtido]);
        console.log('Producto agregado:', result);
        res.status(201).send({ success: true, message: "Producto Añadido", rows: rows });
    } catch (err) {
        console.error('Error al agregar producto:', err);
        res.status(500).send({ success: false, message: 'Error al querer agregar un producto' });
    }
}
//eliminara los productos (pendiente por usar), este se usara a la hora de elimnar un proveedor
const EliminarProductoSucursal = async (req, res) => {
    try {
        const { IDproducto, IDSucursal } = req.body;
        const sql = 'DELETE FROM ProductoSucursal WHERE IDproducto = ? AND IDSucursal = ?';
        const result = await pool.query(sql, [IDproducto, IDSucursal]);
        console.log('Producto eliminado:', result);
        res.status(202).send({ success: true, message: "Producto eliminado", rows: rows });
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
        const result = await pool.query(sql, [FechaCaducidad, FechaSurtido, IDproducto, IDSucursal]);
        console.log('Producto actualizado:', result);
        res.status(203).send({ success: true, message: "Producto actualizado", rows: rows });
    } catch (err) {
        console.error('Error al actualizar producto:', err);
        res.status(500).send({ success: false, message: 'Error al querer actualizar un producto' });
    }
}

module.exports = { ObtenerProductoSucursal, AgregarProductoSucursal, EliminarProductoSucursal, ActualizarProductoSucursal }