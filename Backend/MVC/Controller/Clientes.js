const pool = require('../Model/Connection');
/*
    API Clientes : FUNCIONANDO CORRECTAMENTE
*/
//Ver clientes
const VerClientes = async (req, res) => {
    try {
        const [rows, fields] = await pool.query('select C.IDCliente ,C.Nombre ,C.Correo, C.Telefono,C.RFC,C.CURP, CI.Nombre AS Ciudad  from cliente AS C ' +
            ' INNER JOIN CIUDAD AS CI ON C.IDCiudad = CI.IDCiudad ORDER BY C.IDCliente;');
        console.log('Clientes obtenidos', rows);
        res.status(201).send({ success: true, message: 'Clientes consultados existosamente', rows: rows });
    } catch (err) {
        console.error('Error al consultar los clientes', err);
        res.status(500).send({ success: false, message: 'Error al consultar los clientes' });
    }
}

const NuevoCliente = async (req, res) => {
    try {
        const { Nombre, ApellidoPaterno, ApellidoMaterno, Usuario, Contrasena, Correo, Telefono, RFC, CURP, Ciudad } = req.body;
        if (!Nombre || !ApellidoPaterno || !ApellidoMaterno || !Usuario || !Contrasena || !Telefono || !RFC || !CURP || !Ciudad) {
            return res.status(500).send({ success: false, message: 'Faltan campos por llenar' });
        }
        const [IDCliente, fields] = await pool.query('SELECT COUNT(IDCliente)+1 AS IDCliente FROM Cliente');
        //obtener IDCiudad
        const [IDCiudad, campos] = await pool.query('SELECT IDCiudad FROM Ciudad WHERE Nombre = ?;', [Ciudad]);

        await pool.query('INSERT INTO Cliente (IDCliente,Nombre, ApellidoPaterno, ApellidoMaterno, Usuario, Contrasena, Correo, Telefono, RFC, CURP, IDCiudad) VALUES (?,?,?,?,?,?,?,?,?,?,?);',
            [parseInt(IDCliente[0].IDCliente), Nombre, ApellidoPaterno, ApellidoMaterno, Usuario, Contrasena, Correo, Telefono, RFC, CURP, parseInt(IDCiudad[0].IDCiudad)]);
        res.status(201).send({ success: true, message: 'Cliente Registrado Correctamente' });
    } catch (err) {
        console.error('Error al crear el cliente', err);
        res.status(500).send({ success: false, message: 'Error al crear el cliente' });
    }
}
//CREO QUE NO LO OCUPAMOS
const ActualizarCliente = async (req, res) => {
    try {
        const { Nombre, ApellidoPaterno, ApellidoMaterno, Usuario, Contrasena, Correo, Telefono, RFC, CURP, Ciudad } = req.body;
        if (!Nombre || !ApellidoPaterno || !ApellidoMaterno || !Usuario || !Contrasena || !Telefono || !RFC || !CURP || !Ciudad) {
            return res.status(500).send({ success: false, message: 'Faltan campos por llenar' });
        }
        //obtener IDCiudad
        const [IDCiudad, fields] = await pool.query('SELECT IDCiudad FROM Ciudad WHERE Nombre = ?;', [Ciudad]);
        //obtener IDCliente
        const [IDCliente, campos] = await pool.query('SELECT IDCliente FROM Cliente WHERE Nombre = ?;', [Nombre]);
        await pool.query('UPDATE Cliente SET Nombre = ?, ApellidoPaterno = ?, ApellidoMaterno = ?, Usuario = ?, Contrasena = ?, Correo = ?, Telefono = ?, RFC = ?, CURP = ?, IDCiudad = ? WHERE IDCliente = ?;',
            [Nombre, ApellidoPaterno, ApellidoMaterno, Usuario, Contrasena, Correo, Telefono, RFC, CURP, parseInt(IDCiudad[0].IDCiudad), parseInt(IDCliente[0].IDCliente)]);


        res.status(201).send({ success: true, message: 'Cliente Actualizado Correctamente' });
    } catch (err) {
        console.error('Error al actualizar el cliente', err);
        res.status(500).send({ success: false, message: 'Error al actualizar el cliente' });
    }
}

const EliminarCliente = async (req, res) => {
    try {
        const { IDCliente } = req.body;
        if (!IDCliente) {
            return res.status(500).send({ success: false, message: 'Ingresa el ID del Cliente' });
        }
        await pool.query('DELETE FROM Cliente WHERE IDCliente = ?;', [IDCliente]);
        res.status(201).send({ success: true, message: 'Cliente Eliminado Correctamente' });
    } catch (err) {
        console.error('Error al eliminar el cliente', err);
        res.status(500).send({ success: false, message: 'Error al eliminar el cliente' });
    }
}

module.exports = { VerClientes, NuevoCliente, ActualizarCliente, EliminarCliente };