import React from "react";
import { PostGrid } from "../../commonImports/commonImports";

const Appearance = ({ username }) => {
  return (
    <>
      <div className="headingSection">
        <span className="heading">Posts</span>
      </div>

      <div className="gallerySection">
        <PostGrid
          type={"tagSearch"}
          limit={8}
          fetchPostUrl={`${process.env.REACT_APP_BASE_URL}/posts/postByUser/${username}`}
          fetchPostCountUrl={`${process.env.REACT_APP_BASE_URL}/posts/userTotalPosts/${username}`}
          forUser={true}
          gridContainer={"small"}
          endMessage={false}
        />
        {/* <div className="gallery">
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
         */}
        {/* {posts.length === 0 && (
          <span className="noPosts">No Posts uploaded</span>
        )} */}
      </div>
    </>
  );
};
export default Appearance;
