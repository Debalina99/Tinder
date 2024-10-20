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
        <div>
            <Link to="/profile/edit" className="text-gray-500 mx-1">Update profile</Link>
            <div className='feed-container flex '>
                {error && <p className="text-red-400 text-center">{error}</p>}

                <div className='left-section'>
                    <h2>Suggested Users</h2>
                    {feedUsers.map(user => (
                        <div key={user._id} className="user-card">
                            <img src={user.photoUrl} alt={`${user.name}'s profile`} />
                            <p>{user.name}, {user.age}</p>
                            <p>{user.about}</p>
                            <button onClick={() => handleInterestedClick(user._id)}>Interested</button>
                            <button onClick={() => handleIgnoredClick(user._id)}>Ignored</button>
                        </div>
                    ))}
                </div>

                <div className='right-section'>
                    <div className='flex flex-col'>
                        <h2>Pending Requests</h2>
                        {pendingRequests.map(request => (
                            <div key={request._id} className="request-card">
                                <p>{request.fromUserId.name}</p>
                                <button onClick={() => handleAcceptClick(request._id)}>Accept</button>
                                <button onClick={() => handleRejectClick(request._id)}>Reject</button>
                            </div>
                        ))}
                    </div>
                    <h2>Your Connections</h2>
                    {connections.map(connection => (
                        <div key={connection._id} className="connection-card">
                            <p>{connection.name}, {connection.age}</p>
                            <p>{connection.about}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Feed;