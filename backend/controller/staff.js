const StaffDetails = require('../model/staffDetails');

exports.addStaff = async (req, res) => {
    try {
        const newStaff = new StaffDetails(req.body);
        await newStaff.save();
        res.status(201).json({ message: 'Staff added successfully', staff: newStaff });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getStaffDetails = async (req, res) => {
    try {
        const staffDetails = await StaffDetails.find();
        res.status(200).json(staffDetails);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateStaff = async (req, res) => {
    try {
        const staff = await StaffDetails.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!staff) {
            return res.status(404).json({ message: 'Staff not found' });
        }
        res.status(200).json({ message: 'Staff updated successfully', staff });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

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