import React, { useState, useEffect } from "react";
import SingleComment from "./SingleComment";

const CommentList = ({ commentArr }) => {
  //const [isLoading, setLoading] = useState(false);
  /*const fetchComments = async () => {
    setComments(
      commentArr.map((item) => {
        return Comments.find((comment) => comment.id === item);
      })
    );
    setLoading(false);
  };
  useEffect(() => {
    fetchComments();
  }, [commentArr]);*/

  // if (isLoading) {
  //   return <h1>Loading</h1>;
  // }
  return (
    <div className="postContent--comments-commentList">
      {commentArr &&
        commentArr.map((comment_id) => {
          return <SingleComment id={comment_id} />;
        })}
    </div>
  );
};

export default CommentList;
