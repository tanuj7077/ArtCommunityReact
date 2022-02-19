import React, { Suspense } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

//import ExploreTag from "./ExploreTag";
import { useGlobalContext } from "../../context";
import { ExploreTag } from "../../commonImports/commonImports";

const ExploreTagList = () => {
  const { explorePageTags } = useGlobalContext();
  return (
    <div className="explorePage">
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          350: 2,
          750: 2,
          900: 3,
          1000: 4,
          1440: 5,
          2000: 6,
        }}
      >
        <Masonry gutter="5px">
          {explorePageTags.map((tag) => {
            return (
              <Suspense
                fallback={<div className="explorePage--loading"></div>}
                key={`explorePaageTags_${tag}`}
              >
                <ExploreTag key={tag.id} {...tag} />
              </Suspense>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ExploreTagList;
