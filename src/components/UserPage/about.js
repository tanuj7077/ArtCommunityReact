import React from "react";
import {
  FaBirthdayCake,
  FaFacebookSquare,
  FaDiscord,
  FaPatreon,
  FaYoutube,
} from "react-icons/fa";
import { CgGenderFemale } from "react-icons/cg";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineLink, AiFillInstagram } from "react-icons/ai";

const About = ({ user }) => {
  return (
    <div className="userPage--about">
      <div className="userPage--about-info">
        <div className="userPage--about-info-name">{user.username}</div>
        <div className="userPage--about-info-profession">
          Artist // Professional // Digital Art
        </div>
        <div className="userPage--about-info-data">
          <div className="item">
            <FaBirthdayCake className="infoIcon" />
            <span className="infoText">Sep 7</span>
          </div>
          <div className="item">
            <HiLocationMarker className="infoIcon" />
            <span className="infoText">New Zealand</span>
          </div>
          <div className="item">
            <CgGenderFemale className="infoIcon" />
            <span className="infoText">Female</span>
          </div>
          <span className="item">Joined in Sep 4 2012</span>
        </div>
        <div className="userPage--about-info-link">
          <AiOutlineLink className="aboutIcon" />
          <span className="aboutText">www.jakeDraws.com</span>
        </div>
        <div className="userPage--about-info-followMe">
          <div className="subheading">Follow me on</div>
          <div className="items">
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
        <div className="userPage--about-info-bio">
          <span className="subheading">My Bio</span>
          <span className="bio">
            I live in Argentina Flag of Argentina, I have drawn for as long as I
            can remember and I love to share my ideas with the community. Big
            fan of anime, movies and comics, work in Concept Art, illustrations
            and Fan Arts. The tools I use to work with are Photoshop and Manga
            Studio.
          </span>
        </div>
      </div>

      <hr class="solid"></hr>

      <div className="userPage--about-favourites">
        <div className="item">
          <span className="label">My favourite Movies</span>
          <span className="answer">The Avengers, Batman Trilogy</span>
        </div>
        <div className="item">
          <span className="label">Tools I Use</span>
          <span className="answer">Photoshop</span>
        </div>
        <div className="item">
          <span className="label">My Favourite Animes</span>
          <span className="answer">Naruto, Boku no Hero Acadamia</span>
        </div>
        <div className="item">
          <span className="label">My favourite Manga</span>
          <span className="answer">The Breaker, Eden no Gricia</span>
        </div>
      </div>

      <div className="userPage--about-stats">
        <div className="item">
          <span className="label">Posts</span>
          <span className="count">54</span>
        </div>
        <div className="item">
          <span className="label">Likes</span>
          <span className="count">567</span>
        </div>
        <div className="item">
          <span className="label">Following</span>
          <span className="count">10</span>
        </div>
        <div className="item">
          <span className="label">Followers</span>
          <span className="count">50</span>
        </div>
        <div className="item">
          <span className="label">Comments Made</span>
          <span className="count">124</span>
        </div>
        <div className="item">
          <span className="label">Comments Recieved</span>
          <span className="count">45</span>
        </div>
      </div>

      <div className="userPage--about-following"></div>

      <div className="userPage--about-followers"></div>

      <div className="userPage--about-comments"></div>
    </div>
  );
};

export default About;
