import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
const Home = () => {
    return (
        <div className="h-screen bg-cover bg-center w-full"
            style={{
                backgroundImage: `url("https://img.freepik.com/premium-vector/social-media-dating-date-app-video-mobile-chatting-technology-young-couple-guy-girl-looking-love-internet-utter-vector-concept_53562-19149.jpg?w=1380")`,
            }}>
            <Navbar />

            <div className=" relative flex flex-col items-center justify-center h-full text-white">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-500 text-center">
                    Start Something Epic.
                </h1>
                <Link to="/signup" className="bg-gradient-to-r from-red-400 to-orange-300 text-white px-4 py-2 my-4 rounded-full text-lg font-bold transition duration-300" style={{ borderRadius: "20px" }}>
                    Create Account
                </Link>
            </div>
        </div>
    )
}

export default Home;