import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 3rem;
  padding: 0 3rem;
  .subheading {
    color: ${(props) => props.theme.fontColor};
    font-size: 2rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    word-spacing: 0.6rem;
  }
  .explore {
    display: grid;
    grid-template-rows: min-content;
    grid-template-columns: repeat(8, 1fr);
    grid-auto-rows: min-content;
    grid-gap: 10px;
    @media only screen and (max-width: 75em) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media only screen and (max-width: 56.2em) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (max-width: 37.5em) {
      grid-template-columns: repeat(2, 1fr);
    }
    .card {
      width: 100%;
      background-color: black;
      position: relative;
      overflow: hidden;
      border-radius: 0.5rem;
      img {
        width: 100%;
        aspect-ratio: 1.7;
        object-fit: cover;
        object-position: center;
        opacity: 0.6;
        transform: scale(1.2);
        transition: all 0.2s ease;
      }
      .text {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        font-size: 1.6rem;
        text-transform: uppercase;
        backdrop-filter: blur(2px);
        text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
        transition: opacity 0.2s ease;
      }
      &:hover {
        img {
          transform: scale(1.05);
          opacity: 1;
        }
        .text {
          opacity: 0;
        }
      }
    }
    &-loading {
      display: grid;
      grid-template-rows: min-content;
      grid-template-columns: repeat(8, 1fr);
      grid-auto-rows: min-content;
      grid-gap: 10px;
      @media only screen and (max-width: 75em) {
        grid-template-columns: repeat(4, 1fr);
      }
      @media only screen and (max-width: 56.2em) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media only screen and (max-width: 37.5em) {
        grid-template-columns: repeat(2, 1fr);
      }
      .tagLoading {
        width: 100%;
        padding-top: 70%;
        border-radius: 0.5rem;
        background-color: hsl(0, 0%, 20%);
      }
    }
  }
`;
