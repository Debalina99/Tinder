import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const Welcome = () => {
    return (

        <div className='h-screen bg-red-400'>
            {/* <Navbar /> */}

            <div className='flex flex-col items-center justify-center '>
                <p className='flex text-white items-center justify-center text-5xl font-bold' style={{ fontStyle: "italic", marginTop: "6rem" }}>Welcome to Tinder</p>
                <div className="flex mt-8 ">
                    <div className="bg-white text-gray-600 p-5 rounded shadow-md" style={{ width: "450px", height: "540px"}}>
                        <div className="flex items-center justify-center ">
                            <img src="https://cdn.iconscout.com/icon/free/png-512/free-tinder-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-logos-pack-icons-6297329.png?f=webp&w=256" className="h-12 w-12" />
                            <Link to="/" className=" text-2xl font-bold text-3xl">tinder</Link>
                        </div>
                        <div className='text-center items-center justify-center font-bold '>
                            <p className='mb-3'>Please follow these house rules</p>
                        </div>
                        <div className='px-6 py-3'>
                            <p className='font-bold'>Be yourself</p>
                            <p className='text-gray-500'>Make sure your photos, age and bio are accurate to who you are.</p>
                        </div>
                        <div className='px-6 py-3'>
                            <p className='font-bold'>Stay Safe</p>
                            <p className='text-gray-500'>Don't be too quick to give out personal information. <Link to="/safety" style={{fontStyle:"italic",color:"blue"}}>Date Safety</Link></p>
                        </div>
                        <div className='px-6 py-3'>
                            <p className='font-bold'>Play it cool</p>
                            <p className='text-gray-500'>Respect others and treat them as you would like to be treated.</p>
                        </div>
                        <div className='px-6 py-3'>
                            <p className='font-bold'>Be proactive</p>
                            <p className='text-gray-500'>Always report bad behavior.</p>
                        </div>
                        <Link to="/login" className=" text-white px-3 py-2 my-2 rounded-full text-lg font-bold flex items-center justify-center" style={{ borderRadius: "20px",  backgroundImage: "linear-gradient(to right, #ff4458,#ff6036)"}}>
                            I agree
                        </Link>
                    </div>
                </div>
            </div>
        </div>
            )}



            export default Welcome;