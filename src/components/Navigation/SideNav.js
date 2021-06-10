import React, { useState, useEffect, useRef } from "react";
import { Route } from "react-router-dom";
import { LoggedInSideNavItems, SideNavItems } from "../../data";
import { useGlobalContext } from "../../context";
import { AiFillHome } from "react-icons/ai";
import { IoPeople, IoToday, IoMdColorPalette } from "react-icons/io5";
import { FaWpexplorer } from "react-icons/fa";
import { MdNewReleases, MdAccountCircle } from "react-icons/md";
import { CgMenu } from "react-icons/cg";

const SideNav = () => {
  const { isLoggedIn } = useGlobalContext();
  const [items, setItems] = useState();
  const checkLoggedIn = () => {
    if (isLoggedIn) {
      setItems(LoggedInSideNavItems);
    } else {
      setItems(SideNavItems);
    }
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          sideNavShortenHandler();
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
    console.log(item);
    document
      .getElementsByClassName("sideNav-expansion--" + item)[0]
      .classList.add("sideNavTitle-hover");
    document
      .getElementsByClassName("sideNav--" + item)[0]
      .classList.add("sideNavIcon-hover");
  };
  const removeHover = (item) => {
    document
      .getElementsByClassName("sideNav-expansion--" + item)[0]
      .classList.remove("sideNavTitle-hover");
    document
      .getElementsByClassName("sideNav--" + item)[0]
      .classList.remove("sideNavIcon-hover");
  };

  const sideNavToggleHandler = () => {
    if (
      document
        .getElementsByClassName("sideNav-expansion")[0]
        .classList.contains("expanded")
    ) {
      document
        .getElementsByClassName("sideNav-expansion")[0]
        .classList.remove("expanded");
    } else {
      document
        .getElementsByClassName("sideNav-expansion")[0]
        .classList.add("expanded");
    }
  };
  const sideNavShortenHandler = () => {
    document
      .getElementsByClassName("sideNav-expansion")[0]
      .classList.remove("expanded");
  };

  useEffect(() => {
    checkLoggedIn();
  }, [isLoggedIn]);

  return (
    <>
      <section className="sideNav" ref={wrapperRef}>
        <div className="sideNav--ham" onClick={sideNavToggleHandler}>
          <CgMenu className="sideNav--icon" />
        </div>
        {/* <div className="sideNav--ham2" onClick={sideNavToggleHandler}>
          <CgMenu className="icon" />
        </div> */}
        {items &&
          items.map((item) => {
            return (
              <Route
                key={item.id}
                render={({ history }) => (
                  <div
                    onClick={() => {
                      history.push(`/${item.link}`);
                    }}
                    key={item.id}
                    className={`sideNav--${item.classname}`}
                    onMouseEnter={() => addHover(item.classname)}
                    onMouseLeave={() => removeHover(item.classname)}
                  >
                    {/* <span className="material-icons">{item.icon}</span> */}
                    {item.name === "home" && (
                      <AiFillHome className="sideNav--icon" />
                    )}
                    {item.name === "followed" && (
                      <IoPeople className="sideNav--icon" />
                    )}
                    {item.name === "daily" && (
                      <IoToday className="sideNav--icon" />
                    )}
                    {item.name === "topic" && (
                      <FaWpexplorer className="sideNav--icon" />
                    )}
                    {item.name === "popular" && (
                      <MdNewReleases className="sideNav--icon" />
                    )}
                  </div>
                )}
              />
            );
          })}
      </section>
      <section className="sideNav-expansion">
        {items &&
          items.map((item) => {
            return (
              <Route
                key={item.id2}
                render={({ history }) => (
                  <div
                    onClick={() => {
                      history.push(`/${item.link}`);
                    }}
                    key={item.id2}
                    className={`sideNav-expansion--${item.classname}`}
                    onMouseEnter={() => addHover(item.classname)}
                    onMouseLeave={() => removeHover(item.classname)}
                  >
                    <span
                      className={`sideNav-expansion--${item.classname}-title`}
                    >
                      {item.name}
                    </span>
                  </div>
                )}
              />
            );
          })}
      </section>
    </>
  );
};

export default SideNav;
