import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import SinglePost from "./SinglePost";
import { useGlobalContext } from "../context";

const TagSearchList = ({ name }) => {
  const { searchTags } = useGlobalContext();
  const [posts, setPosts] = useState([]);

  let url = "http://localhost:8000/tags/tag/" + name;

  const fetchPosts = async () => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setPosts(result);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="main">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1000: 4 }}
      >
        <Masonry>
          {searchTags.map((post) => {
            return <SinglePost key={post.name} {...post} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default TagSearchList;
