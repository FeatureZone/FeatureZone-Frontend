import React from 'react';
import NavBar from '../../assets/components/navBar';
import Footer from '../../assets/components/constants/footer';
import ProfileHeader from './profileImageBg';
import MenuDropdown from './menuDropdown';

const ProfilePage = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-gray-300 my-5">
        <ProfileHeader />
        <MenuDropdown />
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;
