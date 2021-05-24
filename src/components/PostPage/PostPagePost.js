/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useGlobalContext } from "../../context";
import CommentList from "./Comments/CommentList";
import PostsByUser from "./PostsByUser/PostsByUser";
import Recommended from "./Recommended/Recommended";
import LoginModal from "../LoginModal";
import axios from "axios";
import { Route } from "react-router-dom";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const PostPagePost = ({ id }) => {
  const {
    isLoggedIn,
    userData,
    setUserData,
    openLoginModal,
    loginModal,
  } = useGlobalContext();
  let postUrl = "http://localhost:8000/posts/post/" + id;

  const [Post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [followStat, setFollowStat] = useState("");

  async function getPost() {
    try {
      const response = await fetch(postUrl);
      const data = await response.json();
      setPost(data);
      //setTotalLikes(data.likesArray.length);
      //setTotalComments(data.comments.length);
      setComments(data.comments); //new
      console.log(data.likesArray.length);
      console.log(isLoggedIn, userData);

      if (isLoggedIn) {
        if (userData.following.includes(data.author.id)) {
          console.log("currently following");
          setFollowStat("Unfollow User");
        } else {
          console.log("not followed");
          setFollowStat("Follow User");
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getPost();
  }, [isLoggedIn, id, userData]);

  async function handleLike() {
    if (!isLoggedIn) {
      openLoginModal();
    } else {
      const data = {
        user: userData,
      };
      axios
        .post("http://localhost:8000/posts/post/" + id + "/like", data)
        .then((res) => {
          console.log(res.data);
          //setTotalLikes(res.data.likes);
          setPost(res.data.post);
        });
    }
  }
  const handleComment = async () => {
    if (!isLoggedIn) {
      openLoginModal();
    } else {
      const data = {
        user: userData,
        comment: comment,
      };
      axios
        .post("http://localhost:8000/posts/post/" + id + "/comment", data)
        .then((res) => {
          setPost(res.data.post); //new
          console.log(res.data);
          //setTotalComments(res.data.commentsCount);
          setComments(res.data.comments);
          setComment("");
          document.getElementById("desc").value = "";
        });
    }
  };
  const handleFollow = () => {
    if (!isLoggedIn) {
      openLoginModal();
    } else {
      const data = {
        user: userData._id,
        following: Post.author.id,
      };
      if (!userData.following.includes(Post.author.id)) {
        axios.post("http://localhost:8000/users/follow", data).then((res) => {
          setFollowStat("Unfollow User");
          setUserData(res.data.user);
        });
      } else {
        axios.post("http://localhost:8000/users/unfollow", data).then((res) => {
          setFollowStat("Follow User");
          setUserData(res.data.user);
        });
      }
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
                {isLoggedIn && userData.username !== Post.author.username && (
                  <>
                    <span className="menu-item" onClick={handleLike}>
                      Like Post
                    </span>
                    <span className="menu-item" onClick={handleFollow}>
                      {followStat}
                    </span>
                  </>
                )}
                {!isLoggedIn && (
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
                    {typeof Post.likesArray === "undefined"
                      ? `0`
                      : Post.likesArray.length}{" "}
                    Likes
                  </span>
                }
              </div>
              <div className="postContent--info-icons-like">
                <span className="material-icons comment">insert_comment</span>
                {
                  <span className="count">
                    {typeof Post.comments === "undefined"
                      ? `0`
                      : Post.comments.length}{" "}
                    Comments
                  </span>
                }
              </div>
            </div>
            <span className="postContent--info-desc">{Post.desc}</span>
            <div className="postContent--info-tags">
              {Post.tags.map((item) => {
                return (
                  <Route
                    key={item}
                    render={({ history }) => (
                      <span
                        onClick={() => {
                          history.push(`../tagSearch/${item}`);
                        }}
                        className="tag"
                      >
                        {item}
                      </span>
                    )}
                  />
                );
                // <span className="tag">{item}</span>;
              })}
            </div>
          </div>
        </div>
        <div className="postContent--comments">
          <span className="subheading">Comments</span>
          <br />
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
          <PostsByUser id={Post.author.username} />
          <Recommended id={Post.author.username} tags={Post.tags} />
        </div>
      </div>
      {loginModal && <LoginModal />}
    </>
  );
};

export default PostPagePost;
