import React, { useState } from 'react';
// import avater from '../../assets/images/avater2.png';

const ProfileHeader = () => {
  // Default avatar image and name
  const defaultAvatar = 'https://via.placeholder.com/150';
  const defaultName = 'User';

  // State for profile picture, file input, and name
  const [profilePicture, setProfilePicture] = useState(defaultAvatar);
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');

  // Handle file change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setProfilePicture(URL.createObjectURL(selectedFile));
    } else {
      setProfilePicture(defaultAvatar);
    }
  };

  // Handle name change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Mock function to simulate image upload
  const uploadProfilePicture = async () => {
    if (file) {
      // Here you would typically send the file to the server
      console.log('Uploading file:', file);
      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert('Profile picture uploaded successfully!');
    } else {
      alert('No profile picture selected.');
    }
  };

  return (
    <div className="relative bg-gray-300 mt-7">
      {/* Background Section */}
      <div className="relative h-60 bg-gray-800 flex items-center justify-center mx-4 sm:mx-8 lg:mx-32 rounded-md">
        <p className="text-white text-3xl font-bold">{name || defaultName}</p>
      </div>

      {/* Profile Picture */}
      <div className="absolute top-36 left-1/2 transform -translate-x-1/2">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 border-4 border-gray-800 rounded-full overflow-hidden">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>
      </div>

      {/* Name Input */}
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          className="rounded-lg p-2 shadow-lg text-center"
        />
      </div>

      {/* Upload Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={uploadProfilePicture}
          className=" transform transition-transform hover:scale-105"
        ></button>
      </div>

      {/* Followers and Following */}
      <div className="flex justify-center space-x-6 mt-10 absolute right-44 top-52">
        <div className="text-center">
          <span className="font-semibold text-lg">0</span>
          <p className="text-gray-500">Followers</p>
        </div>
        <div className="text-center">
          <span className="font-semibold text-lg">0</span>
          <p className="text-gray-500">Following</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
