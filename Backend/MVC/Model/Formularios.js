const pool = require('./Connection');

//agreagar un nuevo producto
const agregarProducto = async (req, res) => {
    try {
        const { Nombre, Descripcion, Precio, Stock, IDProveedor } = req.body;
        const sql = 'INSERT INTO Producto (Nombre, Descripcion, Precio, Stock, IDProveedor) VALUES (?, ?, ?, ?, ?)';
        const result = await pool.query(sql, [Nombre, Descripcion, Precio, Stock, IDProveedor]);
        console.log('Producto agregado:', result);
        res.status(201).send({ success: true, message: "Producto Añadido", rows: rows });
    } catch (err) {
        console.error('Error al agregar producto:', err);
        res.status(500).send({ success: false, message: 'Error al querer agregar un producto' });
    }
}

module.exports = { agregarProducto }

