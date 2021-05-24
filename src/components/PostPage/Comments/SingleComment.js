import React, { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../../../context";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const SingleComment = ({ id, postId }) => {
  const { userData, isLoggedIn, openLoginModal } = useGlobalContext();
  const [editedComment, setEditedComment] = useState("");
  const [comment, setComment] = useState(null);
  const [likes, setLikes] = useState(0);

  const [editState, setEditState] = useState(false);
  let commentUrl = "http://localhost:8000/comments/comment/" + id;
  let commentDeleteUrl =
    "http://localhost:8000/comments/comment/" + id + "/delete";
  let commentEditUrl = "http://localhost:8000/comments/comment/" + id + "/edit";

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
    } else {
      const data = {
        user: userData,
      };
      axios
        .post("http://localhost:8000/comments/comment/" + id + "/like", data)
        .then((res) => {
          console.log(res.data.msg);
          setLikes(res.data.likes);
        });
    }
  };

  const editClick = async () => {
    setEditState(true);
    setEditedComment(comment.text);
  };

  async function deleteComment() {
    const data = { post_id: postId };
    axios.post(commentDeleteUrl, data).then((res) => {
      console.log(res.data);
      setComment(null);
    });
  }
  async function editComment() {
    const data = { edited_comment: editedComment };
    axios.post(commentEditUrl, data).then((res) => {
      console.log(res.data);
      setComment(res.data.comment);
      setEditState(false);
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
      {!editState ? (
        <span className="postContent--comments-comment-text">
          {comment.text}
        </span>
      ) : (
        <span className="postContent--comments-comment-text">
          <div className="form__group form__group--basic u-margin-top-small u-margin-bottom-small">
            <textarea
              name="desc"
              id="edit-comment"
              cols="40"
              rows="4"
              className="form__input-textarea-comment"
              autoComplete="off"
              spellCheck="false"
              placeholder="Add a public comment"
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
            ></textarea>
          </div>
        </span>
      )}
      <span className="postContent--comments-comment-controls">
        {userData.username !== comment.author.username && !editState && (
          <span className="control" onClick={likeComment}>
            {/* {typeof comment.likesArray === "undefined" ? `` : likes} */}
            {likes === 0 ? `` : likes} Like
          </span>
        )}
        {!editState && <span className="control">Reply</span>}
        {userData.username === comment.author.username && !editState && (
          <>
            <span className="control" onClick={deleteComment}>
              Delete
            </span>
            <span className="control" onClick={editClick}>
              Edit
            </span>
          </>
        )}
        {editState && (
          <>
            <span className="control" onClick={editComment}>
              Submit
            </span>
            <span className="control" onClick={() => setEditState(false)}>
              Cancel
            </span>
          </>
        )}
      </span>
    </div>
  );
};

export default SingleComment;