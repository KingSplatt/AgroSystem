const express = require('express');
const { AgregarProducto, VerProductos } = require('../Controller/Producto');

const router = express.Router();


router.post('/', AgregarProducto);
router.get('/', VerProductos);




module.exports = router;