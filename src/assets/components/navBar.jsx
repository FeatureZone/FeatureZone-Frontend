import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Sun, Moon } from 'lucide-react';
import K from './constants/index';

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div
      className={`bg-white/50 text-black py-4 ${
        darkMode ? 'dark:bg-gray-800 dark:text-white' : ''
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          <span className="text-[#2ecc71]">Our</span>
          <span>Logo</span>
        </div>
        <nav className="flex space-x-4">
          {K.NAVLINKS.map((navItem, index) => (
            <Link
              key={index}
              to={navItem.link}
              className="hover:text-[#2ecc71]"
            >
              {navItem.text}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 pl-10 pr-4 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#3498db]"
            />
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>
          <Link to="/login" className="hover:text-[#2ecc71]">
            Login
          </Link>

          <Link to="/register" className="hover:text-[#2ecc71]">
            Register
          </Link>
          <Link to="/profile" className="hover:text-[#2ecc71]">
            Profile
          </Link>
          <button onClick={toggleDarkMode} className="focus:outline-none">
            {darkMode ? (
              <Sun className="w-6 h-6 text-yellow-500" />
            ) : (
              <Moon className="w-6 h-6 text-gray-500" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
