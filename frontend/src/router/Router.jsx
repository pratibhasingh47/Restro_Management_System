import React from 'react'
import { createBrowserRouter } from 'react-router-dom'  

import Signup from '../components/Signup'   
import Login from '../components/Login'

const Router = createBrowserRouter([
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/login',
        element: <Login />
    }
])

export default Router