import React, { useState, useEffect, useRef } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import blank from "../../tagImage/blankProfile.png";

const SinglePost = ({ _id, image, name, author, likesArray, comments }) => {
  let userUrl = "/users/hoverUser/" + author.id;

  const AuthorHoverRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [username, setUsername] = useState("");
  const [posts, setPosts] = useState([]);
  const [postCount, setPostCount] = useState(0);
  const [followerCount, setFollowerCount] = useState(0);
  const [coverPhoto, setCoverPhoto] = useState("");
  const [profilePic, setProfilePic] = useState(blank);
  const [profileBorderRad, setProfileBorderRad] = useState("");

  const handleMouseEnter = () => {
    //clear all data from previous hover
    if (username !== author.username) {
      setUsername("");
      setPosts([]);
      setPostCount(0);
      setFollowerCount(0);
      setCoverPhoto("");
      setProfilePic(blank);
      setProfileBorderRad("0%");
    }
    setIsHovered(true);
    setTimeout(() => {
      if (AuthorHoverRef.current) {
        document.getElementById("authorHover").classList.add("show");
        if (!username) {
          document.getElementById("authorHover").classList.add("loading");
        } else {
          document.getElementById("authorHover").classList.remove("loading");
        }
        positionItem();
      }
      if (username !== author.username) {
        //for not fetching data again and again
        //if same user is hovered
        getHoverData();
      }
    }, 100);
  };

  const getHoverData = async () => {
    await axios.get(userUrl).then((res) => {
      console.log(res.data);
      if (AuthorHoverRef.current) {
        document.getElementById("authorHover").classList.remove("loading");
      }
      setUsername(res.data.username);
      setPosts(res.data.posts);
      setPostCount(res.data.postCount);
      setFollowerCount(res.data.followerCount);
      setCoverPhoto(res.data.coverImage);
      if (!res.data.profilePic) {
        setProfilePic(blank);
      } else {
        setProfilePic(res.data.profilePic);
      }
      if (!res.data.profileBorderRad) {
        setProfileBorderRad("0%");
      } else {
        setProfileBorderRad(res.data.profileBorderRad + "%");
      }
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const positionItem = () => {
    let top = AuthorHoverRef.current.getBoundingClientRect().top;
    let left = AuthorHoverRef.current.getBoundingClientRect().left;
    let bottom = AuthorHoverRef.current.getBoundingClientRect().bottom;
    let right = AuthorHoverRef.current.getBoundingClientRect().right;

    if (top < 106) {
      document.getElementById("authorHover").style.top = 106 - top + "px";
    }
    if (right > window.innerWidth) {
      document.getElementById("authorHover").style.left =
        -(right - window.innerWidth) + "px";
    }
    if (bottom > window.innerHeight) {
      document.getElementById("authorHover").style.top =
        -(bottom - window.innerHeight + 110) + "px";
    }
  };

  return (
    <div className="grid-item">
      {isHovered && (
        <div
          className="authorHover"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={AuthorHoverRef}
          id="authorHover"
        >
          {!username && (
            <>
              <div className="authorHover-loading--cover"></div>
              <div className="authorHover-loading--profile"></div>
              <div className="authorHover-loading--name"></div>
              <div className="authorHover-loading--info"></div>
              <div className="authorHover-loading--images"></div>
            </>
          )}
          {username && (
            <>
              {coverPhoto && (
                <div
                  className="authorHover--cover"
                  style={{
                    backgroundImage: `linear-gradient(to bottom,transparent,rgba(43, 43, 43, 0.9)), url(${coverPhoto})`,
                  }}
                ></div>
              )}
              {!coverPhoto && <div className="authorHover--noCover"></div>}
              <Route
                render={({ history }) => (
                  <div
                    onClick={() => {
                      history.push(`/user/${username}`);
                    }}
                    className="authorHover--profile"
                    style={{
                      backgroundImage: `url(${profilePic})`,
                      borderRadius: `${profileBorderRad}`,
                    }}
                  ></div>
                )}
              />
              <Route
                render={({ history }) => (
                  <div
                    onClick={() => {
                      history.push(`/user/${username}`);
                    }}
                    className="authorHover--name"
                  >
                    {username}
                  </div>
                )}
              />
              {/* <div className="authorHover--name">{username}</div> */}
              <div className="authorHover--info">
                <span className="info">{postCount} Posts</span>
                <span className="lineBreak">|</span>
                <span className="info">{followerCount} Followers</span>
              </div>
              <div className="authorHover--images">
                {/* if images count > 3 add "SEE MORE"*/}
                {posts.map((post) => {
                  return (
                    <Route
                      render={({ history }) => (
                        <div
                          className="image"
                          style={{
                            backgroundImage: `url(${post.image})`,
                          }}
                          onClick={() => {
                            history.push(`/post/${post._id}`);
                          }}
                        ></div>
                      )}
                    />
                    // <div
                    //   className="image"
                    //   style={{
                    //     backgroundImage: `url(${post.image})`,
                    //   }}
                    // ></div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}
      <div className="grid-item--card">
        <img className="grid-item--card-img" src={image} alt="" />
        <div className="grid-item--card-img-overlay">
          <div className="grid-item--card-textualInfo">
            <Route
              render={({ history }) => (
                <span
                  onClick={() => {
                    history.push(`/post/${_id}`);
                  }}
                  className="grid-item--card-title"
                >
                  {name}
                </span>
              )}
            />
            <Route
              render={({ history }) => (
                <span
                  onClick={() => {
                    history.push(`/user/${author.username}`);
                  }}
                  className="grid-item--card-author"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {author.username}
                </span>
              )}
            />
          </div>
          <div className="grid-item--card-icons">
            <section className="grid-item--card-icons-likes">
              <span className="grid-item--card-icons-likes-count">
                {typeof likesArray === "undefined" ? `0` : likesArray.length}
              </span>
              <span className="material-icons grid-item--card-icons-likes-icon">
                favorite
              </span>
            </section>
            <section className="grid-item--card-icons-comments">
              <span className="grid-item--card-icons-comments-count">
                {typeof comments === "undefined" ? `0` : comments.length}
              </span>
              <span className="material-icons grid-item--card-icons-comments-icon">
                insert_comment
              </span>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
