// import React from 'react';

// const CodeUpload = () => {
//   return <div>CodeUpload</div>;
// };

// export default CodeUpload;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SubmissionList from './submissionList';

const CodeUpload = () => {
  const [files, setFiles] = useState([]);
  const [isFileUpload, setIsFileUpload] = useState(true);
  const [submissions, setSubmissions] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const onFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  const onSubmit = (data) => {
    const submissionData = {
      ...data,
      files: files.length > 0 ? files : null,
      profilePicture: '/path/to/profile-picture.jpg',
    };
    setSubmissions([submissionData, ...submissions]);
    setFiles([]);
    reset();
  };

  return (
    <div className="bg-gray-800 py-3 mt-32">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-5 text-white">Upload Your Code</h2>
        <div className="flex mb-5">
          <button
            onClick={() => setIsFileUpload(true)}
            className={`mr-2 p-2 ${
              isFileUpload ? 'bg-gray/65 text-white' : 'bg-gray-200'
            }`}
          >
            Upload File
          </button>
          <button
            onClick={() => setIsFileUpload(false)}
            className={`p-2 ${
              !isFileUpload ? 'bg-gray/65 text-white' : 'bg-gray-200'
            }`}
          >
            Type Code
          </button>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          {isFileUpload ? (
            <>
              <div className="border-dashed border-4 p-5 mb-5 rounded bg-gray-50">
                <input
                  type="file"
                  multiple
                  onChange={onFileChange}
                  className="hidden"
                  id="fileUpload"
                />
                <label
                  htmlFor="fileUpload"
                  className="block text-center cursor-pointer"
                >
                  Drag and drop files here or click to select files
                </label>
              </div>
              <ul>
                {files.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </>
          ) : (
            <div className="mt-5">
              <label htmlFor="code" className="block">
                Type Your Code
              </label>
              <textarea
                id="code"
                {...register('code')}
                className="w-full p-2 border rounded bg-gray-50"
                rows="10"
              ></textarea>
            </div>
          )}
          <div className="mt-5">
            <label htmlFor="description" className="block">
              Description
            </label>
            <textarea
              id="description"
              {...register('description')}
              className="w-full p-2 border rounded bg-gray-50"
            ></textarea>
          </div>
          <div className="mt-5">
            <label htmlFor="tags" className="block">
              Tags
            </label>
            <input
              id="tags"
              {...register('tags')}
              className="w-full p-2 border rounded bg-gray-50"
            />
            <small className="text-gray-600">
              Use tags to categorize your upload (e.g., React, API,
              authentication).
            </small>
          </div>
          <button
            type="submit"
            className="mt-5 bg-gray-800 text-white p-3 rounded"
          >
            Submit
          </button>
        </form>
        <SubmissionList submissions={submissions} />
      </div>
    </div>
  );
};

export default CodeUpload;
