const pool = require('../Model/Connection');

const VerCotizacion = async (req, res) => {
    try {
        const [rows, fields] = await pool.query("SELECT C.IDCotizacion, C.FechaCotizacion,group_concat(distinct DC.IDProducto ORDER BY C.IDCotizacion SEPARATOR ', ') AS Productos, " +
            "group_concat(distinct DC.IDProveedor ORDER BY C.IDCotizacion SEPARATOR ', ') AS Proveedores FROM Cotizacion AS C " +
            "INNER JOIN DetalleCotizacion AS DC ON C.IDCotizacion = DC.IDCotizacion " +
            "GROUP BY C.IDCotizacion, C.FechaCotizacion;");
        console.log('Cotizacion obtenidas', rows);
        res.status(201).send({ success: true, message: 'Cotizaciones consultadas existosamente', rows: rows });
    } catch (err) {
        console.error('Error al consultar las cotizaciones', err);
        res.status(500).send({ success: false, message: 'Error al consultar las cotizaciones' });
    }
}

//agregar una cotizacion con N detalles cotiazaciones
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

        //obtener el IDCotizacion
        const [query] = await pool.query('SELECT count(IDCotizacion)+1 as IDCotizacion FROM Cotizacion');
        const IDCotizacion = query[0].IDCotizacion;

        //inicia la cotizacion
        await pool.query('INSERT INTO Cotizacion (IDCotizacion, FechaCotizacion) VALUES (?,?)', [IDCotizacion, FechaCotizacion]);

        //agregar los detalles de la cotizacion
        for (let i = 0; i < productos.length; i++) {
            for (let j = 0; j < proveedores.length; j++) {
                await pool.query('INSERT INTO DetalleCotizacion (IDCotizacion, IDProducto, IDProveedor) VALUES (?,?,?)', [IDCotizacion, productos[i].IDProducto, proveedores[j].IDProveedor]);
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