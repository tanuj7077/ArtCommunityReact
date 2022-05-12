import styled from "styled-components";

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 5.4rem;
  width: 100%;
  background-color: ${(props) => props.theme.topNavBg};
  border-bottom: 2px solid ${(props) => props.theme.topNavBorder};
  z-index: 10;

  .navigationIcon {
    position: absolute;
    top: 0;
    left: 0;
    width: 6.5rem;
    height: 5.4rem;
    display: grid;
    place-items: center;
    .menuIcon {
      width: 2rem;
      height: 2rem;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .search {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    gap: 1rem;
    .icon {
      width: 2rem;
      height: 2rem;
      @media only screen and (max-width: 37.5em) {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    .text {
      text-transform: uppercase;
      font-size: 1.6rem;
      @media only screen and (max-width: 37.5em) {
        font-size: 1.2rem;
      }
    }
    &:hover {
      cursor: pointer;
    }
  }
  .action {
    position: absolute;
    top: 55%;
    right: 0;
    transform: translateY(-50%);
    outline: none;
    border: none;
    background-color: transparent;
    padding: 0 3rem;
    font-weight: 700;
    color: ${(props) => props.theme.accentColor};
    text-transform: uppercase;
    font-size: 1.8rem;
    @media only screen and (max-width: 37.5em) {
      display: none;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;
