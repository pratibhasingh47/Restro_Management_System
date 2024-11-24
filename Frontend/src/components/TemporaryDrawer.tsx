import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { FaUtensils, FaUserTie, FaClipboardList, FaTruck, FaRegListAlt, FaWarehouse } from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';
import CustomListItem from './ListItem'; // Ensure this path is correct

interface TemporaryDrawerProps {
    open: boolean;
    toggleDrawer: (open: boolean) => () => void;
}

const TemporaryDrawer: React.FC<TemporaryDrawerProps> = ({ open, toggleDrawer }) => {
    return (
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 350, height: '100vh', backgroundColor: '#001D3D', color: 'white', fontSize: '20px' }}
                role="presentation" onClick={toggleDrawer(false)}>
                <List>
                    <ListItem button component={React.forwardRef<HTMLAnchorElement, any>((props, ref) => <Link {...props} ref={ref} to="/menuManagement" />)}>
                        <ListItemIcon>
                            <MdFastfood style={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Menu Management" />
                    </ListItem>
                    <ListItem button component={React.forwardRef<HTMLAnchorElement, any>((props, ref) => <Link {...props} ref={ref} to="/employee-details" />)}>
                        <ListItemIcon>
                            <FaUserTie style={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Employee Details" />
                    </ListItem>
                    <ListItem button component={React.forwardRef<HTMLAnchorElement, any>((props, ref) => <Link {...props} ref={ref} to="/employee-attendance" />)}>
                        <ListItemIcon>
                            <FaClipboardList style={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Employee Attendance" />
                    </ListItem>
                    <ListItem button component={React.forwardRef<HTMLAnchorElement, any>((props, ref) => <Link {...props} ref={ref} to="/deliveries" />)}>
                        <ListItemIcon>
                            <FaTruck style={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Deliveries" />
                    </ListItem>
                    <ListItem button component={React.forwardRef<HTMLAnchorElement, any>((props, ref) => <Link {...props} ref={ref} to="/order-record" />)}>
                        <ListItemIcon>
                            <FaRegListAlt style={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Order Record" />
                    </ListItem>
                    <ListItem button component={React.forwardRef<HTMLAnchorElement, any>((props, ref) => <Link {...props} ref={ref} to="/stock-management" />)}>
                        <ListItemIcon>
                            <FaWarehouse style={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Stock Management" />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};

export default TemporaryDrawer;