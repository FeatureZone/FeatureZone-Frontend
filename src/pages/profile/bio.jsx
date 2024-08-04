// import React from 'react';
// import P from './profileConstant';

// const UserBio = () => {
//   return (
//     <div>
//       {P.BIO.map((bio, index) => {
//         return (
//           <div key={index}>
//             <p>{bio.name}</p>
//             <div className="bg-white h-auto  shadow-lg shadow-black">
//               <p className="text-[1rem] text-white">{bio.bio}</p>
//             </div>
//             <p>{bio.skill}</p>

//             <p>{bio.gender}</p>
//             <p>{bio.email}</p>
//             <p>{bio.job}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default UserBio;

import React, { useState } from 'react';
import P from './profileConstant';

const UserBio = () => {
  const [editing, setEditing] = useState(false);
  const [bioData, setBioData] = useState(P.BIO);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    // Here you might want to save the edited data to a database or API
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const updatedBioData = [...bioData];
    updatedBioData[index] = { ...updatedBioData[index], [name]: value };
    setBioData(updatedBioData);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {bioData.map((bio, index) => (
        <div key={index} className="mb-4">
          <p className="font-bold">{bio.name}</p>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            {editing ? (
              <>
                <label
                  htmlFor={`bio-${index}`}
                  className="block mb-1 font-medium"
                >
                  Bio
                </label>
                <textarea
                  id={`bio-${index}`}
                  name="bio"
                  value={bio.bio}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full h-24 bg-gray-100 border border-gray-300 rounded p-2 mb-2"
                />

                <label
                  htmlFor={`skill-${index}`}
                  className="block mb-1 font-medium"
                >
                  Skills
                </label>
                <input
                  id={`skill-${index}`}
                  type="text"
                  name="skill"
                  value={bio.skill}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full bg-gray-100 border border-gray-300 rounded p-2 mb-2"
                />

                <label
                  htmlFor={`gender-${index}`}
                  className="block mb-1 font-medium"
                >
                  Gender
                </label>
                <input
                  id={`gender-${index}`}
                  type="text"
                  name="gender"
                  value={bio.gender}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full bg-gray-100 border border-gray-300 rounded p-2 mb-2"
                />

                <label
                  htmlFor={`email-${index}`}
                  className="block mb-1 font-medium"
                >
                  Email
                </label>
                <input
                  id={`email-${index}`}
                  type="email"
                  name="email"
                  value={bio.email}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full bg-gray-100 border border-gray-300 rounded p-2 mb-2"
                />

                <label
                  htmlFor={`job-${index}`}
                  className="block mb-1 font-medium"
                >
                  Job
                </label>
                <input
                  id={`job-${index}`}
                  type="text"
                  name="job"
                  value={bio.job}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full bg-gray-100 border border-gray-300 rounded p-2 mb-2"
                />
              </>
            ) : (
              <p className="text-gray-700">{bio.bio}</p>
            )}
          </div>
          {editing ? (
            <button
              onClick={handleSave}
              className="bg-black hover:bg-gray-400 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleEdit}
              className="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-2"
            >
              Edit
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserBio;
