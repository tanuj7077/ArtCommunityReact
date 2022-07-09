import Moment from "react-moment";
import {
  AiTwotoneHeart,
  MdComment,
  AiOutlineExpandAlt,
  TbViewportWide,
  AiFillEye,
} from "../../commonImports/reactIcons";
import placeholderUserImg from "../../assets/images/blankProfile.png";

const Post = ({ post, toggleMode }) => {
  return (
    <>
      <div className="postContainer">
        {post?.name && <img src={post.imageMd} alt="" className="postImage" />}
      </div>
      <div className="actions">
        <div className="actions-left">
          <div className="action-item likes">
            <AiTwotoneHeart className="icon" />
            <div className="text">Add to Favourites</div>
          </div>
          <div className="action-item comments">
            <MdComment className="icon" />
            <div className="text">Comment</div>
          </div>
        </div>
        <div className="actions-right">
          <TbViewportWide className="icon theatre" onClick={toggleMode} />
          <AiOutlineExpandAlt className="icon expand" />
        </div>
      </div>
      {post?.name && (
        <div className="postInfo">
          <div className="titleContainer">
            <div className="left">
              <img
                src={post.authorPic || placeholderUserImg}
                alt="author_img"
                className="img"
                style={{
                  borderRadius: `${
                    post.authorPicBorder ? post.authorPicBorder + "%" : "50%"
                  }`,
                }}
              />
              <div className="titleSection">
                <p className="title">{post.name}</p>
                <p className="author">
                  by <span>{post?.author?.username}</span>
                </p>
              </div>
            </div>
            <div className="right">
              Published: <Moment date={post.date} format="MMM Do YY" />
            </div>
          </div>
          <div className="otherInfo">
            <div className="item">
              <AiTwotoneHeart className="icon" />
              <div className="count">{post.likesArray.length} Favourites</div>
            </div>
            <div className="item">
              <MdComment className="icon" />
              <div className="count">{post.likesArray.length} Comments</div>
            </div>
            <div className="item">
              <AiFillEye className="icon" />
              <div className="count">40 Views</div>
            </div>
          </div>
          {post.desc.length > 0 && (
            <div className="description">{post.desc}</div>
          )}
          <ul className="tags">
            {post.tags.map((tag, id) => {
              return (
                <li key={"postPage" + tag + id} className="tag">
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Post;
