import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getHomePosts,
  increaseHomePostsPageCount,
} from "../../features/postsSlice";
import styled from "styled-components";
import HomePost from "../../components/cards/HomePost";

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
          font-size: 1.6rem;
          /* max-width: 100%;
          width: max-content; */
          &:hover {
            cursor: pointer;
          }
        }
        .author {
          font-size: 1.2rem;
          color: hsl(0, 0%, 80%);
          /* width: max-content;
          max-width: 100%; */
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
          font-size: 1.2rem;
          .icon {
            font-size: 1.6rem;
          }
          .like {
            color: white;
            &:hover {
              cursor: pointer;
              color: red;
            }
          }
          .liked {
            color: red;
            &:hover {
              cursor: pointer;
              color: white;
            }
          }
        }
      }
    }
  }
  .postLoading {
    width: 100%;
    aspect-ratio: 1.7;
    background-color: red;
    margin-bottom: 1.5rem;
    border-radius: 4px;
  }
  .loader {
    width: 100%;
    height: 1px;
  }
`;
const Posts = () => {
  const dispatch = useDispatch();
  const { isHomePostsLoading, homePostsPage, allHomePostsLoaded, homePosts } =
    useSelector((store) => store.posts);
  const { user } = useSelector((store) => store.user);
  const loaderRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          dispatch(getHomePosts());
          dispatch(increaseHomePostsPageCount());
        }
      },
      {
        rootMargin: "100px",
      }
    );
    observer.observe(loaderRef.current);
  }, []);
  return (
    <Wrapper>
      <div className="container">
        {homePosts?.map((post) => {
          return (
            <div key={post._id} className="post">
              <HomePost user={user} post={post} />
            </div>
          );
        })}
      </div>
      {allHomePostsLoaded && <div className="test">That's All Folks</div>}
      <div className="loader" ref={loaderRef}></div>
    </Wrapper>
  );
};

export default Posts;
