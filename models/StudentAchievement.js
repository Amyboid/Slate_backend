import User from './User.js';
import pool from '../config/db.js';

class StudentAchievement {
    static async findByUserId(userId) {
        const LinkedStudentID = await User.findLinkedStudentIdByUserId(userId);
        const [rows] = await pool.query('SELECT * FROM StudentAchievements WHERE StudentID = ?', [LinkedStudentID]);
        return rows;
    }
}

export default StudentAchievement;