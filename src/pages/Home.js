import styled from "styled-components";
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
  return (
    <Wrapper>
      <Banner />
      <Explore />
      {/* <Posts /> */}
    </Wrapper>
  );
};

export default Home;
