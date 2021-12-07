/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { AiOutlineLogin } from "react-icons/ai";

import SubmitModal from "../Modals/SubmitModals/SubmitModal";
import SignupModal from "../Modals/LoginModal/SignupModal";

import { useGlobalContext } from "../../context";

const FloatingButton = () => {
  const {
    isLoggedIn,
    openSubmitModal,
    submitModal,
    signupModalVisibility,
    setSignupModalVisibility,
  } = useGlobalContext();

  return (
    <>
      {isLoggedIn ? (
        <>
          <div className="floatingButton" onClick={openSubmitModal}>
            <GoPlus className="floatingButton-icon" />
          </div>
        </>
      ) : (
        <>
          <div
            className="floatingButton"
            onClick={() => setSignupModalVisibility(true)}
          >
            <AiOutlineLogin className="floatingButton-icon" />
          </div>
        </>
      )}

      {submitModal && <SubmitModal />}
      {signupModalVisibility && <SignupModal />}
    </>
  );
};

export default FloatingButton;
