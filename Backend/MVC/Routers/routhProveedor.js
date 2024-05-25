const express = require('express');
const { ObtenerProveedor, agregarProveedor, EliminarProveedor,ObtenerProveedorByClave } = require('../Controller/Proveedores');
const router = express.Router();

router.get('/', ObtenerProveedor);
router.post('/', agregarProveedor);
router.delete('/', EliminarProveedor);
router.get('/:clave', ObtenerProveedorByClave);


module.exports = router;