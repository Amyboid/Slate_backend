import StudentAchievement from '../models/StudentAchievement.js';
import User from '../models/User.js'; // Import the User model

const getSchoolDashboard = async (req, res) => {
  try {
    // Fetch the current user's name
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Render the school dashboard with the user's name
    res.render('dashboards/school', { userName: user.Name });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send('Internal Server Error');
  }
};

const getParentDashboard = async (req, res) => {
  try {
    // Fetch the current user's name
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Fetch student achievements
    const studentAchievements = await StudentAchievement.findByUserId(req.user.userId);

    // Render the parent dashboard with the user's name and achievements
    res.render('dashboards/parent', { userName: user.Name, studentAchievements });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
};

const getStudentDashboard = async (req, res) => {
  try {
    // Fetch the current user's name
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Fetch student achievements
    const studentAchievements = await StudentAchievement.findByUserId(req.user.userId);

    // Render the student dashboard with the user's name and achievements
    res.render('dashboards/student', { userName: user.Name, studentAchievements });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
};

export { getSchoolDashboard, getParentDashboard, getStudentDashboard };