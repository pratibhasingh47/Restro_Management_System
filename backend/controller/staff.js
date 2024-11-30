// const StaffDetails = require('../model/staffDetails');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// exports.addStaff = async (req, res) => {
//     try {
//         const {
//             name, email, password, contactNumber, role, managementId
//         } = req.body;

//         const newStaff = new StaffDetails({
//             name,
//             email,
//             password,
//             contactNumber,
//             role,
//             managementId,
//             // address,
//             // state,
//             // country,
//             // skills,
//             // dateOfBirth,
//             // aadharNumber,
//             // accountNumber,
//             // salary,
//             // graduationYear,
//             // graduationUniversity,
//             // motherName,
//             // fatherName,
//             // alternateMobileNumber
//         });

//         await newStaff.save();

//         const token = jwt.sign(
//             { userId: newStaff._id, email: newStaff.email, role: newStaff.role, managementId: newStaff.managementId },
//             process.env.JWT_SECRET || "your_jwt_secret_key",
//             { expiresIn: "1d" }
//         );

//         res.status(201).json({
//             message: "Staff added successfully",
//             staff: {
//                 id: newStaff._id,
//                 name: newStaff.name,
//                 email: newStaff.email,
//                 contactNumber: newStaff.contactNumber,
//                 role: newStaff.role,
//                 managementId: newStaff.managementId
//             },
//             token
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(400).json({ message: error.message });
//     }
// };

// // Retrieve all staff details
// exports.getStaffDetails = async (req, res) => {
//     try {
//         const staffDetails = await StaffDetails.find();
//         res.status(200).json(staffDetails);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // Update a staff member's details
// exports.updateStaff = async (req, res) => {
//     try {
//         const { password, ...updateData } = req.body;

//         // Hash the password if it's provided
//         if (password) {
//             updateData.password = await bcrypt.hash(password, 10);
//         }

//         const staff = await StaffDetails.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });
//         if (!staff) {
//             return res.status(404).json({ message: 'Staff not found' });
//         }
//         res.status(200).json({ message: 'Staff updated successfully', staff });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // Delete a staff member
// exports.deleteStaff = async (req, res) => {
//     try {
//         const staff = await StaffDetails.findByIdAndDelete(req.params.id);
//         if (!staff) {
//             return res.status(404).json({ message: 'Staff not found' });
//         }
//         res.status(200).json({ message: 'Staff deleted successfully' });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };