/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import axios from "axios";

import SubmitModal from "./SubmitModal";
import LoginModal from "./LoginModal";
import LoginModal2 from "./Modals/LoginModal/LoginModal";
import SearchComponent from "./SearchComponent";

import { notifications } from "../data";
import { useGlobalContext } from "../context";

import blank from "../tagImage/blankProfile.png";

const TopNav = () => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    openSubmitModal,
    submitModal,
    openLoginModal,
    loginModal,
    loginModal2,
    openLoginModal2,
    userData,
    setUserData,
  } = useGlobalContext();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.get("http://localhost:8000/auth/signout").then((res) => {
        console.log(res.data);
        if (res.data.success) {
          setUserData({});
          setIsLoggedIn(false);
          return <Redirect to="/" exact />;
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="topNav">
        <div className="topNav--logo">
          <span className="material-icons">anchor</span>
        </div>
        {/* <div className="topNav--search">
          <span className="material-icons topNav--search-icon">search</span>
          <span className="topNav--search-text">SEARCH AND DISCOVER</span>
        </div> */}
        <SearchComponent />
        {isLoggedIn ? (
          <>
            <div className="topNav--chat">
              <span className="material-icons">textsms</span>
              <div className="topNav--chat-dropdown">
                <a className="">Big Content</a>
                <a className="">Content</a>
                <a className="">Content</a>
                <a className="">Content</a>
                <a className="">Content</a>
              </div>
            </div>
            <div className="topNav--notification">
              <span className="material-icons">notifications</span>
              <div className="topNav--notification-dropdown">
                <div className="title">Notifications</div>
                {notifications.map((item) => {
                  return (
                    <p key={item.id} className="notification">
                      <b>{item.sub}</b> {item.name}
                    </p>
                  );
                })}
                <div className="all">See All</div>
              </div>
            </div>
            <div className="topNav--account">
              <span className="material-icons">portrait</span>
              <div className="topNav--account-dropdown">
                <div className="accountName">
                  <div
                    className="profilePic"
                    style={{
                      backgroundImage: `url(${
                        typeof userData.profilePic === "undefined"
                          ? blank
                          : userData.profilePic
                      })`,
                      borderRadius: `${
                        typeof userData.profileBorderRad === "undefined"
                          ? "0%"
                          : userData.profileBorderRad + "%"
                      }`,
                    }}
                  ></div>
                  <Route
                    render={({ history }) => (
                      <div
                        onClick={() => {
                          history.push(`/user/${userData.username}`);
                        }}
                        className="profileName"
                      >
                        {userData.username}
                      </div>
                    )}
                  />
                </div>
                <Route
                  render={({ history }) => (
                    <a
                      onClick={() => {
                        history.push(`/account/${userData.username}`);
                      }}
                      className="account-settings"
                    >
                      Account Settings
                    </a>
                  )}
                />
                <a className="account-settings">Theme</a>
                <a className="account-settings" onClick={handleLogout}>
                  Logout
                </a>
              </div>
            </div>
            <div className="topNav--separator">
              <span className="separator"></span>
            </div>
            <div className="topNav--submit" onClick={openSubmitModal}>
              <span>SUBMIT</span>
            </div>
          </>
        ) : (
          <>
            <div className="topNav--separator">
              <span className="separator"></span>
            </div>
            <div className="topNav--submit" onClick={openLoginModal2}>
              <span>Login</span>
            </div>
          </>
        )}
      </section>

      {submitModal && <SubmitModal />}

      {loginModal && <LoginModal />}
      {loginModal2 && <LoginModal2 />}
    </>
  );
};

export default TopNav;
