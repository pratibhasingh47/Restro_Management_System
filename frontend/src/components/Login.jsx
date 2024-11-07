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
import backgroundImage from '../assets/background.jpeg';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const toggleForm = () => {
        setIsLogin(!isLogin);
        navigate('/signup');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600 p-4"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Login Form */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Welcome Back</h2>
                    <div className="flex justify-center space-x-4 mb-8">
                        <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition duration-300">
                            <i className="fab fa-google text-xl"></i>
                        </button>
                        <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition duration-300">
                            <i className="fab fa-facebook-f text-xl"></i>
                        </button>
                        <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition duration-300">
                            <i className="fab fa-linkedin-in text-xl"></i>
                        </button>
                    </div>
                    <p className="text-center mb-6 text-gray-600">Or use your email to sign in</p>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition duration-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition duration-300"
                            />
                        </div>
                        <div className="text-right">
                            <a href="#" className="text-sm text-purple-600 hover:text-purple-800 transition duration-300">Forgot Password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-300"
                        >
                            Sign In
                        </button>
                    </form>
                </div>

                {/* Welcome Section */}
                <div className="hidden md:block w-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex flex-col justify-center items-center p-12">
                    <h2 className="text-4xl font-extrabold mb-6">Hello, Friend!</h2>
                    <p className="text-center text-lg mb-8">
                        Enter your personal details and start your journey with us today.
                    </p>
                    <button
                        onClick={toggleForm}
                        className="bg-transparent text-white px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-purple-600 transition duration-300"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;