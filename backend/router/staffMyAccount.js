const express = require('express');
const router = express.Router();
const staffPersonalController = require('../controller/staffPersonalController');
const verifyToken = require('../middleware/auth');

// Route for getting personal details using verified token
router.post('/personal/getStaff', verifyToken, staffPersonalController.getStaffPersonalByEmail);

// Route for updating personal details using verified token
router.put('/personal/updateStaff', verifyToken, staffPersonalController.updateStaffPersonal);

module.exports = router;