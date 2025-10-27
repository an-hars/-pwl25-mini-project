// Middleware ini mencatat metode HTTP dan URL yang diminta
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  // next() wajib dipanggil agar request bisa lanjut ke handler berikutnya
  next();
};

module.exports = logger;