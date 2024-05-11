const express = require('express');
const { agregarProducto, agregarProveedor, actualizarProducto } = require('../Controller/Formularios');
const router = express.Router();

router.post('/agregarProducto', agregarProducto, actualizarProducto, agregarProveedor);

module.exports = router;