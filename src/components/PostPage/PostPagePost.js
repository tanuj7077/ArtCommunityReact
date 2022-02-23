/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context";
import ReactDOM from "react-dom";
import axios from "axios";
import { Route, useHistory } from "react-router-dom";
import blank from "../../tagImage/blankProfile.png";
import {
  MdDelete,
  MdComment,
  MdFullscreen,
  MdFullscreenExit,
  BsHeartFill,
} from "../../commonImports/reactIcons";

import {
  CommentList,
  PostsByUser,
  Recommended,
} from "../../commonImports/commonImports";
import { FIREBASE_CONFIG } from "../../constants";

//-----------------------Firebase-----------------------
import firebase from "firebase/app";
import "firebase/storage";
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
} else {
  firebase.app(); // if already initialized, use that one
}
let storage = firebase.storage();
//---------Firebase end----------------------//

const PostPagePost = ({ id }) => {
  const {
    isLoggedIn,
    userData,
    setUserData,
    setSignupModalVisibility,
    changeAlert,
  } = useGlobalContext();
  let postUrl = `${process.env.REACT_APP_BASE_URL}/posts/post1/${id}`;

  const [Post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [followStat, setFollowStat] = useState("");
  const [expanded, setExpanded] = useState(false);

  // const [renderCount, setRenderCount] = useState(0);

  // useEffect(() => {
  //   setRenderCount(renderCount + 1);
  //   console.log(renderCount);
  // }, [Post, comment, comments, followStat, expanded, userData]);

  async function getPost() {
    try {
      const response = await fetch(postUrl);
      const data = await response.json();
      console.log(data);
      if (typeof data === "string" || data instanceof String)
        throw Error("something wrong happened");

      ReactDOM.unstable_batchedUpdates(() => {
        setPost(data);
        setComments(data.comments);
        if (isLoggedIn) {
          if (userData?.following?.includes(data.author.id)) {
            setFollowStat("Unfollow User");
          } else {
            setFollowStat("Follow User");
          }
        }
      });
    } catch (err) {
      changeAlert({
        type: "success",
        messages: ["Post deleted"],
      });
      history.push("/");
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
        .post(`${process.env.REACT_APP_BASE_URL}/posts/post/${id}/like`, data)
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
    let imageUrl = Post.image.slice(71, -1);
    let imageMdUrl = Post.imageMd.slice(71, -1);
    let imageThumbUrl = Post.imageThumb.slice(71, -1);
    let firebaseFolder = imageUrl.split("%2F")[0];
    let imageName = imageUrl.split("%2F")[1].split("?")[0];
    let imageMdName = imageMdUrl.split("%2F")[1].split("?")[0];
    let imageThumbName = imageThumbUrl.split("%2F")[1].split("?")[0];

    let promise1 = storage.ref(firebaseFolder).child(imageName).delete();
    let promise2 = storage.ref(firebaseFolder).child(imageMdName).delete();
    let promise3 = storage.ref(firebaseFolder).child(imageThumbName).delete();
    Promise.all([promise1, promise2, promise3]).then(() => {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/posts/deletePost/${id}`)
        .then((res) => {
          setUserData(res.data.user);
          changeAlert(res.data.message);
          history.push("/");
        });
    });
    // try {
    //   storage
    //     .ref(firebaseFolder)
    //     .child(imageName)
    //     .delete()
    //     .then(() => {
    //       axios
    //         .post(`${process.env.REACT_APP_BASE_URL}/posts/deletePost/${id}`)
    //         .then((res) => {
    //           setUserData(res.data.user);
    //           changeAlert(res.data.message);
    //           history.push("/");
    //         });
    //     });
    // } catch (err) {
    //   console.log(err);
    // }
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
          `${process.env.REACT_APP_BASE_URL}/posts/post/${id}/comment`,
          data
        )
        .then((res) => {
          changeAlert(res.data.message);

          ReactDOM.unstable_batchedUpdates(() => {
            setPost(res.data.post); //new
            setComments(res.data.comments);
            setComment("");
          });
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
          .post(`${process.env.REACT_APP_BASE_URL}/users/follow`, data)
          .then((res) => {
            ReactDOM.unstable_batchedUpdates(() => {
              setFollowStat("Unfollow User");
              setUserData(res.data.user);
            });
            changeAlert(res.data.message);
          });
      } else {
        axios
          .post(`${process.env.REACT_APP_BASE_URL}/users/unfollow`, data)
          .then((res) => {
            ReactDOM.unstable_batchedUpdates(() => {
              setFollowStat("Follow User");
              setUserData(res.data.user);
            });
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
      {Post && (
        <div className="postPage">
          <div className="postContent">
            {Post && (
              <div className="postContent--image">
                <img
                  className="postContent--image-img"
                  src={Post.imageMd}
                  alt=""
                />
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
                        <BsHeartFill className="icon" onClick={handleLike} />
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
                  {Post && Post.desc && (
                    <span className="postContent--info-desc">{Post.desc}</span>
                  )}
                  <div className="postContent--info-tags">
                    {Post.tags.map((item) => {
                      return (
                        <Route
                          key={`postContentTag_${item}`}
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
                {Post.tags.length > 0 && (
                  <Recommended id={Post.author.username} tags={Post.tags} />
                )}
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
      )}
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
