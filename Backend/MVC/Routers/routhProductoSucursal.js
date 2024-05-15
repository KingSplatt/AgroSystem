const express = require('express');
const { ObtenerProductoSucursal, AgregarProductoSucursal, EliminarProductoSucursal, ActualizarProductoSucursal } = require('../Controller/ProductoSucursal');
const router = express.Router();

router.get('/', ObtenerProductoSucursal);
router.post('/', AgregarProductoSucursal);
router.delete('/', EliminarProductoSucursal);
router.patch('/', ActualizarProductoSucursal);

module.exports = router;