import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="top-0 left-0 w-full p-4 flex justify-between items-center">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="https://cdn.iconscout.com/icon/free/png-512/free-tinder-logo-icon-download-in-svg-png-gif-file-formats--social-media-communication-network-pack-logos-icons-3201567.png?f=webp&w=256https://cdn.iconscout.com/icon/free/png-512/free-tinder-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-logos-pack-icons-6297329.png?f=webp&w=256https://cdn.iconscout.com/icon/free/png-512/free-tinder-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-logos-pack-icons-6297329.png?f=webp&w=256" className="h-10 w-10 mr-2" alt="tinder logo" />
                        <Link to="/" className="text-white text-2xl font-bold">tinder</Link>
                    </div>
                    <div>
                        <Link to="/products" className="text-white px-3 font-bold">Products</Link>
                        <Link to="/safety" className="text-white px-3 font-bold">Safety</Link>
                        <Link to="/support" className="text-white px-3 font-bold">Support</Link>
                        <Link to="/login" className="text-white px-3 font-bold">Login</Link>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;
