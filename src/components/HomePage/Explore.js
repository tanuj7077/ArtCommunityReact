import React from "react";
import SingleTag from "./SingleTag";
import { useGlobalContext } from "../../context";

const Explore = () => {
  const { homePageTags } = useGlobalContext();

  return (
    <section className="explore">
      <div className="subHeading">Explore Topics</div>
      <div className="exploreGrid">
        {homePageTags.length === 0 && (
          <>
            <div className="tagLoading"></div>
            <div className="tagLoading"></div>
            <div className="tagLoading"></div>
            <div className="tagLoading"></div>
            <div className="tagLoading"></div>
            <div className="tagLoading"></div>
            <div className="tagLoading"></div>
            <div className="tagLoading"></div>
          </>
        )}

        {homePageTags.length > 0 &&
          homePageTags.map((tag) => {
            return <SingleTag key={tag.id} {...tag} />;
          })}
      </div>
    </section>
  );
  /*return (
    <section className="explore">
      <div className="subHeading">Explore Topics</div>
      <div className="exploreGrid">
        {tags.map((tag) => {
          return <SingleTag key={tag.id} {...tag} />;
        })}
      </div>
    </section>
  );*/
};

export default Explore;
