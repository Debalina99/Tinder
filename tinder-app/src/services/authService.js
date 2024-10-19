import axios from 'axios';

const url = 'http://localhost:3000';

const signup = async (userdata) => {
    const response = await axios.post(`${url}/signup`, userdata, {
        headers: {
            'Content-Type': 'application/json',  // Make sure the content type is JSON
        }});
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
    }
    return response.data;
};


const login = async (userdata) => {
    const response = await axios.post(`${url}/login`, userdata);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem('token');
}

export { signup, login, logout };