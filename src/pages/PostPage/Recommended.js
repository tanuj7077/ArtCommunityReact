import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { customFetch } from "../../utils/axios";
const Recommended = ({ postId, tags }) => {
  const [isRecommendedLoading, setIsRecommendedLoading] = useState(false);
  const [recommended, setRecommended] = useState([]);
  const getRecommended = async (tags) => {
    setIsRecommendedLoading(true);
    try {
      const res = await customFetch.post(`posts/recommendedPosts/9`, {
        tags: tags,
      });
      const recommendedData = res.data.filter((item) => item._id !== postId);
      setRecommended(recommendedData);
      setIsRecommendedLoading(false);
    } catch (error) {
      setIsRecommendedLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getRecommended(tags);
  }, [postId]);

  if (isRecommendedLoading) {
    return (
      <>
        <div className="extras-content extras-content-loading">
          <h2 className="title">
            More by <span>You may like</span>
          </h2>
          <div className="loading"></div>
        </div>
      </>
    );
  }
  return (
    <div className="extras-content">
      <h2 className="title">You may like</h2>
      <div className="postGrid">
        {recommended.map((item) => {
          if (item._id)
            return (
              <NavLink
                key={item._id + "postPageRecommended"}
                to={`/post/${item._id}`}
                className="imgContainer"
              >
                <img src={item.imageThumb} />
              </NavLink>
            );
        })}
      </div>
    </div>
  );
};

export default Recommended;
