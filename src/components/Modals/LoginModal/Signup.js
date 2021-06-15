import React, { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../../../context";

const Signin = ({ toggleLoginMode }) => {
  const [signupUsername, setSignupUsername] = useState("");
  const [signupFullname, setSignupFullname] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPasswordConf, setSignupPasswordConf] = useState("");

  const [isValid, setIsValid] = useState(0);

  const { closeLoginModal, changeAlert } = useGlobalContext();

  async function handleSignup(e) {
    e.preventDefault();
    try {
      const registerData = {
        username: signupUsername,
        fullname: signupFullname,
        email: signupEmail,
        password: signupPassword,
        password_confirmation: signupPasswordConf,
      };
      await axios
        .post(
          "https://shielded-woodland-79171.herokuapp.com/auth/signup",
          registerData
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            toggleLoginMode("login");
            changeAlert(res.data.message);
          } else {
            changeAlert(res.data.message);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="signupForm">
        <form className="form" onSubmit={handleSignup}>
          <div className="form__group form__group--signup">
            <input
              type="text"
              id="signupUsername"
              className="form__input"
              placeholder="username"
              required
              onChange={(e) => setSignupUsername(e.target.value)}
            />
            <label htmlFor="signupUsername" className="form__label">
              <span className="form__label__content">Username</span>
            </label>
          </div>
          <div className="form__group form__group--signup">
            <input
              type="text"
              id="signupFullname"
              className="form__input"
              placeholder="full name"
              required
              onChange={(e) => setSignupFullname(e.target.value)}
            />
            <label htmlFor="signupFullname" className="form__label">
              <span className="form__label__content">Full Name</span>
            </label>
          </div>
          <div className="form__group form__group--signup">
            <input
              type="text"
              id="signupEmail"
              className="form__input"
              placeholder="email"
              required
              onChange={(e) => setSignupEmail(e.target.value)}
            />
            <label htmlFor="signupEmail" className="form__label">
              <span className="form__label__content">Email</span>
            </label>
          </div>
          <div className="form__group form__group--signup">
            <input
              type="password"
              id="signupPassword"
              className="form__input"
              placeholder="password"
              required
              onChange={(e) => setSignupPassword(e.target.value)}
            />
            <label htmlFor="signupPassword" className="form__label">
              <span className="form__label__content">Password</span>
            </label>
          </div>
          <div className="form__group form__group--signup">
            <input
              type="password"
              id="signupPassword_confirmation"
              className="form__input"
              placeholder="confirm password"
              required
              onChange={(e) => setSignupPasswordConf(e.target.value)}
            />
            <label
              htmlFor="signupPassword_confirmation"
              className="form__label"
            >
              <span className="form__label__content">Password</span>
            </label>
          </div>
          <button type="submit" className="btn btn-login">
            Sign-Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signin;
