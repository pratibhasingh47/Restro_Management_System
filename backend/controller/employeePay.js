const EmployeePay = require('../model/employeePay');

// Get pay details by management ID
exports.getPayDetails = async (req, res) => {
    try {
        const managementId = req.params.managementId;
        const payDetails = await EmployeePay.findOne({ managementID: managementId });
        if (!payDetails) {
            return res.status(404).json({ message: 'Pay details not found' });
        }
        res.json(payDetails);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Create or update pay details
exports.savePayDetails = async (req, res) => {
    try {
        const managementId = req.params.managementId;
        const payDetails = req.body;

        const updatedPayDetails = await EmployeePay.findOneAndUpdate(
            { managementID: managementId },
            payDetails,
            { new: true, upsert: true }
        );
        res.json(updatedPayDetails);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete pay details
exports.deletePayDetails = async (req, res) => {
    try {
        const managementId = req.params.managementId;
        const deletedPayDetails = await EmployeePay.findOneAndDelete({ managementID: managementId });
        if (!deletedPayDetails) {
            return res.status(404).json({ message: 'Pay details not found' });
        }
        res.json({ message: 'Pay details deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};