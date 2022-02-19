/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import {
  Profile,
  Personal,
  Extras,
  Appearance,
} from "../../commonImports/commonImports";

import {
  BsChevronRight,
  CgProfile,
  RiProfileLine,
  IoColorPalette,
  AiFillPlusSquare,
} from "../../commonImports/reactIcons";

import { useGlobalContext } from "../../context";

const AccountSettingsDesk = () => {
  const { userData } = useGlobalContext();
  const [isProfile, setProfile] = useState(true);
  const [isPersonal, setPersonal] = useState(false);
  const [isExtras, setExtras] = useState(false);
  const [isAppearance, setAppearance] = useState(false);

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
    setProfile(true);
    setPersonal(false);
    setExtras(false);
    setAppearance(false);
  };
  const toPersonal = () => {
    setProfile(false);
    setPersonal(true);
    setExtras(false);
    setAppearance(false);
  };
  const toExtras = () => {
    setProfile(false);
    setPersonal(false);
    setExtras(true);
    setAppearance(false);
  };
  const toAppearance = () => {
    setProfile(false);
    setPersonal(false);
    setExtras(false);
    setAppearance(true);
  };

  return (
    <div className="settingsDesk">
      <section className="settingsDesk-sideNav">
        <span className="heading">Settings</span>
        <section className="sideNav-items">
          <section
            className={`sideNav-item ${
              isProfile ? "sideNav-item-current" : ""
            }`}
            onClick={() => toProfile()}
          >
            <CgProfile className="icon" />
            <div className="textual">
              <span className="subheading">Profile</span>
              <span className="desc">Change your profile related info</span>
            </div>
            <BsChevronRight className="right-icon" />
          </section>
          <section
            className={`sideNav-item ${
              isPersonal ? "sideNav-item-current" : ""
            }`}
            onClick={() => toPersonal()}
          >
            <RiProfileLine className="icon" />
            <div className="textual">
              <span className="subheading">Personal Info</span>
              <span className="desc">
                Change your personal info and set visibility
              </span>
            </div>
            <BsChevronRight className="right-icon" />
          </section>
          <section
            className={`sideNav-item ${isExtras ? "sideNav-item-current" : ""}`}
            onClick={() => toExtras()}
          >
            <AiFillPlusSquare className="icon" />
            <div className="textual">
              <span className="subheading">Extras</span>
              <span className="desc">
                Add interests, favourites or anything extra.
              </span>
            </div>
            <BsChevronRight className="right-icon" />
          </section>
          <section
            className={`sideNav-item ${
              isAppearance ? "sideNav-item-current" : ""
            }`}
            onClick={() => toAppearance()}
          >
            <IoColorPalette className="icon" />
            <div className="textual">
              <span className="subheading">Posts</span>
              <span className="desc">Find all your uploaded posts here</span>
            </div>
            <BsChevronRight className="right-icon" />
          </section>
        </section>
      </section>
      <section className="settingsDesk-main">
        {isProfile && <Profile />}
        {isPersonal && <Personal />}
        {isExtras && <Extras />}
        {isAppearance && <Appearance posts={posts} />}
      </section>
    </div>
  );
};

export default AccountSettingsDesk;
