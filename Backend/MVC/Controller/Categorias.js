const pool = require('../Model/Connection');

const VerCategorias = async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM Categoria');
        console.log('Categorias obtenidas', rows);
        res.status(201).send({ success: true, message: 'Categorias consultadas existosamente', rows: rows });
    } catch (err) {
        console.error('Error al consultar las categorias', err);
        res.status(500).send({ success: false, message: 'Error al consultar las categorias' });
    }
}

module.exports = { VerCategorias };