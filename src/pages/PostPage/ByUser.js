import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { customFetch } from "../../utils/axios";

const ByUser = ({ postId, authorId, postAuthorName }) => {
  const [isPostsByUserLoading, setIsPostsByUserLoading] = useState(false);
  const [postsByUser, setPostsByUser] = useState([]);
  const getPostByUser = async (authorId) => {
    setIsPostsByUserLoading(true);
    try {
      const res = await customFetch.get(
        `posts/postByUser/${authorId}?page=1&limit=9`
      );
      const postByUserData = res.data.filter((item) => item._id !== postId);
      setPostsByUser(postByUserData);
      setIsPostsByUserLoading(false);
    } catch (error) {
      setIsPostsByUserLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getPostByUser(authorId);
  }, [postId]);
  if (isPostsByUserLoading) {
    return (
      <>
        <div className="extras-content extras-content-loading">
          <h2 className="title">
            More by <span>{postAuthorName}</span>
          </h2>
          <div className="loading"></div>
        </div>
      </>
    );
  }
  return (
    <>
      {postId && postsByUser && postsByUser.length > 1 && (
        <div className="extras-content">
          <h2 className="title">
            More by <span>{postAuthorName}</span>
          </h2>
          <div className="postGrid">
            {postsByUser.map((item) => {
              if (item._id) {
                return (
                  <NavLink
                    key={item._id + "postPageUserPost"}
                    to={`/post/${item._id}`}
                    className="imgContainer"
                  >
                    <img src={item.imageThumb} />
                  </NavLink>
                );
              }
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default ByUser;
