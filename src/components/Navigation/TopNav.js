/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SignupModal from "../Modals/LoginModal/SignupModal";
import SearchHandler from "../Search/SearchHandler";

import { useGlobalContext } from "../../context";
import SubmitModal from "../Modals/SubmitModals/SubmitModal";

const TopNav = () => {
  const {
    isLoggedIn,
    openSubmitModal,
    loading,
    signupModalVisibility,
    setSignupModalVisibility,
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
            <div
              className="TopNavDesk--submit"
              onClick={() => setSignupModalVisibility(true)}
            >
              <span>LOGIN</span>
            </div>
          </>
        )}
      </section>

      <SubmitModal />

      {signupModalVisibility && <SignupModal />}
      {loading && (
        <div className="loadingAnimation">
          <div className="modalLoading"></div>
          <div className="modalLoadingText">Loading...</div>
        </div>
      )}
    </>
  );
};

export default TopNav;
