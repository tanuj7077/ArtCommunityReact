import React from "react";
import styled from "styled-components";
import { IoSearch } from "../../commonImports/reactIcons";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 1.5rem 0;
  background-color: hsl(0, 0%, 95%);
  border-radius: 4px;
  .iconContainer {
    width: 5.5rem;
    height: 5rem;
    display: grid;
    place-items: center;
  }
  .icon {
    width: 3rem;
    height: 3rem;
    color: hsl(0, 0%, 60%);
  }
  .input {
    outline: none;
    border: none;
    width: calc(100% - 5.5rem);
    background-color: transparent;
    font-size: 2rem;
    color: hsl(0, 0%, 35%);
  }
`;

const BannerSearch = () => {
  return (
    <Wrapper>
      <div className="iconContainer">
        <IoSearch className="icon" />
      </div>
      <input
        type="text"
        className="input"
        placeholder="Search for posts here"
      />
    </Wrapper>
  );
};

export default BannerSearch;
