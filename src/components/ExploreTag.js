import React from "react";
import { Link } from "react-router-dom";

const ExploreTag = ({ image, name }) => {
  return (
    <div className="explorePage--grid-item">
      <div className="explorePage--grid-item--card">
        <img className="explorePage--grid-item--card-img" src={image} />
        <a className="explorePage--grid-item--card-title" href="#">
          {name}
        </a>
      </div>
    </div>
  );
};

export default ExploreTag;
