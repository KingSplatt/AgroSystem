const express = require('express');
const { VerClientes, NuevoCliente, ActualizarCliente, EliminarCliente } = require('../Controller/Clientes');

const router = express.Router();

router.get('/', VerClientes);
router.post('/', NuevoCliente);
router.patch('/', ActualizarCliente);
router.delete('/', EliminarCliente);

module.exports = router;