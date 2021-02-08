import React from "react";
import { Link } from "react-router-dom";

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
          <a href="#" class="notification">
            Content
          </a>
          <a href="#" class="notification">
            Content
          </a>
          <a href="#" class="notification">
            Content
          </a>
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
          <a href="#" class="account-settings">
            Account Settings
          </a>
          <a href="#" class="account-settings">
            Theme
          </a>
          <a href="#" class="account-settings">
            Logout
          </a>
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
