import React, { useState } from "react";
import {
    Box,
    Typography,
    Paper,
    Avatar,
    Button,
    TextField,
    Grid,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LockIcon from "@mui/icons-material/Lock";

// Static admin data (replace with real user data when integrating backend/auth)
const ADMIN_INFO = {
    name: "Pratibha Singh",
    email: "admin@rms.com",
    phone: "+91-9876543210",
    role: "Admin",
    avatar: "",
    joined: "2023-01-15",
    lastLogin: "2025-05-28 12:45",
};

const MyAccountAdmin: React.FC = () => {
    const [editOpen, setEditOpen] = useState(false);
    const [pwdOpen, setPwdOpen] = useState(false);
    const [form, setForm] = useState({
        name: ADMIN_INFO.name,
        email: ADMIN_INFO.email,
        phone: ADMIN_INFO.phone,
    });
    const [passwordForm, setPasswordForm] = useState({
        oldPwd: "",
        newPwd: "",
        confirmPwd: "",
    });

    // Handlers for edit profile
    const handleEditOpen = () => setEditOpen(true);
    const handleEditClose = () => setEditOpen(false);
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    // Handlers for password change
    const handlePwdOpen = () => setPwdOpen(true);
    const handlePwdClose = () => setPwdOpen(false);
    const handlePwdChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setPasswordForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const handleFormSubmit = () => {
        // Integrate with backend to update profile
        handleEditClose();
    };

    const handlePwdSubmit = () => {
        // Add real password update logic here
        if (passwordForm.newPwd !== passwordForm.confirmPwd) {
            alert("New passwords do not match!");
            return;
        }
        // Integrate with backend to change password
        handlePwdClose();
    };

    return (
        <Box p={3} maxWidth={600} mx="auto">
            <Paper elevation={3} sx={{ p: 4 }}>
                <Box display="flex" alignItems="center" mb={3}>
                    <Avatar
                        sx={{ width: 80, height: 80, fontSize: 36, bgcolor: "#001D3D", mr: 3 }}
                        src={ADMIN_INFO.avatar}
                    >
                        {ADMIN_INFO.name[0]}
                    </Avatar>
                    <Box>
                        <Typography variant="h5">{ADMIN_INFO.name}</Typography>
                        <Typography color="textSecondary">{ADMIN_INFO.role}</Typography>
                    </Box>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle2" color="textSecondary">
                            Email
                        </Typography>
                        <Typography>{form.email}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle2" color="textSecondary">
                            Phone
                        </Typography>
                        <Typography>{form.phone}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle2" color="textSecondary">
                            Joined On
                        </Typography>
                        <Typography>{ADMIN_INFO.joined}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle2" color="textSecondary">
                            Last Login
                        </Typography>
                        <Typography>{ADMIN_INFO.lastLogin}</Typography>
                    </Grid>
                </Grid>
                <Box mt={4} display="flex" gap={2}>
                    <Button
                        variant="contained"
                        startIcon={<EditIcon />}
                        onClick={handleEditOpen}
                    >
                        Edit Profile
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<LockIcon />}
                        onClick={handlePwdOpen}
                    >
                        Change Password
                    </Button>
                </Box>
            </Paper>

            {/* Edit Profile Dialog */}
            <Dialog open={editOpen} onClose={handleEditClose} maxWidth="xs" fullWidth>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Name"
                        name="name"
                        value={form.name}
                        onChange={handleFormChange}
                        margin="dense"
                        fullWidth
                        required
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={form.email}
                        onChange={handleFormChange}
                        margin="dense"
                        fullWidth
                        required
                        type="email"
                    />
                    <TextField
                        label="Phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleFormChange}
                        margin="dense"
                        fullWidth
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditClose}>Cancel</Button>
                    <Button onClick={handleFormSubmit} variant="contained">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Change Password Dialog */}
            <Dialog open={pwdOpen} onClose={handlePwdClose} maxWidth="xs" fullWidth>
                <DialogTitle>Change Password</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Old Password"
                        name="oldPwd"
                        value={passwordForm.oldPwd}
                        onChange={handlePwdChange}
                        margin="dense"
                        fullWidth
                        required
                        type="password"
                    />
                    <TextField
                        label="New Password"
                        name="newPwd"
                        value={passwordForm.newPwd}
                        onChange={handlePwdChange}
                        margin="dense"
                        fullWidth
                        required
                        type="password"
                    />
                    <TextField
                        label="Confirm New Password"
                        name="confirmPwd"
                        value={passwordForm.confirmPwd}
                        onChange={handlePwdChange}
                        margin="dense"
                        fullWidth
                        required
                        type="password"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handlePwdClose}>Cancel</Button>
                    <Button onClick={handlePwdSubmit} variant="contained" color="primary">
                        Change
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default MyAccountAdmin;