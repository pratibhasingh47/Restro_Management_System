import React from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-screen  overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-30">
          <img
            src="https://foogo.eu/inspiration-and-ideas/wp-content/uploads/2018/08/Entrada-2-capa.jpg" // Replace with the correct image path or URL
            alt="Landing background"
            className="w-full h-5/6 bg-contain object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="relative -z-10 flex flex-col items-center justify-center h-full text-white  bg-opacity-40">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            Sky <span className="text-purple-400">is the limit</span>
          </h1>

          {/* Booking Button */}
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-xl font-medium transition">
            Booking Now
          </button>

          {/* Categories Section */}
          <div className="flex flex-wrap justify-center mt-10 z-40 space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="trip"
                className="text-purple-600 focus:ring-purple-500"
              />
              <span>One Way</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="trip"
                className="text-purple-600 focus:ring-purple-500"
              />
              <span>Round Trip</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="trip"
                className="text-purple-600 focus:ring-purple-500"
              />
              <span>Multi City</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="trip"
                className="text-purple-600 focus:ring-purple-500"
              />
              <span>Random Trip</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
