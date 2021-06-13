import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
const Appearance = ({ posts }) => {
  return (
    <>
      <span className="heading">Posts</span>
      <div className="gallerySection">
        <div className="gallery">
          {posts.map((post) => {
            return (
              // <div className="SingleImage">
              //   <img src={post.image} alt="galleryImage" className="image" />
              // </div>
              <Route
                render={({ history }) => (
                  <div
                    onClick={() => {
                      history.push(`/post/${post._id}`);
                    }}
                    className="SingleImage"
                  >
                    <img
                      src={post.image}
                      alt="galleryImage"
                      className="image"
                    />
                  </div>
                )}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Appearance;
