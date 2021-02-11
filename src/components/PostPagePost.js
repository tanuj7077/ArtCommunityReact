import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { Posts, tags } from "../data";
import CommentList from "./CommentList";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const PostPagePost = ({ id }) => {
  const [Post, setPost] = useState({});

  const fetchPost = async () => {
    setPost(Posts.find((item) => item.id === id));
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  return (
    <div className="postPage">
      <div className="postContent">
        <div className="postContent--image">
          <img className="postContent--image-img" src={Post.image} />
        </div>
        <div className="postContent--info">
          <div className="postContent--info-author">
            <div className="postContent--info-author-img">
              <img src={url} alt="" className="author-image" />
            </div>
            <span className="postContent--info-author-title">{Post.name}</span>
            <span className="postContent--info-author-name">
              by {Post.author}
            </span>
          </div>
          <div className="postContent--info-icons">
            <div className="postContent--info-icons-like">
              <span className="material-icons like">favorite</span>
              <span className="count">{Post.likes} Likes</span>
            </div>
            <div className="postContent--info-icons-like">
              <span className="material-icons comment">insert_comment</span>
              <span className="count">{Post.comments} Comments</span>
            </div>
          </div>
          <span className="postContent--info-desc">{Post.desc}</span>
          <div className="postContent--info-tags">
            {tags.map((item) => {
              return <span className="tag">{item.name}</span>;
            })}
          </div>
        </div>
      </div>
      <div className="postContent--comments">
        <span className="subheading">Comments</span>
        <CommentList commentArr={Post.commentArr} />
      </div>
      <div className="otherContent">
        <div className="otherContent--user">
          <h1>By User</h1>
        </div>
        <div className="otherContent--recommend">
          <h1>You may Like</h1>
        </div>
      </div>
    </div>
  );
};

export default PostPagePost;
