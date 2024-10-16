import React,{useState} from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
const Login=()=>{
    const [data,setData]=useState({
        email:"",password:"",
    });

    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
    }
        return(
            <div className=" h-screen bg-red-400">
                
            <div className="flex items-center justify-center h-screen bg-red-400">
                <form onSubmit={submitHandler} className="bg-white p-8 rounded shadow-md" style={{ width: "400px", height: "400px" }}>
                    <h2 className="text-2xl mb-4 text-center">Login</h2>
                    
                    <input type="email" name="email" placeholder="Enter email" value={data.email} onChange={changeHandler} className='block w-full p-2 border rounded mb-4' />
                    <input type="password" name="password" placeholder="Enter password" value={data.password} onChange={changeHandler} className='block w-full p-2 border rounded mb-4' />
                    <button type="submit" className="w-full p-2 my-4 bg-red-600 text-white rounded-full text-lg font-bold transition duration-300 hover:bg-red-500">Sign Up</button>
                    <div className="flex"><p>Dont have an account? </p><Link to="/signup" className="text-gray-500 mx-1"> Create account </Link></div>
                </form>
            </div>
            </div>
        )
}
export default Login;