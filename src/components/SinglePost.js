import React from "react";
import { Link } from "react-router-dom";

const SinglePost = ({ image, name, author, likes, comments }) => {
  return (
    <div className="grid-item">
      <div className="grid-item--card">
        <img className="grid-item--card-img" src={image} />
        <div className="grid-item--card-img-overlay">
          <div className="grid-item--card-textualInfo">
            <a className="grid-item--card-title" href="#">
              {name}
            </a>
            <a className="grid-item--card-author" href="#">
              {author}
            </a>
          </div>
          <div className="grid-item--card-icons">
            <section className="grid-item--card-icons-likes">
              <span className="grid-item--card-icons-likes-count">{likes}</span>
              <span className="material-icons grid-item--card-icons-likes-icon">
                favorite
              </span>
            </section>
            <section className="grid-item--card-icons-comments">
              <span className="grid-item--card-icons-comments-count">
                {comments}
              </span>
              <span className="material-icons grid-item--card-icons-comments-icon">
                insert_comment
              </span>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
