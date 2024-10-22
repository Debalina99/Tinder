import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = async () => {
            try {
                await logout();
                console.log("Logout successful");
                navigate('/');  
            } catch (error) {
                console.error("Error during logout:", error);
            }
        };

        handleLogout();
    }, [navigate]);

    return (
        <div className="min-h-screen bg-gradient-to-r from-red-400 to-orange-300 flex items-center justify-center px-3">
            <div className="text-center">
                <p className="text-xl text-white font-semibold">Logging out...</p>
            </div>
        </div>
    );
}

export default Logout;
