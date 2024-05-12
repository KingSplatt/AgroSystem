const express = require('express');
const { ObtenerProveedor, agregarProveedor, EliminarProveedor } = require('../Controller/Proveedores');
const router = express.Router();

router.get('/', ObtenerProveedor);
router.post('/', agregarProveedor);
router.delete('/', EliminarProveedor);

module.exports = router;