import React from "react";
import { Link } from "react-router-dom";

import { account, notifications } from "../data";

const TopNav = () => {
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
        <div class="topNav--notification-dropdown">
          <div class="title">Notifications</div>
          {notifications.map((item) => {
            return (
              <p key={item.id} className="notification">
                <b>{item.sub}</b> {item.name}
              </p>
            );
          })}
          <div class="all">See All</div>
        </div>
      </div>
      <div className="topNav--account">
        <span className="material-icons">portrait</span>
        <div class="topNav--account-dropdown">
          <div class="accountName">
            <div class="profilePic"></div>
            <div class="profileName">UserName</div>
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
};

export default TopNav;
