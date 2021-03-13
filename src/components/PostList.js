import React from "react";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import SinglePost from "./SinglePost";
import { Posts } from "../data";
import { useGlobalContext } from "../context";
const url = "http://localhost:8000/posts";

const PostList = () => {
  const { posts } = useGlobalContext();

  // fetch(url)
  //   .then((response) => response.json())
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
  return (
    <div className="main">
      <div className="subHeading">Discover</div>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1000: 4 }}
      >
        <Masonry>
          {posts.map((post) => {
            return <SinglePost key={post.name} {...post} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default PostList;
