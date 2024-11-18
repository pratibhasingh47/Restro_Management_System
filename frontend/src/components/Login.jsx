// import React from 'react'

// const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login






// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import backgroundImage from '../assets/background.jpeg';


// const Login = () => {
//     const [isLogin, setIsLogin] = useState(true);
//     const navigate = useNavigate();

//     const toggleForm = () => {
//         setIsLogin(!isLogin);
//         navigate('/signup');
//     };



//     return (
//         <div
//             className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-purple-500"
//             style={{
//                 backgroundImage: `url(${backgroundImage})`, // Add your background image URL
//                 backgroundSize: 'cover',
//             }}
//         >
//             <div className="flex w-[900px] bg-white rounded-lg shadow-lg overflow-hidden">
//                 {/* Login Form */}
//                 <div className="w-1/2 p-8">
//                     <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>
//                     <div className="flex justify-center space-x-4 mb-6">
//                         <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300">
//                             <i className="fab fa-google"></i>
//                         </button>
//                         <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300">
//                             <i className="fab fa-facebook-f"></i>
//                         </button>
//                         <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300">
//                             <i className="fab fa-linkedin-in"></i>
//                         </button>
//                     </div>
//                     <p className="text-center mb-4 text-gray-600">or use your email password</p>
//                     <form className="space-y-4">
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
//                         />
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
//                         />
//                         <div className="text-right text-sm text-purple-600 hover:underline">
//                             <a href="#">Forget Your Password?</a>
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700"
//                         >
//                             SIGN IN
//                         </button>
//                     </form>
//                 </div>

//                 {/* Welcome Section */}
//                 <div className="w-1/2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white flex flex-col justify-center items-center p-8">
//                     <h2 className="text-3xl font-bold">Hello, Friend!</h2>
//                     <p className="text-center mt-4 mb-8">
//                         Register with your personal details to use all of the site features.
//                     </p>
//                     <button
//                         onClick={toggleForm}
//                         className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-gray-100">
//                         SIGN UP
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;









// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import restroImage from '../assets/restro1.png'; // Use an image related to restaurant management
// import logo from '../assets/pratsRestro.png'; // Use your own logo
// import backgroundImage from '../assets/background.png'; // Use a background image

// const Login = () => {
//     const [isLogin, setIsLogin] = useState(true);
//     const navigate = useNavigate();

//     const toggleForm = () => {
//         setIsLogin(!isLogin);
//         navigate('/signup');
//     };

//     return (
//         <div className="flex  h-screen items-center justify-center bg-gray-100 p-4"   
//         style={{
//             backgroundImage: `url(${backgroundImage})`, // Import a background image
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'cover',
//             backgroundColor: 'rgba(0,0,0,0)', // Optional: add a slight overlay
//             backgroundBlendMode: 'overlay'
//         }}
//         >
//             <div className="flex  h-[85%] w-[60%] bg-white rounded-2xl shadow-lg overflow-hidden">
//                 {/* Promotional Section */}
//                 <div className="hidden md:flex flex-col justify-center items-start h-[100%] w-1/2 px-12 bg-gradient-to-br from-orange-400 to-orange-700 text-white">
//                     <h2 className="text-4xl font-lato font-bold mb-4 w-80">Simplify Management with Our Dashboard</h2>
//                     <p className=" font-lato font-thin text-lg ">Register yourself with our user-friendly management system.</p>
//                     <img src={restroImage} alt="Restaurant Management" className="w-4/5 " />
//                 </div>

//                 {/* Login Form */}
//                 <div className="w-full md:w-1/2 p-8 flex flex-col items-center">
//                     <img src={logo} alt="Logo" className="w-72 mt-16 mb-4" /> {/* Logo */}
//                     <h2 className="text-2xl font-lato font-bold text-gray-800 mt-8 mb-4">Welcome Back!</h2>
//                     <p className="text-gray-600 font-lato mb-6">Please login to your account</p>

//                     <form className="w-full mt-4 max-w-sm space-y-4">
//                         <div>
//                             <input
//                                 id="email"
//                                 type="email"
//                                 placeholder="Email address"
//                                 className="w-full p-3 border font-lato border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                             />
//                         </div>
//                         <div>
//                             <input
//                                 id="password"
//                                 type="password"
//                                 placeholder="Password"
//                                 className="w-full p-3  font-lato border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                             />
//                         </div>
//                         <div className="text-right w-full">
//                             <a href="#" className="text-sm font-lato text-orange-500 hover:underline">Forgot password?</a>
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full bg-orange-500 text-white font-lato font-black p-3 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
//                         >
//                             Login
//                         </button>
//                     </form>

//                     <div className="flex w-auto items-center my-6">
//                         <span className="border-b w-20 border-gray-300 "></span>
//                         <span className="px-4 w-auto text-gray-500">Or Login with</span>
//                         <span className="border-b w-20 border-gray-300 "></span>
//                     </div>

//                     <div className="flex space-x-4">
//                         <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200">
//                             <i className="fab fa-google text-xl text-gray-500"></i>
//                         </button>
//                         <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200">
//                             <i className="fab fa-facebook text-xl text-gray-500"></i>
//                         </button>
//                     </div>

//                     <p className="text-sm text-gray-500 mt-8">
//                         Don’t have an account? <span onClick={toggleForm} className="text-orange-500 cursor-pointer hover:underline">Sign Up</span>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;












// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import backgroundImage from '../assets/background.png'; 
// import logo from '../assets/pratsRestro.png'; 
// import { motion } from 'framer-motion'; // Import Framer Motion
// import restroImage from '../assets/restro1.png';
// import { FaGoogle, FaFacebook } from 'react-icons/fa';


// const Login = () => {
//     const [isLogin, setIsLogin] = useState(true);
//     const navigate = useNavigate();

//     const toggleForm = () => {
//         setIsLogin(!isLogin);
//         navigate('/signup');
//     };

//     return (
//         <div className="flex h-screen items-center justify-center bg-gray-100 p-4"
//             style={{
//                 backgroundImage: `url(${backgroundImage})`,
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

//                 {/* Login Form */}
//                 <motion.div
//                     className="w-full md:w-1/2 p-8 flex flex-col items-center"
//                     initial={{ opacity: 0, x: -100 }} // Initial state
//                     animate={{ opacity: 1, x: 0 }} // Animate to this state
//                     exit={{ opacity: 0, x: 100 }} // Exit state
//                     transition={{ duration: 0.5 }} // Transition duration
//                 >
//                     <img src={logo} alt="Logo" className="w-72 mt-16 mb-4" />
//                     <h2 className="text-2xl font-lato font-bold text-gray-800 mt-8 mb-4">Welcome Back!</h2>
//                     <p className="text-gray-600 font-lato mb-6">Please login to your account</p>

//                     <form className="w-full mt-4 max-w-sm space-y-4">
//                         <div>
//                             <input
//                                 id="email"
//                                 type="email"
//                                 placeholder="Email address"
//                                 className="w-full p-3 border font-lato border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                             />
//                         </div>
//                         <div>
//                             <input
//                                 id="password"
//                                 type="password"
//                                 placeholder="Password"
//                                 className="w-full p-3 font-lato border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                             />
//                         </div>
//                         <div className="text-right w-full">
//                             <a href="#" className="text-sm font-lato text-orange-500 hover:underline">Forgot password?</a>
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full bg-orange-500 text-white font-lato font-black p-3 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
//                         >
//                             Login
//                         </button>
//                     </form>

//                     <div className="flex w-auto items-center my-6">
//                         <span className="border-b w-20 border-gray-300"></span>
//                         <span className="px-4 w-auto text-gray-500">Or Login with</span>
//                         <span className="border-b w-20 border-gray-300"></span>
//                     </div>

//                     <div className="flex space-x-4">
//                         <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200">
//                         <FaGoogle className="text-xl text-gray-800" />
//                         </button>
//                         <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200">
//                         <FaFacebook className="text-xl text-gray-800" />
//                         </button>
//                     </div>

//                     <p className="text-sm text-gray-500 mt-8">
//                         Don’t have an account? <button onClick={toggleForm} className="text-orange-500 font-lato font-bold">Sign up</button>
//                     </p>
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default Login;












import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/slices/authslice'; // Import loginUser thunk
import backgroundImage from '../assets/background.png';
import logo from '../assets/pratsRestro.png';
import { motion } from 'framer-motion';
import restroImage from '../assets/restro1.png';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);

    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await dispatch(loginUser({ email, password }));
        if (loginUser.fulfilled.match(result)) {
            navigate('/dashboard'); // Redirect on successful login
        }
    };

    const toggleForm = () => {
        navigate('/signup');
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100 p-4"
            style={{
                backgroundImage: `url(${backgroundImage})`,
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
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={logo} alt="Logo" className="w-72 mt-16 mb-4" />
                    <h2 className="text-2xl font-lato font-bold text-gray-800 mt-8 mb-4">Welcome Back!</h2>
                    <p className="text-gray-600 font-lato mb-6">Please login to your account</p>

                    <form onSubmit={handleLogin} className="w-full mt-4 max-w-sm space-y-4">
                        <div>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border font-lato border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        <div>
                            <input
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 font-lato border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <div className="text-right w-full">
                            <a href="#" className="text-sm font-lato text-orange-500 hover:underline">Forgot password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white font-lato font-black p-3 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    <div className="flex w-auto items-center my-6">
                        <span className="border-b w-20 border-gray-300"></span>
                        <span className="px-4 w-auto text-gray-500">Or Login with</span>
                        <span className="border-b w-20 border-gray-300"></span>
                    </div>

                    <div className="flex space-x-4">
                        <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200">
                            <FaGoogle className="text-xl text-gray-800" />
                        </button>
                        <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200">
                            <FaFacebook className="text-xl text-gray-800" />
                        </button>
                    </div>

                    <p className="text-sm text-gray-500 mt-8">
                        Don’t have an account? <button onClick={toggleForm} className="text-orange-500 font-lato font-bold">Sign up</button>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;