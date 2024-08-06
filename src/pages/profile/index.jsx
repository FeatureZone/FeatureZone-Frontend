import { useEffect, useState } from 'react';
import NavBar from '../../assets/components/navBar';
import ProfileHeader from './profileImageBg';
import MenuDropdown from './menuDropdown';
import Footer from '../../assets/components/constants/footer';
import axios from './services/axiosConfig';
// Write the frontend code to connect with the backend to fetch the details of the user to populated at the profile page

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user/profile');
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching user data');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <NavBar />
      <div className="bg-gray-300 my-5">
        <ProfileHeader userData={userData} />
        <MenuDropdown />
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
