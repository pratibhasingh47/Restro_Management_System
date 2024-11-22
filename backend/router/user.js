const express = require('express');
const { verifyToken, checkRole } = require('../middleware/auth');
const { signup, login } = require('../controller/user');
const router = express.Router();

// Signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);

// Example route accessible only by authenticated users
router.get('/customer-dashboard', verifyToken, checkRole(['Customer']), (req, res) => {
    res.send("Welcome to Customer Dashboard");
});

// Example route accessible only by managers
router.get('/manager-dashboard', verifyToken, checkRole(['Manager']), (req, res) => {
    res.send("Welcome to Manager Dashboard");
});

// Example route accessible only by staff
router.get('/staff-dashboard', verifyToken, checkRole(['Staff']), (req, res) => {
    res.send("Welcome to Staff Dashboard");
});

module.exports = router;