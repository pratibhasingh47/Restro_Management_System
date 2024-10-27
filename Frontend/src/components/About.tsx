import React from 'react';
import birthday from '../assets/images/birthday.webp';
import reception from '../assets/images/reception.jpg';
import party from '../assets/images/party.jpg';
import pool from '../assets/images/poolParty.jpg';

const About: React.FC = () => {
    return (
        <div className="container w-screen ">


            <div className="text-center bg-black text-white  flex flex-col items-center py-20 w-screen justify-center mb-8">
                <h1 className="text-4xl font-bold font-lato mb-4">About Prat's Restaurant</h1>
                <p className="text-lg max-w-5xl text-justify font-lato">
                    Welcome to Prat's Restaurant, where culinary excellence meets a warm, inviting atmosphere. At Prat's, we believe in creating unforgettable dining experiences that tantalize your taste buds and nourish your soul. Our chefs are dedicated to crafting exquisite dishes using the freshest, locally sourced ingredients, ensuring that every bite is a celebration of flavor and tradition. Whether you're here for a casual meal, a family gathering, or a special occasion, we strive to make every moment at Prat's Restaurant a cherished memory. Join us and embark on a gastronomic journey that promises joy, satisfaction, and a touch of magic in every dish.
                </p> 
            </div>


            <div className=" flex items-center justify-center flex-col w-screen py-8 px-36 gap-16">


                <div className="flex flex-col md:flex-row items-center justify-center w-3/4 md:space-x-8">
                    <div className="md:w-[75%] order-2 md:order-1">
                        <h2 className="text-4xl font-semibold mb-4" style={{ fontFamily: 'Dancing Script, Lato' }}>Reception</h2>
                        <p className="text-lg  font-lato leading-relaxed">
                            Celebrate your special moments with elegance and style at Prat's Restaurant's reception facility. Our beautifully designed reception area is perfect for weddings, anniversaries, and other significant events, offering a sophisticated ambiance and impeccable service.
                        </p>
                    </div>
                    <div className="md:w-[25%] flex  order-1 md:order-2">
                        <img src={reception} alt="Reception" className="w-[100%] rounded-lg shadow-lg" />
                    </div>
                </div>


                <div className="flex flex-col md:flex-row items-center w-3/4 md:space-x-8">
                    <div className="md:w-[25%]">
                        <img src={party} alt="Party Celebration" className="w-[100%] flex rounded-lg shadow-lg" />
                    </div>
                    <div className="md:w-[75%]">
                        <h2 className="text-4xl font-semibold mb-4" style={{ fontFamily: 'Dancing Script, Lato' }}>Party Celebration</h2>
                        <p className="text-lg font-lato leading-relaxed">
                            Make your party unforgettable at Prat's Restaurant. Our dedicated party celebration space is ideal for birthdays, corporate events, and social gatherings, providing a lively atmosphere and top-notch amenities to ensure a fantastic experience for all your guests.
                        </p>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row items-center w-3/4 md:space-x-8">
                    <div className="md:w-[75%] order-2 md:order-1">
                        <h2 className="text-4xl font-semibold mb-4" style={{ fontFamily: 'Dancing Script, Lato' }}>Functions & Small Gathering</h2>
                        <p className="text-lg font-lato leading-relaxed">
                            Host your functions with ease and sophistication at Prat's Restaurant. Our function space is versatile and well-equipped to accommodate a variety of events, from formal dinners to casual get-togethers, ensuring a seamless and enjoyable experience for everyone.
                        </p>
                    </div>
                    <div className="md:w-[25%] flex order-1 md:order-2">
                        <img src={birthday} alt="Function" className="w-auto rounded-lg shadow-lg" />
                    </div>
                </div>


                <div className="flex flex-col md:flex-row items-center w-3/4 md:space-x-8">
                    <div className="md:w-[25%] flex">
                        <img src={pool} alt="Pool Party" className="w-[100%] rounded-lg shadow-lg" />
                    </div>
                    <div className="md:w-[75%]">
                        <h2 className="text-4xl font-semibold mb-4" style={{ fontFamily: 'Dancing Script, Lato' }}>Pool Party</h2>
                        <p className="text-lg font-lato leading-relaxed">
                            Dive into fun at Prat's Restaurant's pool party facility. Perfect for summer gatherings and celebrations, our pool area offers a refreshing escape with delightful food and drinks, creating the ideal setting for a memorable poolside party.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;