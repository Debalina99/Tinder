import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const Products = () => {
    return (
        <div className='h-min-screen bg-gradient-to-r from-red-400 to-orange-300 pb-5'>
            <Navbar />
            <div className='flex flex-col items-center justify-center'>
                <p className='flex text-white items-center justify-center text-4xl md:text-5xl font-bold italic mt-24'>
                    Subscription Tiers
                </p>
                <p className='text-white font-bold mt-6 italic text-center px-4 md:px-0'>
                    Upgrade to Plus, Gold or Platinum for an enhanced Tinder experience.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4">
                    <div className="bg-white text-gray-600 p-8 rounded shadow-md cursor-pointer max-w-xs mx-auto">
                        <div className="flex items-center">
                            <img src="https://cdn.iconscout.com/icon/free/png-512/free-tinder-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-logos-pack-icons-6297329.png?f=webp&w=256" className="h-12 w-12 mr-2" alt="Tinder Plus Logo" />
                            <Link to="/" className="text-xl md:text-2xl font-bold">Tinder Plus</Link>
                        </div>
                        <div className="flex flex-col p-6 items-start">
                            <ul className="list-disc pl-5">
                                <li>Unlimited Likes</li>
                                <li>Unlimited Rewinds</li>
                                <li>Passport To Any Location</li>
                                <li>Hide Advertisements</li>
                                <li>Go Incognito</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white text-gray-600 p-8 rounded shadow-md cursor-pointer max-w-xs mx-auto">
                        <div className="flex items-center">
                            <img src="https://cdn.iconscout.com/icon/free/png-512/free-tinder-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722659.png?f=webp&w=256" className="h-8 w-8 mr-2" alt="Tinder Gold Logo" />
                            <Link to="/" className="text-xl md:text-2xl font-bold">Tinder Gold</Link>
                        </div>
                        <div className="flex flex-col p-6 items-start">
                            <ul className="list-disc pl-5">
                                <li>See Who Likes You</li>
                                <li>New Top Picks every day</li>
                                <li>Weekly Super Likes</li>
                                <li>1 Free Boost a month</li>
                                <li>And everything you love from <b>Tinder Plus!</b></li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white text-gray-600 p-8 rounded shadow-md cursor-pointer max-w-xs mx-auto">
                        <div className="flex items-center">
                            <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/tinder-7521725-7197428.png?f=webp&w=256" className="h-9 w-9 mr-2" alt="Tinder Platinum Logo" />
                            <Link to="/" className="text-xl md:text-2xl font-bold">Tinder Platinum</Link>
                        </div>
                        <div className="flex flex-col p-6 items-start">
                            <ul className="list-disc pl-5">
                                <li>Unlimited Likes</li>
                                <li>Unlimited Rewinds</li>
                                <li>Passport To Any Location</li>
                                <li>Hide Advertisements</li>
                                <li>Go Incognito</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Products;