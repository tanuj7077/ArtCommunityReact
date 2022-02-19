/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
  CgProfile,
  RiProfileLine,
  IoColorPalette,
  AiFillPlusSquare,
} from "../../commonImports/reactIcons";

import {
  ProfileMobile,
  PersonalMobile,
  ExtrasMobile,
  AppearanceMobile,
} from "../../commonImports/commonImports";
import { useGlobalContext } from "../../context";

const AccountSettingsMobile = () => {
  const { userData } = useGlobalContext();
  const [posts, setPosts] = useState([]);
  async function getPostsByUser() {
    try {
      const LIMIT = -1;
      const postUrl = `${process.env.REACT_APP_BASE_URL}/posts/postByUser/${userData.username}/${LIMIT}`;
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
    window.scrollTo(0, 0);
  };
  const toPersonal = () => {
    document.getElementById("personalSlide").scrollIntoView(true);
    window.scrollTo(0, 0);
  };
  const toExtras = () => {
    document.getElementById("extrasSlide").scrollIntoView(true);
    window.scrollTo(0, 0);
  };
  const toAppearance = () => {
    document.getElementById("appearanceSlide").scrollIntoView(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="settingsMobile">
      <div className="settingsMobile-links">
        <p className="link" onClick={toProfile}>
          <CgProfile className="icon" />
        </p>
        <p className="link" onClick={toPersonal}>
          <RiProfileLine className="icon" />
        </p>
        <p className="link" onClick={toExtras}>
          <AiFillPlusSquare className="icon" />
        </p>
        <p className="link" onClick={toAppearance}>
          <IoColorPalette className="icon" />
        </p>
      </div>
      <div className="settingsMobile-carousel">
        <div
          id="profileSlide"
          className="settingsMobile-carousel--profileSection"
        >
          <ProfileMobile />
        </div>
        <div
          id="personalSlide"
          className="settingsMobile-carousel--profileSection"
        >
          <PersonalMobile />
        </div>
        <div
          id="extrasSlide"
          className="settingsMobile-carousel--profileSection"
        >
          <ExtrasMobile />
        </div>
        <div
          id="appearanceSlide"
          className="settingsMobile-carousel--profileSection"
        >
          <AppearanceMobile posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsMobile;
