import React from "react";
import { Wrapper } from "../../assets/wrappers/Fullscreen";
import { RiFullscreenExitLine } from "../../commonImports/reactIcons";

const Fullscreen = ({ image, toggleHandler }) => {
  return (
    <Wrapper>
      <img src={image} alt="imgeOriginalSize" className="imgFullscreen" />
      <button>
        <RiFullscreenExitLine className="icon" onClick={toggleHandler} />
      </button>
    </Wrapper>
  );
};

export default Fullscreen;
