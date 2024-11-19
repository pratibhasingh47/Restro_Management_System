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
            <div
                className="flex flex-col items-center min-h-screen"
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-white/90 via-gray-100/80 to-white/90 w-full py-16 text-center rounded-b-3xl shadow-md backdrop-blur-md">
                    <h1 className="text-6xl font-bold mb-4 text-gray-800">Welcome to Prat's Restro</h1>
                    <p className="text-2xl text-gray-600">Delicious food, quick delivery, and great service!</p>
                    <button className="mt-6 px-8 py-3 bg-orange-500 text-white text-lg rounded-md hover:bg-orange-600 transition">
                        Explore Menu
                    </button>
                </div>

                {/* Menu Section */}
                <section className="w-full max-w-7xl mx-auto my-12">
                    <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Our Menu</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
                        {menuItems.map((item: MenuItem) => (
                            <div
                                key={item.id}
                                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-48 object-cover rounded-t-xl"
                                />
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-2 text-gray-800">{item.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                                    <div className="flex justify-between items-center">
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
            </div>
        </>
    );
};

export default Home;
