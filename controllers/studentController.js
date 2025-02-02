import StudentAchievement from '../models/StudentAchievement.js';

const getStudentAchievements = async (req, res) => {
    const { studentId } = req.params;
    const achievements = await StudentAchievement.findByStudentId(studentId);
    res.json(achievements);
};

export { getStudentAchievements };