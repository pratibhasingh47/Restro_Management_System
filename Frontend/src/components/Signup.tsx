import React, { useState } from 'react';
import { useAppDispatch } from '../redux/store/store';
import { signupUser } from '../redux/reducers/userSlice';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import R1 from '../assets/images/r2.png';
import GoogleIcon from '@mui/icons-material/Google';

function Copyright() {
    return (
        <Typography variant="body2" style={{ marginTop: '20px' }} color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        backgroundColor: 'yellow',
    },
    image: {
        backgroundImage: `url(${R1})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        objectFit: 'cover',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(2),
        backgroundColor: '#001e71',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(2),
        maxWidth: '500px',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        fontSize: '16px',
        fontWeight: 'bold',
        backgroundColor: '#001e71',
    },
    googleButton: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#FFC300',
        color: '#001D3D',
        '&:hover': {
            backgroundColor: '#FFD60A',
        },
        fontSize: '16px',
        fontWeight: 'bold',
    },
    tabs: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(2),
    },
    linkContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(2),
    },
    signUpHeading: {
        fontWeight: 'bold',
        fontSize: '30px',
        fontFamily: 'Lato, sans-serif',
    },
}));

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}



function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const SignUp: React.FC = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        contactNumber: '',
        role: 'Customer',
        managementId: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        contactNumber: '',
        managementId: ''
    });

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const validateName = (name: string) => {
        const regex = /^[a-zA-Z\s]{3,50}$/;
        return regex.test(name) ? '' : 'Name should only contain alphabets and spaces, and be 3-50 characters long';
    };

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email) ? '' : 'Please enter a valid email address';
    };

    const validatePassword = (password: string) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password) ? '' : 'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one symbol';
    };

    const validateContactNumber = (contactNumber: string) => {
        const regex = /^[6-9]\d{9}$/;
        return regex.test(contactNumber) ? '' : 'Please enter a valid mobile number';
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        let error = '';
        switch (name) {
            case 'name':
                error = validateName(value);
                break;
            case 'email':
                error = validateEmail(value);
                break;
            case 'password':
                error = validatePassword(value);
                break;
            case 'contactNumber':
                error = validateContactNumber(value);
                break;
        }
        setErrors({ ...errors, [name]: error });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const nameError = validateName(formData.name);
        const emailError = validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);
        const contactNumberError = validateContactNumber(formData.contactNumber);
    
        if (nameError || emailError || passwordError || contactNumberError) {
            setErrors({
                name: nameError,
                email: emailError,
                password: passwordError,
                contactNumber: contactNumberError,
                managementId: errors.managementId
            });
            return;
        }
    
        const resultAction = await dispatch(signupUser(formData));
        console.log('resultAction:', resultAction); // Log the entire resultAction for debugging
    
        if (signupUser.fulfilled.match(resultAction)) {
            const payload = resultAction.payload as unknown as { token: string };
            console.log('payload:', payload); // Log the payload for debugging
    
            if (payload && payload.token) {
                localStorage.setItem('authToken', payload.token); // Store in local storage
                navigate('/'); // Redirect to dashboard or any other route on successful signup
            } else {
                // Handle case where payload is undefined or token is missing
                // setErrors({ ...errors, managementId: 'Failed to retrieve token. Please try again.' });
            }
        } else {
            // Handle signup failure (e.g., show an error message)
            setErrors({ ...errors, managementId: 'Signup failed. Please try again.' });
        }
    };

    const handleGoogleSignIn = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        throw new Error('Function not implemented.');
    };

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };





    return (
        <Grid container component="main" className={classes.root} alignItems="stretch">
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" className={classes.signUpHeading}>Sign Up</Typography>
                    <Box sx={{ width: '100%' }} className={classes.tabs} />
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleTabChange} aria-label="basic tabs example">
                            <Tab label="User " {...a11yProps(0)} />
                            <Tab label="Management" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <form className={classes.form} noValidate onSubmit={handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                value={formData.name}
                                onChange={handleChange}
                                error={!!errors.name}
                                helperText={errors.name}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={formData.password}
                                onChange={handleChange}
                                error={!!errors.password}
                                helperText={errors.password}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="contact"
                                label="Contact Number"
                                name="contactNumber"
                                autoComplete="contact"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                error={!!errors.contactNumber}
                                helperText={errors.contactNumber}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                            <Typography component="p" variant="body2" align="center">
                                OR
                            </Typography>
                            <Button
                                fullWidth
                                variant="contained"
                                className={classes.googleButton}
                                startIcon={<GoogleIcon />}
                                onClick={handleGoogleSignIn}
                            >
                                Sign up with Google
                            </Button>
                        </form>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <form className={classes.form} noValidate onSubmit={handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                value={formData.name}
                                onChange={handleChange}
                                error={!!errors.name}
                                helperText={errors.name}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={formData.password}
                                onChange={handleChange}
                                error={!!errors.password}
                                helperText={errors.password}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="contact"
                                label="Contact Number"
                                name="contactNumber"
                                autoComplete="contact"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                error={!!errors.contactNumber}
                                helperText={errors.contactNumber}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="role"
                                label="Role"
                                name="role"
                                select
                                value={formData.role}
                                onChange={handleChange}
                            >
                                <MenuItem value="Staff">Staff</MenuItem>
                                <MenuItem value="Manager">Manager</MenuItem>
                            </TextField>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="managementId"
                                label="Management ID"
                                name="managementId"
                                autoComplete="management-id"
                                value={formData.managementId}
                                onChange={handleChange}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                            <Typography component="p" variant="body2" align="center">
                                OR
                            </Typography>
                            <Button
                                fullWidth
                                variant="contained"
                                className={classes.googleButton}
                                startIcon={<GoogleIcon />}
                                onClick={handleGoogleSignIn}
                            >
                                Sign up with Google
                            </Button>
                        </form>
                    </CustomTabPanel>
                    <Grid container className={classes.linkContainer}>
                        <Grid item>
                            <Link href="/login" variant="body2" onClick={() => navigate('/login')}>
                                {"Already have an account? Log In"}
                            </Link>
                        </Grid>
                    </Grid>
                    <Box mt={10} marginTop="20px">
                        <Copyright />
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
}

export default SignUp;