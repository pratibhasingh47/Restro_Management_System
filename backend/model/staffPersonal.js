const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const StaffPersonalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthday: {
        type: String
    },
    gender: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
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
    },
    managementId: {
        type: String,
        required: true
    }
});

// Pre-save middleware to hash the password before saving
StaffPersonalSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Method to compare passwords
StaffPersonalSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('StaffPersonal', StaffPersonalSchema);