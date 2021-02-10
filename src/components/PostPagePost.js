import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { Posts } from "../data";

const PostPagePost = ({ id }) => {
  const [Post, setPost] = useState({});

  const fetchPost = async () => {
    setPost(Posts.find((item) => item.id === id));
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  return (
    <div className="postPage">
      <div className="postContent">
        <div className="postContent--image">
          <img className="postContent--image-img" src={Post.image} />
        </div>
        <div className="postContent--info">
          <h1>Information</h1>
        </div>
      </div>
      <div className="comments">
        <h1>Comments</h1>
      </div>
      <div className="otherContent">
        <div className="otherContent--user">
          <h1>By User</h1>
        </div>
        <div className="otherContent--recommend">
          <h1>You may Like</h1>
        </div>
      </div>
    </div>
  );
};

export default PostPagePost;
