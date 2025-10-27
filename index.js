
const express = require('express');
require('dotenv').config(); // Load .env


const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const medicineRoutes = require('./routes/medicineRoutes');

// Inisialisasi aplikasi Express
const app = express();
const PORT = process.env.PORT || 3000;



// 1. Middleware untuk membaca JSON dari body request
app.use(express.json());

// 2. Middleware Logger (Sesuai permintaan)
app.use(logger);

// --- ROUTES ---
// Gunakan rute yang sudah kita buat

app.use('/medicines', medicineRoutes);

// --- ERROR HANDLING ---
// 3. Middleware Error Handler (Sesuai permintaan)

app.use(errorHandler);

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});