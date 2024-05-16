const pool = require("../Model/Connection");

//agregar un proveedor nuevo
const agregarProveedor = async (req, res) => {
    try {
        const { IDProveedor, Nombre, Telefono, Correo, RFC, CURP, Legalizado, IDCiudad } = req.body;
        const insertSQL = 'INSERT INTO Proveedor (IDProveedor, Nombre, Telefono, Correo, RFC, CURP, Legalizado, IDCiudad) VALUES (?,?,?,?,?,?,?,?)';
        Legalizado = Legalizado ? 1 : 0;
        if (!IDProveedor || !Nombre || !Telefono || !Correo || !RFC || !CURP || !Legalizado || !IDCiudad) {
            return res.status(400).send({ success: false, message: 'Faltan campos por llenar' });
        }
        const insertResult = await pool.query(insertSQL, [parseInt(IDProveedor), Nombre, Telefono, Correo, RFC, CURP, Legalizado, parseInt(IDCiudad)]);
        console.log('Proveedor agregado:', insertResult);
        res.status(201).send({ success: true, message: "Proveedor Añadido" });

    } catch (err) {
        console.error('Error al agregar proveedor:', err);
        res.status(500).send({ success: false, message: 'Error al querer agregar un proveedor' });
    }
}

//Obtener un proveedor de la lista
const ObtenerProveedor = async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM Proveedor');
        console.log('Proveedores:', rows);
        res.status(200).send({ success: true, rows: rows });
    } catch (err) {
        console.error('Error al obtener ciudades:', err);
        res.status(500).send({ success: false, message: 'Error al querer obtener los proveedores' });
    }
}

//Eliminar un proveedor de la lista
const EliminarProveedor = async (req, res) => {
    try {
        const { IDProveedor } = req.body;
        const deleteSQL = 'DELETE FROM Proveedor WHERE IDProveedor = ?';
        const deleteResult = await pool.query(deleteSQL, [parseInt(IDProveedor)]);
        console.log('Proveedor eliminado:', deleteResult);
        res.status(201).send({ success: true, message: "Proveedor eliminado" });
    } catch (err) {
        console.error('Error al eliminar proveedor:', err);
        res.status(500).send({ success: false, message: 'Error al querer eliminar un proveedor' });
    }
}

module.exports = { agregarProveedor, ObtenerProveedor, EliminarProveedor }
//ya quedo parseado, y comprobada en postman

