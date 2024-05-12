const express = require('express');
const {  NuevaCompra, HistorialCompras, EliminarCompra  } = require('../Controller/Copra');
const router = express.Router();

router.get('/', HistorialCompras);
router.post('/', NuevaCompra);
router.delete('/', EliminarCompra);