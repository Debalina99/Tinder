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
            await login(userData);
            navigate('/'); 
        } catch (error) {
            setError(error.response?.data?.message || 'Invalid email or password');
        }
    }
    return (
        <div className=" h-screen bg-red-400">

            <div className="flex items-center justify-center h-screen bg-red-400">
                <form onSubmit={submitHandler} className="bg-white p-8 rounded shadow-md" style={{ width: "400px", height: "400px" }}>
                    <h2 className="text-2xl mb-4 text-center">Login</h2>
                    {error && <p className="text-red-500">{error}</p>}
                    <input type="email" name="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} className='block w-full p-2 border rounded mb-4' />
                    <input type="password" name="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} className='block w-full p-2 border rounded mb-4' />
                    <button type="submit" className="w-full p-2 my-4 bg-red-600 text-white rounded-full text-lg font-bold transition duration-300 hover:bg-red-500">Login</button>
                    <div className="flex"><p>Dont have an account? </p><Link to="/signup" className="text-gray-500 mx-1"> Create account </Link></div>
                </form>
            </div>
        </div>
    )
}
export default Login;