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

const actualizarProducto = async (req, res) => {
    try {
        const { IDProducto, Nombre, Descripcion, Precio, Stock, IDProveedor } = req.body;
        const sql = 'UPDATE Producto SET Nombre = ?, Descripcion = ?, Precio = ?, Stock = ?, IDProveedor = ? WHERE IDProducto = ?';
        const result = await pool.query(sql, [Nombre, Descripcion, Precio, Stock, IDProveedor, IDProducto]);
        console.log('Producto actualizado:', result);
        res.status(201).send({ success: true, message: "Producto actualizado", rows: rows });
    } catch (err) {
        console.error('Error al actualizar producto:', err);
        res.status(500).send({ success: false, message: 'Error al querer actualizar un producto' });
    }
}

const agregarProveedor = async (req, res) => {
    try {
        //falta verificar si son legalizados
        const { Nombre, Direccion, Telefono,RFC,CURP,IDCiudad } = req.body;
        if(legalizacion){

        }
        const sql = 'INSERT INTO Proveedor (Nombre, Direccion, Telefono, RFC, CURP, IDCiudad) VALUES (?, ?, ?)';
        const result = await pool.query(sql, [Nombre, Direccion, , RFC, CURP, IDCiudad]);
        console.log('Proveedor agregado:', result);
        res.status(201).send({ success: true, message: "Proveedor Añadido", rows: rows });
    } catch (err) {
        console.error('Error al agregar proveedor:', err);
        res.status(500).send({ success: false, message: 'Error al querer agregar un proveedor' });
    }
}

module.exports = { agregarProducto , actualizarProducto, agregarProveedor}