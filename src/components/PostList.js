import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";

import SinglePost from "./SinglePost";
import { useGlobalContext } from "../context";
const url = "http://localhost:8000/posts";

const PostList = () => {
  const { posts, setPosts } = useGlobalContext();

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    let baseUrl = "http://localhost:8000/posts/p";
    const urlPage = `?page=${page}`;
    const urlLimit = `&limit=${limit}`;
    let url = `${baseUrl}${urlPage}${urlLimit}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPosts((oldPhotos) => {
        return [...oldPhotos, ...data];
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        (!loading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //to update posts array in the backend
  const updatePostsBackend = async () => {
    const result = await axios.get("http://localhost:8000/posts/updatePosts");
    console.log(result.data);
  };

  useEffect(() => {
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
      {loading && <span className="loading">Loading...</span>}
    </div>
  );
};

export default PostList;
