/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import SubmitCoverModal from "../Modals/SubmitModals/SubmitCoverModal";
import SubmitProfilePicModal from "../Modals/SubmitModals/SubmitProfilePicModal";
import UserHome from "./UserHome";
import Gallery from "./Gallery";
import About from "./About";
import blank from "../../tagImage/blankProfile.png";

import { useGlobalContext } from "../../context";

const User = ({ username }) => {
  const {
    submitCoverModal,
    openSubmitCoverModal,
    submitProfilePicModal,
    openSubmitProfilePicModal,
    isLoggedIn,
    userData,
    changeAlert,
  } = useGlobalContext();
  let userUrl = `${process.env.REACT_APP_BASE_URL}/users/user/${username}`;

  const [user, setUser] = useState(null);
  const [cover, setCover] = useState("");
  const [profilePic, setProfilePic] = useState(blank);
  const [profileBorderRad, setProfileBorderRad] = useState("");
  const [following, setFollowing] = useState([]); //for about section
  const [followers, setFollowers] = useState([]); //for about section
  const [popularPosts, setPopularPosts] = useState([]); //for home section
  const [likedPosts, setLikedPosts] = useState([]); //for home section
  const [spotlight, setSpotlight] = useState({}); //for home section

  async function getUser() {
    try {
      const userResponse = await fetch(userUrl);
      const userdata = await userResponse.json();
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

  //--------------For Home Section--------------//
  async function getFollowing() {
    try {
      const followingUrl = `${process.env.REACT_APP_BASE_URL}/users/fetchFollowing/${username}`;
      const userResponse = await fetch(followingUrl);
      const userdata = await userResponse.json();
      setFollowing(userdata);
    } catch (er) {
      console.log(er);
    }
  }
  async function getFollowers() {
    try {
      const followerUrl = `${process.env.REACT_APP_BASE_URL}/users/fetchFollowers/${username}`;
      const userResponse = await fetch(followerUrl);
      const userdata = await userResponse.json();
      setFollowers(userdata);
    } catch (er) {
      console.log(er);
    }
  }
  const getPopularPosts = async () => {
    try {
      const num = 8;
      const url = `${process.env.REACT_APP_BASE_URL}/posts/getPopularPosts/${username}/${num}`;
      const userResponse = await fetch(url);
      const data = await userResponse.json();
      setPopularPosts(data);
      setSpotlight(data[0]);
    } catch (er) {
      console.log(er);
    }
  };
  const getLikedPosts = async () => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/posts/getLikedPosts/${username}`;
      const userResponse = await fetch(url);
      const data = await userResponse.json();
      setLikedPosts(data);
    } catch (er) {
      console.log(er);
    }
  };

  useEffect(() => {
    getUser();
    //getPostByUser();
    getFollowing();
    getFollowers();
    getPopularPosts();
    getLikedPosts();
  }, [username]);

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
        {userData.username === user.username &&
          typeof userData.coverPhoto !== "undefined" && (
            <div
              className="userPage--background"
              style={{
                backgroundImage: `url(${userData.coverPhoto})`,
              }}
            ></div>
          )}
        {userData.username === user.username &&
          typeof userData.coverPhoto === "undefined" && (
            <div className="userPage--background noCover"></div>
          )}

        {userData.username !== user.username && cover && (
          <div
            className="userPage--background"
            style={{ backgroundImage: `url(${cover})` }}
          ></div>
        )}
        {userData.username !== user.username && !cover && (
          <div className="userPage--background noCover"></div>
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
          {isHome && user && popularPosts && (
            <UserHome
              user={user}
              popular={popularPosts}
              liked={likedPosts}
              spotlight={spotlight}
            />
          )}
          {isGallery && <Gallery username={username} />}
          {isAbout && user && following && followers && (
            <About user={user} following={following} followers={followers} />
          )}
        </div>
      </div>
      {submitCoverModal && <SubmitCoverModal />}
      {submitProfilePicModal && <SubmitProfilePicModal />}
    </>
  );
};

export default User;
