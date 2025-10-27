const express = require('express');
const router = express.Router();


const {
  getAllMedicines,
  getMedicineById,
  createMedicine,
  updateMedicine,
  deleteMedicine
} = require('../controllers/medicineController');

// Import middleware validator
const { validateMedicine } = require('../middleware/validator');



// GET /medicines (Read All)
router.get('/', getAllMedicinel);

// GET /medicines/:id (Read One)
router.get('/:id', getMedicineById);

// POST /medicines (Create)
// Kita tambahkan middleware 'validateMedicine' di sini
router.post('/', validateMedicine, createMedicine);

// PUT /medicines/:id (Update)
// Kita tambahkan juga middleware 'validateMedicine' di sini
router.put('/:id', validateMedicine, updateMedicine);


router.delete('/:id', deleteMedicine);

module.exports = router;