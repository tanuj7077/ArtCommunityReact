/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { AiOutlineLogin } from "react-icons/ai";

import SubmitModal from "../SubmitModal";
import LoginModal from "../Modals/LoginModal/LoginModal";
import SearchComponent from "../Search/SearchComponent";

import { useGlobalContext } from "../../context";

const FloatingButton = () => {
  const {
    isLoggedIn,
    openSubmitModal,
    submitModal,
    loginModal2,
    openLoginModal2,
  } = useGlobalContext();

  return (
    <>
      {isLoggedIn ? (
        <>
          <div className="floatingButton" onClick={openSubmitModal}>
            {/* <span>SUBMIT</span> */}
            <GoPlus className="floatingButton-icon" />
          </div>
        </>
      ) : (
        <>
          <div className="floatingButton" onClick={openLoginModal2}>
            {/* <span>LOGIN</span> */}
            <AiOutlineLogin className="floatingButton-icon" />
          </div>
        </>
      )}

      {submitModal && <SubmitModal />}
      {loginModal2 && <LoginModal />}
    </>
  );
};

export default FloatingButton;
