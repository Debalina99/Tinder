import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const Products = () => {
    return (
        <div className='h-screen bg-red-400'>
            <Navbar />
        
        <div className='flex flex-col items-center justify-center '>
            <p className='flex text-white items-center justify-center text-5xl font-bold' style={{fontStyle:"italic",marginTop:"10rem"}}>Subscription Tiers</p>
            <p className=' text-white items-center justify-center font-bold mt-6' style={{fontStyle:"italic"}}>Upgrade to Plus, Gold or Platinum for an enhanced Tinder experience.</p>
            <div className="flex mt-12 gap-9">
                <div className="bg-white text-gray-600 p-8 rounded shadow-md" style={{ width: "300px", height: "250px", cursor:"pointer" }}>
                    <div className="flex items-center">
                        <img src="https://cdn.iconscout.com/icon/free/png-512/free-tinder-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-logos-pack-icons-6297329.png?f=webp&w=256" className="h-12 w-12 mr-2" />
                        <Link to="/" className=" text-2xl font-bold">tinder Plus</Link>
                    </div>
                    <div className="flex flex-col p-6 items-center">
                        <ul style={{ listStyleType: "disc" }}>
                            <li>Unlimited Likes</li>
                            <li>Unlimited Rewinds</li>
                            <li>Passport To Any Location</li>
                            <li>Hide Advertisements</li>
                            <li>Go Incognito</li>
                        </ul>
                    </div>

                </div>
                <div className="bg-white text-gray-600 p-8 rounded shadow-md" style={{ width: "300px", height: "250px", cursor:"pointer" }}>
                    <div className="flex items-center">
                        <img src="https://cdn.iconscout.com/icon/free/png-512/free-tinder-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722659.png?f=webp&w=256" className="h-8 w-8 mr-2" />
                        <Link to="/" className=" text-2xl font-bold">tinder Gold</Link>
                    </div>
                    <div className="flex flex-col p-6 items-center">
                        <ul style={{ listStyleType: "disc" }}>
                            <li>See Who Likes You</li>
                            <li>New Top Picks every day</li>
                            <li>Weekly Super Likes</li>
                            <li>1 Free Boost a month</li>
                            <li>And everything you love from <b>Tinder Plus!</b></li>
                        </ul>
                    </div>
                </div>
                <div className="bg-white text-gray-600 p-8 rounded shadow-md" style={{ width: "300px", height: "250px", cursor:"pointer" }}>
                    <div className="flex items-center">
                        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/tinder-7521725-7197428.png?f=webp&w=256" className="h-9 w-9 mr-2" />
                        <Link to="/" className=" text-2xl font-bold">tinder Platinum</Link>
                    </div>
                    <div className="flex flex-col p-6 items-center">
                        <ul style={{ listStyleType: "disc" }}>
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
    )
}

export default Products;