const express = require('express');
const { agregarProducto, agregarProveedor, actualizarProducto } = require('../Model/Formularios');
const router = express.Router();

router.post('/agregarProducto', agregarProducto, actualizarProducto, agregarProveedor);

module.exports = router;