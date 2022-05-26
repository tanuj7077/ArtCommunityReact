import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Wrapper } from "../../assets/wrappers/ExploreHome";
import { getHomePageExploreTags } from "../../features/tagsSlice";
const Explore = () => {
  const dispatch = useDispatch();
  const { homePageExploreTags, homePageExploreTagsLoading } = useSelector(
    (store) => store.tags
  );
  useEffect(() => {
    if (homePageExploreTags.length === 0) dispatch(getHomePageExploreTags());
  }, []);
  return (
    <Wrapper>
      <p className="subheading">Explore</p>
      {homePageExploreTagsLoading ? (
        <div className="explore-loading">
          <div className="tagLoading"></div>
          <div className="tagLoading"></div>
          <div className="tagLoading"></div>
          <div className="tagLoading"></div>
          <div className="tagLoading"></div>
          <div className="tagLoading"></div>
          <div className="tagLoading"></div>
          <div className="tagLoading"></div>
        </div>
      ) : (
        <div className="explore">
          {homePageExploreTags.map((tag) => {
            return (
              <NavLink
                key={tag.id}
                to={`/tagSearch/${tag.name}`}
                className="card"
              >
                <img src={tag.imageThumb} />
                <div className="text">{tag.name}</div>
              </NavLink>
            );
          })}
        </div>
      )}
    </Wrapper>
  );
};

export default Explore;
