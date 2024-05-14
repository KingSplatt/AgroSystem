const express = require('express');
const { NuevaCompra, HistorialCompras, EliminarCompra } = require('../Controller/Compra');
const router = express.Router();

router.get('/', HistorialCompras);
router.post('/', NuevaCompra);
router.delete('/', EliminarCompra);

module.exports = router;