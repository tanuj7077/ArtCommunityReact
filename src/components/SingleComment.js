import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";

import { Comments, Users } from "../data";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const SingleComment = ({ id }) => {
  const [comment, setComment] = useState(null);
  let commentUrl = "http://localhost:8000/comments/comment/" + id;

  async function fetchComment() {
    try {
      const response = await fetch(commentUrl);
      const data = await response.json().then((data) => {
        setComment(data);
      });
      //setComment(data);
    } catch (err) {
      console.log(err);
    }
  }
  // const fetchComment = async () => {
  //   setComment(Comments.find((item) => item.id === id));
  // };
  useEffect(() => {
    fetchComment();
  }, [id]);
  if (!comment) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="postContent--comments-comment">
      <img src={url} alt="user" className="postContent--comments-comment-img" />
      <span className="postContent--comments-comment-user">
        {comment.author.username}
      </span>
      <span className="postContent--comments-comment-date">
        {comment.datePosted}
      </span>
      <span className="postContent--comments-comment-text">{comment.text}</span>
    </div>
  );
};

export default SingleComment;
