import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

// Components
import Signup from '../components/Signup';
import Login from '../components/Login';
import Home from '../components/Home';
import AddMenuItem from '../components/AddMenuItem';
import AddWorker from '../components/AddWorker';
import Dashboard from '../components/Dashboard';
// import Orders from '../components/Orders';
import Deliveries from '../components/Deliveries';
// import MyAccount from '../components/MyAccount';
// import PendingOrders from '../components/worker/PendingOrders';
// import CompletedOrders from '../components/worker/CompletedOrders';
// import Menu from '../components/user/Menu';
// import OrderDetails from '../components/user/OrderDetails';
// import Delivery from '../components/user/Delivery';
// import DeliveryPerson from '../components/user/DeliveryPerson';
// import ThankYou from '../components/ThankYou';

// Mock user role (replace with actual logic from context or state)
const user = {
    role: 'User', // Example: 'Admin', 'Worker', 'User'
};

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />, // Accessible to everyone
    },
    {
        path: '/signup',
        element: <Signup />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    // Admin Routes
    {
        path: '/addMenuItem',
        element: user.role === 'Admin' ? <AddMenuItem /> : <Navigate to="/" />,
    },
    {
        path: '/addWorker',
        element: user.role === 'Admin' ? <AddWorker /> : <Navigate to="/" />,
    },
    {
        path: '/dashboard',
        element: user.role === 'Admin' ? <Dashboard /> : <Navigate to="/" />,
    },
    {
        path: '/deliveries',
        element: user.role === 'Admin' ? <Deliveries /> : <Navigate to="/" />,
    },
    // Worker Routes
    // {
    //     path: '/orders',
    //     element: user.role === 'Worker' || user.role === 'Admin' ? <Orders /> : <Navigate to="/" />,
    // },
    // {
    //     path: '/pendingOrders',
    //     element: user.role === 'Worker' ? <PendingOrders /> : <Navigate to="/" />,
    // },
    // {
    //     path: '/completedOrders',
    //     element: user.role === 'Worker' ? <CompletedOrders /> : <Navigate to="/" />,
    // },
    // // Shared Route for My Account
    // {
    //     path: '/myAccount',
    //     element: user.role ? <MyAccount /> : <Navigate to="/" />,
    // },
    // // User Routes
    // {
    //     path: '/menu',
    //     element: user.role === 'User' ? <Menu /> : <Navigate to="/" />,
    // },
    // {
    //     path: '/orderDetails',
    //     element: user.role === 'User' ? <OrderDetails /> : <Navigate to="/" />,
    // },
    // {
    //     path: '/delivery',
    //     element: user.role === 'User' ? <Delivery /> : <Navigate to="/" />,
    // },
    // {
    //     path: '/deliveryPerson',
    //     element: user.role === 'User' ? <DeliveryPerson /> : <Navigate to="/" />,
    // },
    // {
    //     path: '/thankYou',
    //     element: user.role === 'User' ? <ThankYou /> : <Navigate to="/" />,
    // },
    // Catch-all Route
    {
        path: '*',
        element: <Navigate to="/" />,
    },
]);

export default Router;
