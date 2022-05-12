import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllTags } from "../features/postsSlice";
import AllTags from "./HomePage/AllTags";
import Banner from "./HomePage/Banner";
import Explore from "./HomePage/Explore";
import Posts from "./HomePage/Posts";

const Wrapper = styled.div`
  padding: 5.4rem 0 10rem 6.5rem;
  width: 100%;
  @media only screen and (max-width: 37.5em) {
    padding: 5.4rem 0 10rem 0;
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  const { allTags, allTagsLoading } = useSelector((store) => store.posts);
  const [isAllTagsVisible, setIsAllTagsVisible] = useState(false);
  const exploreRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsAllTagsVisible(!entry.isIntersecting);
      },
      {
        rootMargin: "-54px",
      }
    );
    observer.observe(exploreRef.current);
  }, []);
  useEffect(() => {
    if (allTags.length === 0) {
      dispatch(getAllTags());
    }
  }, []);
  return (
    <Wrapper>
      <Banner />
      <div ref={exploreRef}>
        <Explore />
      </div>
      {allTags.length > 0 && !allTagsLoading && (
        <AllTags appear={isAllTagsVisible} />
      )}
      <Posts />
    </Wrapper>
  );
};

export default Home;
