// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Grid, TextField, Typography, CircularProgress } from '@mui/material';

// interface EmployeeDetails {
//     status: string;
//     workPerHourWeek: number;
//     dateHired: string;
//     department: string;
//     position: string;
//     employmentType: string;
//     wageCalculation: string;
//     payroll: string;
//     bankName: string;
//     accountNo: string;
//     bankBranch: string;
//     ifscCode: string;
//     issueDate: string;
//     issueMonth: string;
//     issuedAmount: number;
// }

// const EmployeeDetail: React.FC<{ employeeId: string }> = ({ employeeId }) => {
//     const [employeeDetails, setEmployeeDetails] = useState<EmployeeDetails | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);

//     useEffect(() => {
//         const fetchEmployeeDetails = async () => {
//             try {
//                 const token = localStorage.getItem('authToken');

//                 if (!token) {
//                     setLoading(false);
//                     return;
//                 }

//                 const response = await axios.get(`/api/employee/${employeeId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });
//                 setEmployeeDetails(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching employee details:', error);
//                 setLoading(false);
//             }
//         };

//         fetchEmployeeDetails();
//     }, [employeeId]);

//     if (loading) {
//         return <CircularProgress />;
//     }

//     if (!employeeDetails) {
//         return <Typography variant="h6">Employee details not found.</Typography>;
//     }

//     return (
//         <Grid container spacing={2}>
//             <Grid item xs={12}>
//                 <Typography variant="h4" component="h2" gutterBottom>
//                     {employeeDetails.position}
//                 </Typography>
//             </Grid>
//             <Grid item xs={6}>
//                 <TextField
//                     label="Status"
//                     value={employeeDetails.status}
//                     fullWidth
//                     margin="normal"
//                     InputProps={{
//                         readOnly: true,
//                     }}
//                 />
//             </Grid>
//             <Grid item xs={6}>
//                 <TextField
//                     label="Work Per Hour Week"
//                     value={employeeDetails.workPerHourWeek}
//                     fullWidth
//                     margin="normal"
//                     InputProps={{
//                         readOnly: true,
//                     }}
//                 />
//             </Grid>
//             <Grid item xs={6}>
//                 <TextField
//                     label="Date Hired"
//                     value={employeeDetails.dateHired}
//                     fullWidth
//                     margin="normal"
//                     InputProps={{
//                         readOnly: true,
//                     }}
//                 />
//             </Grid>
//             <Grid item xs={6}>
//                 <TextField
//                     label="Department"
//                     value={employeeDetails.department}
//                     fullWidth
//                     margin="normal"
//                     InputProps={{
//                         readOnly: true,
//                     }}
//                 />
//             </Grid>
//             <Grid item xs={6}>
//                 <TextField
//                     label="Employment Type"
//                     value={employeeDetails.employmentType}
//                     fullWidth
//                     margin="normal"
//                     InputProps={{
//                         readOnly: true,
//                     }}
//                 />
//             </Grid>
//             <Grid item xs={6}>
//                 <TextField
//                     label="Wage Calculation"
//                     value={employeeDetails.wageCalculation}
//                     fullWidth
//                     margin="normal"
//                     InputProps={{
//                         readOnly: true,
//                     }}
//                 />
//             </Grid>
//             <Grid item xs={6}>
//                 <TextField
//                     label="Payroll"
//                     value={employeeDetails.payroll}
//                     fullWidth
//                     margin="normal"
//                     InputProps={{
//                         readOnly: true,
//                     }}
//                 />
//             </Grid>
//             <Grid item xs={6}>
//                 <TextField
//                     label="Bank Name"
//                     value={employeeDetails.bankName}
//                     fullWidth
//                     margin="normal"
//                     InputProps={{
//                         readOnly: true,
//                     }}
//                 />
//             </Grid>
//             <Grid item xs={6}>
//                 <TextField
//                     label="Account No"
//                     value={employeeDetails.accountNo}
//                     fullWidth
//                     margin="normal"
//                     InputProps={{
//                         readOnly: true,
//                     }}
//                 />
//             </Grid>
//             <Grid item xs={6}>
//                 <TextField
//                     label="Bank Branch"
//                     value={employeeDetails.bankBranch}
//                     fullWidth
//                     margin="normal"
//                     InputProps={{
//                         readOnly: true,
//                     }}
//                 />
//             </Grid>
//             <Grid item xs={6}>
//                 <TextField
//                     label="IFSC Code"
//                     value={employeeDetails.ifscCode}
//                     fullWidth
//                     margin="normal"
//                     InputProps={{
//                         readOnly: true,
//                     }}
//                 />
//             </Grid>
//             <Grid item xs={6}>
//                 <TextField
//                     label="Issue Date"
//                     value={employeeDetails.issueDate}
//                     fullWidth
//                     margin="normal"
//                     InputProps={{
//                         readOnly: true,
//                     }}
//                 />
//             </Grid>
//             <Grid item xs={6}>
//                 <TextField
//                     label="Issue Month"
//                     value={employeeDetails.issueMonth}
//                     fullWidth
//                     margin="normal"
//                     InputProps={{
//                         readOnly: true,
//                     }}
//                 />
//             </Grid>
//             <Grid item xs={6}>
//                 <TextField
//                     label="Issued Amount"
//                     value={employeeDetails.issuedAmount}
//                     fullWidth
//                     margin="normal"
//                     InputProps={{
//                         readOnly: true,
//                     }}
//                 />
//             </Grid>
//         </Grid>
//     );
// };

// export default EmployeeDetail;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Grid, TextField, Typography, CircularProgress, Button, Paper, Box } from '@mui/material';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState, AppDispatch } from '../redux/store/store';
// import { getPayDetails, updatePayDetails, createPayDetails } from '../redux/reducers/payDetail';

// interface EmployeePayDetails {
//     wageCalculation: string;
//     payroll: string;
//     bankName: string;
//     accountNo: string;
//     bankBranch: string;
//     ifscCode: string;
//     issueDate: string;
//     issueMonth: string;
//     issuedAmount: number;
// }

// const StaffPay: React.FC<{ employeeId: string }> = ({ employeeId }) => {
//     const dispatch = useDispatch<AppDispatch>();
//     const payDetails = useSelector((state: RootState) => state.pay.payDetails);
//     const loading = useSelector((state: RootState) => state.pay.loading);
//     const error = useSelector((state: RootState) => state.pay.error);
//     const [formState, setFormState] = useState<EmployeePayDetails>({
//         wageCalculation: '',
//         payroll: '',
//         bankName: '',
//         accountNo: '',
//         bankBranch: '',
//         ifscCode: '',
//         issueDate: '',
//         issueMonth: '',
//         issuedAmount: 0
//     });
//     const [isEditable, setIsEditable] = useState(false);
//     const [isNew, setIsNew] = useState(false);

//     useEffect(() => {
//         dispatch(getPayDetails(employeeId));
//     }, [dispatch, employeeId]);

//     useEffect(() => {
//         if (payDetails) {
//             setFormState(payDetails);
//         }
//     }, [payDetails]);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormState(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleEdit = () => {
//         setIsEditable(true);
//         setIsNew(false);
//     };

//     const handleAdd = () => {
//         setIsEditable(true);
//         setIsNew(true);
//         setFormState({
//             wageCalculation: '',
//             payroll: '',
//             bankName: '',
//             accountNo: '',
//             bankBranch: '',
//             ifscCode: '',
//             issueDate: '',
//             issueMonth: '',
//             issuedAmount: 0
//         });
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         if (isNew) {
//             dispatch(createPayDetails(formState));
//         } else {
//             dispatch(updatePayDetails({ managementId: employeeId, payDetails: formState }));
//         }
//         setIsEditable(false);
//     };

//     if (loading) {
//         return <CircularProgress />;
//     }

//     if (error) {
//         return <Typography variant="h6">Error: {error}</Typography>;
//     }

//     return (
//         <Box display="flex" justifyContent="center" alignItems="center" bgcolor="#f4f6f8" sx={{ fontFamily: 'Lato, sans-serif', height: 'auto' }}>
//             <Paper elevation={3} style={{ padding: '2rem', width: '100%', height: 'auto' }}>
//                 <Typography variant="h4" component="h2" gutterBottom>
//                     Employee Pay Details
//                 </Typography>
//                 <form onSubmit={handleSubmit}>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Wage Calculation"
//                                 name="wageCalculation"
//                                 value={formState.wageCalculation}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 margin="normal"
//                                 InputProps={{
//                                     readOnly: !isEditable,
//                                 }}
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Payroll"
//                                 name="payroll"
//                                 value={formState.payroll}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 margin="normal"
//                                 InputProps={{
//                                     readOnly: !isEditable,
//                                 }}
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Bank Name"
//                                 name="bankName"
//                                 value={formState.bankName}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 margin="normal"
//                                 InputProps={{
//                                     readOnly: !isEditable,
//                                 }}
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Account No"
//                                 name="accountNo"
//                                 value={formState.accountNo}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 margin="normal"
//                                 InputProps={{
//                                     readOnly: !isEditable,
//                                 }}
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Bank Branch"
//                                 name="bankBranch"
//                                 value={formState.bankBranch}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 margin="normal"
//                                 InputProps={{
//                                     readOnly: !isEditable,
//                                 }}
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="IFSC Code"
//                                 name="ifscCode"
//                                 value={formState.ifscCode}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 margin="normal"
//                                 InputProps={{
//                                     readOnly: !isEditable,
//                                 }}
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Issue Date"
//                                 name="issueDate"
//                                 value={formState.issueDate}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 margin="normal"
//                                 InputProps={{
//                                     readOnly: !isEditable,
//                                 }}
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Issue Month"
//                                 name="issueMonth"
//                                 value={formState.issueMonth}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 margin="normal"
//                                 InputProps={{
//                                     readOnly: !isEditable,
//                                 }}
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 label="Issued Amount"
//                                 name="issuedAmount"
//                                 type="number"
//                                 value={formState.issuedAmount}
//                                 onChange={handleChange}
//                                 fullWidth
//                                 margin="normal"
//                                 InputProps={{
//                                     readOnly: !isEditable,
//                                 }}
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <Box mb={2} display="flex" justifyContent="space-between">
//                                 <Button
//                                     variant="contained"
//                                     color="primary"
//                                     onClick={handleEdit}
//                                     disabled={isEditable}
//                                     style={{ padding: '0.5rem', fontSize: '0.875rem', backgroundColor: '#FFC300', color: '#000', fontWeight: 'bold' }}
//                                 >
//                                     Edit
//                                 </Button>
//                                 <Button
//                                     variant="contained"
//                                     color="primary"
//                                     onClick={handleAdd}
//                                     disabled={isEditable}
//                                     style={{ padding: '0.5rem', fontSize: '0.875rem', backgroundColor: '#FFC300', color: '#000', fontWeight: 'bold' }}
//                                 >
//                                     Add
//                                 </Button>
//                                 <Button
//                                     type="submit"
//                                     variant="contained"
//                                     color="primary"
//                                     fullWidth
//                                     style={{ padding: '0.5rem', fontSize: '0.875rem', maxWidth: '100px', backgroundColor: '#FFC300', color: '#000', fontWeight: 'bold' }}
//                                     disabled={!isEditable}
//                                 >
//                                     {isNew ? 'Add' : 'Update'}
//                                 </Button>
//                             </Box>
//                         </Grid>
//                     </Grid>
//                 </form>
//             </Paper>
//         </Box>
//     );
// };

// export default StaffPay;



import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store/store';
import { getPayDetails, createPayDetails, approveAllowance } from '../redux/reducers/payDetail';
import { Grid, TextField, Typography, CircularProgress, Button, Box, Paper } from '@mui/material';

interface EmployeeDetailProps {
    employeeId: string;
}

const EmployeeDetail: React.FC<EmployeeDetailProps> = ({ employeeId }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { payDetails, loading, error } = useSelector((state: RootState) => state.pay);
    const [isCreating, setIsCreating] = useState(false);
    const [newPayDetails, setNewPayDetails] = useState({
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

    useEffect(() => {
        if (employeeId) {
            dispatch(getPayDetails(employeeId));
        }
    }, [dispatch, employeeId]);

    const handleApproveAllowance = () => {
        dispatch(approveAllowance({ managementId: employeeId, allowance: payDetails.allowance }));
    };

    const handleCreatePayDetails = () => {
        setIsCreating(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewPayDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(createPayDetails({ ...newPayDetails, allowance: 0, status: 'active' }));
        setIsCreating(false);
    };

    if (loading) {
        return <CircularProgress />;
    }

    if (error && error === 'Pay details not found') {
        return (
            <Box>
                <Typography variant="h6">Pay details not found for this employee.</Typography>
                <Button variant="contained" color="primary" onClick={handleCreatePayDetails}>
                    Create Pay Details
                </Button>
            </Box>
        );
    }

    if (error) {
        return <Typography variant="h6">Error: {error}</Typography>;
    }

    if (!payDetails || isCreating) {
        return (
            <Paper elevation={3} style={{ padding: '20px', height: '100%' }}>
                <Typography variant="h5" gutterBottom>
                    Create Pay Details
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Wage Calculation"
                                name="wageCalculation"
                                value={newPayDetails.wageCalculation}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Payroll"
                                name="payroll"
                                value={newPayDetails.payroll}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Bank Name"
                                name="bankName"
                                value={newPayDetails.bankName}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Account No"
                                name="accountNo"
                                value={newPayDetails.accountNo}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Bank Branch"
                                name="bankBranch"
                                value={newPayDetails.bankBranch}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="IFSC Code"
                                name="ifscCode"
                                value={newPayDetails.ifscCode}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Issue Date"
                                name="issueDate"
                                value={newPayDetails.issueDate}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Issue Month"
                                name="issueMonth"
                                value={newPayDetails.issueMonth}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Issued Amount"
                                name="issuedAmount"
                                type="number"
                                value={newPayDetails.issuedAmount}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Create Pay Details
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        );
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Employee Pay Details
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Status"
                    value={payDetails.status}
                    fullWidth
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Work Per Hour Week"
                    value={payDetails.wageCalculation}
                    fullWidth
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Date Hired"
                    value=""
                    fullWidth
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Employment Type"
                    value=""
                    fullWidth
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Wage Calculation"
                    value={payDetails.wageCalculation}
                    fullWidth
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Payroll"
                    value={payDetails.payroll}
                    fullWidth
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Bank Name"
                    value={payDetails.bankName}
                    fullWidth
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Account No"
                    value={payDetails.accountNo}
                    fullWidth
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Bank Branch"
                    value={payDetails.bankBranch}
                    fullWidth
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="IFSC Code"
                    value={payDetails.ifscCode}
                    fullWidth
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Issue Date"
                    value={payDetails.issueDate}
                    fullWidth
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Issue Month"
                    value={payDetails.issueMonth}
                    fullWidth
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Issued Amount"
                    value={payDetails.issuedAmount}
                    fullWidth
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Allowance"
                    value={payDetails.allowance}
                    fullWidth
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleApproveAllowance}
                    fullWidth
                    style={{ marginTop: '20px' }}
                >
                    Approve Allowance
                </Button>
            </Grid>
        </Grid>
    );
};

export default EmployeeDetail;