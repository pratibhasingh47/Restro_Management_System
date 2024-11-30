import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store/store';
import { getStaffPersonalById, createStaffPersonal, updateStaffPersonal, deleteStaffPersonal } from '../redux/reducers/staffPersonal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

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
        <Box>
            {loading && <Typography>Loading...</Typography>}
            {error && <Typography>Error: {error}</Typography>}
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Birthday"
                            name="birthday"
                            type="date"
                            value={formState.birthday}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Gender"
                            name="gender"
                            value={formState.gender}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
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
                    <Grid item xs={12}>
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
                    <Grid item xs={12}>
                        <TextField
                            label="Phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="State"
                            name="state"
                            value={formState.state}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="City"
                            name="city"
                            value={formState.city}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Home Address"
                            name="homeAddress"
                            value={formState.homeAddress}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Work Address"
                            name="workAddress"
                            value={formState.workAddress}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Mother's Name"
                            name="motherName"
                            value={formState.motherName}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Father's Name"
                            name="fatherName"
                            value={formState.fatherName}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Alternate Email"
                            name="alternateEmail"
                            type="email"
                            value={formState.alternateEmail}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Alternate Mobile No"
                            name="alternateMobileNo"
                            value={formState.alternateMobileNo}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default StaffPersonal;