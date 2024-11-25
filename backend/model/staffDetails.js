const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

// Define the StaffDetails schema
const staffDetailsSchema = mongoose.Schema({
    role: {
        type: String,
        // required: [true, "Role is required"],
        enum: ["Manager", "Staff"],
    },
    name: {
        type: String,
        // required: [true, "Name is required"],
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
        // required: [true, "Email is required"],
        unique: true,
        validate: {
            validator: function (value) {
                return validator.isEmail(value);
            },
            message: "Please enter a valid email address",
        },
    },
    password: {
        type: String,
        // required: [true, "Password is required"],
        minlength: [8, "Password should be at least 8 characters long"],
        validate: {
            validator: function (value) {
                return validator.isStrongPassword(value, {
                    minLength: 8,
                    minLowercase: 1,
                    minUppercase: 1,
                    minNumbers: 1,
                    minSymbols: 1,
                });
            },
            message: "Password must include at least one uppercase, one lowercase letter, one number, and one symbol",
        },
    },
    contactNumber: {
        type: String,
        // required: [true, "Contact number is required"],
        validate: {
            validator: function (value) {
                return validator.isMobilePhone(value, "en-IN");
            },
            message: "Please enter a valid Indian mobile number",
        },
    },
    managementId: {
        type: String,
        // required: [true, "Management ID is required"],
    },
    address: {
        type: String,
        // required: [true, "Address is required"],
        minlength: [10, "Address should be at least 10 characters long"],
        maxlength: [100, "Address cannot exceed 100 characters"],
    },
    state: {
        type: String,
        // required: [true, "State is required"],
        minlength: [2, "State should be at least 2 characters long"],
        maxlength: [50, "State cannot exceed 50 characters"],
    },
    country: {
        type: String,
        // required: [true, "Country is required"],
        minlength: [2, "Country should be at least 2 characters long"],
        maxlength: [50, "Country cannot exceed 50 characters"],
    },
    skills: [{
        type: String,
        // required: true,
    }],
    dateOfBirth: {
        type: Date,
        // required: [true, "Date of birth is required"],
    },
    aadharNumber: {
        type: String,
        // required: [true, "Aadhar number is required"],
        unique: true,
        validate: {
            validator: function (value) {
                return validator.isNumeric(value) && value.length === 12;
            },
            message: "Please enter a valid 12-digit Aadhar number",
        },
    },
    accountNumber: {
        type: String,
        // required: [true, "Account number is required"],
        unique: true,
        validate: {
            validator: function (value) {
                return validator.isNumeric(value);
            },
            message: "Please enter a valid account number",
        },
    },
    salary: {
        type: Number,
        // required: [true, "Salary is required"],
    },
    graduationYear: {
        type: Number,
        // required: [true, "Graduation year is required"],
        validate: {
            validator: function (value) {
                return validator.isNumeric(value.toString());
            },
            message: "Please enter a valid year",
        },
    },
    graduationUniversity: {
        type: String,
        // required: [true, "Graduation university is required"],
        maxlength: [100, "Graduation university cannot exceed 100 characters"],
    },
    motherName: {
        type: String,
        // required: [true, "Mother's name is required"],
        minlength: [3, "Mother's name should be at least 3 characters long"],
        maxlength: [50, "Mother's name cannot exceed 50 characters"],
        validate: {
            validator: function (value) {
                return validator.isAlpha(value, "en-US", { ignore: " " });
            },
            message: "Mother's name should only contain alphabets and spaces",
        },
    },
    fatherName: {
        type: String,
        // required: [true, "Father's name is required"],
        minlength: [3, "Father's name should be at least 3 characters long"],
        maxlength: [50, "Father's name cannot exceed 50 characters"],
        validate: {
            validator: function (value) {
                return validator.isAlpha(value, "en-US", { ignore: " " });
            },
            message: "Father's name should only contain alphabets and spaces",
        },
    },
    alternateMobileNumber: {
        type: String,
        // required: [true, "Alternate mobile number is required"],
        validate: {
            validator: function (value) {
                return validator.isMobilePhone(value, "en-IN");
            },
            message: "Please enter a valid Indian mobile number",
        },
    },
}, { timestamps: true });

// Pre-save hook to hash the password if it's new or modified
staffDetailsSchema.pre("save", async function (next) {
    const user = this;

    if (!user.isModified("password")) return next(); // Skip if password is not modified

    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    next();
});

// Method to compare entered password with the hashed password
staffDetailsSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Export the StaffDetails model
const StaffDetails = mongoose.model('StaffDetails', staffDetailsSchema);
module.exports = StaffDetails;