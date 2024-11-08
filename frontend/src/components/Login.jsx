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









import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/restro1.png'; // Use an image related to restaurant management
import logo from '../assets/pratsRestro.png'; // Use your own logo

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const toggleForm = () => {
        setIsLogin(!isLogin);
        navigate('/signup');
    };

    return (
        <div className="flex  h-screen items-center justify-center bg-gray-100 p-4">
            <div className="flex  h-[85%] w-[60%] bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Promotional Section */}
                <div className="hidden md:flex flex-col justify-center items-start h-[100%] w-1/2 p-12 bg-gradient-to-br from-orange-400 to-orange-700 text-white">
                    <h2 className="text-4xl font-lato font-bold mb-4 w-80">Simplify Management with Our Dashboard</h2>
                    <p className=" font-lato font-thin text-lg ">Register yourself with our user-friendly management system.</p>
                    <img src={backgroundImage} alt="Restaurant Management" className="w-4/5 " />
                </div>

                {/* Login Form */}
                <div className="w-full md:w-1/2 p-8 flex flex-col items-center">
                    <img src={logo} alt="Logo" className="w-72 mt-16 mb-4" /> {/* Logo */}
                    <h2 className="text-2xl font-lato font-bold text-gray-800 mt-8 mb-4">Welcome Back!</h2>
                    <p className="text-gray-600 font-lato mb-6">Please login to your account</p>

                    <form className="w-full mt-4 max-w-sm space-y-4">
                        <div>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email address"
                                className="w-full p-3 border font-lato border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        <div>
                            <input
                                id="password"
                                type="password"
                                placeholder="Password"
                                className="w-full p-3  font-lato border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        <div className="text-right w-full">
                            <a href="#" className="text-sm font-lato text-orange-500 hover:underline">Forgot password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white font-lato font-black p-3 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            Login
                        </button>
                    </form>

                    <div className="flex w-auto items-center my-6">
                        <span className="border-b w-20 border-gray-300 "></span>
                        <span className="px-4 w-auto text-gray-500">Or Login with</span>
                        <span className="border-b w-20 border-gray-300 "></span>
                    </div>

                    <div className="flex space-x-4">
                        <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200">
                            <i className="fab fa-google text-xl text-gray-500"></i>
                        </button>
                        <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200">
                            <i className="fab fa-facebook text-xl text-gray-500"></i>
                        </button>
                    </div>

                    <p className="text-sm text-gray-500 mt-8">
                        Don’t have an account? <span onClick={toggleForm} className="text-orange-500 cursor-pointer hover:underline">Sign Up</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
