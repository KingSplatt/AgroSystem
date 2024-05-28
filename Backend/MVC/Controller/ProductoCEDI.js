const pool = require("../Model/Connection");

const AgregarProductoCEDI = async (req, res) => {
    try {
        const { valorFechaSurtido, valorFechaCaducidad, IDProducto, IDCedi } = req.body;
        if (!IDProducto || !IDCedi || !valorFechaSurtido || !valorFechaCaducidad) {
            return res.status(400).send({ success: false, message: 'Faltan campos por llenar' });
        }
        const insertSQL = 'INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES (?,?,?, ?)';
        const insertResult = await pool.query(insertSQL, [valorFechaSurtido, valorFechaCaducidad,IDProducto,IDCedi]);
        console.log('Producto añadido:', insertResult);
        res.status(201).send({ success: true, message: "Producto añadido" });
    } catch (err) {
        console.error('Error al añadir producto:', err);
        res.status(500).send({ success: false, message: 'Error al añadir producto: ' + err});
    }

};

const ObtenerProductosCEDI = async (req, res) => {
    const IDCedi = req.params.IDCedi;
    try {
        // Verificar si IDCedi es válido
        if (!IDCedi) {
            return res.status(400).send({ success: false, message: 'IDCedi es requerido' });
        }
        // Consulta SQL para obtener productos del CEDI
        const query = `
            SELECT
                P.IDProducto,
                P.Nombre, 
                P.Descripcion, 
                P.PrecioUnitario, 
                P.Descontinuado, 
                Pr.Nombre AS NombreProveedor, 
                C.NombreCategoria AS Categoria,
                COUNT(PC.IDProducto) AS Stock
            FROM 
                ProductoCEDI AS PC
            INNER JOIN 
                Producto AS P ON PC.IDProducto = P.IDProducto
            INNER JOIN 
                Proveedor AS Pr ON P.IDProveedor = Pr.IDProveedor
            INNER JOIN 
                Categoria AS C ON P.IDCategoria = C.IDCategoria
            WHERE 
                PC.IDCedi = ?
            GROUP BY
                P.IDProducto`;

        const rows = await pool.query(query, [IDCedi]);
        res.status(200).send({ success: true, rows: rows });
    } catch (err) {
        console.error('Error al obtener productos:', err);
        res.status(500).send({ success: false, message: 'Error al obtener productos de CEDI: ' + IDCedi + err});
    }
};
module.exports = { AgregarProductoCEDI,ObtenerProductosCEDI }