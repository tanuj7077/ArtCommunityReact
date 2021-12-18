/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { Route } from "react-router-dom";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

import blank from "../../tagImage/blankProfile.png";

const Followed = (userId) => {
  const sliderRef = useRef(null);
  const rightBtnRef = useRef(null);
  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState(0);
  const [profilePic, setProfilePic] = useState("");
  const [borderRad, setBorderRad] = useState();
  const [posts, setPosts] = useState([]);
  const [btnVisibility, setBtnVisibility] = useState(false);

  async function getPostsByUserId() {
    try {
      const LIMIT = 9;
      const postUrl =
        "https://shielded-woodland-79171.herokuapp.com/posts/postsByUserId/" +
        userId.userId +
        "/" +
        LIMIT;
      const PostResponse = await fetch(postUrl);
      const postData = await PostResponse.json();
      setUsername(postData.username);
      setFollowers(postData.followers);
      setProfilePic(postData.profilePic);
      setBorderRad(postData.profileBorderRad);
      setPosts(postData.posts);
    } catch (err) {
      console.log(err);
    }
  }

  const setButtonVisibility = () => {
    if (
      posts &&
      sliderRef &&
      rightBtnRef &&
      sliderRef.current &&
      rightBtnRef.current
    ) {
      if (sliderRef.current.clientWidth >= rightBtnRef.current.offsetLeft) {
        setBtnVisibility(true);
      }
      if (sliderRef.current.clientWidth < rightBtnRef.current.offsetLeft) {
        setBtnVisibility(false);
      }
    }
  };

  useEffect(() => {
    getPostsByUserId();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setButtonVisibility();
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    const event = window.addEventListener("resize", setButtonVisibility);
    return () => window.removeEventListener("resize", event);
  }, []);

  const handleScroll = (side) => {
    if (side === "right") {
      sliderRef.current.scrollBy(500, 0);
    } else {
      sliderRef.current.scrollBy(-500, 0);
    }
  };

  return (
    <div className="followed">
      {username && (
        <div className="user">
          <div
            className="userImg"
            style={{
              backgroundImage: `url(${
                typeof profilePic === "undefined" ? blank : profilePic
              })`,
              borderRadius: `${
                typeof borderRad === "undefined" ? "50%" : borderRad + "%"
              }`,
            }}
          ></div>
          <Route
            render={({ history }) => (
              <span
                onClick={() => {
                  history.push(`/user/${username}`);
                }}
                className="username"
              >
                {username}
              </span>
            )}
          />
          <span className="userFollowers">{followers} Followers</span>
        </div>
      )}
      {!username && (
        <div className="userNotLoaded">
          <div className="userImg"></div>
          <span className="username"></span>
          <span className="userFollowers"></span>
        </div>
      )}
      <div className="slider">
        <span
          className="leftButton"
          onClick={() => handleScroll("left")}
          style={{
            visibility: `${btnVisibility ? "visible" : "hidden"}`,
          }}
        >
          <VscChevronLeft className="icon" />
        </span>

        <div className="followedItems" ref={sliderRef}>
          {posts &&
            posts.map((post) => {
              return (
                <div className="item">
                  <img
                    src={post.image}
                    draggable="false"
                    alt="Img"
                    className="img"
                  />
                  <div className="imgInfo">
                    <Route
                      render={({ history }) => (
                        <span
                          onClick={() => {
                            history.push(`/post/${post._id}`);
                          }}
                          className="name"
                        >
                          {post.name}
                        </span>
                      )}
                    />
                    {/* <span className="name">{post.name}</span> */}
                    <div className="others">
                      <span className="likes">
                        {post.likesArray.length} likes
                      </span>
                      <span className="comments">
                        {post.comments.length} comments
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          {/* {posts && posts.length === 0 &&
            <>
              <span className="itemNotLoaded">
              </span>
              <span className="itemNotLoaded">
              </span>
              <span className="itemNotLoaded">
              </span>
            </>
          } */}
        </div>
        {posts && posts.length === 0 && (
          <div className="followedItems-notLoaded"></div>
        )}

        <span
          className="rightButton"
          ref={rightBtnRef}
          onClick={() => handleScroll("right")}
          style={{
            visibility: `${btnVisibility ? "visible" : "hidden"}`,
          }}
        >
          <VscChevronRight className="icon" />
        </span>
      </div>
    </div>
  );
};

export default Followed;
