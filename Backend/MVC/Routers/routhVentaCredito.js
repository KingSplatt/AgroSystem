const express = require('express');
const { NuevaVentaCredito, HistorialCreditos } = require('../Controller/VentaCredito');
const router = express.Router();

router.get('/', HistorialCreditos);
router.post('/', NuevaVentaCredito);

module.exports = router;