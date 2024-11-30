import React from 'react';
import { FaUser, FaBriefcase, FaMoneyBill, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <div className="grid grid-cols-5 h-screen bg-black">
            {/* Sidebar (Drawer) */}
            <div className="col-span-1 bg-gray-900 text-white flex flex-col">
                <div className="p-4 mx-8 text-2xl font-semibold text-white flex items-center">
                    <FaBars className="mr-4" /> Menu
                </div>
                <nav className="flex-1 mx-20 text-xl font-lato">
                    <ul>
                        <li>
                            <Link to="/staffPersonal" className="p-4 rounded-md hover:bg-gray-700 flex items-center">
                                <FaUser className="mr-4" /> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/personal" className="p-4 rounded-md hover:bg-gray-700 flex items-center">
                                <FaUser className="mr-4" /> Personal
                            </Link>
                        </li>
                        <li>
                            <Link to="/job" className="p-4 rounded-md hover:bg-gray-700 flex items-center">
                                <FaBriefcase className="mr-4" /> Job
                            </Link>
                        </li>
                        <li>
                            <Link to="/pay" className="p-4 rounded-md hover:bg-gray-700 flex items-center">
                                <FaMoneyBill className="mr-4" /> Pay
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Content Area */}
            <div className="col-span-4 p-8 text-white">
                <h1 className="text-3xl font-semibold">Dashboard content for /home</h1>
                <p className="mt-4">Here you can add content for your dashboard page.</p>
            </div>
        </div>
    );
}

export default Dashboard;