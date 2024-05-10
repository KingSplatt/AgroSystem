const express = require('express');
const {getUsers,getCiudades} = require('../Model/api');
const router = express.Router();

router.get('/users', getUsers);
router.get('/ciudades', getCiudades);

module.exports = router;
