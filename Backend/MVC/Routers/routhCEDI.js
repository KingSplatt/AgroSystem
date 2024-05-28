const express = require('express');
const router = express.Router();
const { VerCEDIS } = require('../Controller/CEDI');

router.get('/', VerCEDIS);

module.exports = router;