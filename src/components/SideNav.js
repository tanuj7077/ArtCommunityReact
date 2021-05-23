import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { LoggedInSideNavItems, SideNavItems } from "../data";
import { useGlobalContext } from "../context";

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
    document
      .getElementsByClassName("sideNav-expansion")[0]
      .classList.toggle("expanded");
  };

  useEffect(() => {
    checkLoggedIn();
  }, [isLoggedIn]);

  return (
    <>
      <section className="sideNav">
        <div className="sideNav--ham" onClick={sideNavToggleHandler}>
          <span className="material-icons sideNav--icon">menu</span>
        </div>
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
                    <span className="material-icons">{item.icon}</span>
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
