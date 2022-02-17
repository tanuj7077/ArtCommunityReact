/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { GoPlus } from "react-icons/go";
import { AiOutlineLogin } from "react-icons/ai";

import { useGlobalContext } from "../../context";

const FloatingButton = () => {
  const { isLoggedIn, openSubmitModal, setSignupModalVisibility } =
    useGlobalContext();

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
    </>
  );
};

export default FloatingButton;
