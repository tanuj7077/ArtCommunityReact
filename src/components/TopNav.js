import React from "react";
import { Link } from "react-router-dom";

import { account, notifications } from "../data";
import { useGlobalContext } from "../context";

const TopNav = () => {
  const { isLoggedIn } = useGlobalContext();

  if (isLoggedIn) {
    return (
      <section className="topNav">
        <div className="topNav--logo">
          <span className="material-icons">anchor</span>
        </div>
        <div className="topNav--search">
          <span className="material-icons topNav--search-icon">search</span>
          <span className="topNav--search-text">SEARCH AND DISCOVER</span>
        </div>
        <div className="topNav--chat">
          <span className="material-icons">textsms</span>
          <div class="topNav--chat-dropdown">
            <a href="#" class="">
              Big Content
            </a>
            <a href="#" class="">
              Content
            </a>
            <a href="#" class="">
              Content
            </a>
            <a href="#" class="">
              Content
            </a>
            <a href="#" class="">
              Content
            </a>
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
              <div className="profilePic"></div>
              <div className="profileName">UserName</div>
            </div>
            {account.map((item) => {
              return (
                <a key={item.id} href={item.link} className="account-settings">
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
        <div className="topNav--separator">
          <span className="separator"></span>
        </div>
        <div className="topNav--submit">
          <span>SUBMIT</span>
        </div>
      </section>
    );
  }
  return (
    <section className="topNav">
      <div className="topNav--logo">
        <span className="material-icons">anchor</span>
      </div>
      <div className="topNav--search">
        <span className="material-icons topNav--search-icon">search</span>
        <span className="topNav--search-text">SEARCH AND DISCOVER</span>
      </div>

      <div className="topNav--separator">
        <span className="separator"></span>
      </div>
      <div className="topNav--submit">
        <span>Login</span>
      </div>
    </section>
  );
};

export default TopNav;
