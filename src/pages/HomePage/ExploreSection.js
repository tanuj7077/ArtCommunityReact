import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllTags from "./AllTags";
import Explore from "./Explore";
import { getAllTags } from "../../features/tagsSlice";

const ExploreSection = () => {
  const dispatch = useDispatch();
  const { allTags, allTagsLoading } = useSelector((store) => store.tags);
  const [isAllTagsVisible, setIsAllTagsVisible] = useState(false);
  const exploreRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsAllTagsVisible(!entry.isIntersecting);
      },
      {
        rootMargin: "-54px",
      }
    );
    observer.observe(exploreRef.current);
  }, []);
  useEffect(() => {
    if (allTags.length === 0) {
      dispatch(getAllTags());
    }
  }, []);
  return (
    <>
      <div ref={exploreRef}>
        <Explore />
      </div>
      {allTags.length > 0 && !allTagsLoading && (
        <AllTags appear={isAllTagsVisible} />
      )}
    </>
  );
};

export default ExploreSection;
