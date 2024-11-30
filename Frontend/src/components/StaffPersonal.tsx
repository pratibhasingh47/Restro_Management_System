import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store/store';
import { getStaffPersonalById, createStaffPersonal, updateStaffPersonal, deleteStaffPersonal } from '../redux/reducers/staffPersonal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const StaffPersonal: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const staffPersonal = useSelector((state: RootState) => state.staffPersonal.staffPersonal);
    const loading = useSelector((state: RootState) => state.staffPersonal.loading);
    const error = useSelector((state: RootState) => state.staffPersonal.error);
    const [formState, setFormState] = React.useState({
        name: '',
        birthday: '',
        gender: '',
        email: '',
        password: '',
        phone: '',
        state: '',
        city: '',
        homeAddress: '',
        workAddress: '',
        motherName: '',
        fatherName: '',
        alternateEmail: '',
        alternateMobileNo: ''
    });

    React.useEffect(() => {
        if (staffPersonal) {
            setFormState(staffPersonal);
        }
    }, [staffPersonal]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (staffPersonal) {
            dispatch(updateStaffPersonal({ id: staffPersonal.id, staffData: formState }));
        } else {
            dispatch(createStaffPersonal(formState));
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" bgcolor="#f4f6f8" 
        sx={{ fontFamily: 'Lato, sans-serif' , height: 'auto'}}
        >
            <Paper elevation={3} style={{ padding: '2rem', width: '100%', height: '80vh' }}>
                <Typography variant="h4" gutterBottom
                    sx={{ fontFamily: 'Lato ', color: '#000', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                    Personal Details
                </Typography>
                {loading && <Typography>Loading...</Typography>}
                {error && <Typography>Error: {error}</Typography>}
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={5} 
                    sx={{ fontFamily: 'Lato '}}
                    >
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                fullWidth
                                required
                                />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Birthday"
                                name="birthday"
                                // type="date"
                                value={formState.birthday}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Gender"
                                name="gender"
                                value={formState.gender}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Email"
                                name="email"
                                type="email"
                                value={formState.email}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Password"
                                name="password"
                                type="password"
                                value={formState.password}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Phone"
                                name="phone"
                                value={formState.phone}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="State"
                                name="state"
                                value={formState.state}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="City"
                                name="city"
                                value={formState.city}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Home Address"
                                name="homeAddress"
                                value={formState.homeAddress}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Work Address"
                                name="workAddress"
                                value={formState.workAddress}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Mother's Name"
                                name="motherName"
                                value={formState.motherName}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Father's Name"
                                name="fatherName"
                                value={formState.fatherName}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Alternate Email"
                                name="alternateEmail"
                                type="email"
                                value={formState.alternateEmail}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Alternate Mobile No"
                                name="alternateMobileNo"
                                value={formState.alternateMobileNo}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                style={{ padding: '0.5rem', fontSize: '0.875rem', maxWidth : '100px' , backgroundColor: '#FFC300', color: '#000', fontWeight: 'bold' }}
                            >
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Box>
    );
};

export default StaffPersonal;