import React from 'react';
import '../assets/loader.css'; 

const Loading = () => {
    return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="loader w-16 h-16"></div>
            </div>
        );
    
};

export default Loading;
