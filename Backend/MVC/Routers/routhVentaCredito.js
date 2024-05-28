const express = require('express');
const { NuevaVentaCredito, HistorialCreditos } = require('../Controller/VentaCredito');
const router = express.Router();

router.get('/:id', HistorialCreditos);
router.post('/', NuevaVentaCredito);

module.exports = router;