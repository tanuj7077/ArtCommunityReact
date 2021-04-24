import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SinglePost from "../SinglePost";

const Gallery = ({ userPosts }) => {
  return (
    <div className="userPage--gallery">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1000: 4 }}
      >
        <Masonry>
          {userPosts.map((post) => {
            return <SinglePost key={post._id} {...post} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Gallery;
