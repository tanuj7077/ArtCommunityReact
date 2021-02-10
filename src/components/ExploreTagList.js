import React from "react";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import ExploreTag from "./ExploreTag";
import { useGlobalContext } from "../context";

const ExploreTagList = () => {
  const { explorePageTags } = useGlobalContext();
  return (
    <div className="explorePage">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1000: 4 }}
      >
        <Masonry>
          {explorePageTags.map((tag) => {
            return <ExploreTag key={tag.id} {...tag} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ExploreTagList;
