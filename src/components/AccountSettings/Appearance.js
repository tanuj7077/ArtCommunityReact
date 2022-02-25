import React from "react";
import { PostGrid } from "../../commonImports/commonImports";
const Appearance = ({ username }) => {
  return (
    <>
      <div className="gallerySection">
        <div className="main tagSearchList">
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
      </div>
    </>
  );
};
export default Appearance;
