import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

import { useGlobalContext } from "../context";
import Register from "./Register";
import Signin from "./Signin";

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

            {isLogin ? <Signin /> : <Register />}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
