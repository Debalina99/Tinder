
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
        <div className="flex flex-col items-center justify-center h-screen bg-red-400">
            <p className='flex text-white items-center justify-center text-3xl font-bold' style={{ fontStyle: "italic", marginTop: "2rem" }}>Edit your profile</p>

            <form onSubmit={submitHandler} className="bg-white p-8 rounded shadow-md" style={{ width: "700px", height: "450px", marginTop: "2rem" }}>
                {error && <p className="text-red-400 text-center">{error}</p>}
                {success && <p className="text-green-400 text-center">{success}</p>}
                
                <div className='flex gap-3 mt-3' >
                    <label>Name:</label>
                    <input type="text" name="name" value={profileData.name} onChange={handleInputChange} className="block w-full p-2 border rounded mb-4" />

                    <label>Email:</label>
                    <input type="email" name="email" value={profileData.email} onChange={handleInputChange} className="block w-full p-2 border rounded mb-4" />
                </div>
                <div className='flex gap-3 mt-3' >
                    <label>Age:</label>
                    <input type="number" name="age" value={profileData.age} onChange={handleInputChange} className="block w-full p-2 border rounded mb-4" />

                    <label>Gender:</label>
                    <select name="gender" value={profileData.gender} onChange={handleInputChange} className="block p-2 border rounded mb-4">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                
                <label>Bio:</label>
                <textarea name="about" value={profileData.about} onChange={handleInputChange} className="block w-full p-2 border mb-4"></textarea>
                </div>
                <label>Photo URL:</label>
                <input type="text" name="photoUrl" value={profileData.photoUrl || ''} onChange={handleInputChange} className="block w-full p-2 border rounded mb-4" />

                <label>Interests:</label>
                <div className="flex justify-center gap-3">
                        <label>
                            <input
                                type="checkbox"
                                value="self-care"
                                checked={profileData.interests.includes("self-care")}
                                onChange={handleInterestsChange}
                            />
                            Self-care
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="ludo"
                                checked={profileData.interests.includes("ludo")}
                                onChange={handleInterestsChange}
                            />
                            Ludo
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="gym"
                                checked={profileData.interests.includes("gym")}
                                onChange={handleInterestsChange}
                            />
                            Gym
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="running"
                                checked={profileData.interests.includes("running")}
                                onChange={handleInterestsChange}
                            />
                            Running
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="walking"
                                checked={profileData.interests.includes("walking")}
                                onChange={handleInterestsChange}
                            />
                            Walking
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="biryani"
                                checked={profileData.interests.includes("biryani")}
                                onChange={handleInterestsChange}
                            />
                            Biryani
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="walking"
                                checked={profileData.interests.includes("walking")}
                                onChange={handleInterestsChange}
                            />
                            90's Kid
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="biryani"
                                checked={profileData.interests.includes("biryani")}
                                onChange={handleInterestsChange}
                            />
                            Coding
                        </label>
                        
                </div>
                <div className="flex justify-center gap-3">
                        <label>
                            <input
                                type="checkbox"
                                value="tea"
                                checked={profileData.interests.includes("self-care")}
                                onChange={handleInterestsChange}
                            />
                            Tea
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="coffee"
                                checked={profileData.interests.includes("ludo")}
                                onChange={handleInterestsChange}
                            />
                            Coffee
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="diy"
                                checked={profileData.interests.includes("gym")}
                                onChange={handleInterestsChange}
                            />
                            DIY
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="arts"
                                checked={profileData.interests.includes("running")}
                                onChange={handleInterestsChange}
                            />
                            Arts
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="comedy"
                                checked={profileData.interests.includes("walking")}
                                onChange={handleInterestsChange}
                            />
                            Comedy
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="cat-lover"
                                checked={profileData.interests.includes("biryani")}
                                onChange={handleInterestsChange}
                            />
                            Cat lover
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="dog-lover"
                                checked={profileData.interests.includes("walking")}
                                onChange={handleInterestsChange}
                            />
                            Dog lover
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="movies"
                                checked={profileData.interests.includes("biryani")}
                                onChange={handleInterestsChange}
                            />
                            Movies
                        </label>
                        
                </div>
                <button type="submit" className="w-full p-2 my-5 bg-red-600 text-white rounded">Update Profile</button>
            </form>
        </div>
    );
};

export default EditProfile;
