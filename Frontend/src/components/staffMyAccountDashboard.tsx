import React, { useEffect } from 'react';
import { FaUser, FaBriefcase, FaMoneyBill, FaBars } from 'react-icons/fa';
import { Link, useNavigate, Outlet } from 'react-router-dom';

const StaffMyAccountDashboard: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/staffMyAccount/staffPersonal');
    }, [navigate]);

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <div className="grid grid-cols-5 h-screen bg-white">
            {/* Sidebar (Drawer) */}
            <div className="col-span-1 bg-gray-900 text-white flex flex-col">
                <div className="p-4 mx-8 text-2xl font-semibold text-white flex items-center">
                    <FaBars className="mr-4" /> Menu
                </div>
                <nav className="flex-1 mx-20 text-xl font-lato">
                    <ul>
                        <li>
                            <Link to="/staffMyAccount/staffPersonal" className="p-4 rounded-md hover:bg-gray-700 flex items-center">
                                <FaUser className="mr-4" /> Personal
                            </Link>
                        </li>
                        <li>
                            <Link to="/staffMyAccount/staffJob" className="p-4 rounded-md hover:bg-gray-700 flex items-center">
                                <FaBriefcase className="mr-4" /> Job
                            </Link>
                        </li>
                        <li>
                            <Link to="/staffMyAccount/staffPay" className="p-4 rounded-md hover:bg-gray-700 flex items-center">
                                <FaMoneyBill className="mr-4" /> Pay
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="col-span-4 p-8">
                <Outlet />
            </div>
        </div>
    );
}

export default StaffMyAccountDashboard;