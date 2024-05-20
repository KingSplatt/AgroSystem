const pool = require('../Model/Connection');

//Ver clientes
const VerClientes = async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM Cliente;');
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
        //obtener IDCiudad
        const IDCiudad = await pool.query('SELECT IDCiudad FROM Ciudad WHERE Nombre = ?;', [Ciudad]);

        await pool.query('INSERT INTO Cliente (Nombre, ApellidoPaterno, ApellidoMaterno, Usuario, Contrasena, Correo, Telefono, RFC, CURP, IDCiudad) VALUES (?,?,?,?,?);',
            [Nombre, ApellidoPaterno, ApellidoMaterno, Usuario, Contrasena, Correo, Telefono, RFC, CURP, IDCiudad[0].IDCiudad]);
        res.status(201).send({ success: true, message: 'Cliente Registrado Correctamente' });
    } catch (err) {
        console.error('Error al crear el cliente', err);
        res.status(500).send({ success: false, message: 'Error al crear el cliente' });
    }
}

const ActualizarCliente = async (req, res) => {
    try {
        const { Nombre, ApellidoPaterno, ApellidoMaterno, Usuario, Contrasena, Correo, Telefono, RFC, CURP, Ciudad } = req.body;
        //obtener IDCiudad
        const IDCiudad = await pool.query('SELECT IDCiudad FROM Ciudad WHERE Nombre = ?;', [Ciudad]);
        //obtener IDCliente
        const IDCliente = await pool.query('SELECT IDCliente FROM Cliente WHERE Nombre = ?;', [Nombre]);
        await pool.query('UPDATE Cliente SET Nombre = ?, ApellidoPaterno = ?, ApellidoMaterno = ?, Usuario = ?, Contrasena = ?, Correo = ?, Telefono = ?, RFC = ?, CURP = ?, IDCiudad = ? WHERE IDCliente = ?;',
            [Nombre, ApellidoPaterno, ApellidoMaterno, Usuario, Contrasena, Correo, Telefono, RFC, CURP, IDCiudad[0].IDCiudad], IDCliente[0].IDCliente[0]);
        res.status(201).send({ success: true, message: 'Cliente Actualizado Correctamente' });
    } catch (err) {
        console.error('Error al actualizar el cliente', err);
        res.status(500).send({ success: false, message: 'Error al actualizar el cliente' });
    }
}

module.exports = { VerClientes, NuevoCliente, ActualizarCliente };