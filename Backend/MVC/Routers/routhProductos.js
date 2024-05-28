const express = require('express');
const { AgregarProducto, ObtenerProductos } = require('../Controller/Producto');

const router = express.Router();


router.post('/', AgregarProducto);
router.get('/', ObtenerProductos);

module.exports = router;