import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../../context";

import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

import blank from "../../tagImage/blankProfile.png";
import fanart from "../../tagImage/fanart.jpg";
import bridge from "../../tagImage/bridge.jpg";
import cubism from "../../tagImage/cubism.jpg";
import flower from "../../tagImage/flower.jpg";
import insect from "../../tagImage/insect.jpg";
import waterColor from "../../tagImage/waterColor.jpg";
import landscape from "../../tagImage/landscape.jpg";
import macro from "../../tagImage/macro.jpg";

const Followed = () => {
  const { userData } = useGlobalContext();
  const sliderRef = useRef(null);

  const handleScroll = (side) => {
    if (side === "right") {
      sliderRef.current.scrollBy(500, 0);
    } else {
      sliderRef.current.scrollBy(-500, 0);
    }
  };

  return (
    <div className="followed">
      <div className="user">
        <img src={blank} alt="userImg" className="userImg" />
        <span className="username">Username</span>
        <span className="userFollowers">35 Followers</span>
      </div>
      <div className="slider">
        <span className="leftButton" onClick={() => handleScroll("left")}>
          <VscChevronLeft className="icon" />
        </span>
        <div className="followedItems" ref={sliderRef}>
          <div className="item">
            <img src={fanart} draggable="false" alt="Img" className="img" />
            <div className="imgInfo">
              <span className="name">Fanart</span>
              <div className="others">
                <span className="likes">10 Likes</span>
                <span className="comments">2 comments</span>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={bridge} draggable="false" alt="Img" className="img" />
            <div className="imgInfo">
              <span className="name">Magnificant Bridge</span>
              <div className="others">
                <span className="likes">100 Likes</span>
                <span className="comments">20 comments</span>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={cubism} alt="Img" className="img" />
            <div className="imgInfo">
              <span className="name">Cube Art and something</span>
              <div className="others">
                <span className="likes">12 Likes</span>
                <span className="comments">3 comments</span>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={flower} draggable="false" alt="Img" className="img" />
            <div className="imgInfo">
              <span className="name">Cube Art</span>
              <div className="others">
                <span className="likes">12 Likes</span>
                <span className="comments">3 comments</span>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={insect} draggable="false" alt="Img" className="img" />
            <div className="imgInfo">
              <span className="name">Cube Art</span>
              <div className="others">
                <span className="likes">12 Likes</span>
                <span className="comments">3 comments</span>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={waterColor} draggable="false" alt="Img" className="img" />
            <div className="imgInfo">
              <span className="name">Cube Art</span>
              <div className="others">
                <span className="likes">12 Likes</span>
                <span className="comments">3 comments</span>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={landscape} draggable="false" alt="Img" className="img" />
            <div className="imgInfo">
              <span className="name">Cube Art</span>
              <div className="others">
                <span className="likes">12 Likes</span>
                <span className="comments">3 comments</span>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={macro} draggable="false" alt="Img" className="img" />
            <div className="imgInfo">
              <span className="name">Cube Art</span>
              <div className="others">
                <span className="likes">12 Likes</span>
                <span className="comments">3 comments</span>
              </div>
            </div>
          </div>
        </div>
        <span className="rightButton" onClick={() => handleScroll("right")}>
          <VscChevronRight className="icon" />
        </span>
      </div>
    </div>
  );
};

export default Followed;
