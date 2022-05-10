import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "../../assets/wrappers/TopNav";
import { CgMenu } from "../../commonImports/reactIcons";
import { IoSearch } from "../../commonImports/reactIcons";
import { toggleSidebar, toggleLoginModal } from "../../features/utilitySlice";

const TopNav = () => {
  const { user } = useSelector((store) => store.user);
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
      {!user ? (
        <button className="action" onClick={() => dispatch(toggleLoginModal())}>
          Login
        </button>
      ) : (
        <button className="action" onClick={() => console.log("submit")}>
          Submit
        </button>
      )}
    </Wrapper>
  );
};

export default TopNav;
