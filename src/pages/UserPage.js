import React from "react";
import { useParams } from "react-router-dom";

import TopNav from "../components/TopNav";
import SideNav from "../components/Navigation/SideNav";

import User from "../components/UserPage/User";
import Alert from "../components/Modals/Alert/Alert";
import SideNavHandler from "../components/Navigation/SideNavHandler";

const UserPage = () => {
  const { id } = useParams();
  return (
    <div className="Container">
      <TopNav />
      {/* <SideNav /> */}
      <SideNavHandler />

      <User id={id} />
      <Alert />
    </div>
  );
};

export default UserPage;
