const EmployeeJob = require('../model/employeeJob');

// Get job details by management ID
exports.getJobDetails = async (req, res) => {
    try {
        const managementId = req.params.managementId;
        const jobDetails = await EmployeeJob.findOne({ managementID: managementId });
        if (!jobDetails) {
            return res.status(404).json({ message: 'Job details not found' });
        }
        res.json(jobDetails);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Create or update job details
exports.saveJobDetails = async (req, res) => {
    try {
        const managementId = req.params.managementId;
        const jobDetails = req.body;

        const updatedJobDetails = await EmployeeJob.findOneAndUpdate(
            { managementID: managementId },
            jobDetails,
            { new: true, upsert: true }
        );
        res.json(updatedJobDetails);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete job details
exports.deleteJobDetails = async (req, res) => {
    try {
        const managementId = req.params.managementId;
        const deletedJobDetails = await EmployeeJob.findOneAndDelete({ managementID: managementId });
        if (!deletedJobDetails) {
            return res.status(404).json({ message: 'Job details not found' });
        }
        res.json({ message: 'Job details deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};