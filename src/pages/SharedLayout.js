import { Outlet, useLocation } from "react-router-dom";
import { PageName, SideNav, TopNav } from "../components";

const SharedLayout = () => {
  const location = useLocation().pathname;
  return (
    <>
      {/* Render pagename according to {location}  */}
      <SideNav />
      <TopNav />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default SharedLayout;
