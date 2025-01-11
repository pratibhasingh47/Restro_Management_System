import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../components/Home';
import Signup from '../components/Signup';
import Login from '../components/Login';
import MenuManagement from '../components/MenuManagement';
import Layout from '../components/Layout';
import StaffPersonal from '../components/StaffPersonal';
// import StaffJob from '../components/staffMyAccount/StaffJob';
// import StaffPay from '../components/staffMyAccount/StaffPay';
import StaffMyAccountDashboard from '../components/staffMyAccountDashboard';
import EmployeeManagement from '../components/EmployeeManagement';


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
                path : '/employeeManagement',
                element : <EmployeeManagement />
            },
            {
                path: '/staffMyAccount',
                element: <StaffMyAccountDashboard />,
                children: [
                    {
                        path: 'staffPersonal',
                        element: <StaffPersonal />
                    },
                ]
            }
        ]
    },
    {
        path: '*',
        element: <Home />
    }
]);

export default router;