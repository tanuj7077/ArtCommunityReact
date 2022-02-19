import React from "react";
import { useGlobalContext } from "../../context";
import { SingleTag } from "../../commonImports";

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
            return <SingleTag key={`homePageTags_${tag.id}`} {...tag} />;
          })}
      </div>
    </section>
  );
};

export default Explore;
