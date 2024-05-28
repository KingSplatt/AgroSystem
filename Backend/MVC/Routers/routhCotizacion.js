const express = require('express');
const router = express.Router();
const { VerCotizacion, AgregarCotizacion } = require('../Controller/Cotizacion');

router.get('/:ID', VerCotizacion);
router.post('/', AgregarCotizacion);

module.exports = router;