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

module.exports = { VerClientes };