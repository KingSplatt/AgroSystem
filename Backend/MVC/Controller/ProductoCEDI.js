const pool = require("../Model/Connection");

//Obtener los productos del almacen de la CEDI
const ObtenerProductosCEDI = async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT DISTINCT P.IDProducto, P.Nombre, P.Descripcion, P.PrecioUnitario, P.Descontinuado, ' +
            'Pr.Nombre AS `Nombre Proveedor`, P.IDCategoria FROM Producto AS P ' +
            'INNER JOIN Proveedor AS Pr ON Pr.IDProveedor = P.IDProveedor ' +
            'INNER JOIN Categoria AS C ON C.IDCategoria = P.IDCategoria;');
        res.status(200).send({ success: true, rows: rows })
    } catch (err) {
        console.error('Error al obtener productos:', err);
        res.status(500).send({ success: false, message: 'Error al obtener Productos' });
    }
}

module.exports = { ObtenerProductosCEDI };

// probado con Postman
