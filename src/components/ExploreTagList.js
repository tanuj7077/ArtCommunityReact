import React, { useState, useEffect, Suspense } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

//import ExploreTag from "./ExploreTag";
import { useGlobalContext } from "../context";
const ExploreTag = React.lazy(() => import("./ExploreTag"));

const ExploreTagList = () => {
  const { explorePageTags } = useGlobalContext();
  const [tags, setTags] = useState([]);

  /*const fetchTags = async () => {
    let url = "http://localhost:8000/tags/exploreTags";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTags(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTags();
  }, []);*/
  return (
    <div className="explorePage">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1000: 4 }}
      >
        <Masonry>
          {explorePageTags.map((tag) => {
            return (
              <Suspense
                fallback={
                  <div className="explorePage--loading">Loading...</div>
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
