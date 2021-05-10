import React, { useState, useEffect } from "react";
import SubmitCoverModal from "../SubmitCoverModal";
import SubmitProfilePicModal from "../SubmitProfilePicModal";
import blank from "../../tagImage/blankProfile.png";
import { FaPlus } from "react-icons/fa";

const Profile = () => {
  return (
    <>
      <span className="heading">Profile</span>
      <div className="profile-items">
        <div className="photos">
          <div className="profilePhoto">
            <span className="profilePhoto-label">Profile Photo</span>
            <div className="profilePhoto-photo">
              <FaPlus className="icon" />
            </div>
          </div>
          <div className="coverPhoto">
            <span className="profilePhoto-label">Cover Photo</span>
            <div className="coverPhoto-photo">
              <FaPlus className="icon" />
            </div>
          </div>
        </div>
        <div className="inputs">
          <div className="settings-group">
            <label htmlFor="name" className="settings-group-label">
              Name
            </label>
            <input type="text" id="name" className="settings-group-input" />
          </div>
          <div className="settings-group">
            <label htmlFor="username" className="settings-group-label">
              Username
            </label>
            <input type="text" id="username" className="settings-group-input" />
          </div>
          <div className="settings-group">
            <label htmlFor="email" className="settings-group-label">
              Email
            </label>
            <input type="email" id="email" className="settings-group-input" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
