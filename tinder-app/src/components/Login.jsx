import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const userData = { email, password };
            const response = await login(userData);
            // console.log("Login successful, response: ", response);
            navigate('/feed'); 
        } catch (error) {
            console.log("Error during login: ", error);
            setError(error.response?.data?.message || 'Invalid email or password');
        }
    }
    return (
        <div className="min-h-screen bg-gradient-to-r from-red-400 to-orange-300 flex items-center justify-center px-3">
            <form onSubmit={submitHandler} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-3xl mb-4 text-center md:text-4xl">Login</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <input type="email" name="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} className='block w-full p-3 border rounded mb-4 text-lg' autoComplete="off" autoCorrect="off" spellCheck="false"/>
                <input type="password" name="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} className='block w-full p-3 border rounded mb-4 text-lg' autoComplete="off" autoCorrect="off" spellCheck="false"/>
                <button type="submit" className="w-full p-3 my-4 text-white rounded-full text-lg font-bold transition duration-300 bg-red-400 hover:bg-red-500">Login</button>
                <div className="flex justify-center">
                    <p className="">Don't have an account? </p>
                    <Link to="/signup" className="text-red-500 mx-1 font-semibold">Create account</Link>
                </div>
            </form>
        </div>
    );
}
export default Login;