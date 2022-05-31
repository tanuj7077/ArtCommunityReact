import React from "react";
import {
  AiOutlineInfoCircle,
  AiTwotoneHeart,
  MdComment,
} from "../../commonImports/reactIcons";

const HomePost = ({ post, user }) => {
  // console.log("post");
  return (
    <div className="post">
      <img src={post.imageThumb} alt="" className="img" />
      <div className="backdrop">
        <div className="top">
          <p className="name">{post.name}</p>
          <p className="author">{post.author.username}</p>
        </div>
        <div className="bottom">
          <div className="info">
            <AiTwotoneHeart
              className={`icon like ${
                user?.likedPosts.includes(post?._id) ? "liked" : ""
              }`}
            />
            <p className="likes">{post.likesArray.length}</p>
          </div>
          <div className="info">
            <MdComment className="icon" />
            <p className="comments">{post.comments.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePost;
