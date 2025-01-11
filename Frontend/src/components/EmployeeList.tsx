import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, CircularProgress, Typography, ListItemButton } from '@mui/material';

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
        <List>
            {employees.map((employee, index) => (
                <ListItemButton
                    component="div" 
                    key={employee._id} 
                    onClick={() => onSelectEmployee(employee._id)}
                    style={{ marginBottom: '10px', borderRadius: '8px', border: '1px solid #ddd', padding: '10px' }}
                >
                    <ListItemText 
                        primary={`${index + 1}. ${employee.name}`} 
                        secondary={employee.position} 
                        primaryTypographyProps={{ fontWeight: 'bold' }}
                    />
                </ListItemButton>
            ))}
        </List>
    );
};

export default EmployeeList;