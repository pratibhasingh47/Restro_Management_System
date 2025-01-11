import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, TextField, Typography, CircularProgress } from '@mui/material';

interface EmployeeDetails {
    status: string;
    workPerHourWeek: number;
    dateHired: string;
    department: string;
    position: string;
    employmentType: string;
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

const EmployeeDetail: React.FC<{ employeeId: string }> = ({ employeeId }) => {
    const [employeeDetails, setEmployeeDetails] = useState<EmployeeDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchEmployeeDetails = async () => {
            try {
                const token = localStorage.getItem('authToken');

                if (!token) {
                    setLoading(false);
                    return;
                }

                const response = await axios.get(`/api/employee/${employeeId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setEmployeeDetails(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching employee details:', error);
                setLoading(false);
            }
        };

        fetchEmployeeDetails();
    }, [employeeId]);

    if (loading) {
        return <CircularProgress />;
    }

    if (!employeeDetails) {
        return <Typography variant="h6">Employee details not found.</Typography>;
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4" component="h2" gutterBottom>
                    {employeeDetails.position}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Status"
                    value={employeeDetails.status}
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
                    value={employeeDetails.workPerHourWeek}
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
                    value={employeeDetails.dateHired}
                    fullWidth
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Department"
                    value={employeeDetails.department}
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
                    value={employeeDetails.employmentType}
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
                    value={employeeDetails.wageCalculation}
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
                    value={employeeDetails.payroll}
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
                    value={employeeDetails.bankName}
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
                    value={employeeDetails.accountNo}
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
                    value={employeeDetails.bankBranch}
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
                    value={employeeDetails.ifscCode}
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
                    value={employeeDetails.issueDate}
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
                    value={employeeDetails.issueMonth}
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
                    value={employeeDetails.issuedAmount}
                    fullWidth
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Grid>
        </Grid>
    );
};

export default EmployeeDetail;