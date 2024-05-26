const pool = require("../Model/Connection");

const AgregarProducto = async (req, res) => {
    try {
        const Nombre = req.body.Nombre;
        const Descripcion = req.body.Descripcion;
        const PrecioUnitario = req.body.PrecioUnitario;
        const Descontinuado = req.body.Descontinuado;
        const IDProveedor = req.body.IDProveedor;
        const IDCategoria = req.body.IDCategoria;

        const [IDProducto, fields] = await pool.query('SELECT COUNT(IDProducto)+1 AS IDProducto FROM Producto');

        if (!Nombre) {
            return res.status(400).send({ success: false, message: 'Falta el campo Nombre' });
        }
        if (!Descripcion) {
            return res.status(400).send({ success: false, message: 'Falta el campo Descripcion' });
        }
        if (!PrecioUnitario) {
            return res.status(400).send({ success: false, message: 'Falta el campo PrecioUnitario' });
        }
        if (Descontinuado === undefined) {
            return res.status(400).send({ success: false, message: 'Falta el campo Descontinuado' });
        }
        if (!IDProveedor) {
            return res.status(400).send({ success: false, message: 'Falta el campo IDProveedor' });
        }
        if (!IDCategoria) {
            return res.status(400).send({ success: false, message: 'Falta el campo IDCategoria' });
        }


        // Insertar producto en la base de datos
        const insertSQL = "INSERT INTO Producto (IDProducto, Nombre, Descripcion, PrecioUnitario, Descontinuado, IDProveedor, IDCategoria) VALUES (?, ?, ?, ?, ?, ?, ?)";
        await pool.query(insertSQL, [parseInt(IDProducto[0].IDProducto), Nombre, Descripcion, PrecioUnitario, Descontinuado, IDProveedor, IDCategoria]);
        console.log('Producto añadido:', req.body);
        res.status(201).send({ success: true, message: "Producto añadido" });
    } catch (err) {
        console.error('Error al añadir producto:', err);
        res.status(500).send({ success: false, message: req.body.IDProveedor});
    }
};

module.exports = { AgregarProducto };