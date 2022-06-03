import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { customFetch } from "../utils/axios";
import {
  AiTwotoneHeart,
  MdComment,
  AiOutlineExpandAlt,
  TbViewportWide,
  AiFillEye,
} from "../commonImports/reactIcons";
import placeholderUserImg from "../assets/images/blankProfile.png";
import Moment from "react-moment";
import { TAGS } from "../constants";

const Wrapper = styled.div`
  padding: calc(5.4rem + 2px) 0 0 calc(6.5rem + 2px);
  display: flex;
  background-color: hsl(0, 0%, 7%);
  @media only screen and (max-width: 75em) {
    flex-flow: column;
    align-items: center;
  }
  @media only screen and (max-width: 37.5em) {
    padding: calc(5.4rem + 2px) 0;
  }
  .post {
    background-color: hsl(0, 0%, 3%);
    width: calc(100% - 37.5em);
    min-height: calc(100vh - 5.4rem - 2px);
    display: flex;
    flex-flow: column;
    align-items: center;
    @media only screen and (max-width: 75em) {
      width: 100%;
      min-height: max-content;
    }
    .postContainer {
      background: linear-gradient(
        45deg,
        rgba(8, 8, 8, 1) 0%,
        rgba(18, 18, 18, 1) 100%
      );
      /*background: linear-gradient(
        45deg,
        rgba(247, 247, 247, 1) 0%,
        rgba(237, 237, 237, 1) 100%
      );*/
      height: 50rem;
      display: grid;
      place-items: center;
      position: relative;
      width: 100%;
      /* @media only screen and (max-width: 75em) {
        height: 50rem;
      } */
      @media only screen and (max-width: 37.5em) {
        height: 40rem;
      }
      img {
        max-width: 90%;
        max-height: 45rem;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.5) 0px 14px 28px,
          rgba(0, 0, 0, 0.5) 0px 10px 10px;
        /* @media only screen and (max-width: 75em) {
          max-height: 45rem;
        } */
        @media only screen and (max-width: 37.5em) {
          max-height: 35rem;
        }
      }
    }
    .actions {
      padding: 1.5rem 6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: hsl(0, 0%, 80%);
      width: 95rem;
      @media only screen and (max-width: 90em) {
        width: 100%;
      }
      @media only screen and (max-width: 56.25em) {
        padding: 1rem 2rem;
      }
      @media only screen and (max-width: 37.5em) {
        padding: 1rem 2rem;
      }
      .actions-left {
        display: flex;
        gap: 2.7rem;
        @media only screen and (max-width: 37.5em) {
          gap: 2rem;
        }
        .action-item {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          @media only screen and (max-width: 37.5em) {
            gap: 0.5rem;
          }
          &:hover {
            cursor: pointer;
          }
        }
        .text {
          font-size: 1.6rem;
          font-weight: 700;
          @media only screen and (max-width: 37.5em) {
            font-size: 1.2rem;
          }
        }
      }
      .actions-right {
        display: flex;
        gap: 2.5rem;
        @media only screen and (max-width: 37.5em) {
          gap: 2rem;
        }
      }
      .icon {
        transition: all 0.15s ease;
        font-size: 2rem;
        @media only screen and (max-width: 37.5em) {
          font-size: 1.5rem;
        }
        &:hover,
        &:focus {
          cursor: pointer;
          color: hsl(0, 0%, 90%);
          transform: scale(1.1);
        }
      }
      .theatre {
        @media only screen and (max-width: 75em) {
          display: none;
        }
      }
    }
    .postInfo {
      padding: 1.5rem 6rem;
      width: 95rem;
      @media only screen and (max-width: 90em) {
        width: 100%;
      }
      @media only screen and (max-width: 56.25em) {
        padding: 1rem 2rem;
      }
      @media only screen and (max-width: 37.5em) {
        padding: 1rem 2rem;
      }
      .titleContainer {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        @media only screen and (max-width: 37.5em) {
          gap: 1.5rem;
          flex-flow: column;
        }
        .left {
          display: flex;
          gap: 1.5rem;
          /* align-items: center; */
          width: calc(100% - 17rem);
          @media only screen and (max-width: 37.5em) {
            width: 100%;
          }
          img {
            width: 5rem;
            height: 5rem;
            @media only screen and (max-width: 56.25em) {
              width: 4.5rem;
              height: 4.5rem;
            }
            @media only screen and (max-width: 37.5em) {
              width: 4rem;
              height: 4rem;
            }
          }
          .title {
            font-size: 2.5rem;
            font-weight: bold;
            color: hsl(0, 0%, 100%);
            @media only screen and (max-width: 37.5em) {
              color: hsl(0, 0%, 90%);
              font-size: 1.6rem;
            }
          }
          .author {
            font-size: 1.4rem;
            color: hsl(0, 0%, 80%);
            @media only screen and (max-width: 37.5em) {
              font-size: 1.2rem;
            }
            span {
              font-size: 1.6rem;
              font-weight: bold;
              color: hsl(0, 0%, 100%);
              @media only screen and (max-width: 37.5em) {
                color: hsl(0, 0%, 90%);
                font-size: 1.4rem;
              }
              &:hover,
              &:focus {
                text-decoration: underline;
                cursor: pointer;
              }
            }
          }
        }
        .right {
          width: 16rem;
          font-size: 1.4rem;
          color: hsl(0, 0%, 80%);
          text-align: end;
          @media only screen and (max-width: 37.5em) {
            width: max-content;
            font-size: 1.2rem;
          }
        }
      }
      .otherInfo {
        padding: 1.5rem 0;
        display: flex;
        gap: 2.5rem;
        @media only screen and (max-width: 37.5em) {
          gap: 2rem;
          padding: 1.5rem 0;
        }
        .item {
          display: flex;
          gap: 0.7rem;
          align-items: center;
          color: hsl(0, 0%, 80%);
          .icon {
            font-size: 2rem;
          }
          .count {
            font-size: 1.6rem;
            font-weight: 300;
          }
          @media only screen and (max-width: 37.5em) {
            .icon {
              font-size: 1.6rem;
            }
            .count {
              font-size: 1.2rem;
              font-weight: 300;
            }
          }
        }
      }
      .description {
        padding: 1.5rem 0;
        font-size: 1.6rem;
        color: hsl(0, 0%, 80%);
        @media only screen and (max-width: 37.5em) {
          padding: 1rem 0;
        }
      }
      .tags {
        padding: 1.5rem 0;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        .tag {
          background-color: hsl(0, 0%, 15%);
          color: hsl(0, 0%, 80%);
          padding: 0.7rem 1.5rem;
          font-size: 1.4rem;
          &:hover {
            background-color: hsl(0, 0%, 20%);
            cursor: pointer;
          }
        }
        @media only screen and (max-width: 37.5em) {
          padding: 1rem 0;
          gap: 0.7rem;
          .tag {
            padding: 0.5rem 1.2rem;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
  .extras {
    width: 37.5em;
    @media only screen and (max-width: 75em) {
      width: 100%;
      padding: 1.5rem 5rem;
    }
    @media only screen and (max-width: 56.25em) {
      padding: 1rem 1rem;
    }
    &-content {
      padding: 2rem 1rem;
      .title {
        font-size: 1.4rem;
        font-weight: 300;
        color: hsl(0, 0%, 80%);
        span {
          font-size: 1.6rem;
          font-weight: bold;
        }
      }
      .postGrid {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 1rem;
        img {
          width: calc(100% / 3 - 2rem / 3);
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          border-radius: 4px;
          @media only screen and (max-width: 75em) {
            width: calc(100% / 6 - 5rem / 6);
          }
          @media only screen and (max-width: 56.25em) {
            width: calc(100% / 5 - 4rem / 5);
          }
          @media only screen and (max-width: 37.5em) {
            width: calc(100% / 3 - 2rem / 3);
          }
        }
      }
    }
  }
`;

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [userPosts, setUserPosts] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const getPost = async () => {
    try {
      const res = await customFetch.get(`posts/post1/${id}`);
      console.log(res.data);
      getPostByUser(res.data.author.id);
      getRecommended(res.data.tags);
      setPost(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getPostByUser = async (id) => {
    try {
      const res = await customFetch.get(
        `posts/postByUser/${id}?page=1&limit=9`
      );
      setUserPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getRecommended = async (tags) => {
    try {
      const res = await customFetch.post(`posts/recommendedPosts/9`, {
        tags: tags,
      });
      setRecommended(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <Wrapper>
      <section className="post">
        <div className="postContainer">
          {post && <img src={post.imageMd} alt="" className="postImage" />}
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
            <TbViewportWide className="icon theatre" />
            <AiOutlineExpandAlt className="icon expand" />
          </div>
        </div>
        {post && (
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
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati reiciendis pariatur laudantium repudiandae aliquam,
                odit a, inventore praesentium commodi quae, esse quis sed
                voluptate mollitia laborum! Odio atque nisi ratione.
              </div>
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
        <div className="comments"></div>
      </section>
      <section className="extras">
        {post && userPosts.length > 0 && (
          <div className="extras-content byUser">
            <h2 className="title">
              More by <span>{post.author.username}</span>
            </h2>
            <div className="postGrid">
              {userPosts.map((post) => {
                return (
                  <img
                    key={post._id + "postPageUserPost"}
                    src={post.imageThumb}
                  />
                );
              })}
            </div>
          </div>
        )}
        {recommended.length > 0 && (
          <div className="extras-content byUser">
            <h2 className="title">You may like</h2>
            <div className="postGrid">
              {recommended.map((post) => {
                return (
                  <img
                    key={post._id + "postPageRecommended"}
                    src={post.imageThumb}
                  />
                );
              })}
            </div>
          </div>
        )}
      </section>
    </Wrapper>
  );
};

export default PostPage;
