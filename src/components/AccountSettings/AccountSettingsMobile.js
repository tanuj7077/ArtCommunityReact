import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiProfileLine } from "react-icons/ri";
import { IoColorPalette } from "react-icons/io5";
import { AiFillPlusSquare } from "react-icons/ai";

import Profile from "./ProfileMobile";
import Personal from "./PersonalInfoMobile";
import Extras from "./ExtrasMobile";
import Appearance from "./AppearanceMobile";
import { useGlobalContext } from "../../context";

const AccountSettingsMobile = ({ id }) => {
  const { userData } = useGlobalContext();
  const [posts, setPosts] = useState([]);
  async function getPostsByUser() {
    try {
      const LIMIT = -1;
      const postUrl = "https://shielded-woodland-79171.herokuapp.com/posts/postByUser/" + userData.username + "/" + LIMIT;
      const PostResponse = await fetch(postUrl);
      const postData = await PostResponse.json();
      setPosts(postData);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getPostsByUser();
  }, []);
  const toProfile = () => {
    document.getElementById("profileSlide").scrollIntoView(true);
  };
  const toPersonal = () => {
    document.getElementById("personalSlide").scrollIntoView(true);
  };
  const toExtras = () => {
    document.getElementById("extrasSlide").scrollIntoView(true);
  };
  const toAppearance = () => {
    document.getElementById("appearanceSlide").scrollIntoView(true);
  };

  return (
    <>
      <div className="settingsMobile">
        <div className="settingsMobile-links">
          <a className="link" onClick={toProfile}>
            <CgProfile className="icon" />
          </a>
          <a className="link" onClick={toPersonal}>
            <RiProfileLine className="icon" />
          </a>
          <a className="link" onClick={toExtras}>
            <AiFillPlusSquare className="icon" />
          </a>
          <a className="link" onClick={toAppearance}>
            <IoColorPalette className="icon" />
          </a>
        </div>
        <div className="settingsMobile-carousel">
          <div
            id="profileSlide"
            className="settingsMobile-carousel--profileSection"
          >
            <Profile />
          </div>
          <div
            id="personalSlide"
            className="settingsMobile-carousel--profileSection"
          >
            <Personal />
          </div>
          <div
            id="extrasSlide"
            className="settingsMobile-carousel--profileSection"
          >
            <Extras />
          </div>
          <div
            id="appearanceSlide"
            className="settingsMobile-carousel--profileSection"
          >
            <Appearance posts={posts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSettingsMobile;
