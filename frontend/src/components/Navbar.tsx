import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/pratsRestro.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-10" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <Link to="/about" className="text-gray-700 hover:text-orange-500 font-semibold">
                        About Us
                    </Link>
                    <Link to="/delivery" className="text-gray-700 hover:text-orange-500 font-semibold">
                        Delivery
                    </Link>
                    <Link to="/account" className="text-gray-700 hover:text-orange-500 font-semibold">
                        My Account
                    </Link>
                </div>

                {/* Hamburger Icon for Mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-gray-700 focus:outline-none"
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <Link
                        to="/about"
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                        onClick={toggleMenu}
                    >
                        About Us
                    </Link>
                    <Link
                        to="/delivery"
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                        onClick={toggleMenu}
                    >
                        Delivery
                    </Link>
                    <Link
                        to="/account"
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                        onClick={toggleMenu}
                    >
                        My Account
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
