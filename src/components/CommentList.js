import React from "react";
import SingleComment from "./SingleComment";

const CommentList = ({ commentArr, postId }) => {
  return (
    <div className="postContent--comments-commentList">
      {commentArr &&
        commentArr.map((comment_id) => {
          return <SingleComment id={comment_id} postId={postId} />;
        })}
    </div>
  );
};

export default CommentList;
