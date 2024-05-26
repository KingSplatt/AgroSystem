const express = require('express');
const router = express.Router();
const { VerCotizacion } = require('../Controller/Cotizacion');

router.get('/', VerCotizacion);

module.exports = router;