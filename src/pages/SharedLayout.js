import { Outlet, useLocation } from "react-router-dom";
import { Wrapper } from "../assets/wrappers/SharedLayout";
import { PageName, SideNav, TopNav } from "../components";

const SharedLayout = () => {
  const location = useLocation().pathname;
  return (
    <Wrapper>
      {/* Render pagename according to {location}  */}
      <TopNav />
      <SideNav />
      <PageName />
      <div>
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default SharedLayout;
