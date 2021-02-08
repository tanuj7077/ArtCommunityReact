import React from "react";
import { Link } from "react-router-dom";
import SingleTag from "./SingleTag";

import { tags } from "../data";

const Explore = () => {
  return (
    <section className="explore">
      <div className="subHeading">Explore Topics</div>
      <div className="exploreGrid">
        {tags.map((tag) => {
          return <SingleTag key={tag.id} {...tag} />;
        })}
      </div>
    </section>
  );
};

export default Explore;
