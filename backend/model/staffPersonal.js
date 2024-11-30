const mongoose = require('mongoose');

const StaffPersonalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthday: {
        type: Date
    },
    gender: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    homeAddress: {
        type: String
    },
    workAddress: {
        type: String
    },
    motherName: {
        type: String
    },
    fatherName: {
        type: String
    },
    alternateEmail: {
        type: String
    },
    alternateMobileNo: {
        type: String
    }
});

module.exports = mongoose.model('StaffPersonal', StaffPersonalSchema);
