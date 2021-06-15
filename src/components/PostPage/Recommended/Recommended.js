import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

const Recommended = ({ id, tags }) => {
  const [recommended, setRecommended] = useState([]);
  const getRecommended = async () => {
    try {
      const LIMIT = 9;
      const postUrl =
        "https://shielded-woodland-79171.herokuapp.com/posts/recommendedPosts/" +
        id +
        "/" +
        LIMIT;
      await axios.post(postUrl, { tags: tags }).then((res) => {
        setRecommended(res.data);
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRecommended();
  }, [id, tags]);
  return (
    <div className="otherContent--user">
      {recommended.length > 1 && (
        <span className="otherContent--subheading">You may Like</span>
      )}
      {recommended.length > 1 && (
        <div className="otherContent--Thumbnails">
          {recommended.map((item) => {
            return (
              <Route
                render={({ history }) => (
                  <div
                    className="otherContent--Thumbnails-img"
                    onClick={() => {
                      history.push(`/post/${item._id}`);
                    }}
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  ></div>
                )}
              />
            );
          })}
        </div>
      )}

      {recommended.length === 0 && (
        <div className="otherContent--loading">
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
};

export default Recommended;
