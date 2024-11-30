const StaffPersonal = require('../models/StaffPersonal');

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

// Get a staff personal detail by ID
exports.getStaffPersonalById = async (req, res) => {
    try {
        const staffPersonal = await StaffPersonal.findById(req.params.id);
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

        const updatedStaffPersonal = await StaffPersonal.findByIdAndUpdate(
            req.params.id,
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