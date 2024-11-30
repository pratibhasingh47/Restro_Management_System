const express = require('express');
const router = express.Router();
const staffPersonalController = require('../controller/staffpersonal');

// Route for creating a new staff personal detail
router.post('/personal', staffPersonalController.createStaffPersonal);

// Route for getting a staff personal detail by ID
router.get('/personal/:id', staffPersonalController.getStaffPersonalById);

// Route for updating a staff personal detail by ID
router.put('/personal/:id', staffPersonalController.updateStaffPersonal);

// Route for deleting a staff personal detail by ID
router.delete('/personal/:id', staffPersonalController.deleteStaffPersonal);

module.exports = router;