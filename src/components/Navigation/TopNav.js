/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SearchHandler from "../Search/SearchHandler";
import { useGlobalContext } from "../../context";

const TopNav = () => {
  const { isLoggedIn, openSubmitModal, loading, setSignupModalVisibility } =
    useGlobalContext();

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
