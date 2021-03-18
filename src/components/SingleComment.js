import React, { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const SingleComment = ({ id, postId }) => {
  const { userData, isLoggedIn, openLoginModal } = useGlobalContext();
  const [comment, setComment] = useState(null);
  const [likes, setLikes] = useState(0);
  let commentUrl = "http://localhost:8000/comments/comment/" + id;
  let commentDeleteUrl =
    "http://localhost:8000/comments/comment/" + id + "/delete";

  async function fetchComment() {
    try {
      const response = await fetch(commentUrl);
      await response.json().then((data) => {
        setComment(data);
        setLikes(data.likesArray.length);
      });
      //setComment(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchComment();
  }, [id]);

  const likeComment = async () => {
    if (!isLoggedIn) {
      openLoginModal();
    }
    const data = {
      user: userData,
    };
    axios
      .post("http://localhost:8000/comments/comment/" + id + "/like", data)
      .then((res) => {
        console.log(res.data.msg);
        setLikes(res.data.likes);
      });
  };

  async function deleteComment() {
    const data = { post_id: postId };
    axios.post(commentDeleteUrl, data).then((res) => {
      console.log(res.data);
      setComment(null);
    });
  }
  if (!comment) {
    return <span></span>;
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
      <span className="postContent--comments-comment-controls">
        {userData.username !== comment.author.username && (
          <span className="control" onClick={likeComment}>
            {/* {typeof comment.likesArray === "undefined" ? `` : likes} */}
            {likes === 0 ? `` : likes} Like
          </span>
        )}
        <span className="control">Reply</span>
        {userData.username === comment.author.username && (
          <>
            <span className="control" onClick={deleteComment}>
              Delete
            </span>
            <span className="control">Edit</span>
          </>
        )}
      </span>
    </div>
  );
};

export default SingleComment;
