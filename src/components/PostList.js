import React from "react";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import SinglePost from "./SinglePost";
import car from "../tagImage/car.jpg";
import city from "../tagImage/city.jpg";
import fanart from "../tagImage/fanart.jpg";
import landscape from "../tagImage/landscape.jpg";
import photography from "../tagImage/photography.jpg";
import snow from "../tagImage/snow.jpg";
import tree from "../tagImage/tree.jpg";
import waterColor from "../tagImage/waterColor.jpg";

const PostList = () => {
  const posts = [
    { image: car, name: "car", author: "author", likes: 5, comments: 3 },
    { image: city, name: "city", author: "author", likes: 7, comments: 2 },
    { image: fanart, name: "fanart", author: "author", likes: 9, comments: 3 },
    {
      image: landscape,
      name: "landscape",
      author: "author",
      likes: 10,
      comments: 7,
    },
    {
      image: photography,
      name: "photography",
      author: "author",
      likes: 5,
      comments: 2,
    },
    { image: snow, name: "snow", author: "author", likes: 20, comments: 7 },
    { image: tree, name: "tree", author: "author", likes: 5, comments: 3 },
    {
      image: waterColor,
      name: "waterColor",
      author: "author",
      likes: 8,
      comments: 4,
    },
  ];
  return (
    <div className="main">
      <div className="subHeading">Recent</div>
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
