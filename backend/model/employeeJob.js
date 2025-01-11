// models/EmployeeJob.js
const mongoose = require('mongoose');

const employeeJobSchema = new mongoose.Schema({
    status: {
        type: String
    },
    workPerHourWeek: {
        type: Number
    },
    dateHired: {
        type: String
    },
    department: {
        type: String
    },
    position: {
        type: String
    },
    employmentType: {
        type: String
    },
    managementID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Management',
        required: true
    }
});

module.exports = mongoose.model('EmployeeJob', employeeJobSchema);