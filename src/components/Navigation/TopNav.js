/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import SubmitModal from "../Modals/SubmitModals/SubmitModal";
import SignupModal from "../Modals/LoginModal/SignupModal";
//import SearchComponent from "../SearchComponent";
import SearchHandler from "../Search/SearchHandler";

import { useGlobalContext } from "../../context";
import SubmitModal2 from "../Modals/SubmitModals/SubmitModal2";

const TopNav = () => {
  const {
    isLoggedIn,
    openSubmitModal,
    openSubmitModal2,
    submitModal,
    submitModal2,
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
            {/* <div className="TopNavDesk--submit" onClick={openSubmitModal}>
              <span>SUBMIT</span>
            </div> */}
            <div className="TopNavDesk--submit" onClick={openSubmitModal2}>
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

      {submitModal && <SubmitModal />}
      {/* {submitModal2 && <SubmitModal2 />} */}
      <SubmitModal2 />

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
