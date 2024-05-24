const express = require('express');
const { VerCiudades } = require('../Controller/Ciudad');

const router = express.Router();

router.get('/', VerCiudades);

module.exports = router;