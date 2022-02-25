/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useGlobalContext } from "../../../context";
import { IoClose } from "../../../commonImports/reactIcons";

const Alert = () => {
  const { alert, showAlert, setShowAlert } = useGlobalContext();

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(0);
      }, 3000);
    }
  }, [showAlert]);
  return (
    <div
      className={`alertBox ${
        alert.type === "error" ? "alertBox-error" : "alertBox-success"
      } ${showAlert && alert ? "alertBox-visible" : ""}`}
    >
      {alert?.messages?.map((item, i) => {
        return (
          <span
            key={`alert-${i}`}
            className={`alertText ${
              alert.type === "error" ? "alertText-error" : "alertText-success"
            }`}
          >
            {item}
          </span>
        );
      })}
      <IoClose className="alertClose" onClick={() => setShowAlert(0)} />
    </div>
  );
};

export default Alert;
