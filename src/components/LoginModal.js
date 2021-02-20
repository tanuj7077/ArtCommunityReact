import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

import { useGlobalContext } from "../context";

const LoginModal = () => {
  const {
    closeLoginModal,
    isLogin,
    switchToLogin,
    switchToSignup,
  } = useGlobalContext();
  return (
    <>
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
    </>
  );
};

export default LoginModal;
