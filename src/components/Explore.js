import React, { useEffect, useState } from "react";
import SingleTag from "./SingleTag";

const Explore = () => {
  const [tags, setTags] = useState([]);
  const fetchTags = async () => {
    let url = "http://localhost:8000/tags/randomTags";
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
    <section className="explore">
      <div className="subHeading">Explore Topics</div>
      <div className="exploreGrid">
        {tags.length === 0 && (
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

        {tags.length > 0 &&
          tags.map((tag) => {
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
