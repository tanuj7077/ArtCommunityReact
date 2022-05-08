import styled from "styled-components";

export const Wrapper = styled.nav`
  .sideBarFull {
    position: fixed;
    height: calc(100vh - 5.5rem);
    top: 5.4rem;
    left: 0;
    border-right: 4px solid ${(props) => props.theme.topNavBorder};
    transition: all 0.3s ease;
    &-hidden {
      transform: translateX(calc(-100% + 6.5rem + 4px));
      @media only screen and (max-width: 37.5em) {
        transform: translateX(-100%);
      }
    }
  }
  .sideNavItem {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.sideNavBg};
    color: ${(props) => props.theme.sideNavFontColor};
    &-hidden {
      display: none;
    }
    &-hovered {
      background-color: ${(props) => props.theme.sideNavItemBgHover};
      color: ${(props) => props.theme.sideNavFontColorHover};
    }
    &:hover {
      cursor: pointer;
    }
    .icon {
      width: 6.5rem;
      height: 5.4rem;
      display: grid;
      place-items: center;
      & > :first-child {
        width: 2rem;
        height: 2rem;
      }
    }
    .text {
      padding: 0 4rem 0 1rem;
      text-transform: uppercase;
      font-size: 1.6rem;
    }
  }
  .sideBarMinimal {
    position: fixed;
    height: calc(100vh - 5.5rem);
    top: 5.4rem;
    left: 0;
    @media only screen and (max-width: 37.5em) {
      display: none;
    }
  }
`;
