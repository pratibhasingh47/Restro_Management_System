const mongoose = require('mongoose');

const employeePaySchema = new mongoose.Schema({
    wageCalculation: {
        type: String,
    },
    payroll: {
        type: String,
    },
    bankName: {
        type: String,
    },
    accountNo: {
        type: String,
    },
    bankBranch: {
        type: String,
    },
    ifscCode: {
        type: String,
    },
    issueDate: {
        type: String,
    },
    issueMonth: {
        type: String,
    },
    issuedAmount: {
        type: Number,
    },
    allowance: {
        type: Number,
        default: 0,
    },
    status: {
        type: String,
        default: 'pending',
    },
    managementID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Management',
        required: true
    }
});

module.exports = mongoose.model('EmployeePay', employeePaySchema);