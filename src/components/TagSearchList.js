import React from "react";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import SinglePost from "./SinglePost";
import { useGlobalContext } from "../context";

const TagSearchList = () => {
  const { searchTags } = useGlobalContext();
  return (
    <div className="main">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1000: 4 }}
      >
        <Masonry>
          {searchTags.map((tag) => {
            return <SinglePost key={tag.name} {...tag} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default TagSearchList;
