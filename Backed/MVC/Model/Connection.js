const mysql = require('mysql2/promise');
const dbConfig = require('./db.config');

// Crear la conexión
const pool = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

module.exports = pool;