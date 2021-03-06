import React, { useState } from "react";
import { IoClose } from "../../commonImports/reactIcons";
import signupImg from "../../assets/images/signupImg2.jpg";
import logo from "../../assets/images/logo.png";
import { toggleLoginModal } from "../../features/utilitySlice";
import { useDispatch } from "react-redux";
import { Wrapper } from "../../assets/wrappers/LoginModal";
import FormRow from "../inputs/FormRow";
import { loginUser, registerUser } from "../../features/userSlice";
const initialState = {
  email: "",
  password: "",
  username: "",
  fullname: "",
  passwordConfirm: "",
  isMember: true,
};

const LoginModal = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);
  const toggleMember = () => {
    setValues({ ...initialState, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password, username, fullname, passwordConfirm, isMember } =
      values;
    if (isMember) {
      //   dispatch(loginUser({ email: email, password: password }));
      return;
    }
    // dispatch(registerUser({ name, email, password }));
  };
  return (
    <Wrapper>
      <IoClose className="close" onClick={() => dispatch(toggleLoginModal())} />
      <div className="left">
        <div
          className="left-img"
          style={{ backgroundImage: `url(${signupImg})` }}
        ></div>
        <div className="left-text">
          <img src={logo} alt="" className="logo" />
          <div className="text">
            <p className="text-large">
              Join the largest online art and photography community
            </p>
            <p className="text-small">
              Explore and discover art, become a better artist, connect with
              others over mutual hobbies.
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <div
          className={`right-content ${values.isMember ? "login" : "signup"}`}
        >
          <div className="right-content-headingSection">
            <p className="heading">
              {values.isMember
                ? "Log in to your account"
                : "Create new account"}
            </p>
            <p className="subheading">
              <span className="subheading-text">
                {values.isMember ? "Not a Member?" : "Already a Member?"}
              </span>
              <button
                className="btn subheading-alternative"
                onClick={toggleMember}
              >
                {values.isMember ? "Register" : "Login"}
              </button>
            </p>
          </div>
          <form className="right-content-form" onSubmit={onSubmit}>
            {/* Email */}
            <FormRow
              type="email"
              name="email"
              value={values.email}
              length="full"
              handleChange={handleChange}
            />
            {/* username */}
            {!values.isMember && (
              <FormRow
                type="text"
                name="username"
                value={values.username}
                length="full"
                handleChange={handleChange}
              />
            )}
            {/* full name */}
            {!values.isMember && (
              <FormRow
                type="text"
                name="fullname"
                labelText="Full Name"
                value={values.fullname}
                length="full"
                handleChange={handleChange}
              />
            )}
            {/* password */}
            {values.isMember && (
              <FormRow
                type="password"
                name="password"
                value={values.password}
                length="full"
                handleChange={handleChange}
              />
            )}
            {!values.isMember && (
              <div className="combined">
                <FormRow
                  type="password"
                  name="password"
                  value={values.password}
                  length="half"
                  handleChange={handleChange}
                />
                {/* confirm password */}
                <FormRow
                  type="password"
                  name="passwordConfirm"
                  labelText="Confirm Password"
                  value={values.passwordConfirm}
                  length="half"
                  handleChange={handleChange}
                />
              </div>
            )}
            <div className="combined">
              <button
                type="submit"
                className="btn btn-login"
                onClick={() => {
                  if (values.isMember) {
                    dispatch(
                      loginUser({
                        email: values.email,
                        password: values.password,
                      })
                    );
                    return;
                  }
                  dispatch(
                    registerUser({
                      username: values.username,
                      fullname: values.fullname,
                      email: values.email,
                      password: values.password,
                      password_confirmation: values.passwordConfirm,
                    })
                  );
                }}
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-login"
                onClick={() => {
                  dispatch(
                    loginUser({
                      email: "demo@user.com",
                      password: "demoPassword",
                    })
                  );
                }}
              >
                Demo Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default LoginModal;
