import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store/store'; // Adjust path as needed
import { fetchStaffDetails, addStaffDetailAsync, updateStaffDetailAsync, deleteStaffDetailAsync } from '../redux/reducers/staffDetails'; // Adjust path as needed
import { StaffDetail } from '../types/staff'; // Adjust path as needed
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AppDispatch } from '../redux/store/store'; // Adjust path as needed

const StaffDetails: React.FC = () => {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        fontFamily: 'Lato, sans-serif', // Set the font to Lato
    };

    const dispatch: AppDispatch = useDispatch();
    const { staffDetails = [], loading, error } = useSelector((state: RootState) => state.staffDetails);

    const [open, setOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const [formData, setFormData] = useState<StaffDetail>({
        id: '',
        role: '',
        name: '',
        email: '',
        password: '',
        contactNumber: '',
        managementId: '',
        address: '',
        state: '',
        country: '',
        skills: [],
        dateOfBirth: new Date(),
        aadharNumber: '',
        accountNumber: '',
        salary: 0,
        graduationYear: 0,
        graduationUniversity: '',
        motherName: '',
        fatherName: '',
        alternateMobileNumber: '',
    });

    useEffect(() => {
        dispatch(fetchStaffDetails());
    }, [dispatch]);

    const handleOpen = (item?: StaffDetail) => {
        if (item) {
            setIsEditing(true);
            setFormData(item);
        } else {
            setIsEditing(false);
            setFormData({
                id: '',
                role: '',
                name: '',
                email: '',
                password: '',
                contactNumber: '',
                managementId: '',
                address: '',
                state: '',
                country: '',
                skills: [],
                dateOfBirth: new Date(),
                aadharNumber: '',
                accountNumber: '',
                salary: 0,
                graduationYear: 0,
                graduationUniversity: '',
                motherName: '',
                fatherName: '',
                alternateMobileNumber: '',
            });
        }
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'dateOfBirth') {
            setFormData(prevFormData => ({ ...prevFormData, [name]: new Date(value) }));
        } else {
            setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
        }
    };
    const handleDelete = (id: string) => {
        dispatch(deleteStaffDetailAsync(id));
    };

    const handleSubmit = () => {
        const newItem: StaffDetail = {
            ...formData,
            id: new Date().toISOString(), // Temporary ID, replace with actual ID generation logic
            dateOfBirth: formData.dateOfBirth instanceof Date ? formData.dateOfBirth : new Date()
        };
        dispatch(addStaffDetailAsync(newItem));
        handleClose();
    };
    
    const handleUpdate = () => {
        const updatedItem: StaffDetail = {
            ...formData,
            dateOfBirth: formData.dateOfBirth instanceof Date ? formData.dateOfBirth : new Date()
        };
        dispatch(updateStaffDetailAsync(updatedItem));
        handleClose();
    };

    return (
        <div style={{ fontFamily: 'Lato, sans-serif', backgroundColor: 'black', color: 'white', height: '100vh' }}>
            <Box sx={{ '& > :not(style)': { m: 1 }, position: 'fixed', top: 125, right: 40 }}>
                <Button
                    sx={{ fontFamily: 'Lato, sans-serif', backgroundColor: '#FFC300', color: '#001D3D', fontWeight: 'bold', padding: '10px 20px' }}
                    variant="contained" color="primary" onClick={() => handleOpen()} startIcon={<EditIcon />}>
                    Add Employee
                </Button>
            </Box>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 'bold' }}>
                            {isEditing ? 'Update Employee Details' : 'Add New Employee'}
                        </Typography>
                        <TextField
                            label="Role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="Contact Number"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="Management ID"
                            name="managementId"
                            value={formData.managementId}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="State"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="Country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="Skills"
                            name="skills"
                            value={formData.skills.join(',')}
                            onChange={(e) => setFormData(prevFormData => ({ ...prevFormData, skills: e.target.value.split(',').map(skill => skill.trim()) }))}
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="Date of Birth"
                            name="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth.toISOString().substring(0, 10)}
                            onChange={(e) => setFormData(prevFormData => ({ ...prevFormData, dateOfBirth: new Date(e.target.value) }))}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="Aadhar Number"
                            name="aadharNumber"
                            value={formData.aadharNumber}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="Account Number"
                            name="accountNumber"
                            value={formData.accountNumber}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="Salary"
                            name="salary"
                            value={formData.salary}
                            onChange={handleChange}
                            type="number"
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="Graduation Year"
                            name="graduationYear"
                            value={formData.graduationYear}
                            onChange={handleChange}
                            type="number"
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="Graduation University"
                            name="graduationUniversity"
                            value={formData.graduationUniversity}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="Mother's Name"
                            name="motherName"
                            value={formData.motherName}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="Father's Name"
                            name="fatherName"
                            value={formData.fatherName}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <TextField
                            label="Alternate Mobile Number"
                            name="alternateMobileNumber"
                            value={formData.alternateMobileNumber}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputProps={{ style: { fontFamily: 'Lato, sans-serif' } }}
                        />
                        <Button
                            onClick={isEditing ? handleUpdate : handleSubmit}
                            variant="contained"
                            color="primary"
                            style={{ fontFamily: 'Lato, sans-serif', backgroundColor: '#FFC300', marginTop: '20px', color: 'black', fontWeight: 'bold' }}
                        >
                            {isEditing ? 'Update Employee' : 'Add Employee'}
                        </Button>
                    </Box>
                </Fade>
            </Modal>

            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px', marginLeft: '100px', marginRight: '100px' }}>
                <Box sx={{ width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <Typography variant="h4" component="h1" style={{ fontFamily: 'Lato, sans-serif', marginBottom: '20px' }}>
                        Employee Details
                    </Typography>
                    {loading && <Typography style={{ fontFamily: 'Lato, sans-serif' }}>Loading...</Typography>}
                    {error && <Typography style={{ fontFamily: 'Lato, sans-serif' }}>Error: {error}</Typography>}
                    <Grid container spacing={6}>
                        {Array.isArray(staffDetails) && staffDetails.map((item: StaffDetail) => (
                            <Grid item xs={12} sm={4} key={item.id}>
                                <Card sx={{ minWidth: 275, padding: '10px' }}>
                                    <CardContent>
                                        <Typography variant="h6" component="div" sx={{ fontFamily: 'Lato, sans-serif', fontWeight: 'bold' }}>
                                            {item.name}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5, mt: 0.5, fontFamily: 'Lato, sans-serif' }} color="text.secondary">
                                            {item.email}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontFamily: 'Lato, sans-serif' }}>
                                            Role: {item.role}
                                            <br />
                                            Contact: {item.contactNumber}
                                            <br />
                                            Address: {item.address}
                                            <br />
                                            Salary: ${item.salary}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            size="small"
                                            sx={{ fontFamily: 'Lato, sans-serif', backgroundColor: '#FFC300', color: '#001D3D', fontWeight: 'bold', fontSize: '15px', padding: '5px 10px' }}
                                            startIcon={<EditIcon />}
                                            onClick={() => handleOpen(item)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            size="small"
                                            sx={{ fontFamily: 'Lato, sans-serif', backgroundColor: '#001D3D', color: '#fff', fontWeight: 'bold', fontSize: '15px', padding: '5px 10px' }}
                                            startIcon={<DeleteIcon />}
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            Delete
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
        </div>
    );
};

export default StaffDetails;