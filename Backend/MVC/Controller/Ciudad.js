const pool = require('../Model/Connection');

const VerCiudades = async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM Ciudad');
        console.log('Ciudades obtenidas', rows);
        res.status(201).send({ success: true, message: 'Ciudades consultadas existosamente', rows: rows });
    } catch (err) {
        console.error('Error al consultar las ciudades', err);
        res.status(500).send({ success: false, message: 'Error al consultar las ciudades' });
    }
}

module.exports = { VerCiudades };