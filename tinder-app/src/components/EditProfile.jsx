import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { editProfile, viewProfile } from '../services/authService';

const EditProfile = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [profileData, setProfileData] = useState({
        name: '', email: '', age: '', gender: '', photoUrl: '', about: '', interests: []
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await viewProfile();
                setProfileData(data);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch profile data!")
            }
        }
        fetchProfile();
    }, [])
    const submitHandler = async (e) => {
        console.log("Profile Data being sent:", profileData);
        e.preventDefault();
        try {
            const updatedProfile = { ...profileData };
            if (selectedFile) {
                const formData = new FormData();
                formData.append('file', selectedFile);
                // upload file logic here
              }
            await editProfile(updatedProfile);
            setSuccess("Profile updated successfully!");
            navigate("/feed");
        } catch (err) {
            console.error(err);
            setError("Failed to update profile!")
        }

    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value })
    }
    
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-red-400">
            <p className='flex text-white items-center justify-center text-3xl font-bold' style={{ fontStyle: "italic", marginTop: "2rem" }}>Edit your profile</p>

            <form onSubmit={submitHandler} className="bg-white p-8 rounded shadow-md" style={{ width: "800px", height: "530px", marginTop: "2rem" }}>
                {error && <p className="text-red-400 text-center">{error}</p>}
                <div className='flex justify-center'>
                    <div className='flex flex-col items-center justify-center' style={{ float: 'right' }}>
                        <div className='flex mt-2 px-5'>
                            <label>Name: </label>
                            <input type="text" name="name" placeholder="Name" value={profileData.name || ''} onChange={handleInputChange} className='block w-full p-2 border rounded mb-4' />
                        </div>
                        <div className='flex mt-2 px-5'>
                            <label>Email: </label>
                            <input type="email" name="email" placeholder="Email" value={profileData.email || ''} onChange={handleInputChange} className='block w-full p-2 border rounded mb-4' />

                        </div>
                        <div className='flex mt-2 px-5'>
                            <label>Age: </label>
                            <input type="age" name="age" placeholder="Age" value={profileData.age} onChange={handleInputChange} className='block w-full p-2 border rounded mb-4' />
                        </div>
                    </div>
                    <div className='flex flex-col  justify-center' style={{ float: 'right' }}>
                        <div className='flex mt-2 px-5'>
                            <label>Gender:</label>
                            <select name="gender" value={profileData.gender} onChange={handleInputChange} className='block  p-2 border rounded mb-4 '>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className='flex mt-2 px-5'>
                            <label>Bio: </label>
                            {/* <input type="about" name="about" placeholder="about" value={profileData.about} onChange={(e) => setPassword(e.target.value)} className='block w-full p-2 border rounded mb-4 ml-3' /> */}
                            <textarea name="about" value={profileData.about || ''} onChange={handleInputChange} placeholder="About" className="block w-full p-2 border mb-4"></textarea>
                        </div>
                    </div>
                </div >
                <div className='flex mt-2 px-5'>
                    <label>Upload Photo:</label>
                    <input type="file" name="photoUrl" placeholder="photoUrl" value={profileData.photoUrl} onChange={handleFileChange} className='block w-full p-2 border rounded mb-4 ml-3' />
                  
                </div>
                <div className='flex mt-2 px-5 gap-5 w-full' >
                    <label className='mr-3'>Interests:</label>
                    
                        <select name="interests" value={profileData.interests} onChange={handleInputChange} multiple className='block border rounded px-8' >
                            <option value="self-care">Self Care</option>
                            <option value="ludo">Ludo</option>
                            <option value="gym">Gym</option>
                            <option value="running">Running</option>
                            <option value="walking">Walking</option>
                            <option value="biryani">Biryani</option>
                        </select>


                </div>
                <button type="submit" className="w-full p-2 my-4 bg-red-600 text-white rounded-full text-lg font-bold transition duration-300 hover:bg-red-500">Update</button>

            </form>
        </div>
    )
}
export default EditProfile;