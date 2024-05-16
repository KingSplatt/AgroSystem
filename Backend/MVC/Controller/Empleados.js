const pool = require('../Model/Connection');

// Crear nuevos empleados
const NuevoEmpleado = async (req, res) => {
    try {
        const { IDEmpleado, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDSucursal, IDCiudad } = req.body;
        if (!IDEmpleado || !Nombre || !ApellidoPaterno || !ApellidoMaterno || !Correo || !Telefono || !Puesto || !Usuario || !Contrasena || !FechaNacimiento || !FechaInicio || !RFC || !CURP || !IDSucursal || !IDCiudad) {
            return res.status(400).send({ success: false, message: 'Faltan campos por llenar' });
        }
        const insertSQL = 'INSERT INTO Empleado (IDEmpleado , Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDSucursal, IDCiudad) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
        const insertResult = await pool.query(insertSQL, [parseInt(IDEmpleado), Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, parseInt(IDSucursal), parseInt(IDCiudad)]);
        console.log('Empleado agregado exitosamente', insertResult);
        res.status(201).send({ success: true, message: "Empleado agregado exitosamente" });
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
        if (!IDEmpleado) {
            return res.status(400).send({ success: false, message: 'Ingresa el ID del Empleado' });
        }
        const deleteSQL = 'DELETE FROM Empleado WHERE IDEmpleado = ?';
        const deleteResult = await pool.query(deleteSQL, [parseInt(IDEmpleado)]);
        console.log('Empleado eliminado', deleteResult);
        res.status(201).send({ success: true, message: 'Empleado eliminado existosamente' });
    } catch (err) {
        console.error('Error al eliminar el empleado', err);
        res.status(500).send({ success: false, message: 'Error al querer eliminar a este empleado' });
    }
}

module.exports = { NuevoEmpleado, VerEmpleados, EliminarEmpleado };

//ya quedo parseado, y comprobada en postman

