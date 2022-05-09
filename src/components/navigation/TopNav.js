import React from "react";
import { useDispatch } from "react-redux";
import { Wrapper } from "../../assets/wrappers/TopNav";
import { CgMenu } from "../../commonImports/reactIcons";
import { IoSearch } from "../../commonImports/reactIcons";
import { toggleSidebar } from "../../features/utilitySlice";

const TopNav = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="navigationIcon" onClick={() => dispatch(toggleSidebar())}>
        <CgMenu className="menuIcon" />
      </div>
      <p className="search">
        <IoSearch className="icon" />{" "}
        <span className="text">Search and Discover</span>
      </p>
      <button className="action">Login</button>
    </Wrapper>
  );
};

export default TopNav;
