import React, { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";

const Register = () => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  const { closeLoginModal, setIsLoggedIn, switchToLogin } = useGlobalContext();

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const registerData = {
        username,
        fullname,
        email,
        password,
        password_confirmation: passwordConf,
      };
      await axios
        .post("http://localhost:8000/auth/signup", registerData)
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            switchToLogin();
          }
        });
      // .then(res.success ? setIsLoggedIn(true) : setIsLoggedIn(false))
      // .then(closeLoginModal());
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <form className="form" onSubmit={handleRegister}>
        <div className="form__group form__group--basic">
          <input
            type="text"
            id="username"
            className="form__input"
            placeholder="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="username" className="form__label">
            <span className="form__label__content">Username</span>
          </label>
        </div>
        <div className="form__group form__group--basic">
          <input
            type="text"
            id="fullname"
            className="form__input"
            placeholder="full name"
            required
            onChange={(e) => setFullname(e.target.value)}
          />
          <label htmlFor="fullname" className="form__label">
            <span className="form__label__content">Full Name</span>
          </label>
        </div>
        <div className="form__group form__group--basic">
          <input
            type="text"
            id="email"
            className="form__input"
            placeholder="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email" className="form__label">
            <span className="form__label__content">Email</span>
          </label>
        </div>
        <div className="form__group form__group--basic">
          <input
            type="password"
            id="password"
            className="form__input"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password" className="form__label">
            <span className="form__label__content">Password</span>
          </label>
        </div>
        <div className="form__group form__group--basic">
          <input
            type="password"
            id="password_confirmation"
            className="form__input"
            placeholder="confirm password"
            required
            onChange={(e) => setPasswordConf(e.target.value)}
          />
          <label htmlFor="password_confirmation" className="form__label">
            <span className="form__label__content">Password</span>
          </label>
        </div>
        <button type="submit" className="btn btn-submit">
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default Register;
