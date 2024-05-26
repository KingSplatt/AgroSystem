const pool = require('../Model/Connection');

const VerCotizacion = async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM Cotizacion');
        console.log('Cotizacion obtenidas', rows);
        res.status(201).send({ success: true, message: 'Cotizaciones consultadas existosamente', rows: rows });
    } catch (err) {
        console.error('Error al consultar las cotizaciones', err);
        res.status(500).send({ success: false, message: 'Error al consultar las cotizaciones' });
    }
}

module.exports = { VerCotizacion };