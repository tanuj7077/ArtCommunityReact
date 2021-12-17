import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
const Appearance = ({ posts }) => {
  return (
    <>
      {/* <span className="heading">Posts</span> */}
      {posts.length === 0 && (
        <span className="noPosts">You have not uploaded any posts yet</span>
      )}
      <div className="gallerySection">
        <div className="gallery">
          {posts.map((post) => {
            return (
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
