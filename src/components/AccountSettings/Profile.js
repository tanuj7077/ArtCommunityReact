import React, { useState, useEffect } from "react";
import SubmitCoverModal from "../SubmitCoverModal";
import SubmitProfilePicModal from "../SubmitProfilePicModal";
import blank from "../../tagImage/blankProfile.png";
import { FaPlus, FaUpload } from "react-icons/fa";
import axios from "axios";
import { useGlobalContext } from "../../context";

const Profile = () => {
  const {
    submitCoverModal,
    openSubmitCoverModal,
    submitProfilePicModal,
    openSubmitProfilePicModal,
    isLoggedIn,
    userData,
    setUserData,
    changeAlert,
  } = useGlobalContext();
  let url = "http://localhost:8000/users/user/editProfile/" + userData._id;
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const save = () => {
    var profileInfo = {
      name: name,
      username: username,
      email: email,
    };
    axios.post(url, profileInfo).then((res) => {
      setUserData(res.data.user);
      changeAlert(res.data.message);
    });
  };

  useEffect(() => {
    setName(userData.fullname);
    setUsername(userData.username);
    setEmail(userData.email);
  }, []);

  return (
    <>
      <span className="heading">Profile</span>
      <span className="btn" onClick={save}>
        Save Changes
      </span>
      <div className="profile-items">
        <div className="photos">
          <div className="profilePhoto" onClick={openSubmitProfilePicModal}>
            <span className="profilePhoto-label">Profile Photo</span>
            {userData.profilePic ? (
              <div
                className="profilePhoto-photo"
                style={{
                  backgroundImage: `url(${userData.profilePic})`,
                }}
              >
                <div className="overlay">
                  <span className="text">Update Picture</span>
                </div>
              </div>
            ) : (
              <div className="profilePhoto-photo">
                <FaPlus className="icon" />
              </div>
            )}
          </div>
          <div className="coverPhoto" onClick={openSubmitCoverModal}>
            <span className="profilePhoto-label">Cover Photo</span>
            {userData.coverPhoto ? (
              <div
                className="coverPhoto-photo"
                style={{
                  backgroundImage: `url(${userData.coverPhoto})`,
                }}
              >
                <div className="overlay">
                  <span className="text">Update Cover</span>
                </div>
              </div>
            ) : (
              <div className="coverPhoto-photo">
                <FaPlus className="icon" />
              </div>
            )}
          </div>
        </div>
        <div className="inputs inputs-profile">
          <div className="settings-group settings-group-profile">
            <label htmlFor="name" className="settings-group-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="settings-group-input settings-group-profile-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="settings-group settings-group-profile">
            <label htmlFor="username" className="settings-group-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="settings-group-input settings-group-profile-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="settings-group settings-group-profile">
            <label htmlFor="email" className="settings-group-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="settings-group-input settings-group-profile-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </div>

      {submitCoverModal && <SubmitCoverModal />}
      {submitProfilePicModal && <SubmitProfilePicModal />}
    </>
  );
};
export default Profile;
