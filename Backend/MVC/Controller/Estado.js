const pool = require('../Model/Connection');

const VerEstados = async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM Estado');
        console.log('Estados obtenidos', rows);
        res.status(201).send({ success: true, message: 'Estados consultados existosamente', rows: rows });
    } catch (err) {
        console.error('Error al consultar los estados', err);
        res.status(500).send({ success: false, message: 'Error al consultar los estados' });
    }
}

module.exports = { VerEstados };