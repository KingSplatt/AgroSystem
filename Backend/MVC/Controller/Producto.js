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

const ObtenerProducto = async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM Producto');
        res.status(200).send({ success: true, rows: rows });
    } catch (err) {
        console.error('Error al obtener productos:', err);
        res.status(500).send({ success: false, message: 'Error al obtener productos' });
    }
};


const ActualizarProducto = async (req, res) => {
    try {
        const { IDproducto, Nombre, Descripcion, PrecioUnitario, Descontinuado } = req.body;
        const id = req.params.id; // Obtener el ID del producto desde el parámetro de la URL
        console.log('ID del producto:', id);

        //VALIDAR QUE LA ID SI EXISTA EN LA BASE DE DATOS

        if (!Nombre || !Descripcion || !PrecioUnitario || !Descontinuado) {
            return res.status(400).send({ success: false, message: 'Faltan campos por llenar' });
        }

        // Aquí puedes ejecutar la consulta de actualización utilizando el ID obtenido
        const sql = 'UPDATE Producto SET Nombre = ?, Descripcion = ?, PrecioUnitario = ?, Descontinuado = ? WHERE IDProducto = ?';
        const result = await pool.query(sql, [Nombre, Descripcion, PrecioUnitario, parseInt(Descontinuado), parseInt(id)]);

        console.log('Producto actualizado:', result);
        res.status(200).send({ success: true, message: "Producto actualizado" });
    } catch (err) {
        console.error('Error al actualizar producto:', err);
        res.status(500).send({ success: false, message: 'Error al querer actualizar un producto' });
    }
};

module.exports = { AgregarProducto };