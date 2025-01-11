import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, List, ListItem, ListItemText, Typography, CircularProgress, ListItemButton } from '@mui/material';

interface Employee {
    _id: string;
    name: string;
    position: string;
}

const EmployeeList: React.FC<{ onSelectEmployee: (id: string) => void }> = ({ onSelectEmployee }) => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                // Retrieve the token from local storage or any other storage mechanism
                const token = localStorage.getItem('authToken');

                if (!token) {
                    setError('No authentication token found');
                    setLoading(false);
                    return;
                }

                const response = await axios.get('http://localhost:3000/staffMyAccount/allStaff', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (Array.isArray(response.data)) {
                    setEmployees(response.data);
                } else {
                    setError('Unexpected response format');
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching employees:', error);
                setError('Failed to fetch employees');
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography variant="h6" color="error">{error}</Typography>;
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Employee List
                </Typography>
                <List>
                    {employees.map((employee) => (
                        <ListItemButton component="div" key={employee._id} onClick={() => onSelectEmployee(employee._id)}>
                            <ListItemText primary={employee.name} secondary={employee.position} />
                        </ListItemButton>
                    ))}
                </List>
            </Grid>
        </Grid>
    );
};

export default EmployeeList;