import { verifyToken } from '../utils/jwtUtils.js';

const authMiddleware = (roles) => {
    return (req, res, next) => {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).redirect('/auth/login');
        }

        try {
            const decoded = verifyToken(token);
            if (!roles.includes(decoded.role)) {
                return res.status(403).send('Access Denied');
            }
            
            req.user = decoded;
            next();
        } catch (error) {
            res.status(401).redirect('/auth/login');
        }
    };
};

export default authMiddleware;