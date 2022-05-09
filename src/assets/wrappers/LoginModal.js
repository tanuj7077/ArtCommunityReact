import styled from "styled-components";

export const Wrapper = styled.aside`
  width: 75rem;
  height: 50rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.loginModalBg};
  display: flex;
  overflow: hidden;
  position: relative;
  @media only screen and (max-width: 750px) {
    width: 42rem;
  }
  @media only screen and (max-width: 450px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
  .close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    width: 2rem;
    height: 2rem;
    z-index: 1604;
    &:hover,
    &:focus {
      color: red;
      cursor: pointer;
    }
  }
  .left {
    width: 33rem;
    height: 100%;
    position: relative;
    @media only screen and (max-width: 750px) {
      display: none;
    }
    backdrop-filter: blur(4px);
    &-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
    }
    &-text {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(black, 0.5);
      padding: 2.5rem;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      .logo {
        height: 4rem;
        width: 4rem;
      }
      .text {
        &-large {
          font-family: "Source Code Pro", sans-serif, courier, arial, helvetica;
          font-size: 3.5rem;
          font-weight: 900;
          color: rgb(255, 242, 223);
          text-shadow: 2px 2px black;
        }
        &-small {
          margin-top: 1rem;
          font-size: 1.6rem;
          color: rgb(216, 205, 187);
          text-shadow: 1px 1px black;
        }
      }
    }
  }
  .right {
    width: 42rem;
    height: 100%;
    background-color: white;
    position: relative;
    display: grid;
    place-items: center;
    @media only screen and (max-width: 750px) {
      width: 100%;
    }
    &-content {
      width: 100%;
      display: flex;
      flex-flow: column;
      padding: 3rem;
      gap: 2rem;
      height: max-content;
      &-headingSection {
        display: flex;
        flex-flow: column;
        .heading {
          color: black;
          font-size: 3rem;
          font-weight: 700;
        }
        .subheading {
          margin-top: 0.5rem;
          font-size: 1.6rem;
          &-text {
            color: rgb(107, 107, 107);
          }
          &-alternative {
            margin-left: 0.8rem;
            font-size: 1.6rem;
            font-weight: bold;
            color: hsl(207, 100%, 44%);
            &:hover {
              cursor: pointer;
            }
            &:focus {
              text-decoration: underline;
            }
          }
        }
      }

      &-form {
        display: flex;
        /* flex-wrap: wrap; */
        flex-flow: column;
        /* align-items: center; */
        gap: 2rem;
        overflow: hidden;
        overflow-y: auto;
        width: 100%;
        height: max-content;
        .combined {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
      }
    }

    .login {
      gap: 7rem;
    }
  }
`;
