/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useGlobalContext } from "../../context";
import CommentList from "./Comments/CommentList";
import PostsByUser from "./PostsByUser/PostsByUser";
import Recommended from "./Recommended/Recommended";
import SignupModal from "../Modals/LoginModal/SignupModal";
import axios from "axios";
import { Route, useHistory } from "react-router-dom";
import blank from "../../tagImage/blankProfile.png";
import { BsHeartFill } from "react-icons/bs";
import {
  MdDelete,
  MdComment,
  MdFullscreen,
  MdFullscreenExit,
} from "react-icons/md";

//-----------------------Firebase-----------------------
import firebase from "firebase/app";
import "firebase/storage";
var config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}
var storage = firebase.storage();
//---------Firebase end----------------------//

const PostPagePost = ({ id }) => {
  const {
    isLoggedIn,
    userData,
    setUserData,
    setSignupModalVisibility,
    signupModalVisibility,
    changeAlert,
    updatePostsBackend,
  } = useGlobalContext();
  let postUrl =
    "https://shielded-woodland-79171.herokuapp.com/posts/post1/" + id;

  const [Post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [followStat, setFollowStat] = useState("");
  const [expanded, setExpanded] = useState(false);

  async function getPost() {
    try {
      const response = await fetch(postUrl);
      const data = await response.json();
      setPost(data);
      setComments(data.comments);

      if (isLoggedIn) {
        if (userData.following.includes(data.author.id)) {
          setFollowStat("Unfollow User");
        } else {
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
      setSignupModalVisibility(true);
    } else {
      const data = {
        user: userData,
      };
      axios
        .post(
          "https://shielded-woodland-79171.herokuapp.com/posts/post/" +
            id +
            "/like",
          data
        )
        .then((res) => {
          changeAlert(res.data.message);
          if (res.data.post) {
            setPost(res.data.post);
          }
        });
    }
  }
  const history = useHistory();
  const handleDelete = async () => {
    var imageUrl = Post.image.slice(69, -1);
    var ar = imageUrl
      .split("%2F")
      .join(",")
      .split("?")
      .join(",")
      .split("/")[0]
      .split(",");
    var imageName = ar[1];
    var firebaseFolder = ar[0];
    try {
      storage
        .ref(firebaseFolder)
        .child(imageName)
        .delete()
        .then(() => {
          axios
            .post(
              "https://shielded-woodland-79171.herokuapp.com/posts/deletePost/" +
                id
            )
            .then((res) => {
              setUserData(res.data.user);
              changeAlert(res.data.message);
              updatePostsBackend();
              history.push("/");
            });
        });
    } catch (err) {
      console.log(err);
    }
  };
  const handleComment = async () => {
    if (!isLoggedIn) {
      setSignupModalVisibility(true);
    } else {
      const data = {
        user: userData,
        comment: comment,
      };
      axios
        .post(
          "https://shielded-woodland-79171.herokuapp.com/posts/post/" +
            id +
            "/comment",
          data
        )
        .then((res) => {
          changeAlert(res.data.message);
          setPost(res.data.post); //new
          //setTotalComments(res.data.commentsCount);
          setComments(res.data.comments);
          setComment("");
          document.getElementById("desc").value = "";
        });
    }
  };
  const handleFollow = () => {
    if (!isLoggedIn) {
      setSignupModalVisibility(true);
    } else {
      const data = {
        user: userData._id,
        following: Post.author.id,
      };
      if (!userData.following.includes(Post.author.id)) {
        axios
          .post(
            "https://shielded-woodland-79171.herokuapp.com/users/follow",
            data
          )
          .then((res) => {
            setFollowStat("Unfollow User");
            setUserData(res.data.user);
            changeAlert(res.data.message);
          });
      } else {
        axios
          .post(
            "https://shielded-woodland-79171.herokuapp.com/users/unfollow",
            data
          )
          .then((res) => {
            setFollowStat("Follow User");
            setUserData(res.data.user);
            changeAlert(res.data.message);
          });
      }
    }
  };

  const toggleExpand = () => {
    expanded ? setExpanded(false) : setExpanded(true);
  };

  // if (!Post) {
  //   return <>Hey</>;
  // }
  return (
    <>
      <div className="postPage">
        <div className="postContent">
          {Post && (
            <div className="postContent--image">
              <img className="postContent--image-img" src={Post.image} alt="" />
              <span
                className="postContent--image-expand"
                onClick={toggleExpand}
              >
                <MdFullscreen className="icon" />
              </span>
            </div>
          )}
          {!Post && <div className="postContent--image"></div>}
          <div className="postContent--info">
            {Post && (
              <>
                <div className="postContent--info-author">
                  <span className="postContent--info-author-title">
                    {Post.name}
                  </span>
                  <div className="postContent--info-author-detail">
                    <div
                      className="userImg"
                      style={{
                        backgroundImage: `url(${
                          typeof Post.authorPic === "undefined"
                            ? blank
                            : Post.authorPic
                        })`,
                        borderRadius: `${
                          typeof Post.authorPicBorder === "undefined"
                            ? "0%"
                            : Post.authorPicBorder + "%"
                        }`,
                      }}
                    ></div>
                    <Route
                      render={({ history }) => (
                        <span
                          onClick={() => {
                            history.push(`/user/${Post.author.username}`);
                          }}
                          className="name"
                        >
                          {Post.author.username}
                        </span>
                      )}
                    />
                    {/* <span className="name">{Post.author.username}</span> */}
                  </div>
                </div>
                <div className="postContent--info-icons">
                  <div className="postContent--info-icons-like">
                    {isLoggedIn &&
                    userData.username !== Post.author.username ? (
                      <BsHeartFill className="icon" onClick={handleLike} />
                    ) : (
                      <BsHeartFill className="icon" />
                    )}

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
                    <MdComment className="icon" />
                    {/* <span className="material-icons comment">insert_comment</span> */}
                    {
                      <span className="count">
                        {typeof Post.comments === "undefined"
                          ? `0`
                          : Post.comments.length}{" "}
                        Comments
                      </span>
                    }
                  </div>
                  {isLoggedIn && userData.username === Post.author.username && (
                    <div
                      className="postContent--info-icons-like"
                      onClick={handleDelete}
                    >
                      <MdDelete className="icon" />
                      <span className="count">Delete</span>
                    </div>
                  )}
                  {isLoggedIn && userData.username !== Post.author.username && (
                    <span
                      className="postContent--info-icons-like followBtn"
                      onClick={handleFollow}
                    >
                      {followStat}
                    </span>
                  )}
                  {!isLoggedIn && (
                    <span
                      className="postContent--info-icons-like followBtn"
                      onClick={handleFollow}
                    >
                      Follow Author
                    </span>
                  )}
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
                  })}
                </div>
              </>
            )}
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
          {comment && (
            <button
              className="btn btn-submit u-margin-bottom-small"
              type="button"
              onClick={handleComment}
            >
              Submit
            </button>
          )}
          {Post && typeof Post.comments !== "undefined" && (
            <CommentList commentArr={comments} postId={Post._id} />
          )}
        </div>

        <div className="otherContent">
          {Post && (
            <>
              <PostsByUser id={Post.author.username} />
              <Recommended id={Post.author.username} tags={Post.tags} />
            </>
          )}
          {!Post && (
            <>
              <div className="otherContent--user">
                <span className="otherContent--subheading">By User</span>
                <div className="otherContent--loading">
                  <span>Loading...</span>
                </div>
              </div>
              <div className="otherContent--user">
                <div className="otherContent--loading">
                  <span>Loading...</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {signupModalVisibility && <SignupModal />}
      {expanded && (
        <div className="expandedImage">
          <img className="expandedImage-img" src={Post.image} alt="" />
          <span className="expandedImage-shrink" onClick={toggleExpand}>
            <MdFullscreenExit className="icon" />
          </span>
        </div>
      )}
    </>
  );
};

export default PostPagePost;
