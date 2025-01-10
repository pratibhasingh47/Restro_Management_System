const StaffPersonal = require('../model/staffPersonal');
const moment = require('moment');

// Get personal details using verified token
exports.getStaffPersonalByEmail = async (req, res) => {
    try {
        const email = req.user.email; // Extract email from verified token
        console.log('Email:', email);
        const personalDetails = await StaffPersonal.findOne({ email });
        if (!personalDetails) {
            return res.status(404).json({ message: 'Personal details not found' });
        }
        res.json(personalDetails);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update personal details using verified token
exports.updateStaffPersonal = async (req, res) => {
    try {
        const email = req.user.email; // Extract email from verified token
        const updatedData = req.body;

        // Format the birthday to 'MM/DD/YYYY' format if it exists in the request body
        if (updatedData.birthday) {
            updatedData.birthday = moment(updatedData.birthday).format('MM/DD/YYYY');
        }

        const updatedPersonalDetails = await StaffPersonal.findOneAndUpdate({ email }, updatedData, { new: true });
        res.json(updatedPersonalDetails);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};