import React, { useState, useEffect, useRef } from "react";
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
  const AuthorHoverRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => {
      if (AuthorHoverRef.current) {
        document.getElementById("authorHover").classList.add("show");
        positionItem();
      }
    }, 500);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const positionItem = () => {
    let top = AuthorHoverRef.current.getBoundingClientRect().top;
    let left = AuthorHoverRef.current.getBoundingClientRect().left;
    let bottom = AuthorHoverRef.current.getBoundingClientRect().bottom;
    let right = AuthorHoverRef.current.getBoundingClientRect().right;

    if (top < 106) {
      document.getElementById("authorHover").style.top = 106 - top + "px";
    }
    if (right > window.innerWidth) {
      document.getElementById("authorHover").style.left =
        -(right - window.innerWidth) + "px";
    }
    if (bottom > window.innerHeight) {
      console.log("bottom");
      document.getElementById("authorHover").style.top =
        -(bottom - window.innerHeight + 110) + "px";
    }

    console.log(top, left, bottom, right);
  };

  return (
    <Route
      render={({ history }) => (
        <div
          onClick={() => {
            history.push(`/post/${_id}`);
          }}
          className="grid-item"
        >
          {isHovered && (
            <div
              className="authorHover"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={AuthorHoverRef}
              id="authorHover"
            ></div>
          )}
          {/* <div
            className={`${isHovered ? `authorHover show` : `authorHover`}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={AuthorHoverRef}
            id="authorHover"
          ></div> */}
          <div className="grid-item--card">
            <img className="grid-item--card-img" src={image} alt="" />
            <div className="grid-item--card-img-overlay">
              <div className="grid-item--card-textualInfo">
                <span className="grid-item--card-title">{name}</span>
                <span
                  className="grid-item--card-author"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
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
