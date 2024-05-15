const pool = require('../Model/Connection');

// Crear nuevos empleados
const NuevoEmpleado = async (req, res) => {
    try {
        const { IDEmpleado, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDSucursal, IDCiudad } = req.body;
        const sql = 'INSERT INTO Empleado (IDEmpleado , Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDSucursal, IDCiudad) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
        const result = await pool.query(sql, [parseInt(IDEmpleado), Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, parseInt(IDSucursal), parseInt(IDCiudad)]);
        console.log('Empleado agregado exitosamente', result);
        res.status(201).send({ success: true, message: "Empleado agregado exitosamente", rows: rows });
    } catch (err) {
        console.error('Error al agregar el empleado', err);
        res.status(500).send({ success: false, message: 'Error al agregar al empleado' });
    }
}

// Ver a los empleados
const VerEmpleados = async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT E.IDEmpleado, E.Nombre, E.ApellidoPaterno, E.ApellidoMaterno, E.Correo, E.Telefono, E.Puesto, E.FechaNacimiento, E.FechaInicio, ' +
            'E.RFC, E.CURP, E.IDSucursal, E.IDCiudad FROM Empleado AS E;');
        console.log('Empleados obtenidos', rows);
        res.status(201).send({ success: true, message: 'Empleados consultados existosamente', rows: rows });
    } catch (err) {
        console.error('Error al consultar los empleados', err);
        res.status(500).send({ success: false, message: 'Error al consultar los empleados' });
    }
}

// Eliminar a los empleados
const EliminarEmpleado = async (req, res) => {
    try {
        const { IDEmpleado } = req.body;
        const sql = 'DELETE FROM Empleado WHERE IDEmpleado = ?';
        const result = await pool.query(sql, [parseInt(IDEmpleado)]);
        console.log('Empleado eliminado', result);
        res.status(201).send({ success: true, message: 'Empleado eliminado existosamente' });
    } catch (err) {
        console.error('Error al eliminar el empleado', err);
        res.status(500).send({ success: false, message: 'Error al querer eliminar a este empleado' });
    }
}

module.exports = { NuevoEmpleado, VerEmpleados, EliminarEmpleado };

//ya quedo parseado, y comprobada en postman

