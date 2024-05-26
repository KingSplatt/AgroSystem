const express = require('express');
const router = express.Router();
const { VerCategorias } = require('../Controller/Categorias');

router.get('/', VerCategorias);

module.exports = router;