

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser  } from '../redux/slices/authslice';
import { motion } from 'framer-motion';
import restaurantImage from '../assets/background.png';
import logo from '../assets/pratsRestro.png';
import restroImage from '../assets/restro1.png';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

// Define the form data type
interface SignupFormData {
    name: string;
    email: string;
    password: string;
    contactNumber: string;
}

const Signup: React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    
    // Use a typed selector for the auth state
    const { loading, error } = useSelector((state: any) => state.auth);

    const validationSchema = z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email format"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        contactNumber: z.string()
            .regex(/^[0-9]{10}$/, "Mobile number must be 10 digits")
            .min(10, "Mobile number is required")
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormData>({
        resolver: zodResolver(validationSchema)
    });

    const onSubmit: SubmitHandler<SignupFormData> = (data) => {
        dispatch(signupUser (data));
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
        navigate(isLogin ? '/signup' : '/login');
    };

    return (
        <div
            className="flex h-screen items-center justify-center bg-gray-100 p-4"
            style={{
                backgroundImage: `url(${restaurantImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div className="flex h-[85%] w-[60%] bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="hidden md:flex flex-col justify-center items-start h-[100%] w-1/2 px-12 bg-gradient-to-br from-orange-400 to-orange-700 text-white">
                    <h2 className="text-4xl font-lato font-bold mb-4 w-80">Simplify Management with Our Dashboard</h2>
                    <p className="font-lato font-thin text-lg">Register yourself with our user-friendly management system.</p>
                    <img src={restroImage} alt="Restaurant Management" className="w-4/5" />
                </div>

                <motion.div
                    className="w-full md:w-1/2 p-8 flex flex-col items-center"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={logo} alt="Logo" className="w-72 mt-16 mb-4" />
                    <h2 className="text-2xl font-lato font-bold text-gray-800 mt-8 mb-4">Create Account</h2>
                    <p className="text-gray-600 font-lato mb-6">Create a new account to get started</p>

                    {error && <p className="text-red-500">{error}</p>}

                    <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-4 max-w-sm space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                {...register("name")}
                                className={`w-full p-3 border font-lato border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.name ? 'border-red-500' : ''}`}
                            />
                            <p className="text-red-500 text-sm">{errors.name?.message}</p>
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email address"
                                {...register("email")}
                                className={`w-full p-3 border font-lato border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.email ? 'border-red-500' : ''}`}
                            />
                            <p className="text-red-500 text-sm">{errors.email?.message}</p>
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                {...register("password")}
                                className={`w-full p-3 border font-lato border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.password ? 'border-red-500' : ''}`}
                            />
                            <p className="text-red-500 text-sm">{errors.password?.message}</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Contact Number"
                                {...register("contactNumber")}
                                className={`w-full p-3 border font-lato border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.contactNumber ? 'border-red-500' : ''}`}
                            />
                            <p className="text-red-500 text-sm">{errors.contactNumber?.message}</p>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-3 rounded-md font-lato font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            disabled={loading}
                        >
                            {loading ? 'Signing up...' : 'Sign Up'}
                        </button>
                    </form>

                    <div className="flex items-center space-x-4 mt-4">
                        <button className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100 text-gray-700">
                            <FaGoogle size={20} />
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-gray-100 text-gray-700">
                            <FaFacebook size={20} />
                        </button>
                    </div>

                    <div className="mt-8 text-sm font-lato text-gray-700">
                        Already have an account? <span className="text-orange-500 font-medium cursor-pointer" onClick={toggleForm}>Login</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Signup;