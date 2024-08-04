
import React, { useState } from 'react';
import { Copy, ThumbsUp, MessageSquare, Share } from 'lucide-react';

const CodeSnippet = ({ snippet }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(snippet.code);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md mb-4">
      <div className="flex items-center mb-4">
        <img src={snippet.user.profilePicture} alt={snippet.user.name} className="w-10 h-10 rounded-full mr-4" />
        <div>
          <h2 className="text-lg font-bold">{snippet.user.name}</h2>
          <p className="text-sm text-gray-500">{snippet.user.bio}</p>
        </div>
      </div>
      <h3 className="text-md font-semibold mb-2">{snippet.title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{snippet.description}</p>
      {expanded ? (
        <>
          <pre className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md overflow-auto mb-4">{snippet.code}</pre>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1" onClick={handleCopyCode}>
              <Copy className="w-4 h-4" />
              <span>Copy</span>
            </button>
            <button className="flex items-center space-x-1">
              <ThumbsUp className="w-4 h-4" />
              <span>{snippet.likes}</span>
            </button>
            <button className="flex items-center space-x-1">
              <MessageSquare className="w-4 h-4" />
              <span>{snippet.comments}</span>
            </button>
            <button className="flex items-center space-x-1">
              <Share className="w-4 h-4" />
              <span>{snippet.shares}</span>
            </button>
          </div>
        </>
      ) : (
        <button onClick={handleToggleExpand} className="text-blue-500">
          View More
        </button>
      )}
      {expanded && (
        <button onClick={handleToggleExpand} className="text-blue-500 mt-4">
          View Less
        </button>
      )}
    </div>
  );
};

export default CodeSnippet;
