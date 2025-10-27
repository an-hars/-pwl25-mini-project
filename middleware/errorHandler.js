// Middleware ini akan menangkap error global
// Ini adalah "safety net" jika terjadi error yang tidak terduga
const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log error ke konsol server

  // Kirim response error 500 (Internal Server Error)
  res.status(500).json({
    message: 'Terjadi kesalahan pada server.',
    error: err.message 
  });
};

module.exports = errorHandler;