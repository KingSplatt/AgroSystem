const express = require('express');
const { VerClientes, NuevoCliente, ActualizarCliente } = require('../Controller/Clientes');

const router = express.Router();

router.get('/', VerClientes);
router.post('/', NuevoCliente);
router.put('/', ActualizarCliente);

module.exports = router;