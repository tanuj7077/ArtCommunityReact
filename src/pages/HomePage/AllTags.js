import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Wrapper } from "../../assets/wrappers/AllTags";
import {
  VscChevronLeft,
  VscChevronRight,
} from "../../commonImports/reactIcons";

const AllTags = ({ appear }) => {
  const { allTags } = useSelector((store) => store.posts);

  const tagListRef = useRef(null);
  const listStartItemRef = useRef(null);
  const listEndItemRef = useRef(null);

  const [isLeftChevronVisible, setIsLeftChevronVisible] = useState(false);
  const [isRightChevronVisible, setIsRightChevronVisible] = useState(true);

  const handleScroll = (side) => {
    if (side === "right") {
      tagListRef.current.scrollBy(500, 0);
    } else {
      tagListRef.current.scrollBy(-500, 0);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsLeftChevronVisible(!entry.isIntersecting);
    });
    observer.observe(listStartItemRef.current);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsRightChevronVisible(!entry.isIntersecting);
    });
    observer.observe(listEndItemRef.current);
  }, []);
  return (
    <Wrapper
      className={`${appear ? "allTags-appear" : "allTags-disappear"}`}
      ref={tagListRef}
    >
      <div className="tags">
        <div className="start" ref={listStartItemRef}></div>
        {allTags.map((tag, id) => {
          return (
            <NavLink
              to={`/tagSearch/${tag.name}`}
              key={`homeAllTags_${tag.name}_${id}`}
              className="tag"
            >
              {tag.name}
            </NavLink>
          );
        })}
        <div className="end" ref={listEndItemRef}>
          _
        </div>
      </div>
      <div
        className={`iconContainer leftChevron ${
          isLeftChevronVisible ? "" : "hidden"
        }`}
        onClick={() => handleScroll("left")}
      >
        <VscChevronLeft className="icon" />
      </div>

      <div
        className={`iconContainer rightChevron ${
          isRightChevronVisible ? "" : "hidden"
        }`}
        onClick={() => handleScroll("right")}
      >
        <VscChevronRight className="icon" />
      </div>
    </Wrapper>
  );
};

export default AllTags;
