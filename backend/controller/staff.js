const StaffDetails = require('../model/staffDetails');
const bcrypt = require('bcrypt');

// Add a new staff member
exports.addStaff = async (req, res) => {
    try {
        const newStaff = new StaffDetails(req.body);
        await newStaff.save();
        res.status(201).json({ message: 'Staff added successfully', staff: newStaff });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Retrieve all staff details
exports.getStaffDetails = async (req, res) => {
    try {
        const staffDetails = await StaffDetails.find();
        res.status(200).json(staffDetails);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a staff member's details
exports.updateStaff = async (req, res) => {
    try {
        // Validate and format dateOfBirth if provided
        if (req.body.dateOfBirth) {
            const dobParts = req.body.dateOfBirth.split('/');
            if (dobParts.length !== 3 || !isValidDate(dobParts[2], dobParts[1], dobParts[0])) {
                return res.status(400).json({ message: "Invalid Date of Birth format. Use 'DD/MM/YYYY'." });
            }
            req.body.dateOfBirth = `${dobParts[2]}-${dobParts[1]}-${dobParts[0]}`;
        }

        const staff = await StaffDetails.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!staff) {
            return res.status(404).json({ message: 'Staff not found' });
        }
        res.status(200).json({ message: 'Staff updated successfully', staff });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a staff member
exports.deleteStaff = async (req, res) => {
    try {
        const staff = await StaffDetails.findByIdAndDelete(req.params.id);
        if (!staff) {
            return res.status(404).json({ message: 'Staff not found' });
        }
        res.status(200).json({ message: 'Staff deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Pre-save hook to hash the password if it's new or modified
StaffDetails.schema.pre("save", async function (next) {
    const user = this;

    if (!user.isModified("password")) return next(); // Skip if password is not modified

    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    next();
});

// Method to compare entered password with the hashed password
StaffDetails.schema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Helper function to validate date
function isValidDate(year, month, day) {
    const date = new Date(`${year}-${month}-${day}`);
    return date && date.getFullYear() === parseInt(year) && date.getMonth() + 1 === parseInt(month) && date.getDate() === parseInt(day);
}