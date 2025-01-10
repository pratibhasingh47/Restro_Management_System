const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    console.log('Received Token:', token); // Print token for debugging
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }
    
    // console.log('JWT_SECRET for verification:', process.env.JWT_SECRET); 
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET );
        // console.log('JWT_SECRET for verification:', process.env.JWT_SECRET); 
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Token verification error:', error);
        res.status(400).json({ message: "Invalid token." });
    }
};

// Middleware to check roles
const checkRole = (roles) => {
    return (req, res, next) => {
        console.log(`User role: ${req.user.role}`); 
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access denied. You do not have the required role." });
        }
        next();
    };
};

module.exports = {
    verifyToken,
    checkRole
};