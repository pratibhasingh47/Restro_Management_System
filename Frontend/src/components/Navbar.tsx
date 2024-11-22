import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-primary text-white sticky top-0 w-full flex items-center justify-between p-4 shadow-lg">
            <div className="flex items-center">
                <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="text-xl font-bold">YourAppName</span>
            </div>
            <div className="flex space-x-4">
                <Link to="/orders" className="hover:text-accent1">Orders</Link>
                <Link to="/about" className="hover:text-accent1">About Us</Link>
                <Link to="/contact" className="hover:text-accent1">Contact</Link>
                <Link to="/account" className="hover:text-accent1">My Account</Link>
                <Link to="/signup" className="hover:text-accent1">
                    <button className="bg-accent1 text-white px-4 py-2 rounded">Sign Up</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;