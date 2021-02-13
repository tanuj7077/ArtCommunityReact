import React, { useState, useEffect } from "react";
//import Carousel from "react-elastic-carousel";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { Users } from "../data";
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
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const User = ({ id }) => {
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
  return (
    <div className="userPage">
      <div className="userPage--background"></div>
      <div className="userPage--top">
        <div className="userPage--top-user">
          <img src={url} alt="" className="userPage--top-user-img" />
          <span className="userPage--top-user-name">Name</span>
          <span className="userPage--top-user-info">Info</span>
        </div>
        <div className="userPage--top-menu">
          <span className="menu-item">Home</span>
          <span className="menu-item">Gallery</span>
          <span className="menu-item">About</span>
          <span className="menu-item">Stats</span>
        </div>
      </div>
      <div className="userPage--main">
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
              <div class="userPage--home-posts-slider-slides">
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
          </div>
          <div className="userPage--home-following">
            <span className="subheading">Following</span>
            <div className="userPage--home-following-slider">
              <div className="userPage--home-following-slider-slides">
                {Users.map((user) => {
                  return (
                    <div className="item">
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
      </div>
    </div>
  );
};

export default User;
