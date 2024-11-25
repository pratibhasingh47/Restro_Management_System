import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Adjust the path as needed

const Layout: React.FC = () => {
    const location = useLocation();
    const hideNavbar = location.pathname === '/signup' || location.pathname === '/login';

    return (
        <div>
            {!hideNavbar && <Navbar />}
            <Outlet />
        </div>
    );
};

export default Layout;