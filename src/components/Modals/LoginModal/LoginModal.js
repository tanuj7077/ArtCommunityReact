import React, { useState } from "react";

import { useGlobalContext } from "../../../context";
import Login from "./Login";
import Signup from "./Signup";

const LoginModal = () => {
  const { closeLoginModal2 } = useGlobalContext();
  const [loginMode, setLoginMode] = useState(1);

  const toggleLoginMode = (mode) => {
    if (mode === "login") {
      setLoginMode(1);
    } else {
      setLoginMode(0);
    }
  };

  return (
    <>
      <div className="LoginModal">
        <div
          className="LoginModal-outside"
          onClick={() => closeLoginModal2()}
        ></div>
        {/* <div className="LoginModal-body"> */}
        <div
          className={`LoginModal-body ${
            loginMode ? "LoginModal-body-login" : "LoginModal-body-signup"
          }`}
        >
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
          <div className="LoginModal-body-form">
            <div className={`heading ${loginMode ? "heading-signup" : ""}`}>
              {/* <span className="login" onClick={() => toggleLoginMode("login")}>
                Login
              </span> */}
              <span
                className={`login ${loginMode ? "" : "notCurrent"}`}
                onClick={() => toggleLoginMode("login")}
              >
                Login
              </span>
              <span
                className={`signup ${loginMode ? "notCurrent" : ""}`}
                onClick={() => toggleLoginMode("signup")}
              >
                Sign-up
              </span>
            </div>
            {loginMode ? (
              <Login />
            ) : (
              <Signup toggleLoginMode={toggleLoginMode} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
