import React from "react";
import bannerImg from "../../assets/images/9.jpg";
import styled from "styled-components";
const Wrapper = styled.div`
  height: 32.4rem;
  width: 100%;
  background-color: hsl(0, 0%, 20%);
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const Banner = () => {
  return (
    <Wrapper>
      <img src={bannerImg} alt="" className="image" />
    </Wrapper>
  );
};

export default Banner;
