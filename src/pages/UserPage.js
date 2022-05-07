import React from "react";
import { Outlet } from "react-router-dom";

const UserPage = () => {
  return (
    <div>
      UserPage
      <Outlet />
    </div>
  );
};

export default UserPage;
