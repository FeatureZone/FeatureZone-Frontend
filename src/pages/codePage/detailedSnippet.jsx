import React from 'react';
import { useParams } from 'react-router-dom';
import { Copy, ThumbsUp, MessageSquare, Share } from 'lucide-react';

const DetailedSnippet = ({ snippets }) => {
  const { id } = useParams();
  const snippet = snippets.find(snippet => snippet.id === parseInt(id));

  const handleCopyCode = () => {
    navigator.clipboard.writeText(snippet.code);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
        <div className="flex items-center mb-4">
          <img src={snippet.user.profilePicture} alt={snippet.user.name} className="w-10 h-10 rounded-full mr-4" />
          <div>
            <h2 className="text-lg font-bold">{snippet.user.name}</h2>
            <p className="text-sm text-gray-500">{snippet.user.bio}</p>
          </div>
        </div>
        <h3 className="text-md font-semibold mb-2">{snippet.title}</h3>
        <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md overflow-x-auto">
          <code>{snippet.code}</code>
        </pre>
        <div className="flex items-center mt-4">
          <button onClick={handleCopyCode} className="flex items-center text-blue-500 mr-4">
            <Copy className="w-5 h-5 mr-1" />
            Copy
          </button>
          <div className="flex items-center text-gray-700 dark:text-gray-300 mr-4">
            <ThumbsUp className="w-5 h-5 mr-1" />
            {snippet.likes}
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-300 mr-4">
            <MessageSquare className="w-5 h-5 mr-1" />
            {snippet.comments.length}
          </div>
          <button className="flex items-center text-blue-500">
            <Share className="w-5 h-5 mr-1" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedSnippet;
