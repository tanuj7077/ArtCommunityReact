import React, { useState } from "react";
import { useGlobalContext } from "../../../context";
import signupImg from "../../../assets/signupImg2.jpg";
import logo from "../../../assets/logo.png";
import backdropImg from "../../../assets/9.jpg";
import { IoClose } from "react-icons/io5";
function SignupModal() {
  const { signupModalVisibility, setSignupModalVisibility, login, register } =
    useGlobalContext();
  const [loginMode, setLoginMode] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerFullname, setRegisterFullname] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfPassword, setRegisterConfPassword] = useState("");

  return (
    <>
      {signupModalVisibility && (
        <div className="signupModal">
          <div
            className="signupModal-backdrop"
            onClick={() => setSignupModalVisibility(false)}
            style={{
              backgroundImage: `url(${backdropImg})`,
              backgroundSize: `cover`,
            }}
          ></div>
          <div className="signupModal-modal">
            <IoClose
              className="signupModal-modal-close"
              onClick={() => setSignupModalVisibility(false)}
            />
            <div className="signupModal-modal-left">
              <div
                className="signupModal-modal-left-img"
                style={{ backgroundImage: `url(${signupImg})` }}
              ></div>
              <div className="signupModal-modal-left-text">
                <img src={logo} alt="" className="logo" />
                <div className="text">
                  <p className="text-large">
                    Join the largest online art and photography community
                  </p>
                  <p className="text-small">
                    Explore and discover art, become a better artist, connect
                    with others over mutual hobbies.
                  </p>
                </div>
              </div>
            </div>
            <div className="signupModal-modal-right">
              {loginMode ? (
                <div className="signupModal-modal-right-login login">
                  <div className="signupModal-modal-right-login-headingSection">
                    <p className="heading">Log in to your accout</p>
                    <p className="subheading">
                      <span className="subheading-text">Not a Member?</span>
                      <span
                        className="subheading-alternative"
                        onClick={() => {
                          setLoginMode(false);
                        }}
                      >
                        Register
                      </span>
                    </p>
                  </div>
                  <div className="signupModal-modal-right-login-form">
                    <div className="formGrpLargeInput">
                      <input
                        type="text"
                        className="formGrpLargeInput-input"
                        placeholder="Email"
                        value={loginEmail}
                        onChange={(e) => {
                          setLoginEmail(e.target.value);
                        }}
                        required
                      />
                      <label htmlFor="" className="formGrpLargeInput-label">
                        Email
                      </label>
                    </div>
                    <div className="formGrpLargeInput">
                      <input
                        type="password"
                        className="formGrpLargeInput-input"
                        placeholder="Password"
                        value={loginPassword}
                        onChange={(e) => {
                          setLoginPassword(e.target.value);
                        }}
                        required
                      />
                      <label htmlFor="" className="formGrpLargeInput-label">
                        Password
                      </label>
                    </div>
                    <div className="formGrpBtn">
                      <button
                        className="formGrpBtn-btn"
                        onClick={() => {
                          login(loginEmail, loginPassword);
                        }}
                      >
                        Login
                      </button>
                      <button
                        className="formGrpBtn-alternate"
                        onClick={() => {
                          login("demo@user.com", "demoPassword");
                        }}
                      >
                        Or login with demo account
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="signupModal-modal-right-login signup">
                  <div className="signupModal-modal-right-login-headingSection">
                    <p className="heading">Create new accout</p>
                    <p className="subheading">
                      <span className="subheading-text">Already a Member?</span>
                      <span
                        className="subheading-alternative"
                        onClick={() => {
                          setLoginMode(true);
                        }}
                      >
                        Log In
                      </span>
                    </p>
                  </div>
                  <div className="signupModal-modal-right-login-form">
                    <div className="formGrpLargeInput">
                      <input
                        type="text"
                        className="formGrpLargeInput-input"
                        placeholder="Email"
                        id="registerEmail"
                        value={registerEmail}
                        onChange={(e) => {
                          setRegisterEmail(e.target.value);
                        }}
                        required
                      />
                      <label
                        htmlFor="registerEmail"
                        className="formGrpLargeInput-label"
                      >
                        Email
                      </label>
                    </div>
                    <div className="formGrpLargeInput">
                      <input
                        type="text"
                        className="formGrpLargeInput-input"
                        placeholder="Username"
                        value={registerUsername}
                        onChange={(e) => {
                          setRegisterUsername(e.target.value);
                        }}
                        required
                      />
                      <label htmlFor="" className="formGrpLargeInput-label">
                        Username
                      </label>
                    </div>
                    <div className="formGrpLargeInput">
                      <input
                        type="text"
                        className="formGrpLargeInput-input"
                        placeholder="Fullname"
                        value={registerFullname}
                        onChange={(e) => {
                          setRegisterFullname(e.target.value);
                        }}
                        required
                      />
                      <label htmlFor="" className="formGrpLargeInput-label">
                        Fullname
                      </label>
                    </div>
                    <div className="formGrpSmallInputGrp">
                      <div className="smallInput">
                        <input
                          type="password"
                          className="smallInput-input"
                          placeholder="Password"
                          value={registerPassword}
                          onChange={(e) => {
                            setRegisterPassword(e.target.value);
                          }}
                          required
                        />
                        <label htmlFor="" className="smallInput-label">
                          Password
                        </label>
                      </div>
                      <div className="smallInput">
                        <input
                          type="password"
                          className="smallInput-input"
                          placeholder="Confirm Password"
                          value={registerConfPassword}
                          onChange={(e) => {
                            setRegisterConfPassword(e.target.value);
                          }}
                          required
                        />
                        <label htmlFor="" className="smallInput-label">
                          Confirm Password
                        </label>
                      </div>
                    </div>

                    <div className="formGrpBtn">
                      <button
                        className="formGrpBtn-btn"
                        onClick={() => {
                          register(
                            registerUsername,
                            registerFullname,
                            registerEmail,
                            registerPassword,
                            registerConfPassword
                          );
                        }}
                      >
                        Register
                      </button>
                      <button
                        className="formGrpBtn-alternate"
                        onClick={() => {
                          login("demo@user.com", "demoPassword");
                        }}
                      >
                        Or login with demo account
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SignupModal;
