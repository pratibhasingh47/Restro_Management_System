const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

// Define the Management schema
const managementSchema = mongoose.Schema({
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
    password: {
        type: String,
        required: [true, "Password is required"],
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
        required: [true, "Contact number is required"],
        validate: {
            validator: function (value) {
                return validator.isMobilePhone(value, "en-IN");
            },
            message: "Please enter a valid Indian mobile number",
        },
    },
    managementId: {
        type: String,
        required: [true, "Management ID is required"],
    },
}, { timestamps: true });

// Pre-save hook to hash the password if it's new or modified
managementSchema.pre("save", async function (next) {
    const user = this;

    if (!user.isModified("password")) return next(); // Skip if password is not modified

    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    next();
});

// Method to compare entered password with the hashed password
managementSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Export the Management model
const Management = mongoose.model("Management", managementSchema);
module.exports = Management;