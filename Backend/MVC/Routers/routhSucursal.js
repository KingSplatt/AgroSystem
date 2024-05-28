const express = require('express');
const router = express.Router();
const { VerSucursal } = require('../Controller/Sucursal');

router.get('/:IDSucursal', VerSucursal);

module.exports = router;