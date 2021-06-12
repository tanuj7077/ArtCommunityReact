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
  console.log(userData);
  const [isProfile, setProfile] = useState(true);
  const [isPersonal, setPersonal] = useState(false);
  const [isExtras, setExtras] = useState(false);
  const [isAppearance, setAppearance] = useState(false);

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
    <>
      <div className="settingsMobile">
        <div className="settingsMobile-links">
          <a href="#slide-1" className="link">
            <CgProfile className="icon" />
          </a>
          <a href="#slide-2" className="link">
            <RiProfileLine className="icon" />
          </a>
          <a href="#slide-3" className="link">
            <AiFillPlusSquare className="icon" />
          </a>
          <a href="#slide-4" className="link">
            <IoColorPalette className="icon" />
          </a>
        </div>
        <div className="settingsMobile-carousel">
          <div id="slide-1" className="settingsMobile-carousel--profileSection">
            <Profile />
          </div>
          <div id="slide-2" className="settingsMobile-carousel--profileSection">
            <Personal />
          </div>
          <div id="slide-3" className="settingsMobile-carousel--profileSection">
            <Extras />
          </div>
          <div id="slide-4" className="settingsMobile-carousel--profileSection">
            <Appearance />
          </div>
        </div>
      </div>
      {/* {<div className="settingsDesk">
        <section className="settingsDesk-sideNav">
          <span className="heading">Settings</span>
          <section className="sideNav-items">
            <section className="sideNav-item" onClick={() => toProfile()}>
              <CgProfile className="icon" />
              <div className="textual">
                <span className="subheading">Profile</span>
                <span className="desc">Change your profile related info</span>
              </div>
              <BsChevronRight className="right-icon" />
            </section>
            <section className="sideNav-item" onClick={() => toPersonal()}>
              <RiProfileLine className="icon" />
              <div className="textual">
                <span className="subheading">Personal Info</span>
                <span className="desc">
                  Change your personal info and set visibility
                </span>
              </div>
              <BsChevronRight className="right-icon" />
            </section>
            <section className="sideNav-item" onClick={() => toExtras()}>
              <AiFillPlusSquare className="icon" />
              <div className="textual">
                <span className="subheading">Extras</span>
                <span className="desc">
                  Add interests, favourites or anything extra.
                </span>
              </div>
              <BsChevronRight className="right-icon" />
            </section>
            <section className="sideNav-item" onClick={() => toAppearance()}>
              <IoColorPalette className="icon" />
              <div className="textual">
                <span className="subheading">Appearance</span>
                <span className="desc">
                  Set website theme, accent colors and more
                </span>
              </div>
              <BsChevronRight className="right-icon" />
            </section>
          </section>
        </section>
        <section className="settingsDesk-main">
          {isProfile && <Profile />}
          {isPersonal && <Personal />}
          {isExtras && <Extras />}
          {isAppearance && <Appearance />}
        </section>
      </div>} */}
    </>
  );
};

export default AccountSettingsMobile;
