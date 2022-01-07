import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [explorePageTags, setExplorePageTags] = useState([]);
  const [homePageTags, setHomePageTags] = useState([]);
  const [submitModal, setsubmitModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState({});
  const [submitCoverModal, setSubmitCoverModal] = useState(false);
  const [submitProfilePicModal, setSubmitProfilePicModal] = useState(false);
  const [page, setPage] = useState(1);
  const [alert, setAlert] = useState({});
  const [showAlert, setShowAlert] = useState(0);
  const [loading, setLoading] = useState(0);

  const updatePostsBackend = async () => {
    const result = await axios.get(
      "https://shielded-woodland-79171.herokuapp.com/posts/updatePosts"
    );
    console.log(result.data);
  };
  useEffect(() => {
    updatePostsBackend();
  }, []);
  //--------------------For Explore Page------------------//
  const fetchExploreTags = async () => {
    let url = "https://shielded-woodland-79171.herokuapp.com/tags/exploreTags";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setExplorePageTags(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      fetchExploreTags();
    }, 3000);
    //updatePostsBackend();
  }, []);
  //----------------------END---------------------//

  //--------------------For Home Page Explore Section------------------//
  const fetchHomePageTags = async () => {
    let url = "https://shielded-woodland-79171.herokuapp.com/tags/randomTags";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setHomePageTags(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      fetchHomePageTags();
    }, 20000);
    return () => {
      clearInterval(interval);
    };
    // fetchHomePageTags();
  }, []);
  useEffect(() => {
    fetchHomePageTags();
  }, []);
  //----------------------END---------------------//

  //--------------------For Signup and Login------------------//
  const [signupModalVisibility, setSignupModalVisibility] = useState(false);
  //----------------------END---------------------//

  const changeAlert = (msg) => {
    setAlert(msg);
    setShowAlert(1);
  };

  const [submitModal2, setSubmitModal2] = useState(false);
  const openSubmitModal2 = () => {
    setSubmitModal2(true);
  };

  const closeSubmitModal2 = () => {
    setSubmitModal2(false);
  };
  const openSubmitCoverModal = () => {
    setSubmitCoverModal(true);
  };

  const closeSubmitCoverModal = () => {
    setSubmitCoverModal(false);
  };

  const openSubmitProfilePicModal = () => {
    //console.log("pressed");
    setSubmitProfilePicModal(true);
  };

  const closeSubmitProfilePicModal = () => {
    setSubmitProfilePicModal(false);
  };

  const openSubmitModal = () => {
    setsubmitModal(true);
  };

  const closeSubmitModal = () => {
    setsubmitModal(false);
  };

  const switchToLogin = () => {
    setIsLogin(true);
  };
  const switchToSignup = () => {
    setIsLogin(false);
  };
  const login = async (email, password) => {
    try {
      const loginData = {
        email,
        password,
      };
      await axios
        .post(
          "https://shielded-woodland-79171.herokuapp.com/auth/signin",
          loginData
        )
        .then((res) => {
          if (res.data.success) {
            console.log(res.data);
            setUserData(res.data.userData);
            setIsLoggedIn(true);
            changeAlert(res.data.message);
            setSignupModalVisibility(false);
          } else {
            changeAlert(res.data.message);
            console.log(alert);
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
        .post(
          "https://shielded-woodland-79171.herokuapp.com/auth/signup",
          registerData
        )
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
        openSubmitModal,
        closeSubmitModal,
        submitModal,
        isLogin,
        switchToLogin,
        switchToSignup,
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
        updatePostsBackend,
        loading,
        setLoading,
        signupModalVisibility,
        setSignupModalVisibility,
        login,
        register,
        openSubmitModal2,
        closeSubmitModal2,
        submitModal2,
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
