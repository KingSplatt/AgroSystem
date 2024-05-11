const express = require('express');
const { getProductoSucursal, getProveedores, getTotalCompras } = require('../Controller/api');
const router = express.Router();

router.get('/ProductoSucursal', getProductoSucursal);
router.get('/Proveedor', getProveedores);
router.get('/TotalCompras', getTotalCompras);

module.exports = router;
