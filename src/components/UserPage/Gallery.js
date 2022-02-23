/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { PostList } from "../../commonImports/commonImports";

const Gallery = ({ userPosts, posts, page, setPage }) => {
  console.log(posts);
  useEffect(() => {
    if (page === 0) {
      setPage(1);
    }
  }, []);

  return (
    <div className="userPage--gallery">
      {/* <PostList/> */}
      {posts && (
        <div className="GallerySection">
          <div className="Gallery">
            {posts.map((post) => {
              return (
                <div className="SingleImage" key={`gallery_${post._id}`}>
                  <img
                    src={post.imageThumb}
                    alt="galleryImage"
                    className="image"
                  />
                  <div className="info">
                    <Route
                      render={({ history }) => (
                        <span
                          onClick={() => {
                            history.push(`/post/${post._id}`);
                          }}
                          className="name"
                        >
                          {post.name}
                        </span>
                      )}
                    />
                    <div className="others">
                      <span className="likes">
                        {post.likesArray.length} Likes
                      </span>
                      <span className="comments">
                        {post.comments.length} comments
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {posts.length !== userPosts.length && (
            <span className="more" onClick={() => setPage(page + 1)}>
              Load More...
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;
