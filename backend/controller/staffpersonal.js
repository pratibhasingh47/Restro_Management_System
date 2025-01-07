const StaffPersonal = require('../model/staffPersonal');

// Fetch all personal details for Staff My Account
exports.getPersonalDetails = async (req, res, next) => {
    try {
        const staffId = req.user.id; // Assuming you have the staff ID in the user object
        const personalDetails = await StaffPersonal.findOne({ managementId: staffId });
        res.status(200).json(personalDetails);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

// Create a new staff personal detail
exports.createStaffPersonal = async (req, res, next) => {
    try {
        const { name, email, password, contactNumber, managementId } = req.body;

        if (!name || !email || !password || !contactNumber || !managementId) {
            return res.status(400).json({ message: "Name, email, password, contact number, and management ID are required." });
        }

        const newStaffPersonal = new StaffPersonal({
            name,
            email,
            password,
            phone: contactNumber,
            managementId
        });

        await newStaffPersonal.save();

        res.status(201).json({ message: "Staff personal details created successfully", staffPersonal: newStaffPersonal });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

// Get a staff personal detail by email
exports.getStaffPersonalByEmail = async (req, res, next) => {
    try {
        const { email } = req.params;
        const personalDetails = await StaffPersonal.findOne({ email });

        if (!personalDetails) {
            return res.status(404).json({ message: "Staff personal details not found" });
        }

        res.status(200).json(personalDetails);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

// Update a staff personal detail by email
exports.updateStaffPersonal = async (req, res, next) => {
    try {
        const { email } = req.params;
        const updateData = req.body;

        const updatedStaffPersonal = await StaffPersonal.findOneAndUpdate({ email }, updateData, { new: true });

        if (!updatedStaffPersonal) {
            return res.status(404).json({ message: "Staff personal details not found" });
        }

        res.status(200).json({ message: "Staff personal details updated successfully", staffPersonal: updatedStaffPersonal });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

// Delete a staff personal detail by ID
exports.deleteStaffPersonal = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedStaffPersonal = await StaffPersonal.findByIdAndDelete(id);

        if (!deletedStaffPersonal) {
            return res.status(404).json({ message: "Staff personal details not found" });
        }

        res.status(200).json({ message: "Staff personal details deleted successfully" });
    } catch (error) {
        console.error(error);
        next(error);
    }
};