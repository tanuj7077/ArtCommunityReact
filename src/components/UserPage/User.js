/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import SubmitCoverModal from "../SubmitCoverModal";
import SubmitProfilePicModal from "../SubmitProfilePicModal";
import UserHome from "./UserHome";
import Gallery from "./Gallery";
import About from "./About";
import blank from "../../tagImage/blankProfile.png";

import { useGlobalContext } from "../../context";

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
  const [following, setFollowing] = useState([]); //for about section
  const [followers, setFollowers] = useState([]); //for about section
  const [userPosts, setUserPost] = useState([]); //for gallery section
  const [popularPosts, setPopularPosts] = useState([]); //for home section
  const [likedPosts, setLikedPosts] = useState([]); //for home section
  const [spotlight, setSpotlight] = useState({}); //for home section

  //------------Pagination for gallerySection------------
  const LIMIT = 9;
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const paginate = (postArr, limit, pageNo) => {
    return postArr.slice((pageNo - 1) * limit, pageNo * limit);
  };
  const addPosts = () => {
    var arr = [];
    var paginated = paginate(userPosts, LIMIT, page);
    arr = [...posts, ...paginated];
    setPosts(arr);
  };

  useEffect(() => {
    addPosts();
  }, [page]);

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

  //------------For Gallery Section------------//
  async function getPostByUser() {
    try {
      const LIMIT = -1;
      const postUrl =
        "http://localhost:8000/posts/postByUser/" + id + "/" + LIMIT;
      const PostResponse = await fetch(postUrl);
      const postData = await PostResponse.json();
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
      setFollowing(userdata);
    } catch (er) {
      console.log(er);
    }
  }
  async function getFollowers() {
    try {
      const followerUrl = "http://localhost:8000/users/fetchFollowers/" + id;
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
      const url =
        "http://localhost:8000/posts/getPopularPosts/" + id + "/" + num;
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
      const url = "http://localhost:8000/posts/getLikedPosts/" + id;
      const userResponse = await fetch(url);
      const data = await userResponse.json();
      setLikedPosts(data);
    } catch (er) {
      console.log(er);
    }
  };

  useEffect(() => {
    getUser();
    getPostByUser();
    getFollowing();
    getFollowers();
    getPopularPosts();
    getLikedPosts();
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
        {/* {userData.username === user.username ? (
          <div
            className="userPage--background"
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
        )} */}
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
          {/* {isGallery && userPosts && <Gallery userPosts={userPosts} />} */}
          {isGallery && userPosts && (
            <Gallery
              userPosts={userPosts}
              posts={posts}
              setPage={setPage}
              page={page}
            />
          )}
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
