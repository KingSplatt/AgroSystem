const express = require('express');
const { ObtenerProductosCEDI } = require('../Controller/ProductoCEDI');
const router = express.Router();

router.get('/', ObtenerProductosCEDI);

module.exports = router;