import React from "react";
import { Link } from "react-router-dom";

const SingleTag = ({ image, name }) => {
  return (
    <div className="grid-item--exploreCard">
      <img className="grid-item--exploreCard-img" src={image}></img>
      <div className="grid-item--exploreCard-img-overlay">
        <a className="grid-item--exploreCard-title" href="/tags/car">
          {name}
        </a>
      </div>
    </div>
  );
};

export default SingleTag;
