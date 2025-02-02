import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { getStudentAchievements } from '../controllers/studentController.js';

const router = express.Router();

router.get('/achievements/:studentId', authMiddleware(['Parent', 'Student']), getStudentAchievements);

export default router;