import React, { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../../../context";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(1);
  const { closeLoginModal2, setIsLoggedIn, setUserData, changeAlert, alert } =
    useGlobalContext();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const loginData = {
        email,
        password,
      };
      await axios
        .post(
          "https://shielded-woodland-79171.herokuapp.com/auth/signin",
          //"http://localhost:8000/auth/signin",
          loginData
        )
        .then((res) => {
          if (res.data.success) {
            closeLoginModal2();
            setUserData(res.data.userData);
            setIsLoggedIn(true);
            changeAlert(res.data.message);
          } else {
            changeAlert(res.data.message);
            console.log(alert);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="loginForm">
        <form className="form" onSubmit={handleLogin}>
          <div className="form__group form__group--login">
            <input
              type="email"
              id="loginEmail"
              className="form__input"
              placeholder="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="loginEmail" className="form__label">
              <span className="form__label__content">Email</span>
            </label>
          </div>
          <div className="form__group form__group--login">
            <input
              type="password"
              id="loginPassword"
              className="form__input"
              placeholder="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="loginPassword" className="form__label">
              <span className="form__label__content">Password</span>
            </label>
          </div>
          <button
            type="submit"
            className={`btn btn-login ${isValid ? "" : "btn-login-disabled"}`}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Signin;
