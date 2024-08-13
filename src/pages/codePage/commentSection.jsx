import { useState, useEffect } from 'react';

const CommentsSection = ({ snippetId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://api.featurezone-backend-2.onrender.com/snippets/${snippetId}/comments`);
        if (!response.ok) {
          throw new Error('Failed to fetch comments');
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [snippetId]);

  if (loading) return <p>Loading comments...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mt-4">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className="border-t border-gray-300 dark:border-gray-600 py-2">
            <p className="text-sm text-gray-700 dark:text-gray-300">{comment.text}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">- {comment.user.name}</p>
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default CommentsSection;
