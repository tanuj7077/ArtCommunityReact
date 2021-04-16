import React from "react";
import { Link, Route } from "react-router-dom";

const SingleTag = ({ image, name }) => {
  return (
    <Route
      render={({ history }) => (
        <div
          onClick={() => {
            history.push(`tagSearch/${name}`);
          }}
          className="grid-item--exploreCard"
        >
          <img className="grid-item--exploreCard-img" src={image} alt=""></img>
          <div className="grid-item--exploreCard-img-overlay">
            <span className="grid-item--exploreCard-title">{name}</span>
          </div>
        </div>
      )}
    />
  );
};

export default SingleTag;
