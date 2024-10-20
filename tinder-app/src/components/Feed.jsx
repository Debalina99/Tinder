import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { fetchFeedUsers, fetchPendingRequests, fetchConnections, handleInterest, handleIgnore, handleAccept, handleReject } from '../services/feedService';
const Feed = () => {
    const [feedUsers, setFeedUsers] = useState([]);
    const [pendingRequests, setPendingRequests] = useState([]);
    const [connections, setConnections] = useState([]);
    const [error, setError] = useState(null);

    //fetch users
    useEffect(() => {
        const loadFeed = async () => {
            try {
                const users = await fetchFeedUsers();
                setFeedUsers(users);
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
            setFeedUsers(feedUsers.filter(user => user._id !== userId));

        } catch (err) {
            setError("Failed to express interest!");
            console.error(err);
        }
    }

    //user clicks "Ignored"
    const handleIgnoredClick = async (userId) => {
        try {
            await handleIgnore(userId);
            setFeedUsers(feedUsers.filter(user => user._id !== userId))
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
            <div className="flex justify-between items-center mb-6">
            <Link to="/profile/edit" className="text-pink-600 hover:text-pink-800 font-semibold underline">
                Update Profile
            </Link>
        </div>
            <div className="feed-container grid grid-cols-2 gap-6">
                {error && <p className="text-red-400 text-center">{error}</p>}
                <div className="left-section bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Suggested Users</h2>
                    {feedUsers.map(user => (
                        <div key={user._id} className="user-card bg-pink-100 shadow-md rounded-lg p-4 mb-4 flex flex-col items-center">
                            <img src={user.photoUrl} alt={`${user.name}'s profile`} className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-pink-500"/>
                            <p className="text-lg font-bold text-gray-800">{user.name}, {user.age}</p>
                            <p className="text-sm text-gray-600">{user.about}</p>
                            <div className="mt-4 space-x-2">
                            <button onClick={() => handleInterestedClick(user._id)} className="px-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600">Interested</button>
                            <button onClick={() => handleIgnoredClick(user._id)} className="px-4 py-2 bg-gray-400 text-white font-bold rounded-lg hover:bg-gray-500">Ignored</button>
                        </div>
                        </div>
                    ))}
                </div>

                <div className='right-section col-span-1'>
                    <div className='bg-white shadow-lg rounded-lg p-6 mb-6'>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pending Requests</h2>
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
                    <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Connections</h2>
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
    )
}

export default Feed;