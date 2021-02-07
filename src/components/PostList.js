import React from "react";
import { Link } from "react-router-dom";
import SinglePost from "./SinglePost";

const PostList = () => {
  return (
    <main>
      <h2>Post List</h2>
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
    </main>
  );
};

export default PostList;
