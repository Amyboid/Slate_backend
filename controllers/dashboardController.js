const getSchoolDashboard = (req, res) => {
  res.render('dashboards/school');
};

const getParentDashboard = (req, res) => {
  res.render('dashboards/parent');
};

const getStudentDashboard = (req, res) => {
  res.render('dashboards/student');
};

export { getSchoolDashboard, getParentDashboard, getStudentDashboard };