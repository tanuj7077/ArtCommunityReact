import React from "react";
import ReactDom from "react-dom";
import { Wrapper } from "../../assets/wrappers/Modal";

const Modal = ({ children, toggleHandler }) => {
  return ReactDom.createPortal(
    <Wrapper>
      <div className="overlay" onClick={toggleHandler}></div>
      <div className="modal">{children}</div>
    </Wrapper>,
    document.getElementById("portal")
  );
};

export default Modal;
