const express = require('express');
const { ObtenerProveedor, agregarProveedor, EliminarProveedor,ObtenerProveedorByClave,ActualizarProveedor } = require('../Controller/Proveedores');
const router = express.Router();

router.get('/', ObtenerProveedor);
router.post('/', agregarProveedor);
router.delete('/', EliminarProveedor);
router.get('/:clave', ObtenerProveedorByClave);
router.patch('/', ActualizarProveedor);




module.exports = router;