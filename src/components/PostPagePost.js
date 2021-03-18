/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useGlobalContext } from "../context";
import CommentList from "./CommentList";
import LoginModal from "./LoginModal";
import axios from "axios";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const PostPagePost = ({ id }) => {
  const {
    isLoggedIn,
    userData,
    openLoginModal,
    loginModal,
  } = useGlobalContext();
  let postUrl = "http://localhost:8000/posts/post/" + id;
  const [Post, setPost] = useState(null);
  const [totalLikes, setTotalLikes] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  async function getPost() {
    try {
      const response = await fetch(postUrl);
      const data = await response.json();
      setPost(data);
      setTotalLikes(data.likesArray.length);
      setTotalComments(data.comments.length);
      setComments(data.comments); //new
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getPost();
  }, [id]);

  async function handleLike() {
    if (!isLoggedIn) {
      openLoginModal();
    }
    const data = {
      user: userData,
    };
    axios
      .post("http://localhost:8000/posts/post/" + id + "/like", data)
      .then((res) => {
        console.log(res.data.msg);
        setTotalLikes(res.data.likes);
      });
  }
  const handleComment = async () => {
    if (!isLoggedIn) {
      openLoginModal();
    }
    const data = {
      user: userData,
      comment: comment,
    };
    axios
      .post("http://localhost:8000/posts/post/" + id + "/comment", data)
      .then((res) => {
        console.log(res.data);
        setTotalComments(res.data.commentsCount);
        setComments(res.data.comments);
        setComment("");
        document.getElementById("desc").value = "";
      });
  };
  const handleFollow = () => {
    if (!isLoggedIn) {
      openLoginModal();
    }
  };

  if (!Post) {
    return <>Hey</>;
  }
  return (
    <>
      <div className="postPage">
        <div className="postContent">
          <div className="postContent--image">
            <img className="postContent--image-img" src={Post.image} alt="" />
          </div>
          <div className="postContent--info">
            <div className="postContent--info-menu">
              <HiOutlineDotsVertical className="menu-icon" />
              <div className="postContent--info-menu-dropdown">
                {(!isLoggedIn ||
                  (isLoggedIn &&
                    userData.username !== Post.author.username)) && (
                  <>
                    <span className="menu-item" onClick={handleLike}>
                      Like Post
                    </span>
                    <span className="menu-item" onClick={handleFollow}>
                      Follow Author
                    </span>
                  </>
                )}

                {isLoggedIn && userData.username === Post.author.username && (
                  <>
                    <span className="menu-item">Edit</span>
                    <span className="menu-item">Delete</span>
                  </>
                )}
              </div>
            </div>
            <div className="postContent--info-author">
              <div className="postContent--info-author-img">
                <img src={url} alt="" className="author-image" />
              </div>
              <span className="postContent--info-author-title">
                {Post.name}
              </span>
              <span className="postContent--info-author-name">
                by {Post.author.username}
              </span>
            </div>
            <div className="postContent--info-icons">
              <div className="postContent--info-icons-like">
                <span className="material-icons like">favorite</span>
                {
                  <span className="count">
                    {typeof Post.likesArray === "undefined" ? `0` : totalLikes}{" "}
                    Likes
                  </span>
                }
              </div>
              <div className="postContent--info-icons-like">
                <span className="material-icons comment">insert_comment</span>
                {
                  <span className="count">
                    {typeof Post.comments === "undefined" ? `0` : totalComments}{" "}
                    Comments
                  </span>
                }
              </div>
            </div>
            <span className="postContent--info-desc">{Post.desc}</span>
            <div className="postContent--info-tags">
              {Post.tags.map((item) => {
                return <span className="tag">{item}</span>;
              })}
            </div>
          </div>
        </div>
        <div className="postContent--comments">
          <span className="subheading">Comments</span>
          <div className="form__group form__group--basic u-margin-top-small u-margin-bottom-small">
            <textarea
              name="desc"
              id="desc"
              cols="40"
              rows="4"
              className="form__input-textarea-comment"
              autoComplete="off"
              spellCheck="false"
              placeholder="Add a public comment"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button
            className="btn btn-submit u-margin-bottom-small"
            type="button"
            onClick={handleComment}
          >
            Submit
          </button>

          {/* {typeof Post.comments !== "undefined" && (
            <CommentList commentArr={Post.comments} />
          )} */}
          {typeof Post.comments !== "undefined" && (
            <CommentList commentArr={comments} postId={Post._id} />
          )}
        </div>

        <div className="otherContent">
          <div className="otherContent--user">
            <span className="otherContent--subheading">By User</span>
            <div className="otherContent--thumbnails">
              <img src={url} alt="" className="otherContent--thumbnails-img" />
              <img src={url} alt="" className="otherContent--thumbnails-img" />
              <img src={url} alt="" className="otherContent--thumbnails-img" />
              <img src={url} alt="" className="otherContent--thumbnails-img" />
              <img src={url} alt="" className="otherContent--thumbnails-img" />
              <img src={url} alt="" className="otherContent--thumbnails-img" />
              <img src={url} alt="" className="otherContent--thumbnails-img" />
            </div>
          </div>
          <div className="otherContent--recommend">
            <span className="otherContent--subheading">You may like</span>
            <div className="otherContent--thumbnails">
              <img src={url} alt="" className="otherContent--thumbnails-img" />
              <img src={url} alt="" className="otherContent--thumbnails-img" />
              <img src={url} alt="" className="otherContent--thumbnails-img" />
              <img src={url} alt="" className="otherContent--thumbnails-img" />
              <img src={url} alt="" className="otherContent--thumbnails-img" />
              <img src={url} alt="" className="otherContent--thumbnails-img" />
            </div>
          </div>
        </div>
      </div>
      {loginModal && <LoginModal />}
    </>
  );
};

export default PostPagePost;
