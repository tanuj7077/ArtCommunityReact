import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "../../assets/wrappers/floatingBtn";
import { GoPlus, AiOutlineLogin } from "../../commonImports/reactIcons";
import { toggleLoginModal } from "../../features/utilitySlice";

const FloatingBtn = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <Wrapper
      onClick={() => {
        if (user) {
          return;
        }
        dispatch(toggleLoginModal());
      }}
    >
      {user ? <GoPlus className="icon" /> : <AiOutlineLogin className="icon" />}
    </Wrapper>
  );
};

export default FloatingBtn;
