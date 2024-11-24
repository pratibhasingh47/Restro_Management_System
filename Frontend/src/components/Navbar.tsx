import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/pratsRestro.png';
import { FaUserPlus } from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode';
import { BsArrowRightCircleFill } from "react-icons/bs";
import TemporaryDrawer from './TemporaryDrawer';

interface DecodedToken {
    role: string;
}

const Navbar: React.FC = () => {
    const [role, setRole] = useState<string | null>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            try {
                const decoded: DecodedToken = jwtDecode<DecodedToken>(token);
                setRole(decoded.role);
            } catch (error) {
                console.error("Failed to decode token:", error);
            }
        }
    }, []);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setRole(null);
        window.location.href = '/'; // Redirect to home page after logout
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <nav className="bg-accent1 px-40 text-primary z-50 sticky top-0 w-full flex items-center justify-between p-4 shadow-lg">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-16 w-auto mr-2" onClick={handleLogoClick} style={{ cursor: 'pointer' }} />
            </div>
            <div className="flex justify-center items-center space-x-12 mx-12">
                <Link to="/about" className="font-lato font-extrabold text-lg hover:text-xl hover:transition duration-500">About Us</Link>
                <Link to="/contact" className="font-lato font-extrabold text-lg hover:text-xl hover:transition duration-500">Contact</Link>
                {!role ? (
                    <Link to="/signup" className="font-lato font-bold tracking-wide text-xl hover:text-secondary hover:transition duration-500">
                        <button className="flex items-center bg-black text-lg text-white px-4 py-2 rounded-full hover:bg-secondary-dark hover:transition duration-300">
                            <FaUserPlus className="mr-2 font-lato" />
                            Sign Up
                        </button>
                    </Link>
                ) : (
                    <>
                        <Link to="/account" className="font-lato font-extrabold text-lg hover:text-xl hover:transition duration-500">My Account</Link>
                        {role === 'Manager' && (
                            <>
                                <button onClick={toggleDrawer(true)} className="flex items-center font-bold bg-black font-lato justify-center text-lg text-white px-4 py-2 rounded-full hover:bg-secondary-dark hover:transition duration-300 ml-4">
                                    <BsArrowRightCircleFill className="mr-2.5" />
                                    Management
                                </button>
                                <TemporaryDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
                            </>
                        )} 
                        {role === 'Staff' && (
                            <>
                                <Link to="/order-status" className="font-lato font-extrabold text-lg hover:text-xl hover:transition duration-500">Order Status</Link>
                                <Link to="/attendance" className="font-lato font-extrabold text-lg hover:text-xl hover:transition duration-500">Attendance</Link>
                            </>
                        )}
                        <button onClick={handleLogout} className="font-lato font-bold flex items-center bg-black text-lg text-white px-4 py-2 rounded-full hover:bg-secondary-dark hover:transition duration-300 ml-4">
                            Logout
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;