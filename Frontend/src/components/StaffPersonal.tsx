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









// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState, AppDispatch } from '../redux/store/store';
// import { fetchPersonalDetails, updatePersonalDetails } from '../redux/reducers/staffPersonal';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import MenuItem from '@mui/material/MenuItem';

// const StaffPersonal: React.FC = () => {
// 	const dispatch = useDispatch<AppDispatch>();
// 	const personalDetails = useSelector((state: RootState) => state.staffPersonal.personalDetails);
// 	const loading = useSelector((state: RootState) => state.staffPersonal.loading);
// 	const error = useSelector((state: RootState) => state.staffPersonal.error);

// 	const [formState, setFormState] = useState({
// 		name: '',
// 		birthday: '',
// 		gender: '',
// 		email: '',
// 		phone: '',
// 		state: '',
// 		city: '',
// 		homeAddress: '',
// 		workAddress: '',
// 		motherName: '',
// 		fatherName: '',
// 		alternateEmail: '',
// 		alternateMobileNo: ''
// 	});

// 	useEffect(() => {
// 		dispatch(fetchPersonalDetails());
// 	}, [dispatch]);

// 	useEffect(() => {
// 		if (personalDetails) {
// 			setFormState(personalDetails);
// 		}
// 	}, [personalDetails]);

// 	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		const { name, value } = e.target;
// 		setFormState(prevState => ({
// 			...prevState,
// 			[name]: value
// 		}));
// 	};

// 	const handleSubmit = (e: React.FormEvent) => {
// 		e.preventDefault();
// 		dispatch(updatePersonalDetails(formState));
// 	};

// 	return (
// 		<Box display="flex" justifyContent="center" alignItems="center" bgcolor="#f4f6f8"
// 			sx={{ fontFamily: 'Lato, sans-serif', height: 'auto' }}
// 		>
// 			<Paper elevation={3} style={{ padding: '2rem', width: '100%', height: '80vh' }}>
// 				<Typography variant="h4" gutterBottom
// 					sx={{ fontFamily: 'Lato ', color: '#000', fontWeight: 'bold', marginBottom: '1.5rem' }}>
// 					Personal Details
// 				</Typography>
// 				{loading && <Typography>Loading...</Typography>}
// 				{error && <Typography>Error: {typeof error === 'string' ? error : JSON.stringify(error)}</Typography>}
// 				<form onSubmit={handleSubmit}>
// 					<Grid container spacing={5}
// 						sx={{ fontFamily: 'Lato ' }}
// 					>
// 						<Grid item xs={12} sm={6}>
// 							<TextField
// 								label="Name"
// 								name="name"
// 								value={formState.name}
// 								onChange={handleChange}
// 								fullWidth
// 								required
// 							/>
// 						</Grid>
// 						<Grid item xs={12} sm={6}>
// 							<TextField
// 								label="Birthday"
// 								name="birthday"
// 								value={formState.birthday}
// 								onChange={handleChange}
// 								fullWidth
// 							/>
// 						</Grid>
// 						<Grid item xs={12} sm={6}>
// 							<TextField
// 								select
// 								label="Gender"
// 								name="gender"
// 								value={formState.gender}
// 								onChange={handleChange}
// 								fullWidth
// 							>
// 								<MenuItem value="">
// 									<em>Select Gender</em>
// 								</MenuItem>
// 								<MenuItem value="female">Female</MenuItem>
// 								<MenuItem value="male">Male</MenuItem>
// 								<MenuItem value="other">Other</MenuItem>
// 							</TextField>
// 						</Grid>
// 						<Grid item xs={12} sm={6}>
// 							<TextField
// 								label="Phone"
// 								name="phone"
// 								value={formState.phone}
// 								onChange={handleChange}
// 								fullWidth
// 							/>
// 						</Grid>
// 						<Grid item xs={12} sm={6}>
// 							<TextField
// 								label="State"
// 								name="state"
// 								value={formState.state}
// 								onChange={handleChange}
// 								fullWidth
// 							/>
// 						</Grid>
// 						<Grid item xs={12} sm={6}>
// 							<TextField
// 								label="City"
// 								name="city"
// 								value={formState.city}
// 								onChange={handleChange}
// 								fullWidth
// 							/>
// 						</Grid>
// 						<Grid item xs={12} sm={6}>
// 							<TextField
// 								label="Home Address"
// 								name="homeAddress"
// 								value={formState.homeAddress}
// 								onChange={handleChange}
// 								fullWidth
// 							/>
// 						</Grid>
// 						<Grid item xs={12} sm={6}>
// 							<TextField
// 								label="Work Address"
// 								name="workAddress"
// 								value={formState.workAddress}
// 								onChange={handleChange}
// 								fullWidth
// 							/>
// 						</Grid>
// 						<Grid item xs={12} sm={6}>
// 							<TextField
// 								label="Mother's Name"
// 								name="motherName"
// 								value={formState.motherName}
// 								onChange={handleChange}
// 								fullWidth
// 							/>
// 						</Grid>
// 						<Grid item xs={12} sm={6}>
// 							<TextField
// 								label="Father's Name"
// 								name="fatherName"
// 								value={formState.fatherName}
// 								onChange={handleChange}
// 								fullWidth
// 							/>
// 						</Grid>
// 						<Grid item xs={12} sm={6}>
// 							<TextField
// 								label="Alternate Email"
// 								name="alternateEmail"
// 								type="email"
// 								value={formState.alternateEmail}
// 								onChange={handleChange}
// 								fullWidth
// 							/>
// 						</Grid>
// 						<Grid item xs={12} sm={6}>
// 							<TextField
// 								label="Alternate Mobile No"
// 								name="alternateMobileNo"
// 								value={formState.alternateMobileNo}
// 								onChange={handleChange}
// 								fullWidth
// 							/>
// 						</Grid>
// 						<Grid item xs={12}>
// 							<Box mb={2}>
// 								<Button
// 									type="submit"
// 									variant="contained"
// 									color="primary"
// 									fullWidth
// 									style={{ padding: '0.5rem', fontSize: '0.875rem', maxWidth: '100px', backgroundColor: '#FFC300', color: '#000', fontWeight: 'bold' }}
// 								>
// 									Update
// 								</Button>
// 							</Box>
// 						</Grid>
// 					</Grid>
// 				</form>
// 			</Paper>
// 		</Box>
// 	);
// };

// export default StaffPersonal;









// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState, AppDispatch } from '../redux/store/store';
// import { fetchPersonalDetails, updatePersonalDetails } from '../redux/reducers/staffPersonal';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import MenuItem from '@mui/material/MenuItem';

// const StaffPersonal: React.FC = () => {
//     const dispatch = useDispatch<AppDispatch>();
//     const personalDetails = useSelector((state: RootState) => state.staffPersonal.personalDetails);
//     const loading = useSelector((state: RootState) => state.staffPersonal.loading);
//     const error = useSelector((state: RootState) => state.staffPersonal.error);

//     const [formState, setFormState] = useState({
//         name: '',
//         birthday: '',
//         gender: '',
//         email: '',
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

//     const [isEditable, setIsEditable] = useState(false); // State to control editability

//     useEffect(() => {
//         dispatch(fetchPersonalDetails());
//     }, [dispatch]);

//     useEffect(() => {
//         if (personalDetails) {
//             setFormState(personalDetails);
//         }
//     }, [personalDetails]);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormState(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleEdit = () => {
//         setIsEditable(true); // Enable editing when "Update" button is clicked
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         dispatch(updatePersonalDetails(formState));
//         setIsEditable(false); // Disable editing after submission
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
//                                 disabled={!isEditable} // Disable field if not editable
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Birthday(DD/MM/YYYY)"
//                                 name="birthday"
//                                 value={formState.birthday}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 disabled={!isEditable} // Disable field if not editable
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
//                                 disabled={!isEditable} // Disable field if not editable
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
//                                 label="Phone"
//                                 name="phone"
//                                 value={formState.phone}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 disabled={!isEditable} // Disable field if not editable
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="State"
//                                 name="state"
//                                 value={formState.state}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 disabled={!isEditable} // Disable field if not editable
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="City"
//                                 name="city"
//                                 value={formState.city}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 disabled={!isEditable} // Disable field if not editable
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Home Address"
//                                 name="homeAddress"
//                                 value={formState.homeAddress}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 disabled={!isEditable} // Disable field if not editable
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Work Address"
//                                 name="workAddress"
//                                 value={formState.workAddress}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 disabled={!isEditable} // Disable field if not editable
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Mother's Name"
//                                 name="motherName"
//                                 value={formState.motherName}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 disabled={!isEditable} // Disable field if not editable
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Father's Name"
//                                 name="fatherName"
//                                 value={formState.fatherName}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 disabled={!isEditable} // Disable field if not editable
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
//                                 disabled={!isEditable} // Disable field if not editable
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Alternate Mobile No"
//                                 name="alternateMobileNo"
//                                 value={formState.alternateMobileNo}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 disabled={!isEditable} // Disable field if not editable
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <Box mb={2} display="flex" justifyContent="space-between">
//                                 <Button
//                                     variant="contained"
//                                     color="primary"
//                                     onClick={handleEdit}
//                                     disabled={isEditable} // Disable the "Edit" button if already in edit mode
//                                     style={{ padding: '0.5rem', fontSize: '0.875rem', backgroundColor: '#FFC300', color: '#000', fontWeight: 'bold' }}
//                                 >
//                                     Edit
//                                 </Button>
//                                 <Button
//                                     type="submit"
//                                     variant="contained"
//                                     color="primary"
//                                     fullWidth
//                                     style={{ padding: '0.5rem', fontSize: '0.875rem', maxWidth: '100px', backgroundColor: '#FFC300', color: '#000', fontWeight: 'bold' }}
//                                     disabled={!isEditable} // Disable the "Update" button if not in edit mode
//                                 >
//                                     Update
//                                 </Button>
//                             </Box>
//                         </Grid>
//                     </Grid>
//                 </form>
//             </Paper>
//         </Box>
//     );
// };

// export default StaffPersonal;





import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store/store';
import { fetchPersonalDetails, updatePersonalDetails, updatePassword } from '../redux/reducers/staffPersonal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';

const StaffPersonal: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const personalDetails = useSelector((state: RootState) => state.staffPersonal.personalDetails);
    const loading = useSelector((state: RootState) => state.staffPersonal.loading);
    const error = useSelector((state: RootState) => state.staffPersonal.error);

    const [formState, setFormState] = useState({
        name: '',
        birthday: '',
        gender: '',
        email: '',
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

    const [passwordState, setPasswordState] = useState({
        currentPassword: '',
        newPassword: ''
    });

    const [isEditable, setIsEditable] = useState(false); // State to control editability

    useEffect(() => {
        dispatch(fetchPersonalDetails());
    }, [dispatch]);

    useEffect(() => {
        if (personalDetails) {
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

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPasswordState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEdit = () => {
        setIsEditable(true); // Enable editing when "Update" button is clicked
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(updatePersonalDetails(formState));
        setIsEditable(false); // Disable editing after submission
    };

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (personalDetails) {
            dispatch(updatePassword({
                email: personalDetails.email,
                currentPassword: passwordState.currentPassword,
                newPassword: passwordState.newPassword
            }));
            setPasswordState({ currentPassword: '', newPassword: '' });
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" bgcolor="#f4f6f8"
            sx={{ fontFamily: 'Lato, sans-serif', height: 'auto' }}
        >
            <Paper elevation={3} style={{ padding: '2rem', width: '100%', height: 'auto' }}>
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
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                fullWidth
                                required
                                disabled={!isEditable} // Disable field if not editable
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Birthday (DD/MM/YYYY)"
                                name="birthday"
                                value={formState.birthday}
                                onChange={handleChange}
                                fullWidth
                                disabled={!isEditable} // Disable field if not editable
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
                                disabled={!isEditable} // Disable field if not editable
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
                                label="Phone"
                                name="phone"
                                value={formState.phone}
                                onChange={handleChange}
                                fullWidth
                                disabled={!isEditable} // Disable field if not editable
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="State"
                                name="state"
                                value={formState.state}
                                onChange={handleChange}
                                fullWidth
                                disabled={!isEditable} // Disable field if not editable
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="City"
                                name="city"
                                value={formState.city}
                                onChange={handleChange}
                                fullWidth
                                disabled={!isEditable} // Disable field if not editable
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Home Address"
                                name="homeAddress"
                                value={formState.homeAddress}
                                onChange={handleChange}
                                fullWidth
                                disabled={!isEditable} // Disable field if not editable
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Work Address"
                                name="workAddress"
                                value={formState.workAddress}
                                onChange={handleChange}
                                fullWidth
                                disabled={!isEditable} // Disable field if not editable
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Mother's Name"
                                name="motherName"
                                value={formState.motherName}
                                onChange={handleChange}
                                fullWidth
                                disabled={!isEditable} // Disable field if not editable
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Father's Name"
                                name="fatherName"
                                value={formState.fatherName}
                                onChange={handleChange}
                                fullWidth
                                disabled={!isEditable} // Disable field if not editable
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
                                disabled={!isEditable} // Disable field if not editable
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Alternate Mobile No"
                                name="alternateMobileNo"
                                value={formState.alternateMobileNo}
                                onChange={handleChange}
                                fullWidth
                                disabled={!isEditable} // Disable field if not editable
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Box mb={2} display="flex" justifyContent="space-between">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleEdit}
                                    disabled={isEditable} // Disable the "Edit" button if already in edit mode
                                    style={{ padding: '0.5rem', fontSize: '0.875rem', backgroundColor: '#FFC300', color: '#000', fontWeight: 'bold' }}
                                >
                                    Edit
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    style={{ padding: '0.5rem', fontSize: '0.875rem', maxWidth: '100px', backgroundColor: '#FFC300', color: '#000', fontWeight: 'bold' }}
                                    disabled={!isEditable} // Disable the "Update" button if not in edit mode
                                >
                                    Update
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>

                <Typography variant="h5" gutterBottom
                    sx={{ fontFamily: 'Lato ', color: '#000', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                    Change Password
                </Typography>
                <form onSubmit={handlePasswordSubmit}>
                    <Grid container spacing={5}
                        sx={{ fontFamily: 'Lato ' }}
                    >
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Current Password"
                                name="currentPassword"
                                type="password"
                                value={passwordState.currentPassword}
                                onChange={handlePasswordChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="New Password"
                                name="newPassword"
                                type="password"
                                value={passwordState.newPassword}
                                onChange={handlePasswordChange}
                                fullWidth
                                required
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
                                Change Password
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Box>
    );
};

export default StaffPersonal;
