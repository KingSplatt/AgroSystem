const express = require('express');
const { agregarProducto } = require('../Model/Formularios');
const router = express.Router();

router.post('/agregarProducto', agregarProducto);

module.exports = router;