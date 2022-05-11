import { Outlet, useLocation } from "react-router-dom";
import { Wrapper } from "../assets/wrappers/SharedLayout";
import { SideNav, TopNav } from "../components";

const SharedLayout = () => {
  return (
    <Wrapper>
      <TopNav />
      <SideNav />
      <div>
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default SharedLayout;
