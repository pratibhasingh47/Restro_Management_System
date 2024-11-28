const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

// Define the StaffDetails schema
const staffDetailsSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ["Manager", "Staff"],
        required: true
    },
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        validate: {
            validator: value => validator.isAlpha(value, 'en-US', { ignore: ' ' }),
            message: "Name should only contain alphabets and spaces"
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: value => validator.isEmail(value),
            message: "Please enter a valid email address"
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        validate: {
            validator: value => validator.isStrongPassword(value, {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1
            }),
            message: "Password must include at least one uppercase, one lowercase letter, one number, and one symbol"
        }
    },
    contactNumber: {
        type: String,
        required: true,
        validate: {
            validator: value => validator.isMobilePhone(value, 'en-IN'),
            message: "Please enter a valid Indian mobile number"
        }
    },
    managementId: {
        type: String,
        required: true
    },
    address: {
        type: String,
        minlength: 10,
        maxlength: 100
    },
    state: {
        type: String,
        minlength: 2,
        maxlength: 50
    },
    country: {
        type: String,
        minlength: 2,
        maxlength: 50
    },
    skills: [{
        type: String,
    }],
    dateOfBirth: {
        type: Date,
    },
    // aadharNumber: {
    //     type: String,
    //     sparse : true,
    //     unique: true,
    //     default: null,
    //     validate: {
    //         validator: value => value == null || (validator.isNumeric(value) && value.length === 12),
    //         message: "Please enter a valid 12-digit Aadhar number"
    //     }
    // },
    accountNumber: {
        type: String,
        unique: true,
        validate: {
            validator: value => validator.isNumeric(value),
            message: "Please enter a valid account number"
        }
    },
    salary: {
        type: Number,
    },
    graduationYear: {
        type: Number,
        validate: {
            validator: value => validator.isNumeric(value.toString()),
            message: "Please enter a valid year"
        }
    },
    graduationUniversity: {
        type: String,
        maxlength: 100
    },
    motherName: {
        type: String,
        minlength: 3,
        maxlength: 50,
        validate: {
            validator: value => validator.isAlpha(value, 'en-US', { ignore: ' ' }),
            message: "Mother's name should only contain alphabets and spaces"
        }
    },
    fatherName: {
        type: String,
        minlength: 3,
        maxlength: 50,
        validate: {
            validator: value => validator.isAlpha(value, 'en-US', { ignore: ' ' }),
            message: "Father's name should only contain alphabets and spaces"
        }
    },
    alternateMobileNumber: {
        type: String,
        validate: {
            validator: value => validator.isMobilePhone(value, 'en-IN'),
            message: "Please enter a valid Indian mobile number"
        }
    }
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
module.exports = mongoose.model('StaffDetails', staffDetailsSchema);