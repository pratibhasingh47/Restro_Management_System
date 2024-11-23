import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface CustomListItemProps {
    to: string;
    primary: string;
}

const CustomListItem: React.FC<CustomListItemProps> = ({ to, primary }) => (
    <ListItem  sx={ {fontSize: '30px'} } component={Link} to={to}>
        <ListItemText primary={primary} />
    </ListItem>
);

export default CustomListItem;