
import React, { useState, useEffect } from 'react';
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
                setProfileData(data); // Initialize profile form with fetched data
            } catch (err) {
                setError("Failed to fetch profile data!");
            }
        };
        fetchProfile();
    }, []);

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("Profile Data being sent:", profileData);
        try {
            let updatedProfile = null;
    
            const fieldsToUpdate = {
                name: profileData.name,
                email: profileData.email,
                age: profileData.age,
                gender: profileData.gender,
                about: profileData.about,
                interests: profileData.interests,
                photoUrl:profileData.photoUrl,
            };
    
            if (selectedFile) {
                const formData = new FormData();
                formData.append('file', selectedFile);
    
                for (const key in fieldsToUpdate) {
                    if (fieldsToUpdate[key]) {
                        formData.append(key, fieldsToUpdate[key]);
                    }
                }
                updatedProfile = formData;
            } else {
                updatedProfile = fieldsToUpdate;
            }
    
            await editProfile(updatedProfile);
            setSuccess("Profile updated successfully!");
            navigate("/feed");
        } catch (err) {
            console.error(err);
            setError("Failed to update profile!");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

   
    const handleInterestsChange = (e) => {
        const { value, checked } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            interests: checked 
                ? [...prevData.interests, value] 
                : prevData.interests.filter((interest) => interest !== value)
        }));
    };

    return (
        <div className=" min-h-screen flex flex-col items-center justify-center  bg-gradient-to-r from-red-400 to-orange-300">
            <p className='flex text-white items-center justify-center text-3xl font-bold italic mt-8'>Edit your profile</p>
    
            <form onSubmit={submitHandler} className="bg-white p-6 md:p-8 rounded shadow-md w-full max-w-xl mt-6">
                {error && <p className="text-red-400 text-center">{error}</p>}
                {success && <p className="text-green-400 text-center">{success}</p>}
                
                <div className='flex flex-col md:flex-row md:gap-4 mt-3'>
                    <div className="flex flex-col">
                        <label className="mb-1">Name:</label>
                        <input type="text" name="name" value={profileData.name} onChange={handleInputChange} className="block w-full p-2 border rounded mb-4" />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1">Email:</label>
                        <input type="email" name="email" value={profileData.email} onChange={handleInputChange} className="block w-full p-2 border rounded mb-4" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:gap-4 mt-3'>
                    <div className="flex flex-col">
                        <label className="mb-1">Age:</label>
                        <input type="number" name="age" value={profileData.age} onChange={handleInputChange} className="block w-full p-2 border rounded mb-4" />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1">Gender:</label>
                        <select name="gender" value={profileData.gender} onChange={handleInputChange} className="block p-2 border rounded mb-4">
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Bio:</label>
                    <textarea name="about" value={profileData.about} onChange={handleInputChange} className="block w-full p-2 border rounded mb-4" rows="3"></textarea>
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Photo URL:</label>
                    <input type="text" name="photoUrl" value={profileData.photoUrl || ''} onChange={handleInputChange} className="block w-full p-2 border rounded mb-4" />
                </div>
    
                <label className="mb-1">Interests:</label>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    {["self-care", "ludo", "gym", "running", "walking", "biryani", "90's-kid", "coding", "tea", "coffee", "diy", "arts", "comedy", "cat-lover", "dog-lover", "movies"].map(interest => (
                        <label key={interest} className="flex items-center">
                            <input
                                type="checkbox"
                                value={interest}
                                checked={profileData.interests.includes(interest)}
                                onChange={handleInterestsChange}
                                className="mr-2"
                            />
                            {interest.charAt(0).toUpperCase() + interest.slice(1)}
                        </label>
                    ))}
                </div>
    
                <button type="submit" className="w-full p-2 my-5 bg-red-400 hover:bg-red-500 text-white rounded">Update Profile</button>
            </form>
        </div>
    );
    
};

export default EditProfile;
