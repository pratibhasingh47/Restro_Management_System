const Customer = require("../model/customerSchema");
const Management = require("../model/managementSchema");
// const StaffDetails = require("../model/staffDetails");
const StaffPersonal = require("../model/staffPersonal");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

// exports.signup = async (req, res, next) => {
//     try {
//         const { name, email, password, contactNumber, role, managementId, address, state, country, skills, dateOfBirth, aadharNumber, accountNumber, salary, graduationYear, graduationUniversity, motherName, fatherName, alternateMobileNumber } = req.body;

//         if (!name || !email || !password || !contactNumber) {
//             return res.status(400).json({ message: "All fields are required." });
//         }

//         const userRole = role || "Customer";

//         let existingUser;
//         if (userRole === "Customer") {
//             existingUser = await Customer.findOne({ email });
//         } else if (userRole === "Manager" || userRole === "Staff") {
//             existingUser = await Management.findOne({ email });
//         }

//         if (existingUser) {
//             return res.status(400).json({ message: "Email is already registered." });
//         }

//         let newUser;
//         if (userRole === "Customer") {
//             newUser = new Customer({
//                 name,
//                 email,
//                 password,
//                 contactNumber
//             });
//         } else if (userRole === "Manager" || userRole === "Staff") {
//             if (!managementId) {
//                 return res.status(400).json({ message: "Management ID is required for staff and manager." });
//             }
//             newUser = new Management({
//                 name,
//                 email,
//                 password,
//                 contactNumber,
//                 role: userRole,
//                 managementId,
//                 address,
//                 state,
//                 country,
//                 skills,
//                 dateOfBirth,
//                 aadharNumber,
//                 accountNumber,
//                 salary,
//                 graduationYear,
//                 graduationUniversity,
//                 motherName,
//                 fatherName,
//                 alternateMobileNumber
//             });
//         } else {
//             return res.status(400).json({ message: "Invalid role specified." });
//         }

//         await newUser.save();

//         const token = jwt.sign(
//             { userId: newUser._id, email: newUser.email, role: newUser.role, managementId: newUser.managementId },
//             process.env.JWT_SECRET || "your_jwt_secret_key",
//             { expiresIn: "1d" }
//         );

//         res.status(201).json({
//             message: "User created successfully",
//             user: {
//                 id: newUser._id,
//                 name: newUser.name,
//                 email: newUser.email,
//                 contactNumber: newUser.contactNumber,
//                 role: newUser.role
//             },
//             token
//         });
//     } catch (error) {
//         console.error(error);
//         next(error);
//     }
// };


/*
exports.signup = async (req, res, next) => {
    try {
        const { name, email, password, contactNumber, role, managementId, address, state, country, skills, dateOfBirth, aadharNumber, accountNumber, salary, graduationYear, graduationUniversity, motherName, fatherName, alternateMobileNumber } = req.body;

        if (!name || !email || !password || !contactNumber) {
            return res.status(400).json({ message: "All fields are required." });
        }

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

        // Validate and format dateOfBirth if provided
        let formattedDOB = null;
        if (dateOfBirth) {
            const dobParts = dateOfBirth.split('/');
            if (dobParts.length !== 3 || !isValidDate(dobParts[2], dobParts[1], dobParts[0])) {
                return res.status(400).json({ message: "Invalid Date of Birth format. Use 'DD/MM/YYYY'." });
            }
            formattedDOB = new Date(`${dobParts[2]}-${dobParts[1]}-${dobParts[0]}`);
            const currentDate = new Date();
            if (formattedDOB.toDateString() === currentDate.toDateString()) {
                return res.status(400).json({ message: "Date of Birth cannot be the current date." });
            }
        }

        let newUser;
        if (userRole === "Customer") {
            newUser = new Customer({
                name,
                email,
                password,
                contactNumber,
                dateOfBirth: formattedDOB
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
                managementId,
                address,
                state,
                country,
                skills,
                dateOfBirth: formattedDOB,
                aadharNumber,
                accountNumber,
                salary,
                graduationYear,
                graduationUniversity,
                motherName,
                fatherName,
                alternateMobileNumber
            });

            // Also save to StaffDetails schema for staff role
            if (userRole === "Staff") {
                const staffDetails = new StaffDetails({
                    name,
                    email,
                    password,
                    contactNumber,
                    role: userRole,
                    managementId,
                    address,
                    state,
                    country,
                    skills,
                    dateOfBirth: formattedDOB,
                    aadharNumber,
                    accountNumber,
                    salary,
                    graduationYear,
                    graduationUniversity,
                    motherName,
                    fatherName,
                    alternateMobileNumber
                });
                await staffDetails.save();
            }
        } else {
            return res.status(400).json({ message: "Invalid role specified." });
        }

        await newUser.save();

        const token = jwt.sign(
            { userId: newUser._id, email: newUser.email, role: newUser.role, managementId: newUser.managementId },
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

// Helper function to validate date
function isValidDate(year, month, day) {
    const date = new Date(`${year}-${month}-${day}`);
    return date && date.getFullYear() === parseInt(year) && date.getMonth() + 1 === parseInt(month) && date.getDate() === parseInt(day);
}

*/


exports.signup = async (req, res, next) => {
    try {
        const { name, email, password, contactNumber, role, managementId, address, state, country, skills, dateOfBirth, aadharNumber, accountNumber, salary, graduationYear, graduationUniversity, motherName, fatherName, alternateMobileNumber } = req.body;

        if (!name || !email || !password || !contactNumber || !managementId) {
            return res.status(400).json({ message: "Name, email, password, contact number, and management ID are required." });
        }

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

        // Validate and format dateOfBirth if provided
        let formattedDOB = null;
        if (dateOfBirth) {
            const dobParts = dateOfBirth.split('/');
            if (dobParts.length !== 3 || !isValidDate(dobParts[2], dobParts[1], dobParts[0])) {
                return res.status(400).json({ message: "Invalid Date of Birth format. Use 'DD/MM/YYYY'." });
            }
            formattedDOB = new Date(`${dobParts[2]}-${dobParts[1]}-${dobParts[0]}`);
            const currentDate = new Date();
            if (formattedDOB.toDateString() === currentDate.toDateString()) {
                return res.status(400).json({ message: "Date of Birth cannot be the current date." });
            }
        }

        let newUser;
        if (userRole === "Customer") {
            newUser = new Customer({
                name,
                email,
                password,
                contactNumber,
                dateOfBirth: formattedDOB
            });
        } else if (userRole === "Manager" || userRole === "Staff") {
            newUser = new Management({
                name,
                email,
                password,
                contactNumber,
                role: userRole,
                managementId,
                address,
                state,
                country,
                skills,
                dateOfBirth: formattedDOB,
                aadharNumber,
                accountNumber,
                salary,
                graduationYear,
                graduationUniversity,
                motherName,
                fatherName,
                alternateMobileNumber
            });

            // Also save to StaffPersonal schema for staff role
            if (userRole === "Staff") {
                const staffPersonal = new StaffPersonal({
                    name,
                    email,
                    password,
                    phone: contactNumber,
                    state,
                    city: address, // Assuming address contains city, you may need to adjust this
                    homeAddress: address,
                    workAddress: address,
                    motherName,
                    fatherName,
                    alternateEmail: email, // Assuming alternate email is same as email, you may need to adjust this
                    alternateMobileNo: alternateMobileNumber,
                    managementId,
                    birthday: formattedDOB
                });
                await staffPersonal.save();
            }
        } else {
            return res.status(400).json({ message: "Invalid role specified." });
        }

        await newUser.save();

        const token = jwt.sign(
            { userId: newUser._id, email: newUser.email, role: newUser.role, managementId: newUser.managementId },
            process.env.JWT_SECRET,
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

// Helper function to validate date
function isValidDate(year, month, day) {
    const date = new Date(`${year}-${month}-${day}`);
    return date && date.getFullYear() === parseInt(year) && date.getMonth() + 1 === parseInt(month) && date.getDate() === parseInt(day);
}

exports.login = async (req, res) => {
    try {
        const { email, password, managementId } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        let user = await Customer.findOne({ email });
        let role = "Customer";

        if (!user) {
            user = await Management.findOne({ email, managementId });
            role = user ? user.role : role;
        }

        if (!user) {
            return res.status(400).json({ message: "Invalid email or management ID (User Not Found)" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password." });
        }
        
        // console.log('JWT_SECRET for signing:', process.env.JWT_SECRET);
        const token = jwt.sign(
            { userId: user._id, email: user.email, role: user.role, managementId: user.managementId },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        // console.log('JWT_SECRET for signing:', process.env.JWT_SECRET);

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