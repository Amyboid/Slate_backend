import pool from '../config/db.js';

class StudentAchievement {
    static async findByStudentId(studentId) {
        const [rows] = await pool.query('SELECT * FROM StudentAchievements WHERE student_id = ?', [studentId]);
        return rows;
    }
}

export default StudentAchievement;