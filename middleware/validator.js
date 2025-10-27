// Middleware ini memvalidasi input dasar (agar tidak kosong)
// Kita akan fokus pada 'name', 'price', dan 'expired_date'
const validateMedicine = (req, res, next) => {
  const { name, price, expired_date } = req.body;

  // Cek jika salah satu field wajib kosong
  if (!name || !price || !expired_date) {
    // Jika kosong, kirim response error 400 (Bad Request)
    return res.status(400).json({ 
      message: 'Input tidak valid. Field name, price, dan expired_date tidak boleh kosong.' 
    });
  }

  // Jika semua valid, lanjut ke controller
  next();
};

module.exports = { validateMedicine };