import React, { useState } from 'react';
import {
    Box, Typography, Paper, List, ListItem, ListItemAvatar, Avatar,
    ListItemText, Checkbox, Button
} from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import dayjs, { Dayjs } from 'dayjs';

// Example employee data; replace with real data as needed
type Employee = {
    id: string;
    name: string;
    avatarUrl?: string;
};

const EMPLOYEES: Employee[] = [
    { id: '1', name: 'John Doe', avatarUrl: '' },
    { id: '2', name: 'Jane Smith', avatarUrl: '' },
    { id: '3', name: 'Alice Johnson', avatarUrl: '' },
];

type Attendance = Record<string, boolean>; // { [employeeId]: present }

const EmployeeAttendance: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
    // Attendance per date, e.g. { '2024-06-01': { '1': true, '2': false } }
    const [attendanceData, setAttendanceData] = useState<Record<string, Attendance>>({});

    const attendanceForSelectedDate: Attendance = attendanceData[selectedDate.format('YYYY-MM-DD')] || {};

    const handleAttendanceChange = (employeeId: string) => {
        const dateKey = selectedDate.format('YYYY-MM-DD');
        setAttendanceData(prev => ({
            ...prev,
            [dateKey]: {
                ...prev[dateKey],
                [employeeId]: !prev[dateKey]?.[employeeId]
            }
        }));
    };

    const handleMarkAll = (present: boolean) => {
        const dateKey = selectedDate.format('YYYY-MM-DD');
        setAttendanceData(prev => ({
            ...prev,
            [dateKey]: EMPLOYEES.reduce((acc, emp) => ({ ...acc, [emp.id]: present }), {})
        }));
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems={{ xs: 'stretch', md: 'flex-start' }}
            flexDirection={{ xs: 'column', md: 'row' }}
            minHeight="80vh"
            gap={4}
            p={4}
            sx={{ background: 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)' }}
        >
            <Paper elevation={3} sx={{ p: 3, minWidth: 340, mb: { xs: 2, md: 0 } }}>
                <Typography variant="h5" sx={{ mb: 2, color: '#001D3D' }}>
                    <EventAvailableIcon sx={{ mr: 1, verticalAlign: 'middle', color: '#001D3D' }} />
                    Employee Attendance
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                        value={selectedDate}
                        onChange={date => date && setSelectedDate(date)}
                        showDaysOutsideCurrentMonth
                        sx={{
                            '& .MuiPickersDay-root': { fontWeight: 'bold' },
                            '& .MuiPickersDay-dayWithMargin': { borderRadius: '50%' }
                        }}
                    />
                </LocalizationProvider>
            </Paper>
            <Paper elevation={3} sx={{ p: 3, flex: 1, minWidth: 350 }}>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                    <Typography variant="h6" color="primary">
                        {selectedDate.format('dddd, MMMM D, YYYY')}
                    </Typography>
                    <Box>
                        <Button
                            variant="outlined"
                            size="small"
                            sx={{ mr: 1 }}
                            onClick={() => handleMarkAll(true)}
                        >Mark all Present</Button>
                        <Button
                            variant="outlined"
                            size="small"
                            color="secondary"
                            onClick={() => handleMarkAll(false)}
                        >Mark all Absent</Button>
                    </Box>
                </Box>
                <List>
                    {EMPLOYEES.map(emp => (
                        <ListItem key={emp.id} secondaryAction={
                            <Checkbox
                                edge="end"
                                checked={attendanceForSelectedDate[emp.id] || false}
                                onChange={() => handleAttendanceChange(emp.id)}
                                inputProps={{ 'aria-label': `${emp.name} attendance` }}
                                color="success"
                            />
                        }>
                            <ListItemAvatar>
                                <Avatar src={emp.avatarUrl}>
                                    {emp.name[0]}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={emp.name} />
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Box>
    );
};

export default EmployeeAttendance;