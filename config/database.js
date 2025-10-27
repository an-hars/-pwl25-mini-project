const mysql = require('mysql2');
require('dotenv').config();

// Buat connection pool ke MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,       
  user: process.env.DB_USER,      
  password: process.env.DB_PASSWORD,
  database: process.env.DB_N,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Ekspor promise-based pool agar bisa digunakan di model
module.exports = pool.promise();

