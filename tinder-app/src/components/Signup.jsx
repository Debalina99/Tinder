import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { signup } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    
    const submitHandler = async (e) => {
        e.preventDefault();
        setError(null);


        try {
            const userdata = { name, email, password };
            const response= await signup(userdata);
            if(response.message==="User added successfully!"){
            navigate('/welcome');
            }
        } catch (err) {
            const errMessage=err.response?.data?.message || 'Error in signing up! ';
            setError(errMessage);

        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-400 to-orange-300 p-4">
    <form 
        onSubmit={submitHandler} 
        className="bg-white p-8 rounded shadow-md w-full max-w-sm" // width is responsive
    >
        {error && <p className="text-red-400">{error}</p>}
        <h2 className="text-2xl mb-4 text-center">Create Account</h2>
        <input type="text" name="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} className='block w-full p-2 border rounded mb-4'/>
        <input type="email" name="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} className='block w-full p-2 border rounded mb-4'/>
        <input type="password" name="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} className='block w-full p-2 border rounded mb-4'/>
        <button type="submit" className="w-full p-2 my-4 text-white rounded-full text-lg font-bold transition duration-300 bg-red-400 hover:bg-red-500">
            Sign Up
        </button>
        <div className="flex justify-center">
            <p>Already have an account?</p>
            <Link to="/login" className="text-gray-500 mx-1"> Login </Link>
        </div>
    </form>
</div>

    )
}
export default Signup;