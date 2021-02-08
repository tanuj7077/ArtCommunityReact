import React from "react";
import { Link } from "react-router-dom";
import SingleTag from "./SingleTag";

const Explore = () => {
  return (
    <section className="explore">
      <div className="subHeading">Explore Topics</div>
      <div className="exploreGrid">
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
        <SingleTag />
      </div>
    </section>
  );
};

export default Explore;
