import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { MenuIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
            <nav className=" p-4 flex justify-between items-center">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center ml-8">
                        <img src="https://cdn.iconscout.com/icon/free/png-512/free-tinder-logo-icon-download-in-svg-png-gif-file-formats--social-media-communication-network-pack-logos-icons-3201567.png?f=webp&w=256"
                            className="h-12 w-12 mr-2" alt="tinder logo" />
                        <Link to="/" className="text-white text-4xl font-bold">tinder</Link>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <Link to="/products" className="text-white px-3 font-bold">Products</Link>
                        <Link to="/safety" className="text-white px-3 font-bold">Safety</Link>
                        <Link to="/support" className="text-white px-3 font-bold">Support</Link>
                        <Link to="/login" className="text-white px-3 font-bold">Login</Link>
                    </div>

                    <div className="flex md:hidden relative">
                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}>
                            <MenuIcon className="h-8 w-8 text-white cursor-pointer" />
                        </div>
                    </div>

                    {isHovered && (
                        <div className="absolute top-10 right-0 bg-gray-800 text-white rounded-lg p-4 flex flex-col space-y-2 z-10">
                            <Link to="/products" className="font-bold hover:text-gray-300">Products</Link>
                            <Link to="/safety" className="font-bold hover:text-gray-300">Safety</Link>
                            <Link to="/support" className="font-bold hover:text-gray-300">Support</Link>
                            <Link to="/login" className="font-bold hover:text-gray-300">Login</Link>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
