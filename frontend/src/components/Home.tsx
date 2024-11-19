import React from 'react';
import menuItems from './menu';
import Navbar from './Navbar';

const Home = () => {
    return (
        <>
        <Navbar/>
        <div className="flex flex-col items-center bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 w-full py-16 text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Welcome to Prat's Restro</h1>
                <p className="text-xl">Delicious food, quick delivery, and great service!</p>
            </div>

            {/* Menu Section */}
            <section className="w-full max-w-6xl mx-auto my-8">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Our Menu</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {menuItems.map((item) => (
                        <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-orange-500 font-bold">${item.price.toFixed(2)}</span>
                                    <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
                    </>
    );
};

export default Home;
