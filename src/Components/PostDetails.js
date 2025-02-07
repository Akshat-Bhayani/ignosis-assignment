import { useState, useEffect } from "react";
import axios from "axios";
import "./PostDetails.css";

const PostDetails = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://hn.algolia.com/api/v1/items/${postId}`).then(({ data }) => {
      setPost(data);
    });
  }, [postId]);

  if (!post) return <p className="loading-text">Loading...</p>;

  return (
    <div className="post-container">
      <h1 className="post-title">{post.title}</h1>
      <p className="post-points">Points: {post.points}</p>
      <h2 className="comments-title">Comments</h2>
      <ul className="comments-list">
        {post.children.map((comment) => (
          <li key={comment.id} className="comment-item">
            {comment.text || "[Deleted]"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetails;
