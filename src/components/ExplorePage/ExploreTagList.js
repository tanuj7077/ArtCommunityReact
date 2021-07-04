import React, { Suspense } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

//import ExploreTag from "./ExploreTag";
import { useGlobalContext } from "../../context";
const ExploreTag = React.lazy(() => import("./ExploreTag"));

const ExploreTagList = () => {
  const { explorePageTags } = useGlobalContext();
  return (
    <div className="explorePage">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3, 1000: 4 }}
      >
        <Masonry>
          {explorePageTags.map((tag) => {
            return (
              <Suspense
                fallback={
                  <div className="explorePage--loading"></div>
                }
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
