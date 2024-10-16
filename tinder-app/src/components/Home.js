import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
const Home = () => {
    return (

        <div className="h-screen h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url("https://compote.slate.com/images/579937b9-999b-40ee-bb5f-1bcc0266eeb5.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1200")`,
            }}>
            <Navbar />

            <div className="relative flex flex-col items-center justify-center h-full text-white">
                <h1 className="text-8xl font-bold text-gray-800 ">Start Something epic.</h1>
                <Link to="/signup" className="bg-red-500 text-white px-5 py-2 my-2 rounded-full text-lg font-bold transition duration-300 hover:bg-pink-500" style={{ borderRadius: "20px", }}>
                    Create account

                </Link>
            </div>
        </div>
    )


}

export default Home;