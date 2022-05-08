import React from "react";
import { Wrapper } from "../../assets/wrappers/TopNav";
import {
  AiFillHome,
  IoPeople,
  FaWpexplorer,
  MdNewReleases,
  MdAccountCircle,
  CgMenu,
  IoMdPower,
} from "../../commonImports/reactIcons";
import { IoSearch } from "../../commonImports/reactIcons";

const TopNav = () => {
  return (
    <Wrapper>
      <div className="navigationIcon">
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
