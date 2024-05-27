const express = require('express');
const { ObtenerProductosCEDI,AgregarProductoCEDI } = require('../Controller/ProductoCEDI');
const router = express.Router();

router.get('/:IDCedi', ObtenerProductosCEDI);
router.post('/', AgregarProductoCEDI);

module.exports = router;