import React from 'react';
import '../assets/loader.css'; 

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="loader"></div>
        </div>
    );
};

export default Loading;
