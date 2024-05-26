const express = require('express');
const { ObtenerProductoSucursal, AgregarProductoSucursal, EliminarProductoSucursal, ActualizarProducto } = require('../Controller/ProductoSucursal');
const router = express.Router();

router.get('/', ObtenerProductoSucursal);
router.post('/', AgregarProductoSucursal);
router.delete('/', EliminarProductoSucursal);
router.patch('/', ActualizarProducto);

module.exports = router;