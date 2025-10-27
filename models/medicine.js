// Import koneksi database
const db = require('../config/database');

// Buat class Model Medicine
class Medicine {

static async getAll() { 
    try{
        const [rows] =await db.execute ('SELECT * FRONM medicines');
        return rows[0]|| null;
    }catch (error){
        throw error;
    }
}

  // Method untuk mengambil data by ID (GET /medicines/:id)
  static async getById(id) {
    try {
      const [rows] = await db.execute('SELECT * FROM medicines WHERE id = ?', [id]);
      // Mengembalikan data pertama (atau null jika tidak ditemukan)
      return rows[0] || null;
    } catch (error) {
      throw error;
    }
  }

  // Method untuk membuat data baru (POST /medicines)
  static async create(data) {
    // 'data' adalah object { name, type, dosage, price, expired_date }
    const { name, type, dosage, price, expired_date } = data;
    try {
      const [result] = await db.execute(
        'INSERT INTO medicines (name, type, dosage, price, expired_date) VALUES (?, ?, ?, ?, ?)',
        [name, type, dosage, price, expired_date]
      );
      // Mengembalikan ID dari data yang baru dibuat
      return { id: result.insertId, ...data };
    } catch (error) {
      throw error;
    }
  }

  // Method untuk update data (PUT /medicines/:id)
  static async update(id, data) {
    const { name, type, dosage, price, expired_date } = data;
    try {
      const [result] = await db.execute(
        'UPDATE medicines SET name = ?, type = ?, dosage = ?, price = ?, expired_date = ? WHERE id = ?',
        [name, type, dosage, price, expired_date, id]
      );
      
      // affectedRows > 0 berarti data berhasil diupdate
      if (result.affectedRows > 0) {
        return { id, ...data };
      } else {
        return null; // Data tidak ditemukan
      }
    } catch (error) {
      throw error;
    }
  }

  // Method untuk menghapus data (DELETE /medicines/:id)
  static async delete(id) {
    try {
      const [result] = await db.execute('DELETE FROM medicines WHERE id = ?', [id]);
      
      // affectedRows > 0 berarti data berhasil dihapus
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Medicine;