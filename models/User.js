import pool from '../config/db.js';

class User {
    static async findByEmail(email) {
        const [rows] = await pool.query('SELECT * FROM Users WHERE email = ?', [email]);
        return rows[0];
    }

    static async findLinkedStudentIdByUserId(userId) {
        const [rows] = await pool.query('SELECT linkedStudentId FROM Users WHERE ID = ?', [userId]);
        return rows[0].linkedStudentId;
    }

    static async createUser(name, email, password, role, linkedStudentId = null) {
        const [result] = await pool.query(
            'INSERT INTO Users (name, email, password, role, linkedStudentId) VALUES (?, ?, ?, ?, ?)',
            [name, email, password, role, linkedStudentId]
        );
        return result.insertId;
    }
}

export default User;