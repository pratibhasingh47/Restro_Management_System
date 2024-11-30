import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../components/Home';
import Signup from '../components/Signup';
import Login from '../components/Login';
import MenuManagement from '../components/MenuManagement'; // Ensure this path is correct
import Layout from '../components/Layout'; // Ensure this path is correct
import StaffMyAccountDashboard from '../components/staffMyAccountDashboard'; // Ensure this path is correct

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/menuManagement',
                element: <MenuManagement />
            },
            {
                path: '/staffMyAccount',
                element: <StaffMyAccountDashboard />
            },
        ]
    },
    {
        path: '*',
        element: <Home />
    }
]);

export default router;