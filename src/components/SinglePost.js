import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

const SinglePost = ({ _id, image, name, author, likesArray, comments }) => {
  // let postUrl = "http://localhost:8000/posts/post/" + _id;
  // const [post, setPost] = useState(null);
  // async function fetchPost() {
  //   try {
  //     const response = await fetch(postUrl);
  //     await response.json().then((data) => {
  //       console.log(data);
  //       setPost(data);
  //     });
  //     //setComment(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // useEffect(() => {
  //   fetchPost();
  // }, [_id]);
  return (
    <Route
      render={({ history }) => (
        <div
          onClick={() => {
            history.push(`/post/${_id}`);
          }}
          className="grid-item"
        >
          <div className="grid-item--card">
            <img className="grid-item--card-img" src={image} alt="" />
            <div className="grid-item--card-img-overlay">
              <div className="grid-item--card-textualInfo">
                <span className="grid-item--card-title">{name}</span>
                <span className="grid-item--card-author">
                  {author.username}
                </span>
              </div>
              <div className="grid-item--card-icons">
                <section className="grid-item--card-icons-likes">
                  <span className="grid-item--card-icons-likes-count">
                    {typeof likesArray === "undefined"
                      ? `0`
                      : likesArray.length}
                  </span>
                  <span className="material-icons grid-item--card-icons-likes-icon">
                    favorite
                  </span>
                </section>
                <section className="grid-item--card-icons-comments">
                  <span className="grid-item--card-icons-comments-count">
                    {typeof comments === "undefined" ? `0` : comments.length}
                  </span>
                  <span className="material-icons grid-item--card-icons-comments-icon">
                    insert_comment
                  </span>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default SinglePost;
