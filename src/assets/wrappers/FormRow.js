import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: 4.2rem;
  border-radius: 1rem;
  position: relative;
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: hsl(223, 82%, 96%);
    border: none;
    outline: none;
    padding: 1.5rem;
    padding-top: 2.2rem;
    padding-bottom: 0.8rem;
    border-radius: 1rem;
    font-weight: bold;
    color: hsl(222, 100%, 11%);
    z-index: 1602;
    border: 0.1rem solid transparent;
    transition: background-color 0.3s ease;
    &:focus {
      border: 0.1rem solid hsl(222, 100%, 84%);
      background-color: hsl(223, 82%, 100%);
    }
    &:focus + label,
    &:valid + label {
      visibility: visible;
      top: 0.6rem;
      transition: all 0.3s ease;
      color: hsl(222, 100%, 74%);
    }
    &::placeholder {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 1.5rem;
      font-size: 1.2rem;
      font-family: "Nunito", sans-serif;
      font-weight: normal;
      opacity: 1;
      transition: all 0s 0.3s ease;
      color: hsl(241, 67%, 30%);
      text-transform: uppercase;
    }
    &:focus::placeholder {
      opacity: 0;
      transition: none;
    }
  }
  label {
    position: absolute;
    top: 1.5rem;
    left: 1.6rem;
    font-size: 1.2rem;
    visibility: hidden;
    z-index: 1603;
    transition: all 0.3s ease;
    color: hsl(241, 67%, 30%);
    text-transform: uppercase;
  }
`;
