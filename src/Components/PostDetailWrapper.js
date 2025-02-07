import React from "react";
import PostDetails from "./PostDetails"; // Ensure correct import

const PostDetailWrapper = () => {
  const postId = window.location.pathname.split("/").pop();
  return <PostDetails postId={postId} />;
};

export default PostDetailWrapper;
