import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoggedInSideNavHover, SideNavHover } from "../externalJs/sideNavUtil";
import { LoggedInSideNavItems, SideNavItems } from "../data";
import { useGlobalContext } from "../context";

const SideNav = () => {
  const { isLoggedIn } = useGlobalContext();

  useEffect(() => {
    if (isLoggedIn) {
      LoggedInSideNavHover();
    } else {
      SideNavHover();
    }
    //--------expansion--------
    const expansion = document
      .getElementsByClassName("sideNav--ham")[0]
      .addEventListener("click", () => {
        document
          .getElementsByClassName("sideNav-expansion")[0]
          .classList.toggle("expanded");
      });

    console.log(isLoggedIn);
    return () =>
      document
        .getElementsByClassName("sideNav--ham")[0]
        .removeEventListener("click", expansion);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let items;
  if (isLoggedIn) {
    items = LoggedInSideNavItems;
  } else {
    items = SideNavItems;
  }

  return (
    <>
      <section className="sideNav">
        <div className="sideNav--ham">
          <span className="material-icons sideNav--icon">menu</span>
        </div>
        {items.map((item) => {
          return (
            <div key={item.id} className={`sideNav--${item.classname}`}>
              <span className="material-icons">{item.icon}</span>
            </div>
          );
        })}
      </section>
      <section className="sideNav-expansion">
        {items.map((item) => {
          return (
            <div
              key={item.id2}
              className={`sideNav-expansion--${item.classname}`}
            >
              <span className={`sideNav-expansion--${item.classname}-title`}>
                {item.name}
              </span>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default SideNav;
