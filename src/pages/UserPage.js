import React from "react";
import { useParams } from "react-router-dom";

import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";

import User from "../components/UserPage/User";
import Alert from "../components/Modals/Alert/Alert";

const UserPage = () => {
  const { id } = useParams();
  return (
    <div className="Container">
      <TopNav />
      <SideNav />

      <User id={id} />
      <Alert />
    </div>
  );
};

export default UserPage;
