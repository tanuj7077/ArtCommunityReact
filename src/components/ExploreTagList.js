import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import ExploreTag from "./ExploreTag";
import { useGlobalContext } from "../context";

const ExploreTagList = () => {
  const { explorePageTags } = useGlobalContext();
  const [tags, setTags] = useState([]);

  const fetchTags = async () => {
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
  }, []);
  return (
    <div className="explorePage">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1000: 4 }}
      >
        <Masonry>
          {tags.map((tag) => {
            return <ExploreTag key={tag.id} {...tag} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ExploreTagList;
