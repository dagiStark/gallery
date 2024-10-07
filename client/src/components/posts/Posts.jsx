import React from "react";
import Post from "./post/Post";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div>
      <Post />
      <h1>Posts</h1>
    </div>
  );
};

export default Posts;
