import React from "react";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import ExploreTag from "./ExploreTag";
import { ExploreTags } from "../data";

const ExploreTagList = () => {
  return (
    <div className="explorePage">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1000: 4 }}
      >
        <Masonry>
          {ExploreTags.map((tag) => {
            return <ExploreTag key={tag.id} {...tag} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ExploreTagList;
