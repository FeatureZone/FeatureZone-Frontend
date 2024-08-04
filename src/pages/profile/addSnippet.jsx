// import React, { useState } from 'react';
// import { BsTextarea } from 'react-icons/bs';
// import P from './profileConstant';

// const AddSnippet = () => {
//   // State to manage whether the snippet is in edit mode or not
//   const [isEditing, setIsEditing] = useState(false);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     setIsEditing(false);
//   };

//   return (
//     <div className="w-[600px] h-auto bg-white shadow-lg shadow-blue-400 p-4">
//       {P.SNIPPET.map(({ title, content, index }) => (
//         <div key={index}>
//           {isEditing ? (
//             <div>
//               <input
//                 type="text"
//                 defaultValue={title}
//                 className="w-full p-2 border border-gray-300 rounded mb-2"
//               />
//               <textarea
//                 defaultValue={content}
//                 className="w-full p-2 border border-gray-300 rounded mb-2"
//               />
//               <button
//                 onClick={handleSaveClick}
//                 className="bg-blue-500 text-white p-2 rounded"
//               >
//                 Save
//               </button>
//             </div>
//           ) : (
//             <div>
//               <h1 onClick={handleEditClick} className="cursor-pointer">
//                 {title}
//               </h1>
//               <p onClick={handleEditClick} className="cursor-pointer">
//                 {content}
//                 {!isEditing && <BsTextarea className="inline ml-2" />}
//               </p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AddSnippet;

import React, { useState } from 'react';
import { BsTextarea } from 'react-icons/bs';
import P from './profileConstant';

const AddSnippet = () => {
  // State to manage whether the snippet is in edit mode or not
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex justify-center">
      <div className="w-[600px] h-auto bg-white shadow-lg shadow-black p-4">
        {P.SNIPPET.map(({ title, content, index }) => (
          <div key={index} className="mb-4">
            {isEditing ? (
              <div>
                <input
                  type="text"
                  defaultValue={title}
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                />
                <textarea
                  defaultValue={content}
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                />
                <button
                  onClick={handleSaveClick}
                  className="bg-gray-400 text-white p-2 rounded"
                >
                  Save
                </button>
              </div>
            ) : (
              <div>
                <h1
                  onClick={handleEditClick}
                  className="cursor-pointer text-xl font-semibold"
                >
                  {title}
                </h1>
                <p
                  onClick={handleEditClick}
                  className="cursor-pointer text-gray-700"
                >
                  {content}
                  {!isEditing && <BsTextarea className="inline ml-2" />}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddSnippet;
