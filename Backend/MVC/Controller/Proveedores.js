const pool = require("../Model/Connection");
/*
    API de Proveedores : FUNCIONANDO CORRECTAMENTE
*/
//agregar un proveedor nuevo
const agregarProveedor = async (req, res) => {
    try {
        const { Nombre, Telefono, Correo, RFC, CURP, Ciudad } = req.body;
        let { Legalizado } = req.body;
        if (!Nombre || !Telefono || !Correo || !RFC || !CURP || !Legalizado || !Ciudad) {
            return res.status(400).send({ success: false, message: 'Faltan campos por llenar' });
        }
        const [IDProveedor, fields] = await pool.query('SELECT COUNT(IDProveedor)+1 AS IDProveedor FROM Proveedor');
        const [IDCiudad, campos] = await pool.query('SELECT IDCiudad FROM Ciudad WHERE Nombre = ?;', [Ciudad]);
        const insertSQL = 'INSERT INTO Proveedor (IDProveedor, Nombre, Telefono, Correo, RFC, CURP, Legalizado, IDCiudad) VALUES (?,?,?,?,?,?,?,?);';
        Legalizado = Legalizado ? 1 : 0;
        const insertResult = await pool.query(insertSQL, [parseInt(IDProveedor[0].IDProveedor), Nombre, Telefono, Correo, RFC, CURP, parseInt(Legalizado), parseInt(IDCiudad[0].IDCiudad)]);
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