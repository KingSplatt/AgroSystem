const express = require('express');
const {  NuevoEmpleado, VerEmpleados, EliminarEmpleado  } = require('../Controller/Empleados');
const router = express.Router();

router.get('/', VerEmpleados);
router.post('/', NuevoEmpleado);
router.delete('/', EliminarEmpleado);