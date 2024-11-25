const mongoose = require('mongoose');
const validator = require('validator');

// Define the StaffDetails schema
const staffDetailsSchema = mongoose.Schema({
    role: {
        type: String,
        required: [true, "Role is required"],
        enum: ["Manager", "Staff"],
    },
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name should be at least 3 characters long"],
        maxlength: [50, "Name cannot exceed 50 characters"],
        validate: {
            validator: function (value) {
                return validator.isAlpha(value, "en-US", { ignore: " " });
            },
            message: "Name should only contain alphabets and spaces",
        },
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        validate: {
            validator: function (value) {
                return validator.isEmail(value);
            },
            message: "Please enter a valid email address",
        },
    },
    contactNumber: {
        type: String,
        required: [true, "Contact number is required"],
        validate: {
            validator: function (value) {
                return validator.isMobilePhone(value, "en-IN");
            },
            message: "Please enter a valid Indian mobile number",
        },
    },
    address: {
        type: String,
        required: [true, "Address is required"],
        minlength: [10, "Address should be at least 10 characters long"],
        maxlength: [100, "Address cannot exceed 100 characters"],
    },
    attendance: [{
        date: {
            type: Date,
            default: Date.now,
            required: true,
        },
        status: {
            type: String,
            required: true,
            enum: ["Present", "Absent", "On Leave"],
        },
    }],
    salary: {
        type: Number,
        required: [true, "Salary is required"],
    },
}, { timestamps: true });

// Export the StaffDetails model
const StaffDetails = mongoose.model('StaffDetails', staffDetailsSchema);
module.exports = StaffDetails;