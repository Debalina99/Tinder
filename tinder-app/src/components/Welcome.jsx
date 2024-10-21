import React from 'react';
import { Link } from "react-router-dom";


const Welcome = () => {
    return (
        <div className='min-h-screen bg-gradient-to-r from-red-400 to-orange-300 flex items-center justify-center px-3'>

            <div className='flex flex-col items-center justify-center'>
                <p className='flex text-white items-center justify-center text-3xl sm:text-4xl md:text-5xl font-bold mt-12 md:mt-20' style={{ fontStyle: 'italic' }}>
                    Welcome to Tinder
                </p>
                <div className="flex mt-6 sm:mt-8">
                    <div className="bg-white text-gray-600 p-5 rounded shadow-md max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                        <div className="flex items-center justify-center mb-4">
                            <img
                                src="https://cdn.iconscout.com/icon/free/png-512/free-tinder-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-logos-pack-icons-6297329.png?f=webp&w=256"
                                className="h-10 w-10 md:h-12 md:w-12"
                                alt="Tinder logo"
                            />
                            <Link to="/" className="text-2xl font-bold ml-2 text-2xl sm:text-3xl">
                                tinder
                            </Link>
                        </div>

                        <div className='text-center font-bold mb-4'>
                            <p className='mb-2'>Please follow these house rules</p>
                        </div>

                        <div className='px-3 sm:px-6 py-2 sm:py-3'>
                            <p className='font-bold'>Be yourself</p>
                            <p className='text-gray-500'>Make sure your photos, age and bio are accurate to who you are.</p>
                        </div>

                        <div className='px-3 sm:px-6 py-2 sm:py-3'>
                            <p className='font-bold'>Stay Safe</p>
                            <p className='text-gray-500'>
                                Don't be too quick to give out personal information.{' '}
                                <Link to="/safety" style={{ fontStyle: 'italic', color: 'blue' }}>
                                    Date Safety
                                </Link>
                            </p>
                        </div>

                        <div className='px-3 sm:px-6 py-2 sm:py-3'>
                            <p className='font-bold'>Play it cool</p>
                            <p className='text-gray-500'>Respect others and treat them as you would like to be treated.</p>
                        </div>

                        <div className='px-3 sm:px-6 py-2 sm:py-3'>
                            <p className='font-bold'>Be proactive</p>
                            <p className='text-gray-500'>Always report bad behavior.</p>
                        </div>

                        <Link
                            to="/login"
                            className="text-white px-3 py-2 mt-4 rounded-full text-lg font-bold flex items-center justify-center"
                            style={{
                                borderRadius: '20px',
                                backgroundImage: 'linear-gradient(to right, #ff4458,#ff6036)',
                            }}>
                            I agree
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

}



export default Welcome;