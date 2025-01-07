// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState, AppDispatch } from '../redux/store/store';
// import { getStaffPersonalByEmail, updateStaffPersonal, createStaffPersonal } from '../redux/reducers/staffPersonal';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import MenuItem from '@mui/material/MenuItem';

// const StaffPersonal: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const staffPersonal = useSelector((state: RootState) => state.staffPersonal.staffPersonal);
//     const loading = useSelector((state: RootState) => state.staffPersonal.loading);
//     const error = useSelector((state: RootState) => state.staffPersonal.error);
//     const [formState, setFormState] = useState({
//         name: '',
//         birthday: '',
//         gender: '',
//         email: '',
//         password: '',
//         phone: '',
//         state: '',
//         city: '',
//         homeAddress: '',
//         workAddress: '',
//         motherName: '',
//         fatherName: '',
//         alternateEmail: '',
//         alternateMobileNo: ''
//     });

//     useEffect(() => {
//         const email = 'hello@gmail.com'; // Replace with the actual email
//         console.log('Fetching staff personal data');
//         dispatch(getStaffPersonalByEmail(email)); // Fetch staff personal details by email
//     }, [dispatch]);

//     useEffect(() => {
//         if (staffPersonal) {
//             console.log('Updating form state with fetched staffPersonal data:', staffPersonal);
//             setFormState(staffPersonal);
//         }
//     }, [staffPersonal]);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormState(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         if (staffPersonal && staffPersonal.id) {
//             console.log('Updating existing staff personal details:', formState);
//             dispatch(updateStaffPersonal({ id: staffPersonal.id, staffData: formState }));
//         } else {
//             console.log('Creating new staff personal details:', formState);
//             dispatch(createStaffPersonal(formState));
//         }
//     };

//     return (
//         <Box display="flex" justifyContent="center" alignItems="center" bgcolor="#f4f6f8"
//             sx={{ fontFamily: 'Lato, sans-serif', height: 'auto' }}
//         >
//             <Paper elevation={3} style={{ padding: '2rem', width: '100%', height: '80vh' }}>
//                 <Typography variant="h4" gutterBottom
//                     sx={{ fontFamily: 'Lato ', color: '#000', fontWeight: 'bold', marginBottom: '1.5rem' }}>
//                     Personal Details
//                 </Typography>
//                 {loading && <Typography>Loading...</Typography>}
//                 {error && <Typography>Error: {typeof error === 'string' ? error : JSON.stringify(error)}</Typography>}
//                 <form onSubmit={handleSubmit}>
//                     <Grid container spacing={5}
//                         sx={{ fontFamily: 'Lato ' }}
//                     >
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Name"
//                                 name="name"
//                                 value={formState.name}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 required
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Birthday"
//                                 name="birthday"
//                                 // type="date"
//                                 value={formState.birthday}
//                                 onChange={handleChange}
//                                 fullWidth
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 select
//                                 label="Gender"
//                                 name="gender"
//                                 value={formState.gender}
//                                 onChange={handleChange}
//                                 fullWidth
//                             >
//                                 <MenuItem value="">
//                                     <em>Select Gender</em>
//                                 </MenuItem>
//                                 <MenuItem value="female">Female</MenuItem>
//                                 <MenuItem value="male">Male</MenuItem>
//                                 <MenuItem value="other">Other</MenuItem>
//                             </TextField>
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Email"
//                                 name="email"
//                                 type="email"
//                                 value={formState.email}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 required
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Password"
//                                 name="password"
//                                 type="password"
//                                 value={formState.password}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 required
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Phone"
//                                 name="phone"
//                                 value={formState.phone}
//                                 onChange={handleChange}
//                                 fullWidth
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="State"
//                                 name="state"
//                                 value={formState.state}
//                                 onChange={handleChange}
//                                 fullWidth
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="City"
//                                 name="city"
//                                 value={formState.city}
//                                 onChange={handleChange}
//                                 fullWidth
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Home Address"
//                                 name="homeAddress"
//                                 value={formState.homeAddress}
//                                 onChange={handleChange}
//                                 fullWidth
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Work Address"
//                                 name="workAddress"
//                                 value={formState.workAddress}
//                                 onChange={handleChange}
//                                 fullWidth
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Mother's Name"
//                                 name="motherName"
//                                 value={formState.motherName}
//                                 onChange={handleChange}
//                                 fullWidth
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Father's Name"
//                                 name="fatherName"
//                                 value={formState.fatherName}
//                                 onChange={handleChange}
//                                 fullWidth
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Alternate Email"
//                                 name="alternateEmail"
//                                 type="email"
//                                 value={formState.alternateEmail}
//                                 onChange={handleChange}
//                                 fullWidth
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Alternate Mobile No"
//                                 name="alternateMobileNo"
//                                 value={formState.alternateMobileNo}
//                                 onChange={handleChange}
//                                 fullWidth
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <Button
//                                 type="submit"
//                                 variant="contained"
//                                 color="primary"
//                                 fullWidth
//                                 style={{ padding: '0.5rem', fontSize: '0.875rem', maxWidth: '100px', backgroundColor: '#FFC300', color: '#000', fontWeight: 'bold' }}
//                             >
//                                 Update
//                             </Button>
//                         </Grid>
//                     </Grid>
//                 </form>
//             </Paper>
//         </Box>
//     );
// };

// export default StaffPersonal;









import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/store/store';
import { fetchPersonalDetails, updatePersonalDetails, createPersonalDetails, deletePersonalDetails } from '../redux/reducers/staffPersonal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';

const StaffPersonal: React.FC = () => {
    const dispatch = useAppDispatch(); // Use the custom useAppDispatch hook
    const personalDetails = useSelector((state: RootState) => state.staffPersonal.personalDetails);
    const loading = useSelector((state: RootState) => state.staffPersonal.loading);
    const error = useSelector((state: RootState) => state.staffPersonal.error);
    
    const [email, setEmail] = useState(''); // Email input state
    const [formState, setFormState] = useState({
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

    useEffect(() => {
        if (email) {
            dispatch(fetchPersonalDetails(email)); // Fetch staff personal details by email
        }
    }, [dispatch, email]);

    useEffect(() => {
        if (personalDetails) {
            console.log('Updating form state with fetched personalDetails data:', personalDetails);
            setFormState(personalDetails);
        }
    }, [personalDetails]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            if (personalDetails && personalDetails.email) {
                console.log('Updating existing personal details:', formState);
                dispatch(updatePersonalDetails({ email, data: formState }));
            } else {
                console.log('Creating new personal details:', formState);
                dispatch(createPersonalDetails(formState));
            }
        }
    };

    const handleDelete = () => {
        if (personalDetails && personalDetails._id) {
            dispatch(deletePersonalDetails(personalDetails._id));
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" bgcolor="#f4f6f8"
            sx={{ fontFamily: 'Lato, sans-serif', height: 'auto' }}
        >
            <Paper elevation={3} style={{ padding: '2rem', width: '100%', height: '80vh' }}>
                <Typography variant="h4" gutterBottom
                    sx={{ fontFamily: 'Lato ', color: '#000', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                    Personal Details
                </Typography>
                {loading && <Typography>Loading...</Typography>}
                {error && <Typography>Error: {typeof error === 'string' ? error : JSON.stringify(error)}</Typography>}
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={5}
                        sx={{ fontFamily: 'Lato ' }}
                    >
                        {/* Email field for fetching/updating personal details */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                fullWidth
                                required
                            />
                        </Grid>

                        {/* Other form fields */}
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
                                select
                                label="Gender"
                                name="gender"
                                value={formState.gender}
                                onChange={handleChange}
                                fullWidth
                            >
                                <MenuItem value="">
                                    <em>Select Gender</em>
                                </MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                            </TextField>
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
                                style={{ padding: '0.5rem', fontSize: '0.875rem', maxWidth: '100px', backgroundColor: '#FFC300', color: '#000', fontWeight: 'bold' }}
                            >
                                Update
                            </Button>
                            <Button
                                onClick={handleDelete}
                                variant="contained"
                                color="secondary"
                                fullWidth
                                style={{ padding: '0.5rem', fontSize: '0.875rem', maxWidth: '100px' , backgroundColor: '#FFC300', color: '#000' , fontWeight: 'bold' }}
                            >
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Box>
    );
};

export default StaffPersonal;