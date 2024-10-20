import axios from 'axios';

const token = localStorage.getItem('token');

// Axios instance with the Authorization header
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization: `Bearer ${token}`, 
  },
});


// Fetch users 
export const fetchFeedUsers = async () => {
    try {
        const response = await axiosInstance.get('/feed');
        console.log('Feed data:', response.data);
        return response.data;
      } catch (err) {
        console.error('Error fetching feed:', err);
      }
    };


// Fetch pending requests
export const fetchPendingRequests = async () => {
    try {
        const response = await axiosInstance.get('/user/requests');
        console.log('request data:', response.data.connectionRequests);
        return response.data.connectionRequests;
      } catch (err) {
        console.error('Error fetching pending requests:', err);
      }
    };
  


// Fetch user's connections
export const fetchConnections = async () => {
    try {
        const response = await axiosInstance.get('/user/connections');
        console.log('connections data:', response.data.data);
        return response.data.data;
      } catch (err) {
        console.error('Error fetching connections:', err);
      }
};

// Handle sending "Interested" status
export const handleInterest = async (toUserId) => {
    try {
        const response = await axiosInstance.post(`/request/send/Interested/${toUserId}`);
        console.log('Interest marked:', response.data);
        return response.data;
        
      } catch (error) {
        console.error('Error marking interest:', error.message);
      }
    
  };
  
  // Handle sending "Ignored" status
  export const handleIgnore = async (toUserId) => {
    try {
        const response = await axiosInstance.post(`/request/send/Ignored/${toUserId}`);
        console.log('Interest marked:', response.data);
        return response.data;
       
      } catch (error) {
        console.error('Error marking interest:', error.message);
      }
  };
  
  // Handle accepting a pending connection request
  export const handleAccept = async (requestId) => {
    try {
        const response = await axiosInstance.post(`/request/review/Accepted/${requestId}`);
        console.log('Request accepted:', response.data);
        return response.data;
       
      } catch (error) {
        console.error('Error accepting request:', error.message);
      }
  };
  
  // Handle rejecting a pending connection request
  export const handleReject = async (requestId) => {
    try {
        const response = await axiosInstance.post(`/request/review/Rejected/${requestId}`);
        console.log('Request accepted:', response.data);
        return response.data;
       
      } catch (error) {
        console.error('Error accepting request:', error.message);
      }
  };