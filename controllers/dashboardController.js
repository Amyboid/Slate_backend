import StudentAchievement from '../models/StudentAchievement.js';

const getSchoolDashboard = (req, res) => {
  res.render('dashboards/school');
};

const getParentDashboard = async (req, res) => {
  const studentAchievements  = await StudentAchievement.findByUserId(req.user.userId);
  res.render('dashboards/parent', {studentAchievements});
};

const getStudentDashboard = (req, res) => {
  res.render('dashboards/student');
};

export { getSchoolDashboard, getParentDashboard, getStudentDashboard };