import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

const PostsByUser = ({ id }) => {
  const [postsByUser, setPostsByUser] = useState([]);
  async function getPostsByUser() {
    try {
      const LIMIT = 9;
      const postUrl =
        "http://localhost:8000/posts/postByUser/" + id + "/" + LIMIT;
      const PostResponse = await fetch(postUrl);
      const postData = await PostResponse.json();
      setPostsByUser(postData);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getPostsByUser();
  }, [id]);
  return (
    <div className="otherContent--user">
      <span className="otherContent--subheading">By User</span>
      {postsByUser.length > 0 && (
        <div className="otherContent--Thumbnails">
          {postsByUser.map((item) => {
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

      {postsByUser.length === 0 && (
        <div className="otherContent--loading">
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
};

export default PostsByUser;
