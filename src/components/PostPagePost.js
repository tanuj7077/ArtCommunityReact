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

  async function getPost() {
    try {
      const response = await fetch(postUrl);
      const data = await response.json();
      setPost(data);
      if (isLoggedIn && userData.username === data.author.username) {
      }
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
      .then((res) => console.log(res.data));
  }
  const handleComment = () => {
    if (!isLoggedIn) {
      openLoginModal();
    }
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
                    <span className="menu-item" onClick={handleComment}>
                      Comment
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
                {/* <span className="count">{Post.likes} Likes</span> */}
                <span className="count">
                  {typeof Post.likesArray === "undefined"
                    ? `0`
                    : Post.likesArray.length}{" "}
                  Likes
                </span>
              </div>
              <div className="postContent--info-icons-like">
                <span className="material-icons comment">insert_comment</span>
                {/* <span className="count">{Post.comments} Comments</span> */}
                <span className="count">
                  {typeof Post.comments === "undefined"
                    ? `0`
                    : Post.comments.length}{" "}
                  Comments
                </span>
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
          <div className="postContent--comments-addComment">
            <h1>Add comment</h1>
          </div>
          {typeof Post.comments !== "undefined" && (
            <CommentList commentArr={Post.comments} />
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
