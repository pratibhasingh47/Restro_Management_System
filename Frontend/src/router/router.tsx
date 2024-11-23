import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../components/Home';
import Signup from '../components/Signup';
import Login from '../components/Login';

const router = createBrowserRouter([
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
        path: '*',
        element: <Home/>
    }
]);

export default router;