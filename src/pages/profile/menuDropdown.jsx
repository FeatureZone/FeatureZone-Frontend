import React, { useState } from 'react';
import UserBio from './bio';
import StatsAndMetrics from './statsMetrics';
import AddSnippet from './addSnippet';
import ProfileHeader from './profileImageBg';
import axiosInstance from './services/axiosConfig';
import P from './profileConstant';

const MenuDropdown = () => {
  // State to keep track of the active component
  const [activeComponent, setActiveComponent] = useState('UserBio');

  const [bioData, setBioData] = useState(P.BIO);
  const [metricsData, setMetricsData] = useState(P.METRIC);
  const [snippetsData, setSnippetsData] = useState(P.SNIPPET);
  const [profileData, setProfileData] = useState({
    name: 'User',
    profilePicture: 'https://via.placeholder.com/150',
  });

  // Function to handle click and set active component
  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  const handleSaveAll = async () => {
    const combinedData = {
      bio: bioData,
      metrics: metricsData,
      snippets: snippetsData,
      profile: profileData,
    };

    try {
      const response = await axiosInstance.post('/saveData', combinedData);
      if (response.status === 200) {
        console.log('Data saved successfully:', response.data);
        alert('Data saved successfully!');
      } else {
        console.error('Failed to save data:', response);
        alert('Failed to save data.');
      }
    } catch (error) {
      console.error('Error saving data:', error);
      alert('An error occurred while saving data.');
    }
  };


  return (
    <div className="menu-dropdown flex flex-col items-center justify-center p-4 md:p-8">
      {/* Menu buttons */}
      <div className="menu-buttons flex gap-4 md:gap-8 bg-gray-800 text-white py-4 px-2 rounded-lg shadow-md">
        <button
          onClick={() => handleComponentChange('UserBio')}
          className="py-2 px-4 rounded bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          User Bio
        </button>
        <button
          onClick={() => handleComponentChange('StatsAndMetrics')}
          className="py-2 px-4 rounded bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Stats and Metrics
        </button>
        <button
          onClick={() => handleComponentChange('AddSnippet')}
          className="py-2 px-4 rounded bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Add Snippet
        </button>
      </div>

      {/* Displaying active component */}
      <div className="component-display mt-4 w-full max-w-4xl">
        {activeComponent === 'UserBio' && <UserBio />}
        {activeComponent === 'StatsAndMetrics' && <StatsAndMetrics />}
        {activeComponent === 'AddSnippet' && <AddSnippet />}
      </div>

      {/* Save All button */}
      <button
        onClick={handleSaveAll}
        className="bg-black hover:bg-gray-400 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Save All
      </button>

    </div>
  );
};

export default MenuDropdown;
