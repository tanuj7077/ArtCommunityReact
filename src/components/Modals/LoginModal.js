import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

import { useGlobalContext } from "../../context";
import Register from "../Register";
import Signin from "../Signin";

import sunset from "../../tagImage/sunset.jpg";
import waterColor from "../../tagImage/waterColor.jpg";
import cubism from "../../tagImage/cubism.jpg";
import old from "../../tagImage/old.jpg";
import fanart from "../../tagImage/fanart.jpg";

const LoginModal = () => {
  const {
    closeLoginModal,
    isLogin,
    switchToLogin,
    switchToSignup,
  } = useGlobalContext();

  return (
    <>
      <div className="LoginModal">
        <div className="LoginModal-body">
          <div className="LoginModal-body-img">
            <div className="text">
              <span className="content1">GodArt</span>
              <span className="content2">
                {/* Join our diverse Art and Photography Community */}
                Largest online Art and Photography Community
              </span>
            </div>
            <div className="carousel">
              <div className="carouselItem item1"></div>
              <div className="carouselItem item2"></div>
              <div className="carouselItem item3"></div>
              <div className="carouselItem item4"></div>
              <div className="carouselItem item5"></div>
            </div>
          </div>
          <div className="LoginModal-body-form"></div>
        </div>
      </div>
      {/* <div className="loginModal2">
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
      </div> */}
    </>
  );
};

export default LoginModal;
