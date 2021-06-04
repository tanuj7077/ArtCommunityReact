import React from "react";
import { useGlobalContext } from "../../context";
import Followed from "./Followed";

const FollowedList = () => {
  const { userData } = useGlobalContext();

  return (
    <>
      {userData.following && (
        <div className="followedList">
          {userData.following.map((userId) => {
            return <Followed userId={userId} />;
          })}
        </div>
      )}
    </>
  );
};

export default FollowedList;