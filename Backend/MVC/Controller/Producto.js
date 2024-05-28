const pool = require("../Model/Connection");

const AgregarProducto = async (req, res) => {
    try {
        const { IDProducto, Nombre, Descripcion, PrecioUnitario, Descontinuado, IDProveedor, IDCategoria } = req.body;

        // Validar campos obligatorios
        if (!IDProducto) return res.status(400).send({ success: false, message: 'Falta el campo id' });
        if (!Nombre) return res.status(400).send({ success: false, message: 'Falta el campo Nombre' });
        if (!Descripcion) return res.status(400).send({ success: false, message: 'Falta el campo Descripcion' });
        if (PrecioUnitario === undefined) return res.status(400).send({ success: false, message: 'Falta el campo PrecioUnitario' });
        if (Descontinuado === undefined) return res.status(400).send({ success: false, message: 'Falta el campo Descontinuado' });
        if (!IDProveedor) return res.status(400).send({ success: false, message: 'Falta el campo IDProveedor' });
        if (!IDCategoria) return res.status(400).send({ success: false, message: 'Falta el campo IDCategoria' });

        // Obtener nuevo IDProducto
        const result = await pool.query('SELECT COUNT(IDProducto)+1 AS IDProducto FROM Producto');
        const IDProductoN = parseInt(result[0][0].IDProducto);
        // Insertar en Producto
        const insertSQL = `INSERT INTO Producto (IDProducto, Nombre, Descripcion, PrecioUnitario, Descontinuado, IDProveedor, IDCategoria) 
                           VALUES (?, ?, ?, ?, ?, ?, ?)`;
        await pool.query(insertSQL, [IDProductoN, Nombre, Descripcion, parseInt(PrecioUnitario), parseInt(Descontinuado), parseInt(IDProveedor), parseInt(IDCategoria)]);
        
        // Insertar en ProductoProveedor

        await pool.query('INSERT INTO ProductoProveedor (IDProveedor, IDProducto) VALUES (?, ?)', [parseInt(IDProveedor), IDProductoN]);


        console.log('Producto añadido:', req.body);
        res.status(201).send({ success: true, message: IDProductoN });

    } catch (err) {
        console.error('Error al añadir producto:', err);
        res.status(500).send({ success: false, message: err.message });
    }
};
const ObtenerProductos = async (req, res) => {
    try {
        const query = `SELECT * from Producto`;
        const rows = await pool.query(query);
        res.status(200).send({ success: true, rows: rows });
    } catch (err) {
        console.error('Error al obtener productos:', err);
        res.status(500).send({ success: false, message: err.message });
    }
}



module.exports = { AgregarProducto,ObtenerProductos };