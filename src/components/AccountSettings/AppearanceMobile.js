import React from "react";
import { Route } from "react-router-dom";

const Appearance = ({ posts }) => {
  return (
    <>
      <div className="headingSection">
        <span className="heading">Posts</span>
      </div>

      <div className="gallerySection">
        <div className="gallery">
          {posts.map((post) => {
            return (
              <Route
                key={`userPost_${post._id}`}
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
        {posts.length === 0 && (
          <span className="noPosts">No Posts uploaded</span>
        )}
      </div>
    </>
  );
};
export default Appearance;
