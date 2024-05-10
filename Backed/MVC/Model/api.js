const pool = require('./Connection');

// Ejemplo de una consulta SELECT
const getUsers = async (req,res) =>{
  try {
    const [rows, fields] = await pool.query('SELECT * FROM Cliente ' );
    console.log('Usuarios obtenidos:', rows);
    const [rows2, fields2] = await pool.query('SELECT * FROM Ciudad ' );
    res.status(200).send({success: true,message: "putos", rows, rows2})
  } catch (err) {
    res.status(500).send({success: false, message: 'Error al obtener usuarios'});
  }
}
const getCiudades = async (req,res)=>{
    try {
        const [rows, fields] = await pool.query('SELECT * FROM Ciudad');
        console.log('Ciudades obtenidas:', rows);
        res.status(200).send({success: true, rows});
    } catch (err) {
        console.error('Error al obtener ciudades:', err);
        res.status(500).send({success: false, message: 'Error al obtener ciudades'});
    }
    
}
module.exports = {getUsers, getCiudades}
