import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomePosts, getHomePostsCount } from "../../features/postsSlice";
import styled from "styled-components";
import {
  AiOutlineInfoCircle,
  AiTwotoneHeart,
  MdComment,
} from "../../commonImports/reactIcons";

const Wrapper = styled.div`
  margin-top: 6rem;
  padding: 0 3rem;
  .container {
    columns: 5;
    /* column-gap: 1rem; */
    gap: 1.5rem;
    @media only screen and (max-width: 131.25em) {
      columns: 5;
      /* gap: 2.5rem; */
    }
    @media only screen and (max-width: 112em) {
      columns: 4;
    }
    @media only screen and (max-width: 75em) {
      columns: 3;
    }
    @media only screen and (max-width: 56.25em) {
      columns: 2;
    }
    @media only screen and (max-width: 37.5em) {
      columns: 1;
    }
  }
  .post {
    width: 100%;
    height: max-content;
    margin-bottom: 1.5rem;
    position: relative;
    background-color: black;
    color: white;
    border-radius: 4px;
    overflow: hidden;
    &:hover {
      img {
        opacity: 0.6;
      }
      .backdrop {
        opacity: 1;
      }
    }
    img {
      display: block;
      width: 100%;
      object-fit: cover;
      object-position: center;
      transition: all 0.2s ease;
    }
    .backdrop {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      opacity: 0;
      .top {
        padding: 1rem 1.5rem;
        .name {
          font-size: 2rem;
          width: max-content;
          &:hover {
            cursor: pointer;
          }
        }
        .author {
          font-size: 1.5rem;
          width: max-content;
          &:hover {
            cursor: pointer;
          }
        }
      }
      .bottom {
        padding: 1rem 1.5rem;
        display: flex;
        gap: 2rem;
        .info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.6rem;
          .icon {
            font-size: 2rem;
          }
          .like {
            color: white;
            &:hover {
              cursor: pointer;
              color: red;
            }
          }
        }
      }
    }
  }
`;
const Posts = () => {
  const dispatch = useDispatch();
  const { isLoading, homePostsPage, homePosts } = useSelector(
    (store) => store.posts
  );
  console.log(homePosts);
  useEffect(() => {
    dispatch(getHomePosts());
  }, []);
  return (
    <Wrapper>
      {homePosts && (
        <div className="container">
          {homePosts.map((post) => {
            return (
              <div key={post._id} className="post">
                <img src={post.imageThumb} alt="" className="img" />
                <div className="backdrop">
                  <div className="top">
                    <p className="name">{post.name}</p>
                    <p className="author">{post.author.username}</p>
                  </div>
                  <div className="bottom">
                    <div className="info">
                      <AiTwotoneHeart className="icon like" />
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
          })}
        </div>
      )}
    </Wrapper>
  );
};

export default Posts;
