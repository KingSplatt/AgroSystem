const express = require('express');
const router = express.Router();
const { VerCotizacion, AgregarCotizacion } = require('../Controller/Cotizacion');

router.get('/', VerCotizacion);
router.post('/', AgregarCotizacion);

module.exports = router;