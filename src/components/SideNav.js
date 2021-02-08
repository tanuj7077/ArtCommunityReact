import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sideNavHover from "../externalJs/sideNavUtil";

const SideNav = () => {
  useEffect(() => {
    sideNavHover();
    //--------expansion--------
    const expansion = document
      .getElementsByClassName("sideNav--ham")[0]
      .addEventListener("click", () => {
        document
          .getElementsByClassName("sideNav-expansion")[0]
          .classList.toggle("expanded");
      });

    console.log(1);
    return () =>
      document
        .getElementsByClassName("sideNav--ham")[0]
        .removeEventListener("click", expansion);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="sideNav">
        <div className="sideNav--ham">
          <span className="material-icons sideNav--icon">menu</span>
        </div>
        <div className="sideNav--home">
          <span className="material-icons">home</span>
        </div>
        <div className="sideNav--followed">
          <span className="material-icons">people</span>
        </div>
        <div className="sideNav--daily">
          <span className="material-icons">today</span>
        </div>
        <div className="sideNav--topic">
          <span className="material-icons">image_search</span>
        </div>
        <div className="sideNav--popular">
          <span className="material-icons">new_releases</span>
        </div>
        <div className="sideNav--new">
          <span className="material-icons">fiber_new</span>
        </div>
        <div className="sideNav--poll">
          <span className="material-icons">poll</span>
        </div>
      </section>

      <section className="sideNav-expansion">
        <div className="sideNav-expansion--home">
          <span className="sideNav-expansion--home-title">Home</span>
        </div>
        <div className="sideNav-expansion--followed">
          <span className="sideNav-expansion--followed-title">Followed</span>
        </div>
        <div className="sideNav-expansion--daily">
          <span className="sideNav-expansion--daily-title">Daily</span>
        </div>
        <div className="sideNav-expansion--topic">
          <span className="sideNav-expansion--topic-title">Explore</span>
        </div>
        <div className="sideNav-expansion--popular">
          <span className="sideNav-expansion--popular-title">Popular</span>
        </div>
        <div className="sideNav-expansion--new">
          <span className="sideNav-expansion--new-title">New</span>
        </div>
        <div className="sideNav-expansion--poll">
          <span className="sideNav-expansion--poll-title">Poll</span>
        </div>
      </section>
    </>
  );
};

export default SideNav;
