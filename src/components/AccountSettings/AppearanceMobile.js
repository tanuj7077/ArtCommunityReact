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
      </div>
    </>
  );
};
export default Appearance;
