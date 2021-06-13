import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import SinglePost from "./SinglePost";

const TagSearchList = ({ name }) => {
  const [posts, setPosts] = useState([]);

  let url = "/tags/tag/" + name;

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
  }, [name]);
  return (
    <div className="main tagSearchList">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1000: 4 }}
      >
        <Masonry>
          {posts.map((post) => {
            return <SinglePost key={post} {...post} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default TagSearchList;
