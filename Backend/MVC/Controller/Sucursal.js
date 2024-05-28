const pool = require('../Model/Connection');

const VerSucursal = async (req, res) => {
    const IDSucursal = req.params.IDSucursal;
    try {
        const [rows, fields] = await pool.query('SELECT * FROM Sucursal WHERE IDSucursal = ?',[parseInt(IDSucursal)]);
        console.log('Categorias obtenidas', rows);
        res.status(201).send({ success: true, message: 'Categorias consultadas existosamente', rows: rows });
    } catch (err) {
        console.error('Error al consultar las categorias', err);
        res.status(500).send({ success: false, message: IDSucursal });
    }
}

module.exports = { VerSucursal };