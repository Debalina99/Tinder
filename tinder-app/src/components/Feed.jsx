import React from 'react';
import { Link } from "react-router-dom";
const Feed=()=>{
    return(
        <div>
            <Link to="/profile/edit" className="text-gray-500 mx-1">Update profile</Link>
        </div>
    )
}

export default Feed;