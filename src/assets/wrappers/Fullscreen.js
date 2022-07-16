import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  img {
    max-height: 80vh;
    max-width: 85vw;
  }
  button {
    outline: none;
    border: none;
    position: absolute;
    right: 2rem;
    bottom: 2rem;
    background-color: hsl(0, 0%, 5%);
    color: hsl(0, 0%, 95%);
    display: grid;
    place-items: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    opacity: 0.5;
    transition: transform 0.15s ease, opacity 0.15s ease;
    @media only screen and (max-width: 37.5em) {
      right: 1rem;
      bottom: 1rem;
    }
    &:hover {
      cursor: pointer;
      opacity: 1;
      transform: scale(1.2);
    }
  }
  .icon {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
