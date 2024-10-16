import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const Products = () => {
    return (
        <div className='h-screen bg-red-400'>
            <Navbar />

            <div className='flex flex-col items-center justify-center '>
                <p className='flex text-white items-center justify-center text-3xl font-bold' style={{ fontStyle: "italic", marginTop: "2rem" }}>Dating Safety Tips</p>
                <div className="flex mt-8 h-screen">
                    <div className="bg-white text-gray-600 p-5 rounded shadow-md" style={{ width: "1200px", height: "540px" }}>
                        <div className="flex flex-col ">
                            <p className='text-gray-500 items-center'>Meeting new people is exciting, but you should always be cautious when interacting with someone you don’t know. Use your best judgment and put your safety first, whether you are exchanging initial messages or meeting in person. While you can’t control the actions of others, there are things you can do to help you stay safe during your Tinder experience.</p>
                            <div className='flex flex-col '>
                                <div className='my-1'>
                                    <p className='font-bold'>Online Safety</p>
                                    <ul  className='text-gray-500 ml-2'>
                                        <li>Never Send Money or Share Financial Information</li>
                                        <li>Protect Your Personal Information</li>
                                        <li>Stay on the Platform</li>
                                        <li>Be Wary of Long Distance and Overseas Relationships</li>
                                        <li>Report All Suspicious and Offensive Behavior</li>
                                        <li>Protect Your Account</li>
                                    </ul>
                                </div>

                                <div className='my-2'>
                                    <p className='font-bold'>Meeting in Person</p>
                                    <ul className='text-gray-500 ml-2'>
                                        <li>Don’t Be In A Rush</li>
                                        <li>Meet in Public and Stay in Public</li>
                                        <li>Tell Friends and Family About Your Plans</li>
                                        <li>Be in Control of Your Transportation</li>
                                        <li>Know Your Limits</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='my-2'>
                                <p className='font-bold'>Resources for Help, Support, or Advice</p>
                                <p className='text-gray-500 ml-2'>Remember — even if you follow these tips, no method of risk reduction is perfect. If you have a negative experience, please know that it is not your fault and help is available. Report any incidents to Tinder, and consider reaching out to one of the resources below. If you feel you are in immediate danger or need emergency assistance, call 911 (U.S. or Canada) or your local law enforcement agency.</p>
                            </div>

                        </div>
                        <div className="flex flex-col p-6 items-center">

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Products;