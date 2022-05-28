import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AllTags from "./HomePage/AllTags";
import Banner from "./HomePage/Banner";
import Explore from "./HomePage/Explore";
import ExploreSection from "./HomePage/ExploreSection";
import Posts from "./HomePage/Posts";

const Wrapper = styled.div`
  padding: 5.4rem 0 10rem 6.5rem;
  width: 100%;
  @media only screen and (max-width: 37.5em) {
    padding: 5.4rem 0 10rem 0;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Banner />
      <ExploreSection />
      <Posts />
    </Wrapper>
  );
};

export default Home;
