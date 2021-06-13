import React, { useState, useEffect, useRef } from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";
import { LoggedInSideNavItems, SideNavItems } from "../../data";
import { useGlobalContext } from "../../context";
import { AiFillHome } from "react-icons/ai";
import { IoPeople, IoToday, IoMdColorPalette } from "react-icons/io5";
import { FaWpexplorer } from "react-icons/fa";
import { MdNewReleases, MdAccountCircle } from "react-icons/md";
import { CgMenu } from "react-icons/cg";
import { IoMdPower } from "react-icons/io";

const SideNavMobile = () => {
  const {
    isLoggedIn,
    userData,
    setIsLoggedIn,
    setUserData,
    changeAlert,
  } = useGlobalContext();
  const [sideNavVisibility, setSideNavVisibility] = useState(0);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          event.target.className !== "sideNavMobile--ham" &&
          event.target.className.baseVal !== "sideNavMobile--ham-icon"
        ) {
          setSideNavVisibility(0);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/auth/signout").then((res) => {
        console.log(res.data);
        if (res.data.success) {
          setUserData({});
          setIsLoggedIn(false);
          changeAlert(res.data.message);
          return <Redirect to="/" exact />;
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        className="sideNavMobile--ham"
        onClick={() => setSideNavVisibility(!sideNavVisibility)}
      >
        <CgMenu className="sideNavMobile--ham-icon" />
      </div>
      <section
        className={`sideNavMobile ${
          sideNavVisibility ? "" : "sideNavMobile--hidden"
        }`}
        ref={wrapperRef}
      >
        {isLoggedIn && (
          <>
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/`);
                  }}
                  className="sideNavMobile--item"
                >
                  <AiFillHome className="sideNavMobile--item-icon" />
                  <div className="sideNavMobile--item-text">Home</div>
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/followed`);
                  }}
                  className="sideNavMobile--item"
                >
                  <IoPeople className="sideNavMobile--item-icon" />
                  <div className="sideNavMobile--item-text">Followed</div>
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/daily`);
                  }}
                  className="sideNavMobile--item"
                >
                  <IoToday className="sideNavMobile--item-icon" />
                  <div className="sideNavMobile--item-text">Daily</div>
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/explore`);
                  }}
                  className="sideNavMobile--item"
                >
                  <FaWpexplorer className="sideNavMobile--item-icon" />
                  <div className="sideNavMobile--item-text">Topic</div>
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/popular`);
                  }}
                  className="sideNavMobile--item"
                >
                  <MdNewReleases className="sideNavMobile--item-icon" />
                  <div className="sideNavMobile--item-text">Popular</div>
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/account/${userData.username}`);
                  }}
                  className="sideNavMobile--item"
                >
                  <MdAccountCircle className="sideNavMobile--item-icon" />
                  <div className="sideNavMobile--item-text">Settings</div>
                </div>
              )}
            />
            <div onClick={handleLogout} className="sideNavMobile--item">
              <IoMdPower className="sideNavMobile--item-icon" />
              <div className="sideNavMobile--item-text">Logout</div>
            </div>
          </>
        )}
        {!isLoggedIn && (
          <>
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/`);
                  }}
                  className="sideNavMobile--item"
                >
                  <AiFillHome className="sideNavMobile--item-icon" />
                  <div className="sideNavMobile--item-text">Home</div>
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/daily`);
                  }}
                  className="sideNavMobile--item"
                >
                  <IoToday className="sideNavMobile--item-icon" />
                  <div className="sideNavMobile--item-text">Daily</div>
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/explore`);
                  }}
                  className="sideNavMobile--item"
                >
                  <FaWpexplorer className="sideNavMobile--item-icon" />
                  <div className="sideNavMobile--item-text">Topic</div>
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/popular`);
                  }}
                  className="sideNavMobile--item"
                >
                  <MdNewReleases className="sideNavMobile--item-icon" />
                  <div className="sideNavMobile--item-text">Popular</div>
                </div>
              )}
            />
          </>
        )}
      </section>
    </>
  );
};

export default SideNavMobile;
