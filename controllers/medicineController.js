// Import Model Medicine
const Medicine = require('../models/medicine');

// Controller untuk GET /medicines

const getAllMedicine =async ( req, res, next) =>{

    try{

        const medicine =await Medicine.getAll();
        res.status(200).json(medicine);
    } catch(error){
        next(error);
    }
    };

// Controller untuk GET /medicines/:id
const getMedicineById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const medicine = await Medicine.getById(id);
    
    if (medicine) {
      res.status(200).json(medicine);
    } else {
      // Jika data tidak ditemukan
      res.status(404).json({ message: 'Obat tidak ditemukan' });
    }
  } catch (error) {
    next(error);
  }
};

// Controller untuk POST /medicines
const createMedicine = async (req, res, next) => {
  try {
    // Data didapat dari req.body
    const newMedicine = await Medicine.create(req.body);
    // Response 201 (Created)
    res.status(201).json(newMedicine);
  } catch (error) {
    next(error);
  }
};

// Controller untuk PUT /medicines/:id
const updateMedicine = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedMedicine = await Medicine.update(id, req.body);
    
    if (updatedMedicine) {
      res.status(200).json(updatedMedicine);
    } else {
      res.status(404).json({ message: 'Obat tidak ditemukan' });
    }
  } catch (error) {
    next(error);
  }
};

// Controller untuk DELETE /medicines/:id
const deleteMedicine = async (req, res, next) => {
  try {
    const { id } = req.params;
    const success = await Medicine.delete(id);
    
    if (success) {
      // Response 200 (OK) atau 204 (No Content)
      res.status(200).json({ message: 'Obat berhasil dihapus' });
    } else {
      res.status(404).json({ message: 'Obat tidak ditemukan' });
    }
  } catch (error) {
    next(error);
  }
};

// Ekspor semua controller
module.exports = {
  getAllMedicines,
  getMedicineById,
  createMedicine,
  updateMedicine,
  deleteMedicine
};