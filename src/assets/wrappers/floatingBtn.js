import styled from "styled-components";

export const Wrapper = styled.button`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  border: none;
  outline: none;
  background-color: #20bf6b;
  border-radius: 50%;
  /* display: grid;
  place-items: center; */
  width: 4rem;
  height: 4rem;
  color: white;
  display: none;
  @media only screen and (max-width: 37.5em) {
    display: block;
  }
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2.5rem;
    height: 2.5rem;
  }
`;
