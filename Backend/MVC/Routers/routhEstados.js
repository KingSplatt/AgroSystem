const express = require('express');
const { VerEstados } = require('../Controller/Estado');

const router = express.Router();

router.get('/', VerEstados);

module.exports = router;