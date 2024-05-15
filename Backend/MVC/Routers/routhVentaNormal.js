const express = require('express');
const { NuevaVentaNormal, HistorialVentas } = require('../Controller/VentaNormal');
const router = express.Router();

router.get('/', HistorialVentas);
router.post('/', NuevaVentaNormal);

module.exports = router;