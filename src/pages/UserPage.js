import React from "react";
import { useParams } from "react-router-dom";

import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";

import User from "../components/UserPage/User";

const UserPage = () => {
  const { id } = useParams();
  return (
    <div className="Container">
      <TopNav />
      <SideNav />

      <User id={id} />
    </div>
  );
};

export default UserPage;
