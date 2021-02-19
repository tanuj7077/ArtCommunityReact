import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IoClose } from "react-icons/io5";
import { FaUpload } from "react-icons/fa";
import { account, notifications } from "../data";
import { useGlobalContext } from "../context";

const TopNav = () => {
  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const {
    isLoggedIn,
    openSubmitModal,
    closeSubmitModal,
    submitModal,
    openLoginModal,
    closeLoginModal,
    loginModal,
    isLogin,
    switchToLogin,
    switchToSignup,
  } = useGlobalContext();

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
        setIsUploaded(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  if (isLoggedIn) {
    return (
      <>
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
                  <a
                    key={item.id}
                    href={item.link}
                    className="account-settings"
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="topNav--separator">
            <span className="separator"></span>
          </div>
          <div className="topNav--submit" onClick={openSubmitModal}>
            <span>SUBMIT</span>
          </div>
        </section>
        {submitModal && (
          <div className="submitModal">
            <div className="submitForm">
              <span className="closeIcon">
                <IoClose className="Icon" onClick={closeSubmitModal} />
              </span>

              <form>
                <input
                  type="text"
                  className="submitForm-title"
                  placeholder="Title"
                />

                {isUploaded ? (
                  <>
                    <div className="submitForm-image">
                      <img src={image} alt="uploaded image" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="submitForm-imgHolder">
                      <label htmlFor="fileInput">
                        <span className="uploadIcon">
                          <FaUpload className="Icon" />
                        </span>
                      </label>
                      <label htmlFor="fileInput">
                        <span className="uploadText">Click to Upload</span>
                      </label>
                      <input
                        id="fileInput"
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        onChange={handleImage}
                      />
                    </div>
                  </>
                )}

                <textarea
                  name="desc"
                  id=""
                  cols="40"
                  rows="5"
                  className="submitForm-desc"
                ></textarea>
                <div className="submitForm-tags">Tags</div>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }
  return (
    <>
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
        <div className="topNav--submit" onClick={openLoginModal}>
          <span>Login</span>
        </div>
      </section>
      {loginModal && (
        <div className="loginModal">
          <div className="submitForm">
            <span className="closeIcon">
              <IoClose className="Icon" onClick={closeLoginModal} />
            </span>

            <div className="form">
              <div
                className={`${
                  isLogin ? "loginToggle login" : "loginToggle signup"
                }`}
              >
                <span className="loginText" onClick={switchToLogin}>
                  Login
                </span>
                <span className="signupText" onClick={switchToSignup}>
                  Sign up
                </span>
              </div>

              {isLogin ? (
                <form className="form">
                  <div class="form__group form__group--basic">
                    <input
                      type="text"
                      id="username"
                      className="form__input"
                      placeholder="username"
                      required
                    />
                    <label htmlFor="username" className="form__label">
                      <span class="form__label__content">Username</span>
                    </label>
                  </div>
                  <div class="form__group form__group--basic">
                    <input
                      type="password"
                      id="password"
                      className="form__input"
                      placeholder="password"
                      required
                    />
                    <label htmlFor="password" className="form__label">
                      <span class="form__label__content">Password</span>
                    </label>
                  </div>
                  <button type="submit" className="btn btn-submit">
                    SUBMIT
                  </button>
                </form>
              ) : (
                <form className="form">
                  <div class="form__group form__group--basic">
                    <input
                      type="text"
                      id="username"
                      className="form__input"
                      placeholder="username"
                      required
                    />
                    <label htmlFor="username" className="form__label">
                      <span class="form__label__content">Username</span>
                    </label>
                  </div>

                  <div class="form__group form__group--basic">
                    <input
                      type="text"
                      id="fullname"
                      className="form__input"
                      placeholder="full name"
                      required
                    />
                    <label htmlFor="fullname" className="form__label">
                      <span class="form__label__content">Full Name</span>
                    </label>
                  </div>
                  <div class="form__group form__group--basic">
                    <input
                      type="password"
                      id="password"
                      className="form__input"
                      placeholder="password"
                      required
                    />
                    <label htmlFor="password" className="form__label">
                      <span class="form__label__content">Password</span>
                    </label>
                  </div>
                  <div class="form__group form__group--basic">
                    <input
                      type="password"
                      id="email"
                      className="form__input"
                      placeholder="email"
                      required
                    />
                    <label htmlFor="email" className="form__label">
                      <span class="form__label__content">Email</span>
                    </label>
                  </div>
                  <button type="submit" className="btn btn-submit">
                    SUBMIT
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopNav;
