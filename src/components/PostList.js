import React, { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";

import SinglePost from "./SinglePost";
import { useGlobalContext } from "../context";
const url = "http://localhost:8000/posts";

const PostList = () => {
  const { posts, setPosts } = useGlobalContext();

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

  const updatePostsBackend = async () => {
    const result = await axios.get("http://localhost:8000/posts/updatePosts");
    const pagination = await axios.get(
      "http://localhost:8000/posts/p?page=1&limit=5"
    );
    console.log(result.data);
    console.log(pagination.data);
  };

  useEffect(() => {
    fetchPosts();
    updatePostsBackend();
  }, []);

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
