/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import SubmitModal from "../Modals/SubmitModals/SubmitModal";
import LoginModal2 from "../Modals/LoginModal/LoginModal";
//import SearchComponent from "../SearchComponent";
import SearchHandler from "../Search/SearchHandler";

import { useGlobalContext } from "../../context";

const TopNav = () => {
  const {
    isLoggedIn,
    openSubmitModal,
    submitModal,
    loginModal,
    loginModal2,
    openLoginModal2,
  } = useGlobalContext();

  return (
    <>
      <section className="TopNavDesk">
        <SearchHandler />
        {isLoggedIn ? (
          <>
            <div className="TopNavDesk--submit" onClick={openSubmitModal}>
              <span>SUBMIT</span>
            </div>
          </>
        ) : (
          <>
            <div className="TopNavDesk--submit" onClick={openLoginModal2}>
              <span>LOGIN</span>
            </div>
          </>
        )}
      </section>

      {submitModal && <SubmitModal />}

      {/* {loginModal && <LoginModal />} */}
      {loginModal2 && <LoginModal2 />}
    </>
  );
};

export default TopNav;
