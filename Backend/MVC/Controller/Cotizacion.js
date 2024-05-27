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
    console.log('Añadiendo cotizacion');
    console.log('Body:', req.body);
    try {
        const { proveedores, productos } = req.body;
        if (!proveedores || !productos || !Array.isArray(proveedores) || !Array.isArray(productos)) {
            res.status(400).send({ success: false, message: 'Faltan datos' });
            return;
        }
        const FechaCotizacion = new Date();
        // obtener el último IDCotizacion
        const [lastCotizacion] = await pool.query('SELECT IDCotizacion FROM Cotizacion ORDER BY IDCotizacion DESC LIMIT 1');
        let IDCotizacion = lastCotizacion.length > 0 ? lastCotizacion[0].IDCotizacion + 1 : 1;

        // insertar la cotizacion
        for (const proveedor of proveedores) {
            let IDProveedor = proveedor.IDProveedor;
            for (const producto of productos) {
                let IDProducto = producto.IDProducto;
                const insertSQL = 'INSERT INTO Cotizacion (IDCotizacion, FechaCotizacion, IDProveedor, IDProducto ) VALUES (?, ?, ?, ?)';
                await pool.query(insertSQL, [IDCotizacion, FechaCotizacion, IDProveedor, IDProducto]);
                IDCotizacion++;
            }
        }
        console.log('Cotizacion añadida');
        res.status(201).send({ success: true, message: 'Cotizacion añadida' });

    } catch (error) {
        console.error('Error al añadir la cotizacion', error);
        res.status(500).send({ success: false, message: 'Error al añadir la cotizacion' });
    }
}

module.exports = { VerCotizacion, AgregarCotizacion };