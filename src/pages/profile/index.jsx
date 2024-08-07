import React from 'react';
import NavBar from '../../assets/components/navBar';
import Footer from '../../assets/components/constants/footer';
import ProfileHeader from './profileImageBg';
import MenuDropdown from './menuDropdown';
import CodeUpload from '../codeUpload/codeUpload';

const ProfilePage = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-gray-300 my-5">
        <ProfileHeader />
        <MenuDropdown />
      </div>

      <CodeUpload />
      <Footer />
    </div>
  );
};

export default ProfilePage;
