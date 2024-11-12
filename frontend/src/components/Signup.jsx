// import React from 'react'

// const Signup = () => {
// 	return (
// 		<div>Signup</div>
// 	)
// }

// export default Signup




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import backgroundImage from '../assets/background.jpeg';

// const Signup = () => {
// 	const [isLogin, setIsLogin] = useState(true);
// 	const navigate = useNavigate();

// 	const toggleForm = () => {
// 		setIsLogin(!isLogin);
// 		navigate('/login');
// 	};


// 	return (
// 		<div
// 			className="min-h-screen  bg-cover  flex items-center justify-center"
// 			style={{
// 				backgroundImage: `url(${backgroundImage})`, // Add your background image URL
// 				backgroundSize: 'cover',
// 			}}
// 		>
// 			<div className={`flex w-[900px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform	 ${isLogin ? '' : 'transform translate-x-full transition-transform duration-500'}`}>
// 				{/* Sign In Form */}
// 				<div className="w-1/2 p-8">
// 					<h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
// 					<div className="flex justify-center space-x-4 mb-6">
// 						<button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300">
// 							<i className="fab fa-google"></i>
// 						</button>
// 						<button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300">
// 							<i className="fab fa-facebook-f"></i>
// 						</button>
// 						<button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300">
// 							<i className="fab fa-linkedin-in"></i>
// 						</button>
// 					</div>
// 					<p className="text-center mb-4 text-gray-600">or use your email account</p>
// 					<form className="space-y-4">
// 						<input
// 							type="text"
// 							placeholder="Name"
// 							className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
// 						/>
// 						<input
// 							type="email"
// 							placeholder="Email"
// 							className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
// 						/>
// 						<input
// 							type="password"
// 							placeholder="Password"
// 							className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
// 						/>
// 						<input
// 							type="number"
// 							placeholder="Mobile No."
// 							className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
// 						/>
// 						<div className="text-right text-sm text-purple-600 hover:underline">
// 							<a href="#">Forgot Your Password?</a>
// 						</div>
// 						<button
// 							type="submit"
// 							className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700"
// 						>
// 							SIGN UP
// 						</button>
// 					</form>
// 				</div>

// 				{/* Sign Up Section */}
// 				<div className="w-1/2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white flex flex-col justify-center items-center p-8">
// 					<h2 className="text-3xl font-bold">Hello, Friend!</h2>
// 					<p className="text-center mt-4 mb-8">
// 						Register with your personal details to start your journey with us!
// 					</p>
// 					<button
// 						className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-gray-100"
// 						onClick={toggleForm}
// 					>
// 						SIGN UP
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Signup;






// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import restaurantImage from '../assets/background.png'; // Use the same background image
// import logo from '../assets/pratsRestro.png'; // Use the same logo
// import restroImage from '../assets/restro1.png'; // Use an image related to restaurant management

// const Signup = () => {
//     const [isLogin, setIsLogin] = useState(false); // Set to false to show signup initially
//     const navigate = useNavigate();

//     const toggleForm = () => {
//         setIsLogin(!isLogin);
//         navigate(isLogin ? '/signup' : '/login');
//     };

//     return (
//         <div 
//             className="flex h-screen items-center justify-center bg-gray-100 p-4"
//             style={{
//                 backgroundImage: `url(${restaurantImage})`, // Use the same background image
//                 backgroundRepeat: 'no-repeat',
//                 backgroundSize: 'cover',
//             }}
//         >
//             <div className="flex h-[85%] w-[60%] bg-white rounded-2xl shadow-lg overflow-hidden">
//                 {/* Promotional Section */}
//                 <div className="hidden md:flex flex-col justify-center items-start h-[100%] w-1/2 px-12 bg-gradient-to-br from-orange-400 to-orange-700 text-white">
//                     <h2 className="text-4xl font-lato font-bold mb-4 w-80">Simplify Management with Our Dashboard</h2>
//                     <p className="font-lato font-thin text-lg">Register yourself with our user-friendly management system.</p>
//                     <img src={restroImage} alt="Restaurant Management" className="w-4/5" />
//                 </div>

//                 {/* Signup Form */}
//                 <div className="w-full md:w-1/2 p-8 flex flex-col items-center">
//                     <img src={logo} alt="Logo" className="w-72 mt-16 mb-4" /> {/* Logo */}
//                     <h2 className="text-2xl font-lato font-bold text-gray-800 mt-8 mb-4">Create Account</h2>
//                     <p className="text-gray-600 font-lato mb-6">Create a new account to get started</p>

//                     <form className="w-full mt-4 max-w-sm space-y-4">
//                         <div>
//                             <input
//                                 type="text"
//                                 placeholder="Name"
//                                 className="w-full p-3 border font-lato border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                             />
//                         </div>
//                         <div>
//                             <input
//                                 type="email"
//                                 placeholder="Email address"
//                                 className="w-full p-3 border font-lato border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                             />
//                         </div>
//                         <div>
//                             <input
//                                 type="password"
//                                 placeholder="Password"
//                                 className="w-full p-3 border font-lato border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                             />
//                         </div>
//                         <div>
//                             <input
//                                 type="number"
//                                 placeholder="Mobile No."
//                                 className="w-full p-3 border font-lato border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                             />
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full bg-orange-500 text-white font-lato font-black p-3 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
//                         >
//                             Sign Up
//                         </button>
//                     </form>

//                     <div className="flex w-auto items-center my-6">
//                         <span className="border-b w-20 border-gray-300"></span>
//                         <span className="px-4 w-auto text-gray-500">Or Sign Up with</span>
//                         <span className="border-b w-20 border-gray-300"></span>
//                     </div>

//                     <div className="flex space-x-4">
//                         <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200">
//                             <i className="fab fa-google text-xl text-gray-500"></i>
//                         </button>
//                         <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200">
//                             <i className="fab fa -facebook text-xl text-gray-500"></i>
//                         </button>
//                     </div>

//                     <p className="text-sm text-gray-500 mt-8">
//                         Already have an account? <span onClick={toggleForm} className="text-orange-500 cursor-pointer hover:underline">Login</span>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signup;






// src/components/Signup.js

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../redux/slices/authslice';
import { motion } from 'framer-motion';
import restaurantImage from '../assets/background.png';
import logo from '../assets/pratsRestro.png';
import restroImage from '../assets/restro1.png';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const Signup = () => {
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

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
    } = useForm({
        resolver: zodResolver(validationSchema)
    });

    const onSubmit = (data) => {
        dispatch(signupUser(data));
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
                                type="number"
                                placeholder="Contact Number"
                                {...register("contactNumber")}
                                className={`w-full p-3 border font-lato border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.mobile ? 'border-red-500' : ''}`}
                            />
                            <p className="text-red-500 text-sm">{errors.mobile?.message}</p>
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









// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import restaurantImage from '../assets/background.png';
// import logo from '../assets/pratsRestro.png';
// import restroImage from '../assets/restro1.png';
// import { FaGoogle, FaFacebook } from 'react-icons/fa';

// const Signup = () => {
//     const [isLogin, setIsLogin] = useState(false);
//     const navigate = useNavigate();

//     // Define validation schema using zod
//     const validationSchema = z.object({
//         name: z.string().min(1, "Name is required"),
//         email: z.string().email("Invalid email format"),
//         password: z.string().min(6, "Password must be at least 6 characters"),
//         mobile: z.string()
//             .regex(/^[0-9]{10}$/, "Mobile number must be 10 digits")
//             .min(10, "Mobile number is required")
//     });

//     // Set up react-hook-form with validation
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         watch
//     } = useForm({
//         resolver: zodResolver(validationSchema)
//     });

//     // Watch input values to log changes in the console
//     const watchAllFields = watch();
//     console.log("Field values:", watchAllFields);

//     const onSubmit = (data) => {
//         console.log("Form Submitted", data);
//         // Handle form submission logic here
//     };

//     const toggleForm = () => {
//         setIsLogin(!isLogin);
//         navigate(isLogin ? '/signup' : '/login');
//     };

//     return (
//         <div 
//             className="flex h-screen items-center justify-center bg-gray-100 p-4"
//             style={{
//                 backgroundImage: `url(${restaurantImage})`,
//                 backgroundRepeat: 'no-repeat',
//                 backgroundSize: 'cover',
//             }}
//         >
//             <div className="flex h-[85%] w-[60%] bg-white rounded-2xl shadow-lg overflow-hidden">
//                 <div className="hidden md:flex flex-col justify-center items-start h-[100%] w-1/2 px-12 bg-gradient-to-br from-orange-400 to-orange-700 text-white">
//                     <h2 className="text-4xl font-lato font-bold mb-4 w-80">Simplify Management with Our Dashboard</h2>
//                     <p className="font-lato font-thin text-lg">Register yourself with our user-friendly management system.</p>
//                     <img src={restroImage} alt="Restaurant Management" className="w-4/5" />
//                 </div>

//                 <motion.div
//                     className="w-full md:w-1/2 p-8 flex flex-col items-center"
//                     initial={{ opacity: 0, x: 100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -100 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <img src={logo} alt="Logo" className="w-72 mt-16 mb-4" />
//                     <h2 className="text-2xl font-lato font-bold text-gray-800 mt-8 mb-4">Create Account</h2>
//                     <p className="text-gray-600 font-lato mb-6">Create a new account to get started</p>

//                     <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-4 max-w-sm space-y-4">
//                         <div>
//                             <input
//                                 type="text"
//                                 placeholder="Name"
//                                 {...register("name")}
//                                 className={`w-full p-3 border font-lato border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.name ? 'border-red-500' : ''}`}
//                             />
//                             <p className="text-red-500 text-sm">{errors.name?.message}</p>
//                         </div>
//                         <div>
//                             <input
//                                 type="email"
//                                 placeholder="Email address"
//                                 {...register("email")}
//                                 className={`w-full p-3 border font-lato border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.email ? 'border-red-500' : ''}`}
//                             />
//                             <p className="text-red-500 text-sm">{errors.email?.message}</p>
//                         </div>
//                         <div>
//                             <input
//                                 type="password"
//                                 placeholder="Password"
//                                 {...register("password")}
//                                 className={`w-full p-3 border font-lato border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.password ? 'border-red-500' : ''}`}
//                             />
//                             <p className="text-red-500 text-sm">{errors.password?.message}</p>
//                         </div>
//                         <div>
//                             <input
//                                 type="number"
//                                 placeholder="Mobile No."
//                                 {...register("mobile")}
//                                 className={`w-full p-3 border font-lato border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.mobile ? 'border-red-500' : ''}`}
//                             />
//                             <p className="text-red-500 text-sm">{errors.mobile?.message}</p>
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full bg-orange-500 text-white font-lato font-black p-3 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
//                         >
//                             Sign Up
//                         </button>
//                     </form>

//                     <div className="flex w-auto items-center my-6">
//                         <span className="border-b w-20 border-gray-300"></span>
//                         <span className="px-4 w-auto text-gray-500">Or Sign Up with</span>
//                         <span className="border-b w-20 border-gray-300"></span> 
//                     </div>

//                     <div className="flex space-x-4">
//                         <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200">
//                             <FaGoogle className="text-xl text-gray-800" />
//                         </button>
//                         <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200">
//                             <FaFacebook className="text-xl text-gray-800" />
//                         </button>
//                     </div>

//                     <p className="text-sm text-gray-500 mt-8">
//                         Already have an account? <span onClick={toggleForm} className="text-orange-500 font-bold font-lato cursor-pointer hover:underline">Login</span>
//                     </p>
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default Signup;

