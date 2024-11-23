import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/pratsRestro.png';
import { FaUserPlus } from 'react-icons/fa';


const Navbar: React.FC = () => {
    return (
        <nav className="bg-accent1 px-40  text-primary sticky top-0 w-full flex items-center justify-between p-4 shadow-lg">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-16 w-auto mr-2" />
                {/* <span className="text-xl font-bold">YourAppName</span> */}
            </div>
            <div className="flex justify-center items-center space-x-8 mx-12">
                <Link to="/about" className="font-lato font-extrabold text-lg hover:text-xl">About Us</Link>
                <Link to="/contact" className="font-lato font-extrabold text-lg hover:text-xl">Contact</Link>
                <Link to="/account" className="font-lato font-extrabold text-lg  hover:text-xl">My Account</Link>
                <Link to="/signup" className="font-lato font-bold  tracking-wide text-xl hover:text-secondary">
                    <button className="flex items-center bg-black text-lg text-white px-4 py-2 rounded-full hover:bg-secondary-dark transition duration-300">
                        <FaUserPlus className=" mr-2 font-lato" />
                        Sign Up
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;