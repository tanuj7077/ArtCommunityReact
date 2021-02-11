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
    <div className="comment">
      <img src={url} alt="user" className="comment-photo" />
      <h2 className="comment-user">{comment.user}</h2>
      <h3 className="comment-text">{comment.text}</h3>
    </div>
  );
};

export default SingleComment;
