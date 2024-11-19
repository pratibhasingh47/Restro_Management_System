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
        <nav className="bg-gradient-to-r from-orange-100 to-orange-300 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-12" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <Link to="/about" className="text-white hover:text-black text-xl font-bold font-lato transition duration-300">
                        About Us
                    </Link>
                    <Link to="/delivery" className="text-white hover:text-black  text-xl font-bold font-lato transition duration-300">
                        Delivery
                    </Link>
                    <Link to="/account" className="text-white hover:text-black text-xl font-bold font-lato transition duration-300">
                        My Account
                    </Link>
                </div>

                {/* Hamburger Icon for Mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white focus:outline-none"
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gradient-to-r from-orange-400 to-yellow-400 shadow-md">
                    <Link
                        to="/about"
                        className="block px-4 py-3 text-white hover:bg-yellow-200 hover:text-gray-800 transition duration-300"
                        onClick={toggleMenu}
                    >
                        About Us
                    </Link>
                    <Link
                        to="/delivery"
                        className="block px-4 py-3 text-white hover:bg-yellow-200 hover:text-gray-800 transition duration-300"
                        onClick={toggleMenu}
                    >
                        Delivery
                    </Link>
                    <Link
                        to="/account"
                        className="block px-4 py-3 text-white hover:bg-yellow-200 hover:text-gray-800 transition duration-300"
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