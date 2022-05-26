import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomePosts, getHomePostsCount } from "../../features/postsSlice";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 6rem;
  padding: 0 3rem;
  h1 {
    font-size: 100px;
    color: grey;
  }
`;
const Posts = () => {
  const dispatch = useDispatch();
  const { isLoading, homePostsPagem, homePosts } = useSelector(
    (store) => store.posts
  );
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
                <h1>Posts</h1>
              </div>
            );
          })}
        </div>
      )}
    </Wrapper>
  );
};

export default Posts;
