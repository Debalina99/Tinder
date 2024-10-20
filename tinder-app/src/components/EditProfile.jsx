// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import { editProfile, viewProfile } from '../services/authService';

// const EditProfile = () => {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [profileData, setProfileData] = useState({
//         name: '', email: '', age: '', gender: '', photoUrl: '', about: '', interests: []
//     });
//     const [error, setError] = useState(null);
//     const [success, setSuccess] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchProfile = async () => {
//             try {
//                 const data = await viewProfile();
//                 setProfileData(data);
//             } catch (err) {
//                 console.error(err);
//                 setError("Failed to fetch profile data!")
//             }
//         }
//         fetchProfile();
//     }, [])
//     const submitHandler = async (e) => {
//         console.log("Profile Data being sent:", profileData);
//         e.preventDefault();
//         try {
//             let updatedProfile = null;

//             if (selectedFile) {
//                 // If a file is selected, send everything using FormData
//                 const formData = new FormData();
//                 formData.append('file', selectedFile);

//                 // Append other profile fields to the form data
//                 for (const key in profileData) {
//                     if (Object.hasOwnProperty.call(profileData, key)) {
//                         formData.append(key, profileData[key]);
//                     }
//                 }

//                 // Send the form data for profile update (with file upload)
//                 updatedProfile = formData;
//             } else {
//                 updatedProfile = { ...profileData };
//             }
//             await editProfile(updatedProfile);
//             setSuccess("Profile updated successfully!");
//             navigate("/feed");
//         } catch (err) {
//             console.error(err);
//             setError("Failed to update profile!");
//         }

//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setProfileData((prevData) => ({
//             ...prevData,
//             [name]: value
//         }));
//     }

//     const handleFileChange = (e) => {
//         setSelectedFile(e.target.files[0]);
//     }

//     const handleInterestsChange = (e) => {
//         const options = Array.from(e.target.selectedOptions, (option) => option.value);
//         setProfileData((prevData) => ({
//             ...prevData,
//             interests: options
//         }));
//     };


//     return (
//         <div className="flex flex-col items-center justify-center h-screen bg-red-400">
//             <p className='flex text-white items-center justify-center text-3xl font-bold' style={{ fontStyle: "italic", marginTop: "2rem" }}>Edit your profile</p>

//             <form onSubmit={submitHandler} className="bg-white p-8 rounded shadow-md" style={{ width: "800px", height: "530px", marginTop: "2rem" }}>
//                 {error && <p className="text-red-400 text-center">{error}</p>}
//                 <div className='flex justify-center'>
//                     <div className='flex flex-col items-center justify-center' style={{ float: 'right' }}>
//                         <div className='flex mt-2 px-5'>
//                             <label>Name: </label>
//                             <input type="text" name="name" placeholder="Name" value={profileData.name || ''} onChange={handleInputChange} className='block w-full p-2 border rounded mb-4' />
//                         </div>
//                         <div className='flex mt-2 px-5'>
//                             <label>Email: </label>
//                             <input type="email" name="email" placeholder="Email" value={profileData.email || ''} onChange={handleInputChange} className='block w-full p-2 border rounded mb-4' />

//                         </div>
//                         <div className='flex mt-2 px-5'>
//                             <label>Age: </label>
//                             <input type="age" name="age" placeholder="Age" value={profileData.age} onChange={handleInputChange} className='block w-full p-2 border rounded mb-4' />
//                         </div>
//                     </div>
//                     <div className='flex flex-col  justify-center' style={{ float: 'right' }}>
//                         <div className='flex mt-2 px-5'>
//                             <label>Gender:</label>
//                             <select name="gender" value={profileData.gender} onChange={handleInputChange} className='block  p-2 border rounded mb-4 '>
//                                 <option value="">Select Gender</option>
//                                 <option value="male">Male</option>
//                                 <option value="female">Female</option>
//                                 <option value="other">Other</option>
//                             </select>
//                         </div>

//                         <div className='flex mt-2 px-5'>
//                             <label>Bio: </label>
//                             {/* <input type="about" name="about" placeholder="about" value={profileData.about} onChange={(e) => setPassword(e.target.value)} className='block w-full p-2 border rounded mb-4 ml-3' /> */}
//                             <textarea name="about" value={profileData.about || ''} onChange={handleInputChange} placeholder="About" className="block w-full p-2 border mb-4"></textarea>
//                         </div>
//                     </div>
//                 </div >
//                 <div className='flex mt-2 px-5'>
//                     <label>Upload Photo:</label>
//                     <input type="file" name="photoUrl" placeholder="photoUrl" value={profileData.photoUrl} onChange={handleFileChange} className='block w-full p-2 border rounded mb-4 ml-3' />

//                 </div>
//                 <div className='flex mt-2 px-5 gap-5 w-full' >
//                     <label className='mr-3'>Interests:</label>

//                     <select name="interests" multiple={true} value={profileData.interests} onChange={handleInterestsChange} className='block border rounded px-8'>
//                         <option value="self-care">Self-care</option>
//                         <option value="ludo">Ludo</option>
//                         <option value="gym">Gym</option>
//                         <option value="running">Running</option>
//                         <option value="walking">Walking</option>
//                         <option value="biryani">Biryani</option>
//                     </select>

//                 </div>
//                 <button type="submit" className="w-full p-2 my-4 bg-red-600 text-white rounded-full text-lg font-bold transition duration-300 hover:bg-red-500">Update</button>

//             </form>
//         </div>
//     )
// }
// export default EditProfile;

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

    // Fetch profile data on component mount
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
    
            // Filter out unnecessary fields before sending
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
    
                // Append only necessary fields to the form data
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

    // const handleFileChange = (e) => {
    //     setSelectedFile(e.target.files[0]);
    // };

    // Handle multi-select for interests
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
                {/* Other input fields */}
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
                <button type="submit" className="w-full p-2 my-5 bg-red-600 text-white rounded">Update Profile</button>
            </form>
        </div>
    );
};

export default EditProfile;
