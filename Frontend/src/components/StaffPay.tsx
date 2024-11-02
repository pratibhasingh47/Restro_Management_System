import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store/store';
import { getPayDetails, updatePayDetails, createPayDetails } from '../redux/reducers/payDetail';
import { Grid, TextField, Typography, CircularProgress, Button, Paper, Box } from '@mui/material';

interface EmployeePayDetails {
    wageCalculation: string;
    payroll: string;
    bankName: string;
    accountNo: string;
    bankBranch: string;
    ifscCode: string;
    issueDate: string;
    issueMonth: string;
    issuedAmount: number;
}

const StaffPay: React.FC = () => {
    const { employeeId } = useParams<{ employeeId: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const payDetails = useSelector((state: RootState) => (state.pay as any).payDetails);
    const loading = useSelector((state: RootState) => state.pay.loading);
    const error = useSelector((state: RootState) => state.pay.error);
    const [formState, setFormState] = useState<EmployeePayDetails>({
        wageCalculation: '',
        payroll: '',
        bankName: '',
        accountNo: '',
        bankBranch: '',
        ifscCode: '',
        issueDate: '',
        issueMonth: '',
        issuedAmount: 0
    });
    const [isEditable, setIsEditable] = useState(false);
    const [isNew, setIsNew] = useState(false);

    useEffect(() => {
        if (employeeId) {
            dispatch(getPayDetails(employeeId));
        }
    }, [dispatch, employeeId]);

    useEffect(() => {
        if (payDetails) {
            setFormState(payDetails);
        }
    }, [payDetails]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEdit = () => {
        setIsEditable(true);
        setIsNew(false);
    };

    const handleAdd = () => {
        setIsEditable(true);
        setIsNew(true);
        setFormState({
            wageCalculation: '',
            payroll: '',
            bankName: '',
            accountNo: '',
            bankBranch: '',
            ifscCode: '',
            issueDate: '',
            issueMonth: '',
            issuedAmount: 0
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isNew) {
            dispatch(createPayDetails(formState));
        } else {
            dispatch(updatePayDetails({ managementId: employeeId!, payDetails: formState }));
        }
        setIsEditable(false);
    };

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography variant="h6">Error: {error}</Typography>;
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" bgcolor="#f4f6f8" sx={{ fontFamily: 'Lato, sans-serif', height: 'auto' }}>
            <Paper elevation={3} style={{ padding: '2rem', width: '100%', height: 'auto' }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Employee Pay Details
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Wage Calculation"
                                name="wageCalculation"
                                value={formState.wageCalculation}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                InputProps={{
                                    readOnly: !isEditable,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Payroll"
                                name="payroll"
                                value={formState.payroll}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                InputProps={{
                                    readOnly: !isEditable,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Bank Name"
                                name="bankName"
                                value={formState.bankName}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                InputProps={{
                                    readOnly: !isEditable,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Account No"
                                name="accountNo"
                                value={formState.accountNo}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                InputProps={{
                                    readOnly: !isEditable,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Bank Branch"
                                name="bankBranch"
                                value={formState.bankBranch}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                InputProps={{
                                    readOnly: !isEditable,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="IFSC Code"
                                name="ifscCode"
                                value={formState.ifscCode}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                InputProps={{
                                    readOnly: !isEditable,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Issue Date"
                                name="issueDate"
                                value={formState.issueDate}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                InputProps={{
                                    readOnly: !isEditable,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Issue Month"
                                name="issueMonth"
                                value={formState.issueMonth}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                InputProps={{
                                    readOnly: !isEditable,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Issued Amount"
                                name="issuedAmount"
                                type="number"
                                value={formState.issuedAmount}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                InputProps={{
                                    readOnly: !isEditable,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Box mb={2} display="flex" justifyContent="space-between">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleEdit}
                                    disabled={isEditable}
                                    style={{ padding: '0.5rem', fontSize: '0.875rem', backgroundColor: '#FFC300', color: '#000', fontWeight: 'bold' }}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleAdd}
                                    disabled={isEditable}
                                    style={{ padding: '0.5rem', fontSize: '0.875rem', backgroundColor: '#FFC300', color: '#000', fontWeight: 'bold' }}
                                >
                                    Add
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    style={{ padding: '0.5rem', fontSize: '0.875rem', maxWidth: '100px', backgroundColor: '#FFC300', color: '#000', fontWeight: 'bold' }}
                                    disabled={!isEditable}
                                >
                                    {isNew ? 'Add' : 'Update'}
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Box>
    );
};

export default StaffPay;