const Customer = require("../model/customerSchema");
const Management = require("../model/managementSchema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res, next) => {
    try {
        const { name, email, password, contactNumber, role, managementId } = req.body;

        if (!name || !email || !password || !contactNumber) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Default role to "Customer" if not provided
        const userRole = role || "Customer";

        let existingUser;
        if (userRole === "Customer") {
            existingUser = await Customer.findOne({ email });
        } else if (userRole === "Manager" || userRole === "Staff") {
            existingUser = await Management.findOne({ email });
        }

        if (existingUser) {
            return res.status(400).json({ message: "Email is already registered." });
        }

        let newUser;
        if (userRole === "Customer") {
            newUser = new Customer({
                name,
                email,
                password,
                contactNumber
            });
        } else if (userRole === "Manager" || userRole === "Staff") {
            if (!managementId) {
                return res.status(400).json({ message: "Management ID is required for staff and manager." });
            }
            newUser = new Management({
                name,
                email,
                password,
                contactNumber,
                role: userRole,
                managementId
            });
        } else {
            return res.status(400).json({ message: "Invalid role specified." });
        }

        await newUser.save();

        const token = jwt.sign(
            { userId: user._id, email: user.email, password: user.password, role: user.role, managementId: user.managementId },
            process.env.JWT_SECRET || "your_jwt_secret_key",
            { expiresIn: "1d" }
        );

        res.status(201).json({
            message: "User created successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                contactNumber: newUser.contactNumber,
                role: newUser.role
            },
            token
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password, managementId } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        let user = await Customer.findOne({ email });
        let role = "Customer"; // Default role to Customer if not specified

        if (!user) {
            user = await Management.findOne({ email, managementId });
            role = user ? user.role : role; // Update role if user is found in Management
        }

        if (!user) {
            return res.status(400).json({ message: "Invalid email or management ID (User Not Found)" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password." });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email, password: user.password, role: user.role, managementId: user.managementId },
            process.env.JWT_SECRET || "your_jwt_secret_key",
            { expiresIn: "1d" }
        );

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                contactNumber: user.contactNumber,
                role: user.role,
                managementId: user.managementId
            },
            token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};