import React, { useState } from 'react';
import menuItems from './menu';
import Navbar from './Navbar';
import BackgroundImage from '../assets/home.webp';

// Define a type for menu items
interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

const Home: React.FC = () => {
    // State for tracking quantities
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

    // Handle increment and decrement of quantities
    const handleIncrement = (id: number) => {
        setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    };

    const handleDecrement = (id: number) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: Math.max((prev[id] || 0) - 1, 0), // Prevent negative quantities
        }));
    };

    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <div className="flex flex-col items-center">
                <div className="relative flex justify-center w-full h-screen mx-auto">
                    <img
                        src={BackgroundImage}
                        alt="Welcome"
                        className="w-[80%] h-[100%] object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-30 rounded-lg">
                        <h1 className="text-4xl font-bold text-gray-800">Welcome to Prat's Restro</h1>
                        <p className="text-lg text-gray-700 mt-2">
                            Delicious food, quick delivery, and great service!
                        </p>
                    </div>
                </div>
            </div>

            {/* Menu Section */}
            <section className="w-full max-w-7xl mx-auto my-12">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Our Menu</h2>
                {menuItems.map((category) => (
                    <div key={category.category} className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{category.category}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                            {category.items.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start hover:shadow-lg transition"
                                >
                                    {/* <img
                                        // src={item.image}
                                        alt={item.name}
                                        className="w-full h-40 object-cover rounded-lg mb-4"
                                    /> */}
                                    <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
                                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                                    <div className="flex justify-between items-center w-full mt-2">
                                        <span className="text-orange-500 font-bold text-lg">${item.price.toFixed(2)}</span>
                                        <div className="flex items-center space-x-2">
                                            <button
                                                onClick={() => handleDecrement(item.id)}
                                                className="px-3 py-1 bg-slate-200 font-bold text-black rounded-sm hover:bg-slate-400 transition"
                                            >
                                                -
                                            </button>
                                            <span className="text-gray-800 font-bold">
                                                {quantities[item.id] || 0}
                                            </span>
                                            <button
                                                onClick={() => handleIncrement(item.id)}
                                                className="px-3 py-1 bg-stone-200 font-bold text-black rounded-sm hover:bg-stone-400 transition"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};

export default Home;
