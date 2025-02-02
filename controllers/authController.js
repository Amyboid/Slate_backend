import User from '../models/User.js';
import { generateToken } from '../utils/jwtUtils.js';
import bcrypt from 'bcrypt';

const login = async (req, res) => {
    const { email, password, role } = req.body;

    try {
        // Find the user by email
        const user = await User.findByEmail(email);
        console.log('user', user);
        console.log('pass', email, password, role);

        // Check if the user exists and the role matches
        if (!user || user.Role !== role) {
            return res.status(400).send('Invalid credentials');
        }

        // Compare the provided password with the hashed password in the database
        const validPassword = await bcrypt.compare(password, user.Password);
        if (!validPassword) {
            return res.status(400).send('Invalid credentials password mismatch');
        }

        // Generate a JWT token
        const token = generateToken(user.ID, user.Role);

        // Set the token in a cookie and redirect to the appropriate dashboard
        res.cookie('token', token, { httpOnly: true });
        res.redirect(`/dashboard/${user.Role.toLowerCase()}`);
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send('Internal Server Error');
    }
};

const logout = (req, res) => {
    // Clear the token cookie and redirect to the login page
    res.clearCookie('token');
    res.redirect('/auth/login');
};

// Helper function to hash passwords (for initial setup)
const hashPassword = async (plainPassword) => {
    const saltRounds = 10;
    return await bcrypt.hash(plainPassword, saltRounds);
};

export { login, logout, hashPassword };