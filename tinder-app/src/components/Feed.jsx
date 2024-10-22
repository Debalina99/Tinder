import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { HeartIcon, XIcon } from '@heroicons/react/solid'
import { fetchFeedUsers, fetchPendingRequests, fetchConnections, handleInterest, handleIgnore, handleAccept, handleReject } from '../services/feedService';

const Feed = () => {
    const [feedUsers, setFeedUsers] = useState([]);
    const [pendingRequests, setPendingRequests] = useState([]);
    const [connections, setConnections] = useState([]);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    //fetch users
    useEffect(() => {
        const loadFeed = async () => {
            try {
                const users = await fetchFeedUsers();
                setFeedUsers(users);
                setCurrentIndex(0);
            } catch (err) {
                setError("Failed to load users!");
                console.error(err);
            }
        }
        loadFeed();
    }, []);

    //fetch pending requests
    useEffect(() => {
        const loadPendingRequests = async () => {
            try {
                const requests = await fetchPendingRequests();
                setPendingRequests(requests);
            } catch (err) {
                setError("Failed to pending requests!");
                console.error(err);
            }
        }
        loadPendingRequests();
    }, []);

    //fetch connections
    useEffect(() => {
        const loadConnections = async () => {
            try {
                const connections = await fetchConnections();
                setConnections(connections);
            } catch (err) {
                setError("Failed to pending requests!");
                console.error(err);
            }
        }
        loadConnections();
    }, []);

    //user clicks "Interested"
    const handleInterestedClick = async (userId) => {
        try {
            await handleInterest(userId);
            const updatedFeedUsers = feedUsers.filter(user => user._id !== userId);
            setFeedUsers(updatedFeedUsers);
            if (currentIndex >= updatedFeedUsers.length) {
                setCurrentIndex(updatedFeedUsers.length - 1);
            }
        } catch (err) {
            setError("Failed to express interest!");
            console.error(err);
        }
    }

    //user clicks "Ignored"
    const handleIgnoredClick = async (userId) => {
        try {
            await handleIgnore(userId);
            const updatedFeedUsers = feedUsers.filter(user => user._id !== userId);
            setFeedUsers(updatedFeedUsers);
            if (currentIndex >= updatedFeedUsers.length) {
                setCurrentIndex(updatedFeedUsers.length - 1);
            }
        } catch (err) {
            setError("Failed to express interest!");
            console.error(err);
        }
    }
    // accepting connection request
    const handleAcceptClick = async (requestId) => {
        try {
            await handleAccept(requestId);
            setPendingRequests(pendingRequests.filter(request => request._id !== requestId));
        } catch (err) {
            setError("Failed to accept request!");
            console.error(err);
        }
    }
    // rejecting connection request
    const handleRejectClick = async (requestId) => {
        try {
            await handleReject(requestId);
            setPendingRequests(pendingRequests.filter(request => request._id !== requestId));
        } catch (err) {
            setError("Failed to reject request!");
            console.error(err);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-red-400 to-orange-300 p-6">
            <div className="absolute top-4 right-4 flex gap-4 items-center">
                
                <div className="relative group">
                    <Link to="/profile/edit" className="text-gray-500 hover:text-pink-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 h-8 p-1 bg-pink-200 rounded-full hover:bg-pink-300 transition duration-200 ease-in-out"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 5.487l1.65 1.65-9.62 9.62-3.052.768a.75.75 0 01-.918-.918l.768-3.052 9.62-9.62z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.125 3.375a2.121 2.121 0 113 3l-1.35 1.35a.25.25 0 01-.353 0l-1.65-1.65a.25.25 0 010-.353l1.35-1.35z"
                            />
                        </svg>
                    </Link>
                    <div className="absolute -left-6 bg-gray-400 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition duration-300 px-2 py-1">
                        Update Profile
                    </div>
                </div>

                <div className="relative group">
                    <Link to="/logout" className="text-gray-500 hover:text-pink-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 h-8 p-1 bg-pink-200 rounded-full hover:bg-pink-300 transition duration-200 ease-in-out"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v13.5a2.25 2.25 0 002.25 2.25h6.75a2.25 2.25 0 002.25-2.25V15M10.5 12h8.25m0 0l-3-3m3 3l-3 3"
                            />
                        </svg>
                    </Link>
                    <div className="absolute -left-6 bg-gray-400 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition duration-300 px-1 py-1">
                        Log out
                    </div>
                </div>
            </div>

            <div className="feed-container grid grid-cols-1 sm:grid-cols-2 gap-6 mt-7">
                {error && <p className="text-red-400 text-center">{error}</p>}
                <div className="left-section bg-white shadow-lg rounded-lg px-4 py-5 sm:px-9 sm:py-5">
                    {feedUsers.length > 0 && currentIndex < feedUsers.length ? (
                        <div className="flex flex-col sm:flex-row items-start gap-8 justify-center">
                            {/* User Card */}
                            <div key={feedUsers[currentIndex]._id} className="user-card bg-pink-100 shadow-md rounded-lg p-4 mb-2 flex flex-col items-center h-96 w-full md:w-64 transition transform duration-500 ease-in-out">
                                <img src={feedUsers[currentIndex].photoUrl} alt={`${feedUsers[currentIndex].name}'s profile`} className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full mb-4 border-4 border-pink-500" />
                                <p className="text-lg font-bold text-gray-800">{feedUsers[currentIndex].name}, {feedUsers[currentIndex].age}</p>
                                <p className="text-sm text-gray-600 text-center">{feedUsers[currentIndex].about}</p>
                                <div className="mt-6 space-x-3 flex">
                                    <button onClick={() => handleInterestedClick(feedUsers[currentIndex]._id)} className="px-4 py-2 bg-red-400 text-white font-bold rounded-lg hover:bg-red-500 flex items-center">
                                        <HeartIcon className="w-5 h-5" />
                                        {/* Interested */}
                                    </button>
                                    <button onClick={() => handleIgnoredClick(feedUsers[currentIndex]._id)} className="px-4 py-2 bg-gray-400 text-white font-bold rounded-lg hover:bg-gray-500 flex items-center">
                                        <XIcon className="w-5 h-5" />
                                        {/* Ignored */}
                                    </button>
                                </div>
                            </div>

                            {/* Gender and Interests Section */}
                            <div className="details-section text-left flex-1">
                                <p className="text-lg font-semibold text-gray-800">Gender: {feedUsers[currentIndex].gender}</p>
                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Interests:</h3>
                                    <ul className="list-disc ml-4 text-sm text-gray-600">
                                        {feedUsers[currentIndex].interests.map(interest => (
                                            <li key={interest}>{interest}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-lg text-gray-600">No more users to show</p>
                    )}
                </div>


                <div className='right-section col-span-1'>
                    <div className='bg-white shadow-lg rounded-lg p-6 mb-6'>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pending Requests</h2>
                        <div className="max-h-72 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                            {pendingRequests.map(request => (
                                <div key={request._id} className="request-card bg-purple-100 shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
                                    <p className="text-lg font-bold text-gray-800">{request.fromUserId.name}</p>
                                    <div className="space-x-2">
                                        <button onClick={() => handleAcceptClick(request._id)} className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">Accept</button>
                                        <button onClick={() => handleRejectClick(request._id)} className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600">Reject</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* </div> */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Connections</h2>
                        <div className="max-h-72 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                            {connections.map(connection => (
                                <div key={connection._id} className="connection-card bg-blue-100 shadow-md rounded-lg p-4 mb-4">
                                    <p className="text-lg font-bold text-gray-800">{connection.name}, {connection.age}</p>
                                    <p className="text-sm text-gray-600">{connection.about}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed;