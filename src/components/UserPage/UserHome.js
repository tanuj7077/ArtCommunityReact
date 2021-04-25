import React from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import {
  FaBirthdayCake,
  FaFacebookSquare,
  FaDiscord,
  FaPatreon,
  FaYoutube,
  FaCommentDots,
} from "react-icons/fa";
import { CgGenderFemale } from "react-icons/cg";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineLink, AiFillInstagram, AiFillLike } from "react-icons/ai";

import tree from "../../tagImage/tree.jpg";
import city from "../../tagImage/city.jpg";
import insect from "../../tagImage/insect.jpg";
import monochrome from "../../tagImage/monochrome.jpg";
import landscape from "../../tagImage/landscape.jpg";
import summer from "../../tagImage/summer.jpg";
import river from "../../tagImage/river.jpg";
import sky from "../../tagImage/sky.jpg";
import fanart from "../../tagImage/fanart.jpg";
import photography from "../../tagImage/photography.jpg";
import blank from "../../tagImage/blankProfile.png";

const UserHome = ({ following, followers }) => {
  const handleScroll = (side) => {
    if (side === "right") {
      document
        .getElementsByClassName("popular-slider-slides")[0]
        .scrollBy(500, 0);
    } else {
      document
        .getElementsByClassName("popular-slider-slides")[0]
        .scrollBy(-500, 0);
    }
  };

  return (
    <div className="userPage--home">
      <div className="userPage--home-about">
        <section className="subheading u-margin-bottom-small">
          About <span className="aboutName">Jake</span>
        </section>
        <div className="userPage--home-aboutInfo">
          <div className="userPage--home-aboutInfo-item">
            Artist // Professional // Digital Art
          </div>
          <div className="userPage--home-aboutInfo-item group-column">
            <div className="item">
              <FaBirthdayCake className="aboutIcon" />
              <span className="aboutText">Sep 7</span>
            </div>
            <div className="item">
              <HiLocationMarker className="aboutIcon" />
              <span className="aboutText">New Zealand</span>
            </div>
            <div className="item">
              <CgGenderFemale className="aboutIcon" />
              <span className="aboutText">Female</span>
            </div>
          </div>
          <div className="userPage--home-aboutInfo-item">
            Joined in Sep 4 2012
          </div>
          <div className="userPage--home-aboutInfo-item">
            <AiOutlineLink className="aboutIcon" />
            <span className="aboutText">www.jakeDraws.com</span>
          </div>
          <div className="userPage--home-aboutInfo-item group-row">
            <span className="u-margin-bottom-small">Follow me on</span>
            <span className="item">
              <FaFacebookSquare className="aboutIcon" />
              <span className="aboutText">Facebook</span>
            </span>
            <span className="item">
              <AiFillInstagram className="aboutIcon" />
              <span className="aboutText">Instagram</span>
            </span>
            <span className="item">
              <FaDiscord className="aboutIcon" />
              <span className="aboutText">Discord</span>
            </span>
            <span className="item">
              <FaPatreon className="aboutIcon" />
              <span className="aboutText">Patreon</span>
            </span>
            <span className="item">
              <FaYoutube className="aboutIcon" />
              <span className="aboutText">Youtube</span>
            </span>
          </div>
        </div>
      </div>

      <div className="userPage--home-spotlight">
        <section className="subheading u-margin-bottom-small">
          <span className="aboutName">Spotlight</span>
        </section>
        <section className="spotlight">
          <div className="spotlight-image">
            <img className="img-landscape" src={fanart} alt="" />
          </div>
          <div className="spotlight-info">
            <span className="spotlight-info-name">Beautiful image</span>
            <div className="spotlight-info-actions">
              <span className="spotlight-info-actions-like">
                <AiFillLike class="infoIcon" />
                <span className="text">50</span>
              </span>
              <span className="spotlight-info-actions-comment">
                <FaCommentDots class="infoIcon" />
                <span className="text">10</span>
              </span>
            </div>
          </div>
        </section>
      </div>

      <div className="userPage--home-following">
        <div className="following-section">
          <span className="subheading">Following</span>
          <div className="userPage--home-following-slider">
            {following.map((user) => {
              return (
                <div key={user.id} className="item">
                  {!user.image ? (
                    <div
                      className="img2"
                      style={{
                        backgroundImage: `url(${blank})`,
                      }}
                    ></div>
                  ) : (
                    <div
                      className="img2"
                      style={{
                        backgroundImage: `url(${user.image})`,
                        borderRadius: `${user.borderRad}%`,
                      }}
                    ></div>
                  )}

                  <span className="username">{user.username}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="follower-section">
          <span className="subheading">Followers</span>
          <div className="userPage--home-following-slider">
            {followers.map((user) => {
              return (
                <div key={user.id} className="item">
                  {!user.image ? (
                    <div
                      className="img2"
                      style={{
                        backgroundImage: `url(${blank})`,
                      }}
                    ></div>
                  ) : (
                    <div
                      className="img2"
                      style={{
                        backgroundImage: `url(${user.image})`,
                        borderRadius: `${user.borderRad}%`,
                      }}
                    ></div>
                  )}

                  <span className="username">{user.username}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="userPage--home-posts">
        <div className="popular">
          <span className="subheading">Popular Uploads</span>
          <div className="popular-slider">
            <span
              className="popular-slider-leftButton"
              onClick={() => handleScroll("left")}
            >
              <VscChevronLeft className="icon" />
            </span>
            <div className="popular-slider-slides">
              <img draggable="false" src={tree} alt="" className="slider-img" />
              <img draggable="false" src={city} alt="" className="slider-img" />
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
              <img draggable="false" src={sky} alt="" className="slider-img" />
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
              className="popular-slider-rightButton"
              onClick={() => handleScroll("right")}
            >
              <VscChevronRight className="icon" />
            </span>
          </div>
        </div>

        <div className="likedSection">
          <span className="subheading">Liked Posts</span>
          <div className="liked">
            <div className="liked-masonry">
              <div className="liked-masonry-item">
                {" "}
                <img
                  draggable="false"
                  src={tree}
                  alt=""
                  className="liked-img"
                />
              </div>
              <div className="liked-masonry-item">
                {" "}
                <img
                  draggable="false"
                  src={city}
                  alt=""
                  className="liked-img"
                />
              </div>
              <div className="liked-masonry-item">
                <img
                  draggable="false"
                  src={insect}
                  alt=""
                  className="liked-img"
                />
              </div>
              <div className="liked-masonry-item">
                <img
                  draggable="false"
                  src={monochrome}
                  alt=""
                  className="liked-img"
                />
              </div>
              <div className="liked-masonry-item">
                <img
                  draggable="false"
                  src={landscape}
                  alt=""
                  className="liked-img"
                />
              </div>
              <div className="liked-masonry-item">
                <img
                  draggable="false"
                  src={summer}
                  alt=""
                  className="liked-img"
                />
              </div>
              <div className="liked-masonry-item">
                {" "}
                <img
                  draggable="false"
                  src={river}
                  alt=""
                  className="liked-img"
                />
              </div>
              <div className="liked-masonry-item">
                {" "}
                <img draggable="false" src={sky} alt="" className="liked-img" />
              </div>
              <div className="liked-masonry-item">
                <img
                  draggable="false"
                  src={fanart}
                  alt=""
                  className="liked-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
