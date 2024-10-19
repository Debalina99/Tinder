import axios from 'axios';

const url = 'http://localhost:3000';

const signup = async (userdata) => {
    const response = await axios.post(`${url}/signup`, userdata, {
        headers: {
            'Content-Type': 'application/json',  // Make sure the content type is JSON
        }
    });
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
    }
    return response.data;
};


const login = async (userdata) => {
    const response = await axios.post(`${url}/login`, userdata);
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        // localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem('token');
}

const viewProfile = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error("Token is missing! Please login.");
    }

    const response = await axios.post(`${url}/profile/view`, {}, {
        headers: {
            Authorization: `Bearer ${token}`, // Set token in Authorization header
        },
    });
    return response.data;
};

const editProfile = async (updatedData) => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error("Token is missing! Please login.");
    }
    try {
        const response = await axios.patch(`${url}/profile/edit`, updatedData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error:", error.response?.data?.message || error.message);
        throw new Error("Failed to update profile!")
    }
}

export { signup, login, logout, viewProfile, editProfile };