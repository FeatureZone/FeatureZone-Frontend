import React, { useState } from 'react';
import ContributorCard from './card';
import ContributorModal from './modal';
import ruth from '../../assets/images/Ruth.jpg';
import ellen from '../../assets/images/Ellen.jpg';

const Contributors = () => {
  const [contributors, setContributors] = useState([
    {
      id: 1,
      name: 'Ruth Nyankum',
      avatarUrl: ruth,
      role: 'Writer',
      contributions: 12,
      githubUrl: 'https://github.com/RuthNyankum',
    },
    {
      id: 2,
      name: 'Ellen Akosuaa',
      avatarUrl: ellen,
      role: 'Editor',
      contributions: 8,
      githubUrl: 'https://github.com/Ellen-Akosuaa',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addContributor = (newContributor) => {
    setContributors([
      ...contributors,
      { ...newContributor, id: contributors.length + 1 },
    ]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Overview Section */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Contributors</h1>
        <p className="text-gray-600">
          Our contributors are the heart of FeatureZone. Their hard work and
          dedication help us improve and grow. Here’s a list of those who have
          made significant contributions.
        </p>
        <button
          onClick={openModal}
          className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-800"
        >
          Add Contributor
        </button>
      </section>

      {/* Contributors List */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Meet Our Contributors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributors.map((contributor) => (
            <ContributorCard key={contributor.id} contributor={contributor} />
          ))}
        </div>
      </section>

      {/* Add Contributor Modal */}
      {isModalOpen && (
        <ContributorModal
          closeModal={closeModal}
          addContributor={addContributor}
        />
      )}
    </div>
  );
};

export default Contributors;