const StaffPersonal = require('../model/staffPersonal');

// Get personal details using verified token
exports.getStaffPersonalByEmail = async (req, res) => {
    try {
        const email = req.user.email; // Extract email from verified token
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
        const updatedPersonalDetails = await StaffPersonal.findOneAndUpdate({ email }, updatedData, { new: true });
        res.json(updatedPersonalDetails);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};