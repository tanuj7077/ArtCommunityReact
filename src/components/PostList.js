import React from "react";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import SinglePost from "./SinglePost";
import { posts } from "../data";

const PostList = () => {
  return (
    <div className="main">
      <div className="subHeading">Recent</div>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1000: 4 }}
      >
        <Masonry>
          {posts.map((post) => {
            return <SinglePost key={post.name} {...post} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default PostList;
