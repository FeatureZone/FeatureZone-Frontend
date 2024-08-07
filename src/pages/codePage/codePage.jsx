// src/pages/codePage/CodePage.jsx

import React, { useState } from 'react';
import K from '../../assets/components/constants/index'; // Correct import
import CodeHeader from './codeHeader';
import CodeSnippet from './codeSnippet';
import Footer from '../../assets/components/constants/footer';

const CodePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState('');
  const [sortCriteria, setSortCriteria] = useState('date');

  const handleFilterChange = (e) => {
    const value = e.target.value.toLowerCase();
    setFilterCriteria(value);
  };

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  const filteredSnippets = K.CODESNIPPETS.filter(snippet => // Use K.CODESNIPPETS
    snippet.user.name.toLowerCase().includes(filterCriteria) ||
    snippet.tags.some(tag => tag.toLowerCase().includes(filterCriteria))
  );

  const sortedSnippets = filteredSnippets.sort((a, b) => {
    if (sortCriteria === 'likes') {
      return b.likes - a.likes;
    } else if (sortCriteria === 'comments') {
      return b.comments - a.comments;
    } else if (sortCriteria === 'date') {
      return new Date(b.date) - new Date(a.date);
    }
    return 0;
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <div className={`container mx-auto p-4 min-h-screen ${darkMode ? 'dark' : ''}`}>
      <CodeHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <h1 className="text-3xl font-bold mb-4">Code Snippets</h1>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Filter by user or tag"
          value={filterCriteria}
          onChange={handleFilterChange}
          className="py-2 px-4 border rounded-md"
        />
        <select value={sortCriteria} onChange={handleSortChange} className="py-2 px-4 border rounded-md">
          <option value="date">Sort by Date</option>
          <option value="likes">Sort by Likes</option>
          <option value="comments">Sort by Comments</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedSnippets.map((snippet) => (
          <div key={snippet.id} className="p-4 border rounded-md">
            <CodeSnippet snippet={snippet} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CodePage;
