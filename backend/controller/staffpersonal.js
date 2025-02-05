const StaffPersonal = require('../model/staffPersonal');
const { parse, format } = require('date-fns');
const Employee = require('../model/managementSchema'); // Adjust the path to your Employee model


// Get personal details using verified token
exports.getStaffPersonalByEmail = async (req, res) => {
    try {
        const email = req.user.email; // Extract email from verified token
        // console.log('Email:', email);
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

        // Format the birthday to 'MM/dd/yyyy' format if it exists in the request body
        if (updatedData.birthday) {
            const parsedDate = parse(updatedData.birthday, 'MM/dd/yyyy', new Date());
            updatedData.birthday = format(parsedDate, 'MM/dd/yyyy');
        }

        const updatedPersonalDetails = await StaffPersonal.findOneAndUpdate({ email }, updatedData, { new: true });
        res.json(updatedPersonalDetails);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};


exports.getAllStaff = async (req, res) => {
    try {
        const staffMembers = await Employee.find({ role: 'Staff' });
        res.status(200).json(staffMembers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching staff members', error });
    }
};
