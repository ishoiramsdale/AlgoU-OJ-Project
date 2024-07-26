import {  useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchProfileData = async () => {
        try {
          const response = await axios.get('/profile'); // Adjust the endpoint as needed
          setProfileData(response.data);
        } catch (error) {
          setError('Failed to load profile data.');
          console.error('Error fetching profile data:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProfileData();
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
  
    return (
      <div>
        <h1>Profile</h1>
        {/* Display profile data here */}
        <p>Name: {profileData.name}</p>
        <p>Email: {profileData.email}</p>
        {/* Add other profile fields as needed */}
      </div>
    );
  };
  
  export default Profile;