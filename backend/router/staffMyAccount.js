const express = require('express');
const router = express.Router();
const staffPersonalController = require('../controller/staffpersonal');
const employeeJobController = require('../controller/employeeJob');
const employeePayController = require('../controller/employeePay');
const { verifyToken, checkRole } = require('../middleware/auth');

// Route for getting personal details using verified token
router.post('/personal/getStaff', verifyToken, checkRole(['Staff', 'Manager']), staffPersonalController.getStaffPersonalByEmail);

// Route for updating personal details using verified token
router.put('/personal/updateStaff', verifyToken, checkRole(['Staff', 'Manager']), staffPersonalController.updateStaffPersonal);

// Route for getting job details using verified token
router.get('/job/:managementId', verifyToken, checkRole(['Staff', 'Manager']), employeeJobController.getJobDetails);

// Route for creating or updating job details using verified token
router.post('/job/:managementId', verifyToken, checkRole(['Staff', 'Manager']), employeeJobController.saveJobDetails);

// Route for deleting job details using verified token
// router.delete('/job/:managementId', verifyToken, checkRole(['Staff', 'Manager']), employeeJobController.deleteJobDetails);

// Route for getting pay details using verified token
router.get('/pay/:managementId', verifyToken, checkRole(['Staff', 'Manager']), employeePayController.getPayDetails);

// Route for creating or updating pay details using verified token
router.post('/pay/:managementId', verifyToken, checkRole(['Staff', 'Manager']), employeePayController.savePayDetails);

// Route for deleting pay details using verified token
// router.delete('/pay/:managementId', verifyToken, checkRole(['Staff', 'Manager']), employeePayController.deletePayDetails);

module.exports = router;