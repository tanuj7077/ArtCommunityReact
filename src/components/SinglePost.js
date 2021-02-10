import React from "react";
import { Link, Route } from "react-router-dom";

const SinglePost = ({
  id,
  image,
  name,
  author,
  likes,
  comments,
  likesArr,
  commentArr,
}) => {
  return (
    <Route
      render={({ history }) => (
        <div
          onClick={() => {
            history.push(`/post/${id}`);
          }}
          className="grid-item"
        >
          <div className="grid-item--card">
            <img className="grid-item--card-img" src={image} />
            <div className="grid-item--card-img-overlay">
              <div className="grid-item--card-textualInfo">
                <span className="grid-item--card-title">{name}</span>
                <span className="grid-item--card-author">{author}</span>
              </div>
              <div className="grid-item--card-icons">
                <section className="grid-item--card-icons-likes">
                  <span className="grid-item--card-icons-likes-count">
                    {likesArr.length}
                  </span>
                  <span className="material-icons grid-item--card-icons-likes-icon">
                    favorite
                  </span>
                </section>
                <section className="grid-item--card-icons-comments">
                  <span className="grid-item--card-icons-comments-count">
                    {commentArr.length}
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
