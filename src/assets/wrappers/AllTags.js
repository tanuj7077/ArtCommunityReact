import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  left: 6.9rem;
  width: calc(100% - 6.9rem);
  height: 4.5rem;
  background-color: ${(props) => props.theme.topNavBg};
  border-bottom: 2px solid ${(props) => props.theme.topNavBorder};
  z-index: 2;
  transition: top 0.2s ease, opacity 0.2s ease;
  overflow-x: auto;
  @media only screen and (max-width: 37.5em) {
    width: 100%;
    left: 0;
    height: 3.5rem;
  }
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  .tags {
    display: flex;
    gap: 2rem;
    height: 100%;
    align-items: center;
    @media only screen and (max-width: 37.5em) {
      gap: 1rem;
    }
  }
  .tag {
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    border-radius: 1.5rem;
    border: 2px solid ${(props) => props.theme.homePageAllTagTagBorder};
    background-color: ${(props) => props.theme.homePageAllTagTagBg};
    color: ${(props) => props.theme.homePageAllTagsTagColor};
    padding: 0.4rem 1.5rem;
    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.homePageAllTagsTagColor};
      color: ${(props) => props.theme.fontColorRev};
      font-weight: bold;
    }
    @media only screen and (max-width: 37.5em) {
      font-size: 0.8rem;
      letter-spacing: 0.1rem;
      border: 1px solid ${(props) => props.theme.homePageAllTagTagBorder};
      padding: 0.3rem 1rem;
    }
  }
  .end {
    opacity: 0;
  }
  .iconContainer {
    position: fixed;
    top: 5.4rem;
    height: calc(4.5rem - 4px);
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    background-color: ${(props) => props.theme.topNavBg};
    &:hover {
      cursor: pointer;
      .icon {
        color: ${(props) => props.theme.homePageChevronHoveredColor};
        transform: scale(1.5);
      }
    }
    @media only screen and (max-width: 37.5em) {
      height: calc(3.5rem - 2px);
      &:hover,
      &:focus {
        .icon {
          transform: scale(1.2);
        }
      }
    }
  }
  .leftChevron {
    left: 6.9rem;
    @media only screen and (max-width: 37.5em) {
      left: 0;
    }
    -webkit-mask-image: ${`-webkit-gradient(
      linear,
      right center,
      left center,
      color-stop(0, transparent),
      color-stop(0.35, rgba(255, 255, 255, 0.5)),
      color-stop(0.7, rgb(255, 255, 255))
    );`};
    &:hover {
      -webkit-mask-image: ${`-webkit-gradient(
      linear,
      right center,
      left center,
      color-stop(0, transparent),
      color-stop(0.2, rgba(255, 255, 255, 0.5)),
      color-stop(0.4, rgb(255, 255, 255))
    );`};
    }
  }
  .rightChevron {
    transition: all 0.15s ease;
    right: 0;
    -webkit-mask-image: ${`-webkit-gradient(
      linear,
      left center,
      right center,
      color-stop(0, transparent),
      color-stop(0.35, rgba(255, 255, 255, 0.5)),
      color-stop(0.7, rgb(255, 255, 255))
    );`};
    &:hover {
      -webkit-mask-image: ${`-webkit-gradient(
      linear,
      left center,
      right center,
      color-stop(0, transparent),
      color-stop(0.2, rgba(255, 255, 255, 0.5)),
      color-stop(0.4, rgb(255, 255, 255))
    );`};
    }
  }
  .hidden {
    display: none;
  }
  .icon {
    width: 2rem;
    height: 2rem;
    color: ${(props) => props.theme.homePageChevronColor};
    transition: all 0.15s ease;
  }
`;
