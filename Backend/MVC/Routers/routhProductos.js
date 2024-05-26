const express = require('express');
const {  AgregarProducto } = require('../Controller/Producto');
const router = express.Router();


router.post('/', AgregarProducto);


module.exports = router;