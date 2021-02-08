import React from "react";
import { Link } from "react-router-dom";
import car from "../tagImage/car.jpg";

const SingleTag = () => {
  return (
    <div className="grid-item--exploreCard">
      <img className="grid-item--exploreCard-img" src={car}></img>
      <div className="grid-item--exploreCard-img-overlay">
        <a className="grid-item--exploreCard-title" href="/tags/car">
          Cars
        </a>
      </div>
    </div>
  );
};

export default SingleTag;
