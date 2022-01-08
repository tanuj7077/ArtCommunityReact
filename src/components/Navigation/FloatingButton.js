/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { AiOutlineLogin } from "react-icons/ai";

import SubmitModal from "../Modals/SubmitModals/SubmitModal";
import SubmitModal2 from "../Modals/SubmitModals/SubmitModal2";
import SignupModal from "../Modals/LoginModal/SignupModal";

import { useGlobalContext } from "../../context";

const FloatingButton = () => {
  const {
    isLoggedIn,
    openSubmitModal,
    openSubmitModal2,
    submitModal2,
    submitModal,
    signupModalVisibility,
    setSignupModalVisibility,
  } = useGlobalContext();

  return (
    <>
      {isLoggedIn ? (
        <>
          <div className="floatingButton" onClick={openSubmitModal2}>
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

      {/* {submitModal && <SubmitModal />} */}
      {/* {submitModal2 && <SubmitModal2 />} */}
      {signupModalVisibility && <SignupModal />}
    </>
  );
};

export default FloatingButton;
