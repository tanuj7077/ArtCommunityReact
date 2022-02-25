/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { PostGrid } from "../../commonImports/commonImports";

const Gallery = ({ username }) => {
  console.log(username);
  return (
    <div className="userPage--gallery">
      <PostGrid
        type={"tagSearch"}
        limit={8}
        fetchPostUrl={`${process.env.REACT_APP_BASE_URL}/posts/postByUser/${username}`}
        fetchPostCountUrl={`${process.env.REACT_APP_BASE_URL}/posts/userTotalPosts/${username}`}
        forUser={true}
        endMessage={false}
      />
    </div>
  );
};

export default Gallery;
