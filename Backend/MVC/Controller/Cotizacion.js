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

const AgregarCotizacion = async (req, res) => {
    try {
        const { productos, proveedores } = req.body;
        /*
        if (!IDCliente || !IDEmpleado || !Fecha || !Total) {
            return res.status(400).send({ success: false, message: 'Faltan campos por llenar' });
        }
        */
        for (let i = 0; i < productos.length; i++) {
            const { IDProveedor, IDProducto } = productos[i];
            if (!IDProveedor || !IDProducto) {
                return res.status(400).send({ success: false, message: 'Faltan campos por llenar' });
            }
        }
        const IDCotizacion = await pool.query('SELECT COUNT(IDCotizacion)+1 AS IDCotizacion FROM Cotizacion');
        const FechaCotizacion = new Date();
        const insertSQL = 'INSERT INTO Cotizacion (IDCotizacion, FechaCotizacion, IDProveedor, IDProcuto) VALUES (?,?,?,?)';
        const insertResult = await pool.query(insertSQL, [parseInt(IDCotizacion), FechaCotizacion, parseInt(IDProveedor), parseInt(IDProducto)]);
        console.log('Cotizacion añadida:', insertResult);
        res.status(201).send({ success: true, message: 'Cotizacion añadida' });
    } catch (err) {
        console.error('Error al añadir cotizacion:', err);
        res.status(500).send({ success: false, message: 'Error al añadir cotizacion' });
    }
}

module.exports = { VerCotizacion, AgregarCotizacion };