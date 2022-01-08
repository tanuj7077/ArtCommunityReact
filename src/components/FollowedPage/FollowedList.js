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
            return <Followed key={`followedList_${userId}`} userId={userId} />;
          })}
        </div>
      )}
      {userData.following && userData.following.length === 0 && (
        <div className="noFollowing">You are not following anyone</div>
      )}
    </>
  );
};

export default FollowedList;
