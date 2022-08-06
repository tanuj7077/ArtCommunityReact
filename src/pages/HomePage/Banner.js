import React, { useEffect } from "react";
import bannerImg from "../../assets/images/9.jpg";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getBannerData } from "../../features/postsSlice";
import BannerSearch from "./BannerSearch";
const Wrapper = styled.div`
  min-height: 45rem;
  height: 75vh;
  width: 100%;
  position: relative;
  @media only screen and (max-width: 37.5em) {
    height: 30rem;
  }
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    //opacity: 0.7;
  }
  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 0%, 0.7);
    &-main {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90rem;
      max-width: 90vw;
      .heading {
        font-family: "Source Code Pro", sans-serif, courier, arial, helvetica;
        font-size: 4rem;
        font-weight: 900;
        text-shadow: 2px 2px black;
      }
      .desc {
        font-size: 1.6rem;
        text-shadow: 2px 2px black;
      }
      .trending {
        font-size: 1.4rem;
        font-weight: 400;
        span {
          font-size: 1.2rem;
          font-weight: 300;
          color: hsl(0, 0%, 85%);
          text-shadow: 0px 2px 5px hsl(0, 0%, 20%);
          &:hover {
            cursor: pointer;
            color: hsl(0, 0%, 90%);
          }
        }
      }
    }
    &-footer {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 1.5rem 2rem;
      font-size: 1.2rem;
      font-weight: 300;
      color: hsl(0, 0%, 85%);
      text-shadow: 0px 2px 5px hsl(0, 0%, 20%);
      span {
        font-size: 1.4rem;
        font-weight: 400;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
`;

const Banner = () => {
  const dispatch = useDispatch();
  const { homeBanner, isBannerLoading } = useSelector((store) => store.posts);
  useEffect(() => {
    if (!homeBanner) dispatch(getBannerData());
    console.log(homeBanner);
  }, []);
  return (
    <Wrapper>
      <img src={homeBanner?.image || bannerImg} alt="" className="image" />
      <div className="content">
        <main className="content-main">
          <h1 className="heading">GodArt</h1>
          <p className="desc">
            The largest online art and photography community
          </p>
          <BannerSearch />
          <div className="trending">
            Trending: <span>Anime,</span> <span>Wildlife,</span>{" "}
            <span>Flower,</span> <span>Black,</span> <span>Nature</span>
          </div>
        </main>
        <footer className="content-footer">
          Post by <span>{homeBanner?.author?.username}</span>
          {" - "}
          <span>{homeBanner?.name}</span>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Banner;
