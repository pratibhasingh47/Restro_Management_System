// import React from 'react'

// const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login






import React  , {useState} from 'react';
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
        <div
            className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-purple-500"
            style={{
                backgroundImage: `url(${backgroundImage})`, // Add your background image URL
                backgroundSize: 'cover',
            }}
        >
            <div className="flex w-[900px] bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Login Form */}
                <div className="w-1/2 p-8">
                    <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>
                    <div className="flex justify-center space-x-4 mb-6">
                        <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300">
                            <i className="fab fa-google"></i>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300">
                            <i className="fab fa-facebook-f"></i>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300">
                            <i className="fab fa-linkedin-in"></i>
                        </button>
                    </div>
                    <p className="text-center mb-4 text-gray-600">or use your email password</p>
                    <form className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
                        />
                        <div className="text-right text-sm text-purple-600 hover:underline">
                            <a href="#">Forget Your Password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700"
                        >
                            SIGN IN
                        </button>
                    </form>
                </div>

                {/* Welcome Section */}
                <div className="w-1/2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white flex flex-col justify-center items-center p-8">
                    <h2 className="text-3xl font-bold">Hello, Friend!</h2>
                    <p className="text-center mt-4 mb-8">
                        Register with your personal details to use all of the site features.
                    </p>
                    <button 
                        onClick={toggleForm}
                    className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-gray-100">
                        SIGN UP
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
