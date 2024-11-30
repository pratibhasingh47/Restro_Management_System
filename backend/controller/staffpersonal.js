const StaffPersonal = require('../model/staffPersonal');
const jwt = require('jsonwebtoken'); // Assuming JWT is used for token generation

// Function to extract email from token
const getEmailFromToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'my_jwt_secret'); // Replace 'your_secret_key' with your actual secret key
        return decoded.email;
    } catch (error) {
        throw new Error('Invalid token');
    }
};

// Handle staff login
exports.handleStaffLogin = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Assuming token is sent in the Authorization header
        const email = getEmailFromToken(token);

        // Check if the staff already exists
        const existingStaff = await StaffPersonal.findOne({ email });
        if (existingStaff) {
            // If staff exists, update their details
            const updatedDetails = req.body;
            const updatedStaffPersonal = await StaffPersonal.findByIdAndUpdate(
                existingStaff._id,
                { $set: updatedDetails },
                { new: true }
            );
            return res.status(200).json(updatedStaffPersonal);
        } else {
            // If staff does not exist, create a new one
            const newStaffPersonal = new StaffPersonal(req.body);
            await newStaffPersonal.save();
            return res.status(201).json(newStaffPersonal);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error handling staff login', error });
    }
};

// Create a new staff personal detail
exports.createStaffPersonal = async (req, res) => {
    try {
        const { name, email, password, phone, ...otherDetails } = req.body;

        // Check if the staff already exists
        const existingStaff = await StaffPersonal.findOne({ email });
        if (existingStaff) {
            return res.status(400).json({ message: 'Staff already exists' });
        }

        const newStaffPersonal = new StaffPersonal({
            name,
            email,
            password,
            phone,
            ...otherDetails
        });

        await newStaffPersonal.save();
        res.status(201).json(newStaffPersonal);
    } catch (error) {
        res.status(500).json({ message: 'Error creating staff personal details', error });
    }
};

// Get a staff personal detail by email
exports.getStaffPersonalByEmail = async (req, res) => {
    try {
        const staffPersonal = await StaffPersonal.findOne({ email: req.params.email });
        if (!staffPersonal) {
            return res.status(404).json({ message: 'Staff personal details not found' });
        }
        res.status(200).json(staffPersonal);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching staff personal details', error });
    }
};

// Update a staff personal detail by ID
exports.updateStaffPersonal = async (req, res) => {
    try {
        const { name, email, password, phone, ...otherDetails } = req.body;
        const updatedDetails = { ...otherDetails };

        if (name) updatedDetails.name = name;
        if (email) updatedDetails.email = email;
        if (password) updatedDetails.password = password;
        if (phone) updatedDetails.phone = phone;

        const updatedStaffPersonal = await StaffPersonal.findOneAndUpdate(
            { email: req.params.email },
            { $set: updatedDetails },
            { new: true }
        );

        if (!updatedStaffPersonal) {
            return res.status(404).json({ message: 'Staff personal details not found' });
        }

        res.status(200).json(updatedStaffPersonal);
    } catch (error) {
        res.status(500).json({ message: 'Error updating staff personal details', error });
    }
};

// Delete a staff personal detail by ID
exports.deleteStaffPersonal = async (req, res) => {
    try {
        const deletedStaffPersonal = await StaffPersonal.findByIdAndDelete(req.params.id);
        if (!deletedStaffPersonal) {
            return res.status(404).json({ message: 'Staff personal details not found' });
        }
        res.status(200).json({ message: 'Staff personal details deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting staff personal details', error });
    }
};