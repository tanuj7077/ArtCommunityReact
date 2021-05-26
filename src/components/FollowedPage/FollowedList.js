import React from "react";
import { useGlobalContext } from "../../context";
import Followed from "./Followed";

const FollowedList = () => {
  const { userData } = useGlobalContext();

  return (
    <div className="followedList">
      <Followed />
      <Followed />
      <Followed />
      <Followed />
    </div>
  );
};

export default FollowedList;
