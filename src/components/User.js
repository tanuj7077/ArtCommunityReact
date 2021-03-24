import React, { useState, useEffect } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { Users } from "../data";
import SubmitCoverModal from "./SubmitCoverModal";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SinglePost from "./SinglePost";
import tree from "../tagImage/tree.jpg";
import city from "../tagImage/city.jpg";
import insect from "../tagImage/insect.jpg";
import monochrome from "../tagImage/monochrome.jpg";
import landscape from "../tagImage/landscape.jpg";
import summer from "../tagImage/summer.jpg";
import river from "../tagImage/river.jpg";
import sky from "../tagImage/sky.jpg";
import fanart from "../tagImage/fanart.jpg";
import photography from "../tagImage/photography.jpg";

import { useGlobalContext } from "../context";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const User = ({ id }) => {
  const {
    submitCoverModal,
    openSubmitCoverModal,
    isLoggedIn,
  } = useGlobalContext();
  let userUrl = "http://localhost:8000/users/user/" + id;
  let postUrl = "http://localhost:8000/posts/postByUser/" + id;

  const [user, setUser] = useState(null);
  const [userPosts, setUserPost] = useState([]);

  async function getUser() {
    try {
      const userResponse = await fetch(userUrl);
      const userData = await userResponse.json();
      console.log(userData);
      setUser(userData);
    } catch (er) {
      console.log(er);
    }
  }

  async function getPostByUser() {
    try {
      const PostResponse = await fetch(postUrl);
      const postData = await PostResponse.json();
      console.log(postData);
      setUserPost(postData);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUser();
    getPostByUser();
  }, [id]);
  useEffect(() => {
    getPostByUser();
  }, [id]);

  const [isHome, setHome] = useState(true);
  const [isGallery, setGallery] = useState(false);
  const [isAbout, setAbout] = useState(false);
  const [isStats, setStats] = useState(false);

  const handleScroll = (side) => {
    if (side === "right") {
      document
        .getElementsByClassName("userPage--home-posts-slider-slides")[0]
        .scrollBy(500, 0);
    } else {
      document
        .getElementsByClassName("userPage--home-posts-slider-slides")[0]
        .scrollBy(-500, 0);
    }
  };
  const toHome = () => {
    setHome(true);
    setGallery(false);
    setAbout(false);
    setStats(false);
  };
  const toGallery = () => {
    setHome(false);
    setGallery(true);
    setAbout(false);
    setStats(false);
  };
  const toAbout = () => {
    setHome(false);
    setGallery(false);
    setAbout(true);
    setStats(false);
  };
  const toStats = () => {
    setHome(false);
    setGallery(false);
    setAbout(false);
    setStats(true);
  };

  if (!user) {
    return <>Hey</>;
  }
  return (
    <>
      <div className="userPage">
        <div
          className="userPage--background"
          // style={`backgroundImage: ${url}`}
          style={{ backgroundImage: `url(${insect})` }}
        ></div>
        <div className="userPage--top">
          <div className="userPage--top-user">
            <img src={url} alt="" className="userPage--top-user-img" />
            <span className="userPage--top-user-imgOverlay">
              Update <br /> Picture
            </span>
            <span className="userPage--top-user-name">{user.fullname}</span>
            <div className="userPage--top-user-info">
              <span className="userPostCount">{user.posts.length} Posts</span>
              <span className="lineBreak"> | </span>
              <span className="userFollowerCount">
                {user.following.length} Followers
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
            <span className="menu-item" onClick={() => toStats()}>
              Stats
            </span>
          </div>
          {isLoggedIn && (
            <div className="userPage--top-cover" onClick={openSubmitCoverModal}>
              Change Cover
            </div>
          )}
        </div>
        <div className="userPage--main">
          {isHome && (
            <div className="userPage--home">
              <div className="userPage--home-posts">
                <span className="subheading">Latest Uploads</span>
                <div className="userPage--home-posts-slider">
                  <span
                    className="userPage--home-posts-slider-leftButton"
                    onClick={() => handleScroll("left")}
                  >
                    <VscChevronLeft className="icon" />
                  </span>
                  <div className="userPage--home-posts-slider-slides">
                    <img
                      draggable="false"
                      src={tree}
                      alt=""
                      className="slider-img"
                    />
                    <img
                      draggable="false"
                      src={city}
                      alt=""
                      className="slider-img"
                    />
                    <img
                      draggable="false"
                      src={insect}
                      alt=""
                      className="slider-img"
                    />
                    <img
                      draggable="false"
                      src={monochrome}
                      alt=""
                      className="slider-img"
                    />
                    <img
                      draggable="false"
                      src={landscape}
                      alt=""
                      className="slider-img"
                    />
                    <img
                      draggable="false"
                      src={summer}
                      alt=""
                      className="slider-img"
                    />
                    <img
                      draggable="false"
                      src={river}
                      alt=""
                      className="slider-img"
                    />
                    <img
                      draggable="false"
                      src={sky}
                      alt=""
                      className="slider-img"
                    />
                    <img
                      draggable="false"
                      src={fanart}
                      alt=""
                      className="slider-img"
                    />
                    <img
                      draggable="false"
                      src={photography}
                      alt=""
                      className="slider-img"
                    />
                  </div>

                  <span
                    className="userPage--home-posts-slider-rightButton"
                    onClick={() => handleScroll("right")}
                  >
                    <VscChevronRight className="icon" />
                  </span>
                </div>
                <span className="subheading">Liked Posts</span>
              </div>
              <div className="userPage--home-following">
                <span className="subheading">Following</span>
                <div className="userPage--home-following-slider">
                  <div className="userPage--home-following-slider-slides">
                    {Users.map((user, id) => {
                      return (
                        <div key={user.username + id} className="item">
                          <img src={user.image} alt="" className="img" />
                          <span className="username">{user.username}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="userPage--home-about">
                <span className="subheading">About</span>
                <div className="userPage--home-about-name">Julian</div>
                <div className="userPage--home-about-location">New Zealand</div>
                <div className="userPage--home-about-gender">Female</div>
                <div className="userPage--home-about-profession">
                  Digital Artist
                </div>
                <div className="userPage--home-about-bio"></div>
                <div className="userPage--home-about-link"></div>
              </div>
            </div>
          )}
          {isGallery && (
            <div className="userPage--gallery">
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1000: 4 }}
              >
                <Masonry>
                  {userPosts.map((post) => {
                    return <SinglePost key={post._id} {...post} />;
                  })}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          )}
          {isAbout && <div className="userPage--about">about</div>}
          {isStats && <div className="userPage--stats">Stats</div>}
        </div>
      </div>
      {submitCoverModal && <SubmitCoverModal id={id} />}
    </>
  );
};

export default User;
