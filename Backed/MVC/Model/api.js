const pool = require('./Connection');

// Ejemplo de una consulta SELECT
async function getUsers() {
  try {
    const [rows, fields] = await pool.query('SELECT Nombre FROM Cliente where IDCliente = 1' );
    console.log('Usuarios obtenidos:', rows);
    return rows;
  } catch (err) {
    console.error('Error al obtener usuarios:', err);
    throw err;
  }
}
async function getCiudades(){
    try {
        const [rows, fields] = await pool.query('SELECT * FROM Ciudad');
        console.log('Ciudades obtenidas:', rows);
        return rows;
    } catch (err) {
        console.error('Error al obtener ciudades:', err);
        throw err;
    }
    
}

getUsers();
getCiudades(); 
