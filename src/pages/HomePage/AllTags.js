import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.div`
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
  }
  &::-webkit-scrollbar {
    display: none;
  }
  .tags {
    display: flex;
    gap: 2rem;
    height: 100%;
    align-items: center;
    padding: 0 2rem;
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
  }
`;

const AllTags = ({ appear }) => {
  const { allTags } = useSelector((store) => store.posts);
  return (
    <Wrapper className={`${appear ? "allTags-appear" : "allTags-disappear"}`}>
      <div className="tags">
        {allTags.map((tag, id) => {
          return (
            <NavLink
              to={`/tagSearch/${tag.name}`}
              key={`homeAllTags_${tag.name}_${id}`}
              className="tag"
            >
              {tag.name}
            </NavLink>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default AllTags;
