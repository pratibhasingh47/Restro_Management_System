import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import EmployeeList from './EmployeeList';
import EmployeeDetail from './EmployeeDetail';

const EmployeeManagement: React.FC = () => {
    const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null);

    const handleSelectEmployee = (id: string) => {
        setSelectedEmployeeId(id);
    };

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <EmployeeList onSelectEmployee={handleSelectEmployee} />
                </Grid>
                <Grid item xs={8}>
                    {selectedEmployeeId && <EmployeeDetail employeeId={selectedEmployeeId} />}
                </Grid>
            </Grid>
        </Container>
    );
};

export default EmployeeManagement;