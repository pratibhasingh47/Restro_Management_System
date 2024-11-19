import React from 'react';
import menuItems from './menu';
import Navbar from './Navbar';
import BackgroundImage from '../assets/home.webp'; // Add your background image path here

// Define a type for menu items
interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            {/* Hero Section with Image and Welcome Text */}
            <div className="flex flex-col items-center ">
                <div className="relative flex justify-center w-full h-screen mx-auto">
                    <img
                        src={BackgroundImage}
                        alt="Welcome" 
                        className="w-[80%] h-[100%]  object-cover "
                    />
                    {/* White transparent overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-40 rounded-lg">
                        <h1 className="text-4xl font-bold  text-gray-800">Welcome to Prat's Restro</h1>
                        <p className="text-lg text-gray-700 mt-2">Delicious food, quick delivery, and great service!</p>
                    </div>
                </div>
            </div>

            {/* Menu Section */}
            <section className="w-full max-w-7xl mx-auto my-12">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Our Menu</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
                    {menuItems.map((item: MenuItem) => (
                        <div
                            key={item.id}
                            className="relative bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center p-6 bg-black bg-opacity-50 rounded-xl">
                                <h3 className="text-2xl font-semibold mb-2 text-white">{item.name}</h3>
                                <p className="text-white text-sm mb-4">{item.description}</p>
                                <div className="flex justify-between items-center w-full">
                                    <span className="text-orange-500 font-bold text-lg">
                                        ${item.price.toFixed(2)}
                                    </span>
                                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;