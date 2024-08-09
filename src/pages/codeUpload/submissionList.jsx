import React from 'react';

const SubmissionList = ({ submissions }) => {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold mb-5 text-white">Submitted Code</h3>
      {submissions.length > 0 ? (
        submissions.map((submission, index) => (
          <div
            key={index}
            className="relative mb-5 p-5 border rounded bg-gray-100"
          >
            <div className="ml-5">
              {submission.files ? (
                <div>
                  <h4 className="font-bold">Uploaded Files:</h4>
                  <ul>
                    {submission.files.map((file, fileIndex) => (
                      <li key={fileIndex}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <h4 className="font-bold">Typed Code:</h4>
                  <pre className="whitespace-pre-wrap">{submission.code}</pre>
                </div>
              )}
              <div>
                <h4 className="font-bold">Description:</h4>
                <p>{submission.description}</p>
              </div>
              <div>
                <h4 className="font-bold">Tags:</h4>
                <p>{submission.tags}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white">No submissions yet.</p>
      )}
    </div>
  );
};

export default SubmissionList;
