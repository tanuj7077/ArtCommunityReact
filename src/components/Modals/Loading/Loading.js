import React from "react";
import { useGlobalContext } from "../../../context";

const Loading = () => {
  const { loading } = useGlobalContext();

  return (
    <>
      {loading && (
        <div className="loadScreen">
          <div className="loadScreen-container">
            <div className="loadScreen-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="loadScreen-text">Loading...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
