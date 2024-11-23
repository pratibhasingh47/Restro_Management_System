import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface TemporaryDrawerProps {
    open: boolean;
    toggleDrawer: (open: boolean) => () => void;
}

const TemporaryDrawer: React.FC<TemporaryDrawerProps> = ({ open, toggleDrawer }) => {
    return (
        <Drawer anchor="right"  open={open} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 350 , height: '100vh', backgroundColor : '#001D3D' , color: 'white' , fontSize: '30px'}} 
            role="presentation" onClick={toggleDrawer(false)}>
                <List>
                    <ListItem button component={React.forwardRef<HTMLAnchorElement, any>((props, ref) => <Link {...props} ref={ref} to="/employee-details" />)}>
                        <ListItemText primary="Employee Details" />
                    </ListItem>
                    <ListItem button component={React.forwardRef<HTMLAnchorElement, any>((props, ref) => <Link {...props} ref={ref} to="/employee-attendance" />)}>
                        <ListItemText primary="Employee Attendance" />
                    </ListItem>
                    <ListItem button component={React.forwardRef<HTMLAnchorElement, any>((props, ref) => <Link {...props} ref={ref} to="/deliveries" />)}>
                        <ListItemText primary="Deliveries" />
                    </ListItem>
                    <ListItem button component={React.forwardRef<HTMLAnchorElement, any>((props, ref) => <Link {...props} ref={ref} to="/order-record" />)}>
                        <ListItemText primary="Order Record" />
                    </ListItem>
                    <ListItem button component={React.forwardRef<HTMLAnchorElement, any>((props, ref) => <Link {...props} ref={ref} to="/stock-management" />)}>
                        <ListItemText primary="Stock Management" />
                    </ListItem>
                    <ListItem button component={React.forwardRef<HTMLAnchorElement, any>((props, ref) => <Link {...props} ref={ref} to="/menu-management" />)}>
                        <ListItemText primary="Menu Management" />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};

export default TemporaryDrawer;