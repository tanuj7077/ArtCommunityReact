import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";

import { Comments, Users } from "../data";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const SingleComment = ({ id }) => {
  const [comment, setComment] = useState({});
  const fetchComment = async () => {
    setComment(Comments.find((item) => item.id === id));
  };
  useEffect(() => {
    fetchComment();
  }, [id]);
  return (
    <div className="postContent--comments-comment">
      <img src={url} alt="user" className="postContent--comments-comment-img" />
      <span className="postContent--comments-comment-user">{comment.user}</span>
      <span className="postContent--comments-comment-date">{comment.date}</span>
      <span className="postContent--comments-comment-text">{comment.text}</span>
    </div>
  );
};

export default SingleComment;
