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







import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import restaurantImage from '../assets/background.jpeg';

const Signup = () => {
    const [isLogin, setIsLogin] = useState(false); // Set to false to show signup initially
    const navigate = useNavigate();

    const toggleForm = () => {
        setIsLogin(!isLogin);
        navigate(isLogin ? '/signup' : '/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Promotional Section */}
                <div className="hidden md:flex flex-col justify-center items-start w-1/2 p-12 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                    <h2 className="text-3xl font-bold mb-4">Simplify Management with Our Dashboard</h2>
                    <p className="mb-8 text-lg">Streamline your restaurant's operations with our user-friendly management system.</p>
                    <img src={restaurantImage} alt="Restaurant Management" className="w-3/4 mt-8" />
                </div>

                {/* Signup Form */}
                <div className="w-full md:w-1/2 p-8 flex flex-col items-center">
                    <img src="/path/to/logo.png" alt="Logo" className="w-16 mb-4" /> {/* Logo */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{isLogin ? "Welcome Back" : "Create Account"}</h2>
                    <p className="text-gray-500 mb-6">{isLogin ? "Please login to your account" : "Create a new account to get started"}</p>

                    <form className="w-full max-w-sm space-y-4">
                        {!isLogin && (
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        )}
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        {!isLogin && (
                            <input
                                type="number"
                                placeholder="Mobile No."
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        )}
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            {isLogin ? "Login" : "Sign Up"}
                        </button>
                    </form>

                    <div className="flex items-center my-6">
                        <span className="border-b border-gray-300 w-full"></span>
                        <span className="px-4 text-gray-500">Or Sign Up with</span>
                        <span className="border-b border-gray-300 w-full"></span>
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
                        {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
                        <span onClick={toggleForm} className="text-orange-500 cursor-pointer hover:underline">
                            {isLogin ? "Sign Up" : "Login"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;

