import React from 'react';
import { Search, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { heroBgv } from '../../assets/images';

const CodeHeader = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`relative w-full bg-[#2ecc71] text-white py-8 px-6 flex flex-col items-center shadow-md transition-shadow duration-300 ease-in-out ${darkMode ? 'dark' : ''}`}>
      <video
        src={heroBgv}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative w-full max-w-4xl flex flex-col items-center z-10">
        <div className="flex items-center justify-between w-full mb-4">
          <Link to="/" className="text-4xl font-bold hover:text-black transition-colors duration-300 ease-in-out">
            Our<span className="text-black">Logo</span>
          </Link>
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-800 shadow-md hover:bg-gray-200 transition-all duration-300 ease-in-out"
          >
            {darkMode ? (
              <Sun className="w-6 h-6 text-yellow-500" />
            ) : (
              <Moon className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
        <div className="relative flex-1 max-w-md w-full mb-6">
          <input
            type="text"
            placeholder="Search code snippets..."
            className="py-3 pl-12 pr-4 bg-gray-100 text-gray-800 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-[#3498db] transition-all duration-300 ease-in-out"
          />
          <Search className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 transition-transform duration-300 ease-in-out" />
        </div>
        <div className="flex items-center space-x-4 w-full">
          <Link to="/about" className="text-white hover:text-black transition-colors duration-300 ease-in-out">About</Link>
        </div>
      </div>
    </header>
  );
};

export default CodeHeader;
