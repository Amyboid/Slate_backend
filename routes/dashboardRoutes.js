import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { getSchoolDashboard, getParentDashboard, getStudentDashboard } from '../controllers/dashboardController.js';

const router = express.Router();

router.get('/school', authMiddleware(['School']), getSchoolDashboard);
router.get('/parent', authMiddleware(['Parent']), getParentDashboard);
router.get('/student', authMiddleware(['Student']), getStudentDashboard);

export default router;