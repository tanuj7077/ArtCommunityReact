/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [explorePageTags, setExplorePageTags] = useState([]);
  const [homePageTags, setHomePageTags] = useState([]);
  const [userData, setUserData] = useState({});
  const [submitCoverModal, setSubmitCoverModal] = useState(false);
  const [submitProfilePicModal, setSubmitProfilePicModal] = useState(false);
  const [page, setPage] = useState(1);
  const [alert, setAlert] = useState({});
  const [showAlert, setShowAlert] = useState(0);
  const [loading, setLoading] = useState(0);

  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount(renderCount + 1);
    //console.log(renderCount);
  }, [
    isLoggedIn,
    posts,
    explorePageTags,
    homePageTags,
    userData,
    submitCoverModal,
    submitProfilePicModal,
    page,
    alert,
    showAlert,
  ]);

  //--------------------For Explore Page------------------//
  const fetchExploreTags = async () => {
    let url = `${process.env.REACT_APP_BASE_URL}/tags/exploreTags`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setExplorePageTags(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchExploreTags();
  }, []);
  //----------------------END---------------------//

  //--------------------For Home Page Explore Section------------------//
  const fetchHomePageTags = async () => {
    let url = `${process.env.REACT_APP_BASE_URL}/tags/randomTags`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setHomePageTags(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchHomePageTags();
    const interval = setInterval(() => {
      fetchHomePageTags();
    }, 20000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  //----------------------END---------------------//

  //--------------------For Signup and Login------------------//
  const [signupModalVisibility, setSignupModalVisibility] = useState(false);
  //----------------------END---------------------//

  const changeAlert = (msg) => {
    setAlert(msg);
    setShowAlert(1);
  };

  const [submitModal, setSubmitModal] = useState(false);
  const openSubmitModal = () => {
    setSubmitModal(true);
  };

  const closeSubmitModal = () => {
    setSubmitModal(false);
  };
  const openSubmitCoverModal = () => {
    setSubmitCoverModal(true);
  };

  const closeSubmitCoverModal = () => {
    setSubmitCoverModal(false);
  };

  const openSubmitProfilePicModal = () => {
    setSubmitProfilePicModal(true);
  };

  const closeSubmitProfilePicModal = () => {
    setSubmitProfilePicModal(false);
  };

  const login = async (email, password) => {
    try {
      const loginData = {
        email,
        password,
      };
      await axios
        .post(`${process.env.REACT_APP_BASE_URL}/auth/signin`, loginData)
        .then((res) => {
          if (res.data.success) {
            ReactDOM.unstable_batchedUpdates(() => {
              setUserData(res.data.userData);
              setIsLoggedIn(true);
              changeAlert(res.data.message);
              setSignupModalVisibility(false);
            });
          } else {
            changeAlert(res.data.message);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  const register = async (
    signupUsername,
    signupFullname,
    signupEmail,
    signupPassword,
    signupPasswordConf
  ) => {
    try {
      const registerData = {
        username: signupUsername,
        fullname: signupFullname,
        email: signupEmail,
        password: signupPassword,
        password_confirmation: signupPasswordConf,
      };
      await axios
        .post(`${process.env.REACT_APP_BASE_URL}/auth/signup`, registerData)
        .then((res) => {
          if (res.data.success) {
            setSignupModalVisibility(false);
            changeAlert(res.data.message);
          } else {
            changeAlert(res.data.message);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchExploreTags();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        posts,
        explorePageTags,
        setExplorePageTags,
        homePageTags,
        setPosts,
        setIsLoggedIn,
        userData,
        setUserData,
        submitCoverModal,
        submitProfilePicModal,
        openSubmitCoverModal,
        closeSubmitCoverModal,
        openSubmitProfilePicModal,
        closeSubmitProfilePicModal,
        page,
        setPage,
        alert,
        changeAlert,
        showAlert,
        setShowAlert,
        loading,
        setLoading,
        signupModalVisibility,
        setSignupModalVisibility,
        login,
        register,
        openSubmitModal,
        closeSubmitModal,
        submitModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
