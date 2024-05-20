const express = require('express');
const { VerClientes } = require('../Controller/Clientes');
const router = express.Router();

router.get('/', VerClientes);

module.exports = router;