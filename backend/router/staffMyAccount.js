const express = require('express');
const router = express.Router();
const staffPersonalController = require('../controller/staffpersonal');
const { verifyToken, checkRole } = require('../middleware/auth');

// Route for getting personal details using verified token
router.post('/personal/getStaff', verifyToken, checkRole(['Staff', 'Manager']), staffPersonalController.getStaffPersonalByEmail);

// Route for updating personal details using verified token
router.put('/personal/updateStaff', verifyToken, checkRole(['Staff', 'Manager']), staffPersonalController.updateStaffPersonal);

module.exports = router;