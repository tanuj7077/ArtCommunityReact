import React, { useState, useEffect } from "react";
import SubmitCoverModal from "../SubmitCoverModal";
import SubmitProfilePicModal from "../SubmitProfilePicModal";
import blank from "../../tagImage/blankProfile.png";
import { FaPlus, FaUpload } from "react-icons/fa";

const Profile = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showCoverModal, setShowCoverModal] = useState(false);
  const [isProfileUploaded, setIsProfileUploaded] = useState(false);
  const [isCoverUploaded, setIsCoverUploaded] = useState(false);

  const toggleProfileModalDisplay = () => {
    setShowProfileModal(!showProfileModal);
  };
  const toggleCoverModalDisplay = () => {
    setShowCoverModal(!showCoverModal);
  };

  return (
    <>
      <span className="heading">Profile</span>
      <div className="profile-items">
        <div className="photos">
          <div className="profilePhoto" onClick={toggleProfileModalDisplay}>
            <span className="profilePhoto-label">Profile Photo</span>
            <div className="profilePhoto-photo">
              <FaPlus className="icon" />
            </div>
          </div>
          <div className="coverPhoto" onClick={toggleCoverModalDisplay}>
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

      {showProfileModal && (
        <div className="addExtrasModal">
          <div className="modal">
            <span className="modal-heading">Add Profile Photo</span>
            <div className="modal-photo">
              {!isProfileUploaded && <FaUpload className="uploadIcon" />}
            </div>
            <div className="modal-buttons">
              <span className="add-btn">Upload Photo</span>
              <span className="cancel-btn" onClick={toggleProfileModalDisplay}>
                Cancel
              </span>
            </div>
          </div>
        </div>
      )}

      {showCoverModal && (
        <div className="addExtrasModal">
          <div className="modal">
            <span className="modal-heading">Add Cover Photo</span>
            <div className="modal-photo">
              {!isCoverUploaded && <FaUpload className="uploadIcon" />}
            </div>

            <div className="modal-buttons">
              <span className="add-btn">Add Link</span>
              <span className="cancel-btn" onClick={toggleCoverModalDisplay}>
                Cancel
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Profile;
