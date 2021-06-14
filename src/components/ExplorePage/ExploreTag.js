import React from "react";
import { Link, Route } from "react-router-dom";

const ExploreTag = ({ image, name }) => {
  return (
    <Route
      render={({ history }) => (
        <div
          onClick={() => {
            history.push(`tagSearch/${name}`);
          }}
          className="explorePage--grid-item"
        >
          <div className="explorePage--grid-item--card">
            <img
              className="explorePage--grid-item--card-img"
              src={image}
              alt=""
              draggable="false"
            />
            <span className="explorePage--grid-item--card-title">{name}</span>
          </div>
        </div>
      )}
    />
  );
};

export default ExploreTag;
