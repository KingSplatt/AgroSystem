const pool = require('./Connection');

// Ejemplo de una consulta SELECT
const getProductoSucursal = async (req, res) => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM ProductoSucursal  ');
    console.log('Usuarios obtenidos:', rows);
    res.status(200).send({ success: true, rows, })
  } catch (err) {
    res.status(500).send({ success: false, message: 'Error al obtener usuarios' });
  }
}
const getProveedores = async (req, res) => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM Proveedor');
    console.log('Proveedores:', rows);
    res.status(200).send({ success: true, rows: rows });
  } catch (err) {
    console.error('Error al obtener ciudades:', err);
    res.status(500).send({ success: false, message: 'Error al querer obtener los proveedores' });
  }
}
const getTotalCompras = async (req, res) => {
  try {
    const [rows, fields] = await pool.query('SELECT C.IDCompra, C.FechaPedido, C.FechaEntrega, C.SubTotal, C.Total, C.IDCedi, ' +
      'E.IDEmpleado, E.Nombre + E.ApellidoPaterno + E.ApellidoMaterno AS Nombre_Empleado, E.Puesto FROM OrdenCompra AS C INNER JOIN Empleado AS E ON C.IDEmpleado = E.IDEmpleado');
    console.log('Total de compras:', rows);
    res.status(200).send({ success: true, rows: rows });
  } catch (err) {
    console.error('Error al obtener total de compras:', err);
    res.status(500).send({ success: false, message: 'Error al querer obtener los totales de compras' });
  }
}

const setProductoSucursal = async (req, res) => {

}

module.exports = { getProductoSucursal, getProveedores, getTotalCompras }
