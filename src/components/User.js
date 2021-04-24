import React, { useState, useEffect } from "react";
import SubmitCoverModal from "./SubmitCoverModal";
import SubmitProfilePicModal from "./SubmitProfilePicModal";
import UserHome from "./UserPage/UserHome";
import Gallery from "./UserPage/Gallery";
import blank from "../tagImage/blankProfile.png";

import { useGlobalContext } from "../context";

const User = ({ id }) => {
  const {
    submitCoverModal,
    openSubmitCoverModal,
    submitProfilePicModal,
    openSubmitProfilePicModal,
    isLoggedIn,
    userData,
  } = useGlobalContext();
  let userUrl = "http://localhost:8000/users/user/" + id;

  const [user, setUser] = useState(null);
  const [cover, setCover] = useState("");
  const [profilePic, setProfilePic] = useState(blank);
  const [profileBorderRad, setProfileBorderRad] = useState("");
  const [following, setFollowing] = useState([]); //for home section
  const [followers, setFollowers] = useState([]); //for home section
  const [userPosts, setUserPost] = useState([]); //for gallery section

  async function getUser() {
    try {
      const userResponse = await fetch(userUrl);
      const userdata = await userResponse.json();
      console.log(userdata);
      setUser(userdata);
      if (typeof userdata.coverPhoto !== "undefined") {
        setCover(userdata.coverPhoto);
      }
      if (typeof userdata.profilePic !== "undefined") {
        setProfilePic(userdata.profilePic);
      }
      if (typeof userdata.profileBorderRad !== "undefined") {
        setProfileBorderRad(userdata.profileBorderRad + "%");
      }
    } catch (er) {
      console.log(er);
    }
  }

  //------------For Gallery Section------------//
  async function getPostByUser() {
    try {
      const postUrl = "http://localhost:8000/posts/postByUser/" + id;
      const PostResponse = await fetch(postUrl);
      const postData = await PostResponse.json();
      console.log(postData);
      setUserPost(postData);
    } catch (err) {
      console.log(err);
    }
  }

  //--------------For Home Section--------------//
  async function getFollowing() {
    try {
      const followingUrl = "http://localhost:8000/users/fetchFollowing/" + id;
      const userResponse = await fetch(followingUrl);
      const userdata = await userResponse.json();
      console.log(userdata);
      setFollowing(userdata);
    } catch (er) {
      console.log(er);
    }
  }
  async function getFollowers() {
    try {
      const followingUrl = "http://localhost:8000/users/fetchFollowing/" + id;
      const userResponse = await fetch(followingUrl);
      const userdata = await userResponse.json();
      console.log(userdata);
      setFollowers(userdata);
    } catch (er) {
      console.log(er);
    }
  }

  useEffect(() => {
    getUser();
    getPostByUser();
    getFollowing();
    getFollowers();
  }, [id]);

  const [isHome, setHome] = useState(true);
  const [isGallery, setGallery] = useState(false);
  const [isAbout, setAbout] = useState(false);

  const toHome = () => {
    setHome(true);
    setGallery(false);
    setAbout(false);
  };
  const toGallery = () => {
    setHome(false);
    setGallery(true);
    setAbout(false);
  };
  const toAbout = () => {
    setHome(false);
    setGallery(false);
    setAbout(true);
  };

  if (!user) {
    return <>Hey</>;
  }
  return (
    <>
      <div className="userPage">
        {userData.username === user.username ? (
          <div
            className="userPage--background"
            // style={{ backgroundImage: `url(${cover})` }}
            style={{
              backgroundImage: `url(${
                typeof userData.coverPhoto === "undefined"
                  ? ``
                  : userData.coverPhoto
              })`,
            }}
          ></div>
        ) : (
          <div
            className="userPage--background"
            style={{ backgroundImage: `url(${cover})` }}
          ></div>
        )}

        <div className="userPage--top">
          <div className="userPage--top-user">
            {userData.username === user.username ? (
              <div
                className="userPage--top-user-img"
                style={{
                  backgroundImage: `url(${
                    typeof userData.profilePic === "undefined"
                      ? blank
                      : userData.profilePic
                  })`,
                  borderRadius: `${
                    typeof userData.profileBorderRad === "undefined"
                      ? "0%"
                      : userData.profileBorderRad + "%"
                  }`,
                }}
              ></div>
            ) : (
              <div
                className="userPage--top-user-img"
                style={{
                  backgroundImage: `url(${profilePic})`,
                  borderRadius: `${profileBorderRad}`,
                }}
              ></div>
            )}
            {/* <img src={url} alt="" className="userPage--top-user-img" /> */}
            {isLoggedIn && userData.username === user.username && (
              <span
                className="userPage--top-user-imgOverlay"
                onClick={openSubmitProfilePicModal}
                style={{
                  borderRadius: `${
                    typeof userData.profileBorderRad === "undefined"
                      ? "0%"
                      : userData.profileBorderRad + "%"
                  }`,
                }}
              >
                Update <br /> Picture
              </span>
            )}
            <span className="userPage--top-user-name">{user.fullname}</span>
            <div className="userPage--top-user-info">
              <span className="userPostCount">{user.posts.length} Posts</span>
              <span className="lineBreak"> | </span>
              <span className="userFollowerCount">
                {user.followers.length} Followers
              </span>
            </div>
          </div>
          <div className="userPage--top-menu">
            <span className="menu-item" onClick={() => toHome()}>
              Home
            </span>
            <span className="menu-item" onClick={() => toGallery()}>
              Gallery
            </span>
            <span className="menu-item" onClick={() => toAbout()}>
              About
            </span>
          </div>
          {isLoggedIn && userData.username === user.username && (
            <div className="userPage--top-cover" onClick={openSubmitCoverModal}>
              Change Cover
            </div>
          )}
        </div>

        <div className="userPage--main">
          {isHome && following && followers && (
            <UserHome following={following} followers={followers} />
          )}
          {isGallery && userPosts && <Gallery userPosts={userPosts} />}
          {isAbout && <div className="userPage--about">about</div>}
        </div>
      </div>
      {submitCoverModal && <SubmitCoverModal />}
      {submitProfilePicModal && <SubmitProfilePicModal />}
    </>
  );
};

export default User;
