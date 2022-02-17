/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SearchMobile from "../Search/SearchComponentMobile";
import Search from "../Search/SearchComponent";
import { useGlobalContext } from "../../context";

const TopNav = () => {
  const { isLoggedIn, openSubmitModal, setSignupModalVisibility } =
    useGlobalContext();

  return (
    <>
      <section className="TopNavDesk">
        <SearchMobile />
        <Search />
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
    </>
  );
};

export default TopNav;
