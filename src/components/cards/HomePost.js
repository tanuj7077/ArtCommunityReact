import React, { useRef, useEffect } from "react";
import {
  AiOutlineInfoCircle,
  AiTwotoneHeart,
  MdComment,
} from "../../commonImports/reactIcons";

const HomePost = ({
  postId,
  postImageThumb,
  postImageMd,
  postName,
  postAuthorName,
  postLikes,
  postComments,
  userLiked,
}) => {
  const imgRef = useRef(null);
  const loadHighRes = (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    if (imgRef?.current?.src) {
      if (imgRef.current.src !== imgRef.current.dataset.src) {
        setTimeout(() => {
          if (imgRef?.current?.src)
            imgRef.current.src = imgRef?.current?.dataset?.src;
        }, 500);
      }
    }
  };
  const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: "0px",
  };
  useEffect(() => {
    const observer = new IntersectionObserver(loadHighRes, observerOptions);
    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, [imgRef]);
  return (
    <div className="post">
      <img
        src={postImageThumb}
        data-src={postImageMd}
        ref={imgRef}
        alt={`homePost_img_${postId}`}
        className="img"
      />
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
