import React, { useState, useEffect } from "react";
import SingleComment from "./SingleComment";
import { useGlobalContext } from "../context";

const CommentList = ({ commentArr }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(false);
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

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      {commentArr &&
        commentArr.map((comment) => {
          return <SingleComment id={comment} />;
        })}
    </>
  );
};

export default CommentList;
