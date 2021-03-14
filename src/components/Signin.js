import React, { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { closeLoginModal, setIsLoggedIn, setUserData } = useGlobalContext();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const loginData = {
        email,
        password,
      };
      await axios
        .post("http://localhost:8000/auth/signin", loginData)
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            closeLoginModal();
            setUserData(res.data.userData);
            setIsLoggedIn(true);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <form className="form" onSubmit={handleLogin}>
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
        <button type="submit" className="btn btn-submit">
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default Signin;
