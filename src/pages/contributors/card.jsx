import React from 'react';

const ContributorCard = ({ contributor }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={contributor.avatarUrl || 'https://via.placeholder.com/150'}
        alt={contributor.name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold text-center">{contributor.name}</h3>
      <p className="text-gray-600 text-center mb-2">{contributor.role}</p>
      <p className="text-gray-600 text-center mb-2">
        {contributor.contributions} contributions
      </p>
      <a
        href={contributor.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-blue-500 mt-4 text-center"
      >
        View GitHub Profile
      </a>
    </div>
  );
};

export default ContributorCard;