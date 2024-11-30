const express = require('express');
const router = express.Router();
const staffPersonalController = require('../controller/staffpersonal');

// Route for handling staff login
router.post('/personal/login', staffPersonalController.handleStaffLogin);

// Route for creating a new staff personal detail
router.post('/personal/create', staffPersonalController.createStaffPersonal);

// Route for getting a staff personal detail by email
router.get('/personal/getStaff/:email', staffPersonalController.getStaffPersonalByEmail);

// Route for updating a staff personal detail by ID
router.put('/personal/updateStaff/:email', staffPersonalController.updateStaffPersonal);

// Route for deleting a staff personal detail by ID
router.delete('/personal/:id', staffPersonalController.deleteStaffPersonal);

module.exports = router;