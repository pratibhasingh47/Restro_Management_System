// import React, { useState } from 'react';
// import { Container, Grid, Paper, Typography } from '@mui/material';
// import EmployeeList from './EmployeeList';
// import EmployeeDetail from './EmployeeDetail';

// const EmployeeManagement: React.FC = () => {
//     const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null);

//     const handleSelectEmployee = (id: string) => {
//         setSelectedEmployeeId(id);
//     };

//     return (
//         <Container style={{ marginTop: '20px', width: '100vw' }}>
//             <Grid container spacing={2}
//                 style={{ width: '60vw' }}
//             >
//                 <Grid item xs={16} md={3}>
//                     <Paper elevation={3} style={{ padding: '20px', height: '80vh' }}>
//                         <Typography variant="h5" gutterBottom>
//                             Employee List
//                         </Typography>
//                         <EmployeeList onSelectEmployee={handleSelectEmployee} />
//                     </Paper>
//                 </Grid>
//                 <Grid item xs={12} md={8}>
//                     <Paper elevation={3} style={{ padding: '20px', height: '100%' }}>
//                         <Typography variant="h5" gutterBottom>
//                             Employee Details
//                         </Typography>
//                         {selectedEmployeeId ? (
//                             <EmployeeDetail employeeId={selectedEmployeeId} />
//                         ) : (
//                             <Typography variant="body1">
//                                 Please select an employee to view details.
//                             </Typography>
//                         )}
//                     </Paper>
//                 </Grid>
//             </Grid>
//         </Container>
//     );
// };

// export default EmployeeManagement




import React, { useState } from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import EmployeeList from './EmployeeList';
import EmployeeDetail from './EmployeeDetail';

const EmployeeManagement: React.FC = () => {
    const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(null);

    const handleSelectEmployee = (id: string) => {
        setSelectedEmployeeId(id);
    };

    return (
        <Container style={{ marginTop: '20px', width: '100vw' }}>
            <Grid container spacing={2} style={{ width: '60vw' }}>
                <Grid item xs={16} md={3}>
                    <Paper elevation={3} style={{ padding: '20px', height: '80vh' }}>
                        <Typography variant="h5" gutterBottom>
                            Employee List
                        </Typography>
                        <EmployeeList onSelectEmployee={handleSelectEmployee} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper elevation={3} style={{ padding: '20px', height: '100%' }}>
                        <Typography variant="h5" gutterBottom>
                            Employee Details
                        </Typography>
                        {selectedEmployeeId ? (
                            <EmployeeDetail employeeId={selectedEmployeeId} />
                        ) : (
                            <Typography variant="body1">
                                Please select an employee to view details.
                            </Typography>
                        )}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default EmployeeManagement;


