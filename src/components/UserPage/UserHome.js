import React, { useState, useEffect } from "react";
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
  "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";

const UserHome = ({ id }) => {
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
            <img draggable="false" src={tree} alt="" className="slider-img" />
            <img draggable="false" src={city} alt="" className="slider-img" />
            <img draggable="false" src={insect} alt="" className="slider-img" />
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
            <img draggable="false" src={summer} alt="" className="slider-img" />
            <img draggable="false" src={river} alt="" className="slider-img" />
            <img draggable="false" src={sky} alt="" className="slider-img" />
            <img draggable="false" src={fanart} alt="" className="slider-img" />
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
      <div className="userPage--home-about">
        <span className="subheading">About</span>
        <div className="userPage--home-about-name">Julian</div>
        <div className="userPage--home-about-location">New Zealand</div>
        <div className="userPage--home-about-gender">Female</div>
        <div className="userPage--home-about-profession">Digital Artist</div>
        <div className="userPage--home-about-bio"></div>
        <div className="userPage--home-about-link"></div>
      </div>
    </div>
  );
};

export default UserHome;
