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
          <div
            className="grid-item--exploreCard-img"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${image})`,
            }}
          ></div>
          <span className="grid-item--exploreCard-text">{name}</span>
        </div>
      )}
    />
  );
};

export default SingleTag;
