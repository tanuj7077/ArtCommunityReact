import React from "react";
import {
  AiOutlineInfoCircle,
  AiTwotoneHeart,
  MdComment,
} from "../../commonImports/reactIcons";

const HomePost = ({
  postImageThumb,
  postName,
  postAuthorName,
  postLikes,
  postComments,
  userLiked,
}) => {
  return (
    <div className="post">
      <img src={postImageThumb} alt="" className="img" />
      <div className="backdrop">
        <div className="top">
          <p className="name">{postName}</p>
          <p className="author">{postAuthorName}</p>
        </div>
        <div className="bottom">
          <div className="info">
            <AiTwotoneHeart
              className={`icon like ${userLiked ? "liked" : ""}`}
            />
            <p className="likes">{postLikes}</p>
          </div>
          <div className="info">
            <MdComment className="icon" />
            <p className="comments">{postComments}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HomePost);
