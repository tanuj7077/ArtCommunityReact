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

const SideNavDesktop = () => {
  const {
    isLoggedIn,
    userData,
    setIsLoggedIn,
    setUserData,
    changeAlert,
  } = useGlobalContext();
  const [sideNavVisibility, setSideNavVisibility] = useState(0);

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
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          event.target.className !== "sideNavDesktop--ham" &&
          event.target.className.baseVal !== "sideNavDesktop--ham-icon"
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

  const addHover = (item) => {
    document
      .getElementsByClassName("sideNavDesktop--" + item)[0]
      .classList.add("sideNavDesktop--hover");
    document
      .getElementsByClassName("sideNavDesktopShort--" + item)[0]
      .classList.add("sideNavDesktopShort--hover");
  };
  const removeHover = (item) => {
    document
      .getElementsByClassName("sideNavDesktop--" + item)[0]
      .classList.remove("sideNavDesktop--hover");
    document
      .getElementsByClassName("sideNavDesktopShort--" + item)[0]
      .classList.remove("sideNavDesktopShort--hover");
  };

  return (
    <>
      <div
        className="sideNavDesktop--ham"
        onClick={() => setSideNavVisibility(!sideNavVisibility)}
      >
        <CgMenu className="sideNavDesktop--ham-icon" />
      </div>
      {isLoggedIn ? (
        <div>
          <section className="sideNavDesktopShort">
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/`);
                  }}
                  className="sideNavDesktopShort--item sideNavDesktopShort--home"
                  onMouseEnter={() => addHover("home")}
                  onMouseLeave={() => removeHover("home")}
                >
                  <AiFillHome className="sideNavDesktopShort--item-icon" />
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/followed`);
                  }}
                  className="sideNavDesktopShort--item sideNavDesktopShort--followed"
                  onMouseEnter={() => addHover("followed")}
                  onMouseLeave={() => removeHover("followed")}
                >
                  <IoPeople className="sideNavDesktopShort--item-icon" />
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/daily`);
                  }}
                  className="sideNavDesktopShort--item sideNavDesktopShort--daily"
                  onMouseEnter={() => addHover("daily")}
                  onMouseLeave={() => removeHover("daily")}
                >
                  <IoToday className="sideNavDesktopShort--item-icon" />
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/explore`);
                  }}
                  className="sideNavDesktopShort--item sideNavDesktopShort--explore"
                  onMouseEnter={() => addHover("explore")}
                  onMouseLeave={() => removeHover("explore")}
                >
                  <FaWpexplorer className="sideNavDesktopShort--item-icon" />
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/popular`);
                  }}
                  className="sideNavDesktopShort--item sideNavDesktopShort--popular"
                  onMouseEnter={() => addHover("popular")}
                  onMouseLeave={() => removeHover("popular")}
                >
                  <MdNewReleases className="sideNavDesktopShort--item-icon" />
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/account/${userData.username}`);
                  }}
                  className="sideNavDesktopShort--item sideNavDesktopShort--settings"
                  onMouseEnter={() => addHover("settings")}
                  onMouseLeave={() => removeHover("settings")}
                >
                  <MdAccountCircle className="sideNavDesktopShort--item-icon" />
                </div>
              )}
            />

            <div
              onClick={handleLogout}
              className="sideNavDesktopShort--item sideNavDesktopShort--logout"
              onMouseEnter={() => addHover("logout")}
              onMouseLeave={() => removeHover("logout")}
            >
              <IoMdPower className="sideNavDesktopShort--item-icon" />
            </div>
          </section>
          <section
            className={`sideNavDesktop ${
              sideNavVisibility ? "" : "sideNavDesktop--hidden"
            }`}
            ref={wrapperRef}
          >
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/`);
                  }}
                  className="sideNavDesktop--item sideNavDesktop--home"
                  onMouseEnter={() => addHover("home")}
                  onMouseLeave={() => removeHover("home")}
                >
                  <div className="sideNavDesktop--item-text">Home</div>
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/followed`);
                  }}
                  className="sideNavDesktop--item sideNavDesktop--followed"
                  onMouseEnter={() => addHover("followed")}
                  onMouseLeave={() => removeHover("followed")}
                >
                  <div className="sideNavDesktop--item-text">Followed</div>
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/daily`);
                  }}
                  className="sideNavDesktop--item sideNavDesktop--daily"
                  onMouseEnter={() => addHover("daily")}
                  onMouseLeave={() => removeHover("daily")}
                >
                  <div className="sideNavDesktop--item-text">Daily</div>
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/explore`);
                  }}
                  className="sideNavDesktop--item sideNavDesktop--explore"
                  onMouseEnter={() => addHover("explore")}
                  onMouseLeave={() => removeHover("explore")}
                >
                  <div className="sideNavDesktop--item-text">Topic</div>
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/popular`);
                  }}
                  className="sideNavDesktop--item sideNavDesktop--popular"
                  onMouseEnter={() => addHover("popular")}
                  onMouseLeave={() => removeHover("popular")}
                >
                  <div className="sideNavDesktop--item-text">Popular</div>
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/account/${userData.username}`);
                  }}
                  className="sideNavDesktop--item sideNavDesktop--settings"
                  onMouseEnter={() => addHover("settings")}
                  onMouseLeave={() => removeHover("settings")}
                >
                  <div className="sideNavDesktop--item-text">Settings</div>
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={handleLogout}
                  className="sideNavDesktop--item sideNavDesktop--logout"
                  onMouseEnter={() => addHover("logout")}
                  onMouseLeave={() => removeHover("logout")}
                >
                  <div className="sideNavDesktop--item-text">Logout</div>
                </div>
              )}
            />
          </section>
        </div>
      ) : (
        <div>
          <section className="sideNavDesktopShort">
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/`);
                  }}
                  className="sideNavDesktopShort--item sideNavDesktopShort--home"
                  onMouseEnter={() => addHover("home")}
                  onMouseLeave={() => removeHover("home")}
                >
                  <AiFillHome className="sideNavDesktopShort--item-icon" />
                </div>
              )}
            />

            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/daily`);
                  }}
                  className="sideNavDesktopShort--item sideNavDesktopShort--daily"
                  onMouseEnter={() => addHover("daily")}
                  onMouseLeave={() => removeHover("daily")}
                >
                  <IoToday className="sideNavDesktopShort--item-icon" />
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/explore`);
                  }}
                  className="sideNavDesktopShort--item sideNavDesktopShort--explore"
                  onMouseEnter={() => addHover("explore")}
                  onMouseLeave={() => removeHover("explore")}
                >
                  <FaWpexplorer className="sideNavDesktopShort--item-icon" />
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/popular`);
                  }}
                  className="sideNavDesktopShort--item sideNavDesktopShort--popular"
                  onMouseEnter={() => addHover("popular")}
                  onMouseLeave={() => removeHover("popular")}
                >
                  <MdNewReleases className="sideNavDesktopShort--item-icon" />
                </div>
              )}
            />
          </section>
          <section
            className={`sideNavDesktop ${
              sideNavVisibility ? "" : "sideNavDesktop--hidden"
            }`}
            ref={wrapperRef}
          >
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/`);
                  }}
                  className="sideNavDesktop--item sideNavDesktop--home"
                  onMouseEnter={() => addHover("home")}
                  onMouseLeave={() => removeHover("home")}
                >
                  <div className="sideNavDesktop--item-text">Home</div>
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/daily`);
                  }}
                  className="sideNavDesktop--item sideNavDesktop--daily"
                  onMouseEnter={() => addHover("daily")}
                  onMouseLeave={() => removeHover("daily")}
                >
                  <div className="sideNavDesktop--item-text">Daily</div>
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/explore`);
                  }}
                  className="sideNavDesktop--item sideNavDesktop--explore"
                  onMouseEnter={() => addHover("explore")}
                  onMouseLeave={() => removeHover("explore")}
                >
                  <div className="sideNavDesktop--item-text">Topic</div>
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  onClick={() => {
                    history.push(`/popular`);
                  }}
                  className="sideNavDesktop--item sideNavDesktop--popular"
                  onMouseEnter={() => addHover("popular")}
                  onMouseLeave={() => removeHover("popular")}
                >
                  <div className="sideNavDesktop--item-text">Popular</div>
                </div>
              )}
            />
          </section>
        </div>
      )}
    </>
  );
};

export default SideNavDesktop;
