import express from 'express';
import { login, logout } from '../controllers/authController.js';

const router = express.Router();

// Login route
router.get('/login', (req, res) => {
    res.render('auth/login'); // Render the login page
});

router.post('/login', login); // Handle login form submission

// Logout route
router.get('/logout', logout);

export default router;